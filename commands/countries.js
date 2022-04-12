module.exports = {
    name: 'countries',
    description: 'this command sends the user a list of all the countries',
    execute(message) {
        message.author.send(message.author, {files: ['Current_Countries.txt']});
    }
}