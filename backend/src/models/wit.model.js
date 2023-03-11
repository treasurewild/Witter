import mongoose from 'mongoose';

const witSchema = new mongoose.Schema({
    text: { type: String, required: true },
    // dateCreated: {
    //     type: Date,
    //     default: Date.now,
    //     required: true
    // },
});

const Wit = mongoose.model(`Wit`, witSchema);

export default Wit;