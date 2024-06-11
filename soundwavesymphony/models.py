from soundwavesymphony import db

class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    message = db.Column(db.Text, nullable=False)
    event_type = db.Column(db.Text, nullable=False)
    event_date = db.Column(db.Date, nullable=False)

    def __repr__(self):
        return f"<Booking {self.name}>"
    
    
class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    message = db.Column(db.Text, nullable=False)
    event_type = db.Column(db.Text, nullable=False)
    event_date = db.Column(db.Date, nullable=False)

    def __repr__(self):
        return f"<Contact {self.name}>"