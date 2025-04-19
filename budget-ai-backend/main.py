from fastapi import FastAPI
from routers import user_routers 
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(user_routers.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to Budget AI!"}
