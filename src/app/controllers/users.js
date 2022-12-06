import { v4 as uuidv4 } from 'uuid';
import User from '../model/users.js';
let users = [];

export const getUsers = (req, res) => {
    User.find({}, function (err, users) {
        if (!err) {
            res.send(users);
        } else {
            res.status(404).json({ error: err });
        }
    });
};

export const createUser = (req, res) => {
    const user = req.body;
    users.push({ id: uuidv4(), ...user });

    res.send('Successfully created!');
};

export const getUser = (req, res) => {
    const { id } = req.params;
    // const foundUser = users.find((user) => user.id === id);
    User.findById(id, function (err, foundUser) {
        if (!err) {
            res.send(foundUser);
        } else {
            res.status(404).json({ error: err });
        }
    });
};

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with id "${id}" deleted successfully`);
};

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, age, book } = req.body;
    const user = users.find((user) => user.id === id);
    if (name) user.name = name;
    if (age) user.age = age;
    if (book) user.book = book;
    res.send(`User with id "${id}" has been updated successfully!`);
};
