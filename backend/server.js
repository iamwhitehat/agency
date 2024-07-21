const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
