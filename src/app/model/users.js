import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const users = new Schema({
    name: { type: String, default: '' },
    age: Number,
    books: Number,
});

const MyModel = mongoose.model('users', users);

export default MyModel;
