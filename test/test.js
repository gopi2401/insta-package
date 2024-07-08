const insta = require('../dist/bundle.js');

async function test(url) {
    console.log(await insta(url))
}
test('https://www.instagram.com/reel/C9HytkYS4Hc/?utm_source=ig_web_copy_link');