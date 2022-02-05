const notes = require('express').Router();
const path = require('path');
const fs = require('fs');
const {v4: uuidv4} = require('uuid');

notes.get('/', (req, res) => {
    console.log(`${req.method} request made for notes list`);
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if(err){
            res.status(500).send(`Request couldn't be completed`)
            throw(err)
        } else{
        res.json(JSON.parse(data));
        console.log(`Status ${res.statusCode}, info sent`)
        }
    })
});

notes.get('/:id', (req, res) => {
    console.log(`${req.method} request made for note ${req.params.id}`);
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if(err){
            res.status(500).send(`Request couldn't be completed`)
            throw(err)
        } else{
            const noteArr = JSON.parse(data);
            console.log(noteArr);
            const note = noteArr.find(item => {
                if(item.id === req.params.id){
                    res.json(item)
                    return item
                }
            })
            if(!note){
                res.status(404).send(`No note with ID ${req.params.id} in list`)
            }
        }
    })
})

notes.post('/', (req, res) => {
    console.log(`${req.method} request recieved to add note.`);
    if(!req.body.title){
        res.status(404).send('Input must include a title.');
        console.log(res.status);
    }
    console.log(req.body);
    const newNote = {
        id: uuidv4(),
        title: req.body.title,
        note: req.body.text
    }
    console.log(newNote)
    console.log(`Did it! newNote: ${newNote.title} / ${res.statusCode}`);
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if(err){throw(err)} else{
            const noteBund = JSON.parse(data);
            noteBund.push(newNote)
            console.log(noteBund);
            fs.writeFile('./db/db.json', JSON.stringify(noteBund), err => {
                if(err){
                    throw err;
                }
                console.log('written');
                res.json(newNote)
            })
        };
    })
})

notes.delete('/:id', (req, res)=>{
    console.log(`${req.method} request recieved to delete note.`);
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if(err){
            res.status(500).send(`Request couldn't be completed. Error: ${err}`)
            throw(err)
        }
        try{    
            const noteArr = JSON.parse(data);
            noteArr.filter(note => {
                if(note.id === req.params.id){
                    const i = noteArr.indexOf(note)
                    noteArr.splice(i, 1);
                    fs.writeFile('./db/db.json', JSON.stringify(noteArr), err => {
                        if(err){
                            throw err;
                        }
                        console.log('written');
                    })
                    return res.send(`${note.title} has been deleted!`)
                } else if(!noteArr.some(note => note.id === req.params.id)){ 
                    console.log(`Note # ${req.params.id} does not exist in file. Cannot delete.`);
                    return res.status(404).send(`Note # ${req.params.id} does not exist in file. Cannot delete.`);
                }
            })
        } catch(error){console.error};
    })
})

notes.put('/:id', (req, res) => {
    console.log(`${req.method} request recieved to edit note.`);
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if(err){
            res.status(500).send(`Request couldn't be completed. Error: ${err}`)
            throw(err)
        }
        const noteArr = JSON.parse(data);
        noteArr.filter(note => {
            if(note.id === req.params.id){
                const newNote = {
                    id: note.id,
                    title: req.body.title,
                    note: req.body.text
                }
                const i = noteArr.indexOf(note)
                noteArr.splice(i, 1, newNote);
                fs.writeFile('./db/db.json', JSON.stringify(noteArr), err => {
                    if(err){
                        throw err;
                    }
                    console.log('written');
                })
                return res.send(`${req.body.title} has been edited!`)
            } else if(!noteArr.some(note => note.id === req.params.id)){ 
                console.log(`Note # ${req.params.id} does not exist in file. Cannot edit.`);
                return res.status(404).send(`Note # ${req.params.id} does not exist in file. Cannot edit.`);
            }
        })
    })
})

module.exports = notes;