from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/predict")
def predict():
    return render_template("predict.html")


@app.route("/data")
def data():
    return render_template("data.html")


if __name__ == "__main__":
    app.run(debug=True,  port=3000)
