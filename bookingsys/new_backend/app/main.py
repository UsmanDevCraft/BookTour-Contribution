from fastapi import FastAPI
from app.routes.booking import booking
from app.routes.tour import tourApi
from app.config.db import test_db_connection
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()


# Define allowed origins (you can specify specific origins like ['http://localhost:5173'] or ['*'] for all)
origins = [
    "http://localhost:5173",  # The origin of your frontend
    "http://localhost:8000", 
    "https://bookingsys-front.vercel.app" # Your FastAPI server, just in case
]

# Add CORSMiddleware to handle cross-origin requests
app.add_middleware(
    CORSMiddleware,
    allow_origins= ["*"],  # Allow the origins defined above
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Allow all headers
)

@app.on_event("startup")
async def startup_event():
    await test_db_connection()



app.include_router(booking)
app.include_router(tourApi)



