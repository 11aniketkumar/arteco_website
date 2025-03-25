// models/userData.model.js
import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema({
    ipAddress: {
        type: String,
        required: true,
    },
    userAgent: {
        family: String,
        major: String,
        minor: String,
        patch: String,
        os: {
            family: String,
            major: String,
            minor: String,
            patch: String,
        },
        device: {
            family: String,
        },
    },
    location: {
        country: String,
        region: String,
        city: String,
        ll: [Number],
        metro: Number,
        zip: String,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

export const UserData = mongoose.model("UserData", userDataSchema);
