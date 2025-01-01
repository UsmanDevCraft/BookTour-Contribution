from typing import Optional
from datetime import datetime
from typing import List
from bson import ObjectId
from pydantic import BaseModel, field_validator

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
    
    class Config:
        from_attributes = True
    @field_validator('id', mode='before')
    @classmethod
    def convert_object_id_to_string(cls, v):
        if isinstance(v, ObjectId):
            return str(v)
        return v