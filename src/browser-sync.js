const browserSync = require("browser-sync");
require('dotenv').config();
const PROXY = process.env.PROXY;

browserSync({
    proxy: PROXY,
    files: [
        '**',
        'style.css',
        "src/**/**",
        "**/**.php",
    ]
});