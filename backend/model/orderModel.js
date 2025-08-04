import mongoose from "mongoose";

const orderModel = mongoose.Schema({
    user_info: {
        type: String,
        require: true
    },
    list_of_books: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },
    total_price: {
         type: Number,
        require: true
    },
    payment_status: {
        type: String,
        require: true
    }
})

const Order = mongoose.model("Order", orderModel)
export default Order