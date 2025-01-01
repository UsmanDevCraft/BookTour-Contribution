from typing import Optional
from pydantic import BaseModel, Field, field_validator
from app.models.tour import Tour
from bson import ObjectId

class Booking(BaseModel):
    id: Optional[str] = None
    tour_id: str  # Reference to the tour being booked
    user_name: str
    email: str
    phone_number: str
    adults: int
    children: int
    payment_method: str
    booking_date: str  # ISO format for consistency
    total_price: Optional[float] = None
    status: str
    # tour_details: Optional[Tour]
    tour_details: Optional[Tour] = Field(None, description="Details of the tour associated with this booking")
    
    class Config:
        from_attributes = True

    @field_validator('id', mode='before')
    @classmethod
    def convert_object_id_to_string(cls, v):
        if isinstance(v, ObjectId):
            return str(v)
        return v