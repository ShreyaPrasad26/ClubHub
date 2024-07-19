# ClubHub - A Student Club Management System
ClubHub is a comprehensive student club management system designed to streamline the operations of student organizations. It provides features for managing memberships, event scheduling, user profiles and more.

## Features
- User Authentication and authorization for students, clubs and administrators
- Profile management for students, clubs and administrators
- Event creation, booking and registration
- Membership management within clubs
- Viewing club details and event archives

## Installation
To run ClubHub locally, follow the steps:

### Prerequisites
- Node.js
- MySQL

### Setup
1. Clone the repository
   ```
   git clone https://github.com/ShreyaPrasad26/ClubHub.git
   cd clubhub
   ```
2. Install dependencies
   ```
   npm install
   cd client
   npm install
   cd ..
   ```
3. Set up MySQL database
   - Create a MySQL database named 'members'
   - Update the configuration in 'server.js' with your MySQL credentials
4. Run the client and server:
   ```
   npm run server
   cd client
   npm start
   ```

### Usage
- Navigate to 'http://localhost:3000` to access the client application
- Use the provided routes to navigate through different functionalities such as login, signup, viewing profiles, managing events, and more
