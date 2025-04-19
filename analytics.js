const axios = require('axios');

async function trackReviewGA4(movieTitle, genre) {
  try {
    const payload = {
      client_id: `${Math.floor(Math.random() * 1000000000)}`, // temporary random ID
      events: [
        {
          name: "review_posted",
          params: {
            movie_title: movieTitle, // Custom Dimension
            genre: genre,            // Event Category
            event_category: genre,
            event_action: "/reviews",
            event_label: "API Request for Movie Review",
            value: 1
          }
        }
      ]
    };

    await axios.post(
      `https://www.google-analytics.com/mp/collect?measurement_id=${process.env.GA_MEASUREMENT_ID}&api_secret=${process.env.GA_API_SECRET}`,
      payload
    );

    console.log("✅ GA4 event sent for:", movieTitle);
  } catch (err) {
    console.error("❌ Failed to send GA4 event:", err.message);
  }
}

module.exports = trackReviewGA4;
