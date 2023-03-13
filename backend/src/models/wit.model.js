import mongoose from 'mongoose';

const witSchema = new mongoose.Schema(
    {
        _id: { type: String },
        text: { type: String, required: true },
        dateCreated: { type: String },
    }
);

const Wit = mongoose.model(`Wit`, witSchema);

export default Wit;