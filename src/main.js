import { postAndReel, stories } from './instagram';
export default async function (url) {

    return new Promise(async (resolve, reject) => {
        try {
            if (/instagram.com/.test(url)) {
                // const instaController = new Instagram();
                const options = url.split("/")[3];
                if (options === 'p' || options === 'reel') {
                    postAndReel(url).then((data) => resolve(data));
                } else if (options === 'stories') {
                    const data = url.split('/');
                    const regExp = /^(\d+)/;
                    const match = regExp.exec(data[5]);
                    if (match === null) reject({ result: null, message: 'stories userId not get' });
                    stories(data[4]).then((data) => resolve(data));
                }
            } else if (/youtube.com/.test(url) || /youtu.be/.test(url)) {
                // ytController.youtube(url);
            }
        } catch (err) {
            reject(err)
        }
    })
}

