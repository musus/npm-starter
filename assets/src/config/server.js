const browserSync = require("browser-sync");
browserSync({
    proxy: 'http://127.0.0.1:8080',
    files: [
        "src/**/**.**",
        "**/**.php",
    ]
});

// "serve": "node ./src/js/server.js",