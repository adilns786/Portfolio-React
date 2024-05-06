import random

box_data = [
    {"id": 1, "x": 0, "y": 0, "width": 2, "height": 4, "priority": 1},
    {"id": 2, "x": 0, "y": 0, "width": 4, "height": 3, "priority": 1},
    {"id": 3, "x": 0, "y": 0, "width": 3, "height": 2, "priority": 2},
    {"id": 4, "x": 0, "y": 0, "width": 3, "height": 2, "priority": 2},
    {"id": 5, "x": 0, "y": 0, "width": 3, "height": 2, "priority": 2},
    # {"id": 6, "x": 0, "y": 0, "width": 1, "height": 1, "priority": 1},
    # {"id": 7, "x": 0, "y": 0, "width": 1, "height": 1, "priority": 1},
    # {"id": 8, "x": 0, "y": 0, "width": 1, "height": 1, "priority": 2},
    # {"id": 9, "x": 0, "y": 0, "width": 1, "height": 1, "priority": 2},
    # {"id": 10, "x": 0, "y": 0, "width": 1, "height": 1, "priority": 2}
]
total_cols = 8
total_rows = 8

def handle_random_placement():
    grid_data = [[0] * total_rows for _ in range(total_cols)]

    def check_overlap(x, y, w, h):
        for i in range(x, x + w):
            for j in range(y, y + h):
                if i >= total_cols or j >= total_rows or grid_data[i][j] != 0:
                    return False
        return True

    def generate_random_position(w, h):
        x = random.randint(0, total_cols - w)
        y = random.randint(0, total_rows - h)
        return x, y

    for box in box_data:
        x, y = generate_random_position(box["width"], box["height"])
        while not check_overlap(x, y, box["width"], box["height"]):
            x, y = generate_random_position(box["width"], box["height"])
        box["x"] = x
        box["y"] = y
        for i in range(x, x + box["width"]):
            for j in range(y, y + box["height"]):
                grid_data[i][j] = box["id"]

import math

def distance_between_points(x1, y1, x2, y2):
    return math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

def compactness(tempdata):
    totaldis=0
    for box in tempdata:
        totaldis+=distance_between_points(4,4,box["x"]+(box["width"]/2),box["y"]+(box["height"]/2))
    return totaldis
dist=100
leastdata=0
def bruteforce():
    global dist
    global leastdata
    for i in range (0,14):
        handle_random_placement()
        dist2 =compactness(box_data)
        if (dist2<dist):
            dist=dist2
            leastdata=box_data

# bruteforce()
# print(leastdata)
# print(box_data)
from flask import Flask, jsonify
from flask_cors import CORS  # Import CORS from flask_cors

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Your routes and other code...

@app.route('/api/boxdata')
def get_box_data():
    handle_random_placement()
    # print(box_data)
    compactness(box_data)
    return jsonify(box_data)

if __name__ == '__main__':
    app.run(debug=True)
