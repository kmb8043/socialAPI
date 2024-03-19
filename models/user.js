const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: "username is required",
            trim: true,
        },

        email: {
            type: String,
            unique: true,
            required: "email is required",
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },

        thought: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought",
            },
        ],

        friend: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual("friendCount").get(function () {
    return this.friend.length;
});

const User = model("User", userSchema);
module.exports = User;
