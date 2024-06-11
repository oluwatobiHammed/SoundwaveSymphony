
import os
from soundwavesymphony import app, db


if __name__ == "__main__":
    with app.app_context():
        try:
          db.create_all()  # Ensure the tables are created
        except Exception as e:
          print(f"Error creating database tables: {e}")
    app.run(
        host=os.environ.get("IP"),
        port=int(os.environ.get("PORT")),
        debug=os.environ.get("DEBUG")
    )    