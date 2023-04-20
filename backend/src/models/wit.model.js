import mongoose from 'mongoose';

const witSchema = new mongoose.Schema(
    {
        _id: String,
        text: String,
        dateCreated: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        replies: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Wit"
        }],
        original: { type: Boolean, default: true }
    }
);

const Wit = mongoose.model(`Wit`, witSchema);

export default Wit;