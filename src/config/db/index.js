import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/my_book_store');
        console.log('Connected successfully');
    } catch (error) {
        console.log('Connected failed');
    }
}

export default connect;
