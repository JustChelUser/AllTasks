const express = require('express')
const app = express()
const userRoutes = require('./routes/userRoutes/userRoutes.js');
const PORT = process.env.PORT || 3001;


app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use('/users', userRoutes); 
app.all('*', (req, res) => {
    res.status(404).json({ message: 'Route not found' });
});
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})