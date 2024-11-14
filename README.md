# Orchestra Layout Website

This project allows users to create an orchestra layout by dragging and dropping items like chairs and music stands. It includes an admin panel for setting limits on each item type.

## Features

- Drag-and-drop items to a stage.
- Admin panel to set limits on item quantities.
- Limits decrease as items are placed on the stage.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/orchestra-layout.git
   cd orchestra-layout
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Initialize the database:
   ```bash
   flask shell
   from app import db
   db.create_all()
   ```

4. Run the app:
   ```bash
   flask run
   ```

Visit `http://127.0.0.1:5000` to view the site.
