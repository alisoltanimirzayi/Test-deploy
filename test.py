import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


# 1. Enable CORS so your HTML frontend (running on Live Server) can talk to Python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For local testing, we allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/api/chart-data')
def chart_data():
    data = pd.DataFrame({'years': [1401, 1402, 1403],
            'scores': [75, 82, 90],
    })
    records = data.to_dict(orient="records")
    return {"status": "success", "data": records}