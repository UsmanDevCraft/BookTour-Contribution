from typing import Optional
from pydantic import BaseModel, Field
from backend.app.models.tour import Tour



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