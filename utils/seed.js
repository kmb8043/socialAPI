const mongoose = require('mongoose');
const User = require('../models/user');
const Thought = require('../models/thought');

const user = [
    {
        username: 'user1',
        email: 'user123@mail.com'
    },

    {
        username: 'user2',
        email: 'user456@mail.com'
    }
];

const thoughtData = [
    {
        thoughtBody: 'This is a thought',
        username: 'user1'
    },

    {
        thoughtBody: 'Wow technology!',
        username: 'user2'
    }
];

const reactionData = [
    {
        reactionBody: 'What an interesting thought user123',
        username: 'user2'
    },

    {
        reactionBody: 'Technology is cool',
        username: 'user1'
    }
];

const seedDatabase = async () => {
    await mongoose.connect('mongodb://localhost:27017/NOSQL', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    try {
        await User.deleteMany({});
        await Thought.deleteMany({});


        const createdUsers = await User.insertMany(user);

  
        const updatedThoughtData = thoughtData.map((thought, index) => {
            return {
                ...thought,
                username: createdUsers[index].username,
                reactions: reactionData 
            };
        });

        // Create thoughts
        await Thought.insertMany(updatedThoughtData);

        console.log('Database seeded! Users and Thoughts created.');
    } catch (err) {
        console.error('Failed to seed database:', err);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();