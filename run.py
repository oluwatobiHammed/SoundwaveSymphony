import json
import os
from flask import Flask, render_template, request, flash

if os.path.exists("env.py"):
    import env


app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY")


@app.route('/')
def index():
    return render_template('index.html', is_index_page=True)

@app.route('/booking', methods=['GET', 'POST'])
def booking():
    if request.method == "POST":
        flash("Thanks {}, we have received your booking!".format(
            request.form.get("name")))
    return render_template('booking.html', is_index_page=False)

@app.route('/merchandise')
def merchandise():
    return render_template('merchandise.html', is_index_page=False)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == "POST":
      flash("Thanks {}, we have received your message!".format(
      request.form.get("name")))
    return render_template('contact.html', is_index_page=False)

@app.route('/about')
def about():
    data = []
    with open("data/group.json", "r") as json_data:
        data = json.load(json_data)
    return render_template('about.html', is_index_page=False, company=data)

@app.route("/about/<member_name>")
def about_member(member_name):
    member = {}
    with open("data/group.json", "r") as json_data:
        data = json.load(json_data)
        for obj in data:
            if obj["url"] == member_name:
                member = obj
    return render_template("member.html", member=member)

if __name__ == "__main__":
    app.run(host=os.getenv('IP', '0.0.0.0'), 
            port=int(os.getenv('PORT', 5000)),
            debug=True)         
           # Run the app     