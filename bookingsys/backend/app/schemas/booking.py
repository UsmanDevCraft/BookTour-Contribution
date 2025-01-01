# def serialize_booking(booking_data: Dict[str, Any]) -> booking:
def serialize_booking(booking) -> dict:
    return {
        "id": str(booking["_id"]),
        "tour_id": booking["tour_id"],
        "user_name": booking["user_name"],
        "email": booking["email"],
        "phone_number": booking["phone_number"],
        "adults": booking["adults"],
        "children": booking["children"],
        "payment_method": booking["payment_method"],
        "booking_date": booking["booking_date"],
        "total_price": booking["total_price"],
        "status":booking["status"],
        "tour_details": booking.get("tour_details"), 
    }