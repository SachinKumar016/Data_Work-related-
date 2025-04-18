from fastapi import FastAPI
from routers import user_routers  # ✅ Corrected import
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS Middleware for frontend-backend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 🔐 Replace with frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(user_routers.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to Budget AI!"}
