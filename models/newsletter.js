import mongoose from "mongoose";

const newsLetterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phone: {
        type: String,
        unique: true,
    },
});

export const newsletter = mongoose.model("newsletter", newsLetterSchema);
