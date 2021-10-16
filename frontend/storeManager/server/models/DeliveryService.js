const { Double } = require("bson");
const mongoose = require("mongoose");

const DeliveryServiceSchema = new mongoose.Schema(
    {
        dservicename: {
            type: String,
            required: true,
            trim: true,
        },
        contactno: {
            type: String,
            required: true,
            trim: true,
            maxlength: 10,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        noofvehicles: {
            type: Number,
            required: true,
            trim: true,
        },
        noofdrivers: {
            type: Number,
            required: true,
            trim: true,
        },
        chargeperkm: {
            type: String,
            required: true,
            trim: true,
        },
        startdate: {
            type: Date,
            required: true,
            default: Date.now(),
        },
        updatedate: {
            type: Date,
            required: true,
            default: Date.now(),
        }
    },
    {
        timestamps: true,
    }
);

const DeliveryService = mongoose.model("deliveryservice", DeliveryServiceSchema);

module.exports = DeliveryService;