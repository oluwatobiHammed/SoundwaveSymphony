import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', is_index_page=True)

@app.route('/booking')
def booking():
    return render_template('form.html', is_index_page=False)

@app.route('/merchandise')
def merchandise():
    return render_template('merchandise.html', is_index_page=False)

@app.route('/contact')
def contact():
    return render_template('contact.html', is_index_page=False)

@app.route('/about')
def about():
    return render_template('about.html', is_index_page=False)


if __name__ == "__main__":
    app.run(host=os.getenv('IP', '0.0.0.0'), 
            port=int(os.getenv('PORT', 5000)),
            debug=True)         
           # Run the app     