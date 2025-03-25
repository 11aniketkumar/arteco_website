import { newsletter } from "../models/newsletter.js";

export const saveUserDetails = async (req, res) => {
    const { name, email, phone } = req.body;

    await newsletter.create({
        name,
        email,
        phone,
    });

    res.redirect("/");
};
