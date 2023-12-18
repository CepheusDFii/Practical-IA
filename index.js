const express = require('express');
const mongoose = require ('mongoose');
const app = express();
const patientSchema = new mongoose.Schema ({
name: {
    type: String,
    required: true,
},
age: {
    type: Number,
    required: true,
},
});

const Patients = require ('/patientModel');

app.post('/api/patients', (req,res) => {
    const { name, age } = req.body;
    const newPatient = new Patient({name, age});
    newPatient.save()
    .then(patient); 
        res,json(patient); {
        
    }
    'catch'((error) => {
        res.status(500).json({ error: 'An error occurred while creating the patient' });
})
app.get('/', (req, res) => {
    res.send ('Welcome');
});

app.get('/api/Patients', (req, res) => {
    res.send(Patients);
})

app.get('/api/Patients/:id', (req, res) =>{
    let course = courses.find(c => c.id === parseInt(req.params.id));
if (!course) res.status(404).send('Patient ID Unavailable')
res.send(course)
})

const port = process.env.PORT || 3001;
app.listen (port, () => {console.log ('Working on port 3001...')
})
