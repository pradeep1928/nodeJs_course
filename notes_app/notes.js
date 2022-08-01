const fs = require('fs')

function getNotes() {
    return "this is my notes.";
}

const addNote = function(title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log("new note added!!")
    
    } else {
        console.log("note title taken")
    }

}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson)
    
    } catch (error) {
        return []
    }
}

const saveNotes = function(notes) {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
};