# Guess the Capital

## Overview
This is a simple web-based quiz game that tests your knowledge of world capitals. The game randomly selects a country and prompts you to guess its capital city. Your score increases with each correct answer.

## Features
- **Interactive Quiz**: Randomly selects countries from a database
- **Score Tracking**: Keeps track of correct answers
- **Simple UI**: Clean interface focused on gameplay
- **PostgreSQL Integration**: Uses a database to store country/capital pairs

## Technologies Used
- **Frontend**:
  - HTML5
  - CSS
  - EJS (Embedded JavaScript templates)

- **Backend**:
  - Node.js
  - Express.js
  - PostgreSQL

- **Database**:
  - PostgreSQL with a `capitals` table containing country/capital pairs

## Installation

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### Setup Steps
1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd guess-the-capital
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the PostgreSQL database:
   - Create a database named `country`
   - Create a table named `capitals` with columns for country and capital
   - Populate with country/capital data

4. Configure database connection:
   Update the connection details in `server.js`:
   ```javascript
   const db = new pg.Client({
     user: "postgres",
     host: "localhost",
     database: "country",
     password: "your_password", // Add if required
     port: 5432,
   });
   ```

5. Start the server:
   ```bash
   node server.js
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure
```
guess-the-capital/
├── public/
│   ├── images/            # Contains game assets
│   └── style.css          # Stylesheet
├── views/
│   └── index.ejs          # Main game view
├── server.js              # Backend server code
└── README.md              # This file
```

## How to Play
1. The game will display a country name
2. Type your guess for that country's capital in the input field
3. Press "SUBMIT" to check your answer
4. Correct answers increase your score
5. Incorrect answers reset the game

## Learning Objectives
This project was created to:
- Learn about connecting Node.js applications to PostgreSQL databases
- Practice backend development with Express.js
- Implement a simple game logic flow
- Work with EJS templates for dynamic content rendering

## Future Improvements
- Add difficulty levels
- Implement a high score system
- Add hints or multiple choice options
- Include more detailed feedback for incorrect answers
- Add animations or sound effects

## License
This project is open-source and available under the MIT License.

---

Enjoy testing your geography knowledge! If you have any questions or suggestions, feel free to contribute.
