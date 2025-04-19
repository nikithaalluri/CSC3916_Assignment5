const mongoose = require('mongoose');
const Movie = require('./Movies'); // Import the Movie model
require('dotenv').config(); // Load environment variables

// Connect to MongoDB
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.DB); // No need for useNewUrlParser & useUnifiedTopology
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("MongoDB connection error:", error);
      process.exit(1);
    }
  };
  
connectDB();

// Sample movie data
const movies = [
    {
        title: "Inception",
        releaseDate: 2010,
        genre: "Science Fiction",
        actors: [
            { actorName: "Leonardo DiCaprio", characterName: "Dom Cobb" },
            { actorName: "Joseph Gordon-Levitt", characterName: "Arthur" }
        ]
    },
    {
        title: "The Dark Knight",
        releaseDate: 2008,
        genre: "Action",
        actors: [
            { actorName: "Christian Bale", characterName: "Bruce Wayne" },
            { actorName: "Heath Ledger", characterName: "Joker" }
        ]
    },
    {
        title: "Interstellar",
        releaseDate: 2014,
        genre: "Science Fiction",
        actors: [
            { actorName: "Matthew McConaughey", characterName: "Cooper" },
            { actorName: "Anne Hathaway", characterName: "Brand" }
        ]
    },
    {
        title: "Avengers: Endgame",
        releaseDate: 2019,
        genre: "Action",
        actors: [
            { actorName: "Robert Downey Jr.", characterName: "Tony Stark" },
            { actorName: "Chris Evans", characterName: "Steve Rogers" }
        ]
    },
    {
        title: "The Shawshank Redemption",
        releaseDate: 1994,
        genre: "Drama",
        actors: [
            { actorName: "Tim Robbins", characterName: "Andy Dufresne" },
            { actorName: "Morgan Freeman", characterName: "Ellis Redding" }
        ]
    }
];

// Insert movies into the database
const seedMovies = async () => {
    try {
        await Movie.insertMany(movies);
        console.log("Movies added successfully!");
        mongoose.connection.close(); // Close connection after insertion
    } catch (err) {
        console.error("Error inserting movies:", err);
    }
};

seedMovies();
