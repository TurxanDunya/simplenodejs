const fs = require('fs')

const getNotes = function () {
    return 'Your notes'
}

const addNote = function (title, body) {
    const notes = loadNotes()

    debugger

    //like streams
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title has taken!')
    }
}

const removeNote = function (title) {
    const notes = loadNotes()

    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })

    saveNotes(notesToKeep)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}