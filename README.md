# React pipeline builder

## Overview

This project is a full-stack pipeline editor and analyzer, featuring a modern React/ReactFlow frontend and a FastAPI backend. Users can visually build node-based pipelines, submit them, and receive analysis (node/edge count, DAG validation) in a user-friendly modal.

---

## Features

- **Drag-and-drop pipeline editor** with custom node types (Input, Output, LLM, Text, etc.)
- **Node abstraction** for easy extension and consistent styling
- **Dynamic Text node** with variable handles and auto-resizing
- **Modern dark theme** with per-type accent colors
- **ReactFlow grid, Controls, MiniMap** for enhanced UX
- **FastAPI backend** with DAG validation and pipeline analysis
- **Result modal** for clear, styled feedback

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- Python 3.8+

### Frontend Setup

1. `cd frontend`
2. `npm install`
3. `npm start`

The app will run at [http://localhost:3000](http://localhost:3000)

### Backend Setup

1. `cd backend`
2. (Optional) Create and activate a virtual environment
3. `pip install fastapi uvicorn`
4. `uvicorn main:app --reload`

The API will run at [http://127.0.0.1:8000](http://127.0.0.1:8000)

---

## Usage

- Build your pipeline by dragging nodes from the sidebar onto the canvas.
- Connect nodes using handles.
- Click **Submit** to analyze your pipeline.
- Results (number of nodes, edges, and DAG status) will appear in a styled modal.

---

## Code Structure

- `frontend/` — React app (src contains nodes, store, UI, modal, etc.)
- `backend/` — FastAPI app (main.py)

---

## License

MIT

---

## Author

- Saurav Baid
