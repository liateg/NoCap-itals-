// Importing required modules
import express from "express"; // Express framework for building the server.
import ejs from "ejs"; // EJS templating engine for rendering views.
import pg from "pg"; // PostgreSQL library for database operations.
import bodyParser from "body-parser"; // Middleware to parse form data from the request body.

// Database setup: PostgreSQL connection details
const db = new pg.Client({
  user: "postgres", // Database username
  host: "localhost", // Host (usually localhost for local development)
  database: "country", // Name of the database to connect to
  // Add password for authentication
  port: 5432, // Default PostgreSQL port
});

// Initialize Express app
const app = express();
const port = 3000; // Server will listen on this port

// Connect to the database
db.connect();

// Fetching quiz data from the database
let quiz = []; // Array to store quiz questions from the database
db.query("SELECT * FROM capitals", (err, res) => {
  if (err) {
    // If there's an error executing the query, log it
    console.error("Error executing query", err.stack);
  } else {
    // Store the rows (questions) from the database in the `quiz` array
    quiz = res.rows;
    console.log(quiz.length); // Log the number of quiz questions fetched
  }
  db.end(); // Close the database connection after query execution
});

// Game variables
let score = 0; // Tracks the player's score
let rcountry; // Randomly selected country for the current question

// Function to start the game by selecting a random question
function startgame() {
  rcountry = quiz[Math.round(Math.random() * quiz.length)]; // Select a random country from the `quiz` array
  console.log(rcountry); // Log the selected country for debugging
}

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded form data
app.use(express.static("public")); // Serve static files from the "public" directory

// Route: Home page
app.get("/", (req, res) => {
  startgame(); // Start the game by selecting a random question

  score = 0; // Reset the score when the player starts a new game
  data = {
    score: score, // Initialize score in the data object
    quest: rcountry.country, // Pass the selected country to the template
  };

  res.render("index.ejs", data); // Render the "index.ejs" template with game data
});

// Route: Handling the form submission (answer submission)
app.post("/submit", (req, res) => {
  console.log(req.body.answer == rcountry.capital); // Check if the answer matches the capital
  console.log(req.body); // Log the form data submitted by the user
  console.log(rcountry.capital); // Log the correct capital for debugging

  // Check if the submitted answer is correct
  if (req.body.answer.toUpperCase().trim() == rcountry.capital.toUpperCase().trim()) {
    score++; // Increment the score
    startgame(); // Select a new random country
    data = {
      score: score, // Update the score in the data object
      quest: rcountry.country, // Pass the new country to the template
    };
    res.render("index.ejs", data); // Render the updated game screen
  } else {
    // Redirect to the home page if the answer is incorrect
    // Optionally, display an alert to notify the player of the correct answer
    res.redirect("/");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Listening to port ${port}`); // Log the port number for debugging
});