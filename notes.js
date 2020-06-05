const getNotes = function(){
    return 'Your notes...'
}

const noteTemplate = function(){
    const date = new Date()
    return '---- '+date + ' ------\n---------------------------------------------------------------------'
}

module.exports = noteTemplate