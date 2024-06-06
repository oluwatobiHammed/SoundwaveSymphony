import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    user_logged_in = True 
    return render_template('index.html', is_index_page=user_logged_in)

@app.route('/booking')
def booking():
    user_logged_in = False 
    return render_template('form.html', is_index_page=user_logged_in)

@app.route('/merchandise')
def merchandise():
    user_logged_in = False 
    return render_template('merchandise.html', is_index_page=user_logged_in)


if __name__ == "__main__":
    app.run(host=os.getenv('IP', '0.0.0.0'), 
            port=int(os.getenv('PORT', 5000)),
            debug=True)         
           # Run the app     