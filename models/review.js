const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        min:1,
        max: 5,
    },
    review: String,
    breweryId: String,
   
})

const reviewModel = mongoose.model('review', reviewSchema);

module.exports = reviewModel;