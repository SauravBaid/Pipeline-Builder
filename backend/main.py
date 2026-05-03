
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow CORS for local frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}


def has_cycle(nodes, edges):
    from collections import defaultdict, deque

    graph = defaultdict(list)
    in_degree = {node['id']: 0 for node in nodes}

    for edge in edges:
        source = edge['source']
        target = edge['target']
        graph[source].append(target)
        in_degree[target] += 1

    queue = deque([node_id for node_id, degree in in_degree.items() if degree == 0])
    visited_count = 0

    while queue:
        current = queue.popleft()
        visited_count += 1
        for neighbor in graph[current]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    return visited_count == len(nodes)


from fastapi import Body
from typing import Any

@app.post('/pipelines/parse')
async def parse_pipeline(payload: dict = Body(...)) -> dict:
    nodes = payload.get('nodes', [])
    edges = payload.get('edges', [])
    return {
        "num_nodes": len(nodes),
        "num_edges": len(edges),
        "is_dag": not has_cycle(nodes, edges)
    }

