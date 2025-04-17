
from fastapi import APIRouter

router = APIRouter(prefix="/user", tags=["User"])

@router.get("/test")
def test_endpoint():
    return {"message": "User route is active"}
