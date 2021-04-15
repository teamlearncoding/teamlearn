from flask import Flask, render_template, send_file
app = Flask('TeamLearn')


@app.route('/')
def homepage():
    return render_template("index.html")

@app.route('/index2.html')
def index2():
    return render_template("index.html")

@app.route('/lessons/python/python.html')
def python():
    return render_template("python.html")

@app.route('/css/index.css')
def indexcss():
    return send_file("/css/index.css")


@app.route('/css/style.css')
def stylecss():
    return send_file("/css/style.css")


@app.route('/js/index.js')
def indexjs():
    return send_file("/js/index.js")


@app.route('/js/navbar.js')
def navbarjs():
    return send_file("/js/navbar.js")


@app.route('/learn.html')
def learn():
    return render_template("learn.html")


@app.route('/about.html')
def about():
    return render_template("about.html")


@app.route('/contact.html')
def contact():
    return render_template("contact.html")


app.run(host='0.0.0.0', port=8080)
