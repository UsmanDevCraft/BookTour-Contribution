# backend/app/main.py
from fastapi import FastAPI

from app.routes.booking import booking  # Adjusted import path

app = FastAPI()

app.include_router(booking)
