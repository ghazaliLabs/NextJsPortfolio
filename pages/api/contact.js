import { getDatabase, connectDatabase } from '../../utils/db';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        connectDatabase();
        const { firstName, lastName, email, message } = req.body;

        if (!firstName || !email || !message) {
            res.status(400).json({ error: 'Missing data' });
            return;
        }

        const db = getDatabase();
        const collection = db.collection('contacts');

        try {
            const result = await collection.insertOne({
                firstName,
                lastName,
                email,
                message,
            });
            res.status(201).json({ message: 'Contact data saved', contactId: result.insertedId });
        } catch (error) {
            res.status(500).json({ error: 'Error saving contact data' });
        }
    }
    else if (req.method === 'GET') {
        res.status(200).json({ message: 'Contact API for testing!' });
    }
    else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
