const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

const members = [
    {
        id: 1,
        name: "Arin Grigoras",
        email: "aringrigoras@gmail.com", //somekind of easter egg I guess :)
        status: 'active'
    }
];

app.get('/api/members', (req, res) => {
    res.json(members);
});

app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});