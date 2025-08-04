import mongoose from "mongoose";

const bookModel = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    genre: {
        type: String,
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
    ISBN: {
        type: String,
        require: true,
        unique: true
    },
    description: {
        type: String,
        require: true
    },
    imageURL: {
        type: String,
        require: true
    }
})

const Book = mongoose.model("Book", bookModel)

export default Book