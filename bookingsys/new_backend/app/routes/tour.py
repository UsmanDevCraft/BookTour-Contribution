from fastapi import APIRouter, HTTPException,Query
from typing import List
from app.models.tour import Tour
from app.config.db import conn,db  # MongoDB connection
from bson import ObjectId
from fastapi.responses import JSONResponse
from motor.motor_asyncio import AsyncIOMotorClient
# booking = APIRouter()

# @booking.post("/bookings", response_model=Booking)
# async def create_booking(booking: Booking):
#     # Your logic to create a booking
#     pass






tourApi = APIRouter()


booking_collection = db["bookings"]
collection = db["tours"]



@tourApi.get("/tours", response_model=List[Tour])
async def get_all_tours(
    city: str = Query(None, description="City to filter tours by"),
    price: str = Query(None, description="Price to filter tours by"),
    start_date: str = Query(None, description="Start Date to filter tours by (YYYY-MM-DD)"),
    end_date: str = Query(None, description="End Date to filter tours by (YYYY-MM-DD)")
):
    query = {}

    # Print the query parameters for debugging
    print(f"Start Date: {start_date}, End Date: {end_date}")

    # If a city is provided, add it to the query
    if city:
        query["city"] = city

    # If price is provided, add it to the query
    if price:
        query["price"] = price  

    # If startDate is provided, add it to the query
    if start_date:
        query["start_date"] = {"$gte": start_date}

    # If endDate is provided, add it to the query
    if end_date:
        query["end_date"] = {"$lte": end_date}

    # Perform the query on the MongoDB collection
    tours_cursor = await collection.find(query).to_list(100)

    if not tours_cursor:
        raise HTTPException(status_code=404, detail="No tours found for the specified filters.")
    
    # Return the list of tours as Pydantic models (FastAPI automatically handles the serialization)
    # return [Tour(**tour) for tour in tours_cursor]


 # Convert the ObjectId to string before creating the Tour model
    return [
        Tour(id=str(tour["_id"]), **tour) for tour in tours_cursor
    ]



@tourApi.put("/tours/{tour_id}", response_model=Tour)
async def update_tour(tour_id: str, updated_tour: Tour):
    # Find the tour by ID
    tour = await collection.find_one({"_id": ObjectId(tour_id)})
    
    if not tour:
        raise HTTPException(status_code=404, detail="Tour not found")
    
    # Prepare the data to be updated, excluding None values
    updated_data = {key: value for key, value in updated_tour.dict().items() if value is not None}
    
    # Perform the update operation
    await collection.update_one({"_id": ObjectId(tour_id)}, {"$set": updated_data})

    # Fetch the updated tour from the database
    updated_tour_data = await collection.find_one({"_id": ObjectId(tour_id)})
    
    # Return the updated tour directly as a Pydantic model (FastAPI will handle serialization)
    return Tour(**updated_tour_data)


# Delete tour API
@tourApi.delete("/tours/{tour_id}", response_model=dict)
async def delete_tour(tour_id: str):
    # Find the tour by ID
    tour = await collection.find_one({"_id": ObjectId(tour_id)})
    
    if tour is None:
        raise HTTPException(status_code=404, detail="Tour not found")
    
    # Delete the tour from the collection
    await collection.delete_one({"_id": ObjectId(tour_id)})

    # Return a success message
    return {"message": f"Tour with id {tour_id} has been deleted successfully"}


@tourApi.get("/tours/{tour_id}", response_model=Tour)
async def get_tour(tour_id: str):
    # Fetch the tour from the MongoDB collection
    tour = await collection.find_one({"_id": ObjectId(tour_id)})
    
    if not tour:
        raise HTTPException(status_code=404, detail="Tour not found")

    # Return the tour directly as a Pydantic model (FastAPI will handle serialization)
    # Convert ObjectId to string if needed (FastAPI will handle the serialization of ObjectId automatically if orm_mode=True is set)
    tour["_id"] = str(tour["_id"])  # Ensure ObjectId is converted to string for JSON compatibility
    
    return JSONResponse(content=tour, headers={"Access-Control-Allow-Origin": "*"})


@tourApi.post("/tours/", response_model=Tour)
async def create_tour(tour: Tour):
    # Convert the Pydantic model to a dictionary
    tour_dict = tour.dict()

    # Insert the new tour into the MongoDB collection
    result = await collection.insert_one(tour_dict)

    # Fetch the newly inserted tour from the database
    new_tour = await collection.find_one({"_id": result.inserted_id})
    
    if not new_tour:
        raise HTTPException(status_code=500, detail="Failed to create tour")

    # Convert ObjectId to string if necessary
    new_tour["_id"] = str(new_tour["_id"])

    # Return the new tour directly as a Pydantic model
    return Tour(**new_tour)