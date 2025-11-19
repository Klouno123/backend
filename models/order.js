const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer: {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            trim: true
        }
    },
    shipping: {
        address: {
            type: String,
            required: true,
            trim: true
        },
        apartment: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            required: true,
            trim: true
        },
        state: {
            type: String,
            required: true,
            trim: true
        },
        zip: {
            type: String,
            required: true,
            trim: true
        },
        country: {
            type: String,
            required: true,
            trim: true
        },
        method: {
            type: String,
            enum: ['standard', 'express', 'overnight'],
            default: 'standard'
        }
    },
    payment: {
        method: {
            type: String,
            enum: ['card', 'paypal', 'apple', 'google'],
            required: true
        }
    },
    items: [{
        id: Number,
        name: String,
        price: Number,
        quantity: Number,
        image: String,
        category: String
    }],
    notes: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    },
    totalAmount: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);