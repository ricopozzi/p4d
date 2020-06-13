const mongoose = require('mongoose')

const gastoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true  
    },
    observations: {
        type: String,
        required: false
    },
    date:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Gastos', gastoSchema)
