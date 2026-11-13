# Autoscriber: symptom search

A small full-stack TypeScript exercise: type a keyword and get the matching conditions from the
[NHS inform A–Z of symptoms](https://www.nhsinform.scot/symptoms-and-self-help/a-to-z/).

![NestJS](https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=white)
![Vue](https://img.shields.io/badge/Vue_3-4FC08D?logo=vuedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)

## How it works

```
Vue 3 + Vuetify + Vuex  ──GET /:keyword──►  NestJS API  ──HTTP──►  nhsinform.scot A–Z page
      (port 8080)                            (port 3000)            parsed with jsdom
```

- **Backend (`backend/`)**: NestJS. `AppController` exposes `GET /:keyword`; `AppService` uses the
  injected `HttpService` (RxJS) to fetch the A–Z page, parses it with jsdom and returns the
  condition names that contain the keyword.
- **Frontend (`frontend/`)**: Vue 3 with Vuetify for the UI and Vuex for state; the search
  action calls the API and the view renders the results.
- **Docker Compose** builds and runs both services.

## Run it

```bash
docker compose build
docker compose up
```

Then open http://127.0.0.1:8080.
