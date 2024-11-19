## User Management Web Application

A simple React-based web application to manage users. It allows users to view, add, edit, and delete user details using the JSONPlaceholder API as a mock backend.

# Features

- View Users: Fetch and display a list of users from the mock API.
- Add Users: Add new users via a form.
- Edit Users: Update existing user details.
- Delete Users: Remove users from the list.
- Error Handling: Display error messages if API requests fail.
- Responsive Design: Optimized for various screen sizes.

# Tech Stack

- Frontend: React.js
- HTTP Client: Axios
- Mock Backend API: JSONPlaceholder
- Styling: CSS

1. git clone https://github.com/yourusername/user-management-app.git cd user-management-app

2. npm install

3. npm start

4. open Browser and localhost 3000 : http://localhost:3000

# File Structure :

/src ├── components │ ├── UserList.js # Displays the list of users │ ├── UserForm.js # Form for adding/editing users ├── App.js # Main application logic ├── styles.css # CSS styling ├── index.js # Application entry point

# API Endpoints :

- GET /users: Fetch the list of users.
- POST /users: Add a new user.
- PUT /users/ : Update an existing user.
- DELETE /users/ : Delete a user.

# Challenges Faced

1. Handling mock API limitations like non-persistent data.
2. Ensuring a clean, modular architecture for scalability.

# Future Enhancements:

1. Pagination or Infinite Scrolling: To handle large user data sets efficiently.
2. Client-side Validation: Enhance form validation for better user input handling.
3. UI Improvements: Add more animations and interactivity.

# License :

This project is open-source and free to use under the MIT License.
