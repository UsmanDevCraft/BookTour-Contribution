# from app.config.db import conn
# from bson import ObjectId
# from fastapi import APIRouter, HTTPException
# from fastapi.responses import JSONResponse

# from backend.app.models.booking import Booking



# Your booking-related code here


from fastapi import APIRouter
from app.models.booking import Booking
from bson import ObjectId
from fastapi import HTTPException
from fastapi.responses import JSONResponse
from backend.app.config.db import conn  

booking = APIRouter()

db = conn['tour_booking_system']
booking_collection = db["booking"]
collection = db["tour"]


@booking.post("/bookings", response_model=Booking)
async def create_booking(booking: Booking):
    print("Here", booking)  # Debugging: Print received payload
    
    # Verify if `tour_id` is a valid ObjectId
    try:
        tour_id = ObjectId(booking.tour_id)
    except:
        raise HTTPException(status_code=400, detail="Invalid tour_id")
    
    
    # Check if the referenced tour exists
    tour = await collection.find_one({"_id": tour_id})
    
    if not tour:
        raise HTTPException(status_code=404, detail="Tour not found")
    

    # Calculate total price based on the number of adults and children
    total_price = (tour["charge_price"] * booking.adults) + (tour["charge_price"] * 0.5 * booking.children)
    
    # Prepare the booking document
    booking_dict = booking.dict()
    booking_dict["total_price"] = total_price
    booking_dict["tour_details"] = tour
    
    # Convert tour_id to string to make it JSON serializable
    booking_dict["tour_id"] = str(booking_dict["tour_id"])
    
    # Insert the booking into the bookings collection
    result = await booking_collection.insert_one(booking_dict)
    
    # Fetch the new booking and prepare for response
    new_booking = await booking_collection.find_one({"_id": result.inserted_id})
    
  
    # Convert ObjectId to string for JSON serialization
    if new_booking:
        new_booking["_id"] = str(new_booking["_id"])
        if "tour_details" in new_booking and "_id" in new_booking["tour_details"]:
            new_booking["tour_details"]["_id"] = str(new_booking["tour_details"]["_id"])
    
        return JSONResponse(content=new_booking)