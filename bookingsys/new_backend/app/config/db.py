from pymongo import MongoClient
from motor.motor_asyncio import AsyncIOMotorClient
import certifi

# MongoDB connection URI
MONGO_URI = "mongodb+srv://kaleemq968:MBdlv0GEePlm1XIs@bookingsystem.tvphx.mongodb.net/tour_booking_system?retryWrites=true&w=majority"

# MongoDB client for synchronous operations
conn = MongoClient(MONGO_URI, tlsCAFile=certifi.where())

# MongoDB client for asynchronous operations
async_conn = AsyncIOMotorClient(MONGO_URI, tlsCAFile=certifi.where())
db = async_conn['tour_booking_system']

async def test_db_connection():
    try:
        # Ping the database
        await db.command("ping")
        print("Database connection is successful!")
    except Exception as e:
        print(f"Database connection failed: {e}")

