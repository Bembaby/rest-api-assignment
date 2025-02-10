const express = require('express');
const app = express();
const port = 3000;
const { v4: uuidv4 } = require('uuid');

// Middleware to parse JSON bodies
app.use(express.json());

// **************************************************************
// Put your implementation here
// If necessary to add imports, please do so in the section above
const users = [];

app.post('/users', (req,res) => {
    const {name, email} = req.body;

    if(!name || !email){
        return res.status(400).json({error: 'MIssing name or email'});
    }

    const newUser = {
        id: uuidv4(),
        name,
        email
    };
    users.push(newUser);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});


// Do not touch the code below this comment
// **************************************************************

// Start the server (only if not in test mode)
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

module.exports = app; // Export the app for testing