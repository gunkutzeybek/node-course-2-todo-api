var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required : true,
        trim: true,
        minLinegth: 1
    }
});

module.exports = {User};