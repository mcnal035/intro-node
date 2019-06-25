const moduleStuff = require('./anime.module');

const characterList = moduleStuff.characters;


for ( person of characterList) {
    console.log(person.name + ' is from ' + person.show);
    
}