const insta = require('../dist/bundle.js');

async function test(url) {
    console.log(JSON.stringify(await insta(url)))
}
// test('https://www.instagram.com/reel/C9HytkYS4Hc/?utm_source=ig_web_copy_link');


// stories
test('https://www.instagram.com/stories/mr_125__kid/3408121174730252623/')