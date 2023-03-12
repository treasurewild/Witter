import mongoose from 'mongoose';

const witSchema = new mongoose.Schema(
    {
        _id: { type: String },
        text: { type: String, required: true },
        witDateCreated: { type: String },
        witTimeCreated: { type: String }
    }
);

const Wit = mongoose.model(`Wit`, witSchema);

export default Wit;