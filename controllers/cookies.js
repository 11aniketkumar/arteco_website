import useragent from "useragent";
import geoip from "geoip-lite";
import { UserData } from "../models/userData.js"; // Import the model

// Function to handle setting the user cookie and saving to MongoDB
export const cookieCheck = async (req, res) => {
    try {
        // Collect user data (IP, user agent, etc.)
        const ipAddress = req.ip; // Get the IP address from the request
        const userAgent = req.headers["user-agent"]; // Get the user-agent string
        const agent = useragent.parse(userAgent); // Parse the user agent string

        // Get location based on the IP address (no external API needed)
        const geo = geoip.lookup(ipAddress); // Use IP to get the geolocation info
        const location = geo || {};

        // Create a cookie with the user data
        const userData = {
            ipAddress,
            userAgent: agent,
            location,
            timestamp: new Date().toISOString(),
        };

        // Set the cookie with a 30-day expiration
        res.cookie("userData", JSON.stringify(userData), {
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
            httpOnly: true, // To prevent JavaScript access
        });

        // Save the data to MongoDB
        await saveCookieData(userData);

        // Send a success response
        res.json({
            message: "User cookie set successfully and data saved to MongoDB",
        });
    } catch (error) {
        console.error("Error setting user cookie:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Function to save user data to MongoDB
export const saveCookieData = async (data) => {
    try {
        const newUser = new UserData(data);
        await newUser.save();
    } catch (error) {
        console.error("Error saving user data to MongoDB:", error);
    }
};
