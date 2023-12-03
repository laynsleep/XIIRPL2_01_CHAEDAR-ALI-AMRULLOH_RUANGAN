const express = require('express');
const app = express();
const connDB = require('./config/db')
const roomRoute = require('./router/rooms')

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => res.send('Data ruangan SMK Telkom Purwokerto'))

app.use(roomRoute);

connDB();

app.listen(port, () => console.log(`Server berjalan pada port ${port}`))