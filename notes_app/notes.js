const  chalk  = require('chalk');
const fs = require('fs')

function getNotes() {
    return "this is my notes.";
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(note => note.title === title)

    // const duplicateNotes = notes.filter(function(note) {
    //     return note.title === title
    // })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse("new note added!!"))
    
    } else {
        console.log(chalk.red.inverse("note title taken"))
    }

}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson)
    
    } catch (error) {
        return []
    }
}


const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note) {
        return note.title !== title
    })

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed'))    
    } else {
        console.log(chalk.red.inverse("No note found"))
    }

}


const saveNotes = (notes) =>{
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};