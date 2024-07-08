const insta = require('../dist/bundle.js');

async function test(url) {
    console.log(await insta(url))
}
test('https://www.instagram.com/p/C9Hvs4HyMeg/?utm_source=ig_web_copy_link');