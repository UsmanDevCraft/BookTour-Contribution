from typing import Optional
from datetime import datetime
from typing import List
from pydantic import BaseModel



# Define Pydantic model for data validation
class Tour(BaseModel):
    id: Optional[str] = None
    name: str
    city: str
    description: str
    img: str
    price: str
    duration: str
    start_date: datetime
    end_date: datetime
    facilities: List[str]
    departure_location: str
    return_details: str
    charge_price:float