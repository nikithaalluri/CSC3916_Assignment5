const mongoose = require('mongoose');
const Movie = require('./Movies');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

connectDB();

const movies = [
    {
        title: "Inception",
        releaseDate: 2010,
        genre: "Science Fiction",
        actors: [
            { actorName: "Leonardo DiCaprio", characterName: "Dom Cobb" },
            { actorName: "Joseph Gordon-Levitt", characterName: "Arthur" }
        ],
        imageUrl: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg"
    },
    {
        title: "The Dark Knight",
        releaseDate: 2008,
        genre: "Action",
        actors: [
            { actorName: "Christian Bale", characterName: "Bruce Wayne" },
            { actorName: "Heath Ledger", characterName: "Joker" }
        ],
        imageUrl: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg"
    },
    {
        title: "Interstellar",
        releaseDate: 2014,
        genre: "Science Fiction",
        actors: [
            { actorName: "Matthew McConaughey", characterName: "Cooper" },
            { actorName: "Anne Hathaway", characterName: "Brand" }
        ],
        imageUrl: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg"
    },
    {
        title: "Avengers: Endgame",
        releaseDate: 2019,
        genre: "Action",
        actors: [
            { actorName: "Robert Downey Jr.", characterName: "Tony Stark" },
            { actorName: "Chris Evans", characterName: "Steve Rogers" }
        ],
        imageUrl: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg"
    },
    {
        title: "The Shawshank Redemption",
        releaseDate: 1994,
        genre: "Drama",
        actors: [
            { actorName: "Tim Robbins", characterName: "Andy Dufresne" },
            { actorName: "Morgan Freeman", characterName: "Ellis Redding" }
        ],
        imageUrl: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg"
    }
];

const seedMovies = async () => {
    try {
        await Movie.insertMany(movies);
        console.log("Movies added successfully!");
        mongoose.connection.close();
    } catch (err) {
        console.error("Error inserting movies:", err);
    }
};

seedMovies();
