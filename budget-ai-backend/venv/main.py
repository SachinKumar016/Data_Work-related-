from fastapi import FastAPI
from routers import user_router  # You can add more as needed
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS Middleware for frontend-backend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, set this to your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(user_router.router)

@app.get("/")
def root():
    return {"message": "Budget AI backend is running"}
