var newman = require('newman'); // require newman in your project 
 
// call newman.run to pass `options` object and wait for callback 
newman.run({
    collection: require('./collection.json'),
    reporters: ['junit', 'html', 'cli', 'json'],
    environment: require('./environment.json')
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});