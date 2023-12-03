const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    no_ruangan: {
        type: String,
        required: true
    },
    gedung: {
        type: String,
        required: true
    },
    lt_ruangan: {
        type: String,
        required: true
    },
    tipe_ruangan: {
        type: String
    },
    status_ruangan: {
        type: String
    }
    
})

module.exports = mongoose.model('Room', RoomSchema);