# Project Setup and Run Guide

This project consists of three main parts:

- **Admin Panel** (Vue 2) — for managing Pages (CRUD)
- **Client App** (Nuxt 3) — for displaying Pages
- **JSON Server** — mock API backend using `db.json`

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)
- [json-server](https://github.com/typicode/json-server) (install globally if needed):

```bash
npm install -g json-server
```

## Getting started

Install dependencies and run all parts of the project simultaneously.

### 1. Install dependencies

Run this in the root of the project:

```bash
npm install
```

### 2. Start all services

```bash
npm start
```

This will start:
 - Vue 2 Admin Panel at http://localhost:8080
 - Nuxt 3 Client App at http://localhost:3000
 - JSON Server API at http://localhost:4000

## Usage

- To manage Pages (create, read, update, delete), visit the Admin Panel: 👉 http://localhost:8080
- To view all generated Pages from the API, open your browser at: 👉 http://localhost:3001

## Project Structure

```plaintext
project/
├── admin/         # Vue 2 Admin Panel
├── client/        # Nuxt 3 Client App
├── db.json        # JSON Server data
└── package.json   # Root scripts to run all services
```
