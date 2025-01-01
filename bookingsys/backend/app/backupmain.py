

# from typing import Optional, Dict, Any

# from typing import List
# from datetime import datetime
# from enum import Enum
# from fastapi import FastAPI, HTTPException, Query
# from fastapi.middleware.cors import CORSMiddleware
# from fastapi.responses import JSONResponse
# from pydantic import BaseModel, Field
# from motor.motor_asyncio import AsyncIOMotorClient
# from bson import ObjectId
# import certifi
# from fastapi import Request
# from pymongo.collection import Collection

# from backend.app.models.booking import Booking
# from backend.app.models.tour import Tour
# # import pytz
# # from dataclasses import dataclass
# # from pydantic import EmailStr

# app = FastAPI()



# allow_origins = [
#     "http://localhost:5173",  # Local development
#     "https://bookingsys-front.vercel.app",  # Production frontend
# ]
# # Allow CORS for specific origins
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins= allow_origins,  # Specific origin instead of "*"
#     allow_credentials=True,  # Set back to True
#     allow_methods=["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
#     allow_headers=["*"],#allows all headers
#     expose_headers=["*"]
# )






# class BookingStatus(Enum):
#     OK = "OK"
#     FAILED = "FAILED"
#     PENDING = "PENDING"
#     CONFIRMED = "CONFIRMED"




# class BookingResponse:
#     message: str
#     status: str
#     booking_details: Optional[Dict[str, Any]] = None
#     error_code: Optional[str] = None
#     error_details: Optional[str] = None
#     # Required fields from the error message
#     tour_id: str


# # client = AsyncIOMotorClient("mongodb+srv://kaleemq968:MBdlv0GEePlm1XIs@bookingsystem.tvphx.mongodb.net/tour_booking_system?retryWrites=true&w=majority",tlsCAFile=certifi.where())

# # db = client['tour_booking_system']
# # booking_collection = db['bookings']
# # collection = db['tours']





# # Convert MongoDB ObjectId to string for Pydantic model serialization
# def serialize_tour(tour) -> dict:
#     return {
#         "id": str(tour["_id"]),
#         "name": tour["name"],
#         "city": tour["city"],
#         "description": tour["description"],
#         "img":tour["img"],
#         "price": tour["price"],
#         "duration": tour["duration"],
#         "start_date": tour["start_date"],
#         "end_date": tour["end_date"],
#         "facilities": tour["facilities"],
#         "departure_location": tour["departure_location"],
#         "return_details": tour["return_details"],
#         "charge_price": tour["charge_price"],
#     }






# @app.post("/tours/", response_model=Tour)
# async def create_tour(tour: Tour):
#     tour_dict = tour.dict()
#     result = await collection.insert_one(tour_dict)
#     new_tour = await collection.find_one({"_id": result.inserted_id})
#     return serialize_tour(new_tour)





























