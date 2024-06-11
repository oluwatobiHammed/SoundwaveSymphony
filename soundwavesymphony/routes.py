from flask import (
     flash, render_template,
    redirect, request, session, url_for)
import json
from soundwavesymphony import app, db
from soundwavesymphony.models import Booking, Contact
import os


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