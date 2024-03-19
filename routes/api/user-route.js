const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updatedUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .get(getSingleUser)
    .put(updatedUser)
    .delete(deleteUser);

router.route('/:userId/friends/:friendId') 
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;
