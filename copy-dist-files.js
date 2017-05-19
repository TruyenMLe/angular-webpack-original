var fs = require('fs');
var resources = [
    'bs-config.json'
];
resources.map(function (f) {
    var path = f.split('/');
    var t = 'dist/' + path[path.length - 1];
    fs.createReadStream(f).pipe(fs.createWriteStream(t));
});
