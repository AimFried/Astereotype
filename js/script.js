
var intervener = {};


// Get intervener data
fetch('../../database/intervener.json')
    .then((response) => response.json())
    .then((json) => intervener = json);


