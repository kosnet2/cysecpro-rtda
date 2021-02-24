FROM python:3.8.7-slim

WORKDIR /urs/src/mongo-watch

COPY config.py ./
COPY main.py ./
COPY requirements.txt ./

RUN pip install -r requirements.txt

CMD ["python", "main.py"]