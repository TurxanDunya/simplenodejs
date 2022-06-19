import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

//we initialized express framework. Whole application lies under this 'app' variable
const app = express(); 
const PORT = 5000;

//this tells we will use json data all along application
app.use(bodyParser.json()); 
app.use('/users', usersRoutes);

//Look at quotation marks for reading PORT as scope
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)); 

app.get('/', (req, res) => {
    res.send('Hello from homepage!');
});