# E-Commerce Project

A full-stack e-commerce application with a client storefront, admin dashboard, Node.js API server, and MySQL database.

---

## How to Run This Project with Docker

To run this project, you need to use **Docker** and **Docker Compose**. Follow these steps in order.

### 1. Prerequisites

- Install **Docker Desktop** (or Docker Engine + Docker Compose) on your machine.
  - [Download Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Make sure Docker is running (you should see the Docker icon in your system tray or menu bar).

### 2. Open the Project Folder

Open a terminal and go to the project root folder (where `docker-compose.yml` is located):

```bash
cd path/to/e-commerce
```

### 3. Build and Start All Services

Run this command to build the Docker images and start all containers:

```bash
docker compose up -d --build
```

- `up` — starts the services  
- `-d` — runs them in the background  
- `--build` — builds (or rebuilds) the images before starting  

The first time may take a few minutes while images are built and dependencies are installed.

### 4. Wait for Services to Be Ready

- **MySQL** will start first and run a healthcheck.
- **Server** will start after MySQL is healthy, run database migrations, then start the API.
- **Client** and **Admin** will start after the server.

Give it about 10–20 seconds after you see “Started” for all containers.

### 5. Open the Application in Your Browser

| Application        | URL                     |
|--------------------|-------------------------|
| **Client (Store)** | http://localhost:3000   |
| **Admin Dashboard**| http://localhost:3001   |
| **API (Backend)**  | http://localhost:5000   |

- Use **http://localhost:3000** for the main storefront.
- Use **http://localhost:3001** for the admin dashboard.

---

## Useful Docker Commands

| What you want to do        | Command                    |
|----------------------------|----------------------------|
| Stop all containers        | `docker compose down`      |
| Start again (no rebuild)   | `docker compose up -d`     |
| Rebuild and start          | `docker compose up -d --build` |
| View logs (e.g. server)    | `docker compose logs -f server` |
| View logs for all services | `docker compose logs -f`   |
| Check running containers   | `docker compose ps`         |

---

## What Runs in Docker

- **mysql** — MySQL 8 database (port 3306, database: `furniture`, user: `root`, password: `root`)
- **server** — Node.js API (port 5000 on your machine, 3005 inside the container)
- **client** — React storefront served by nginx (port 3000)
- **admin** — Vite/React admin app served by nginx (port 3001)

---

## Summary: Minimum Steps to Run

1. Install and start **Docker**.
2. In the project folder, run: **`docker compose up -d --build`**.
3. Open **http://localhost:3000** (store) and **http://localhost:3001** (admin) in your browser.

That’s it. If something fails, run `docker compose logs -f` to see the logs and fix any errors.
