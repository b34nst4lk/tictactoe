from flask import Flask, render_template, request
import json

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/submit_turn", methods=['POST'])
def submit_turn():
    data = request.json
    game_is_valid = validate_game(data["X"], data["O"])
    if game_is_valid:
        data["turn"] = "X" if data["turn"] == "O" else "O"
        return data
    else:
        error = {"error": "invalid_game"}
        return error, 400


def validate_game(x, o):
    return True


def check_win_condition(x, o):
    winner = None
    return winner


if __name__ == "__main__":
    app.run()
