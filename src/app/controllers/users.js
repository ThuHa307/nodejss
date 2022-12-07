import User from '../model/users.js';

export const getUsers = (req, res) => {
    User.find({}, function (err, users) {
        if (!err) {
            res.send(users);
        } else {
            res.status(404).json({ error: err });
        }
    });
};

export const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const saveUser = await newUser.save();
        res.status(200).json(saveUser);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.send(`User with id ${req.params.id} has been deleted!`);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        await user.updateOne({ $set: req.body });
        res.send(`User with id "${req.params.id}" has been updated successfully!`);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
