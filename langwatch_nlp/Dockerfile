FROM python:3.12-slim

WORKDIR /usr/src/app

RUN pip install uv

COPY .python-version uv.lock pyproject.toml .
RUN uv sync

COPY . .

# Preload for faster subsequent startups
RUN PYTHONPATH=. uv run python langwatch_nlp/main.py

ENV RUNNING_IN_DOCKER=true

EXPOSE 5561

CMD uv run uvicorn langwatch_nlp.main:app --host 0.0.0.0 --port 5561 --timeout-keep-alive 4500 | tee /var/log/uvicorn.log
