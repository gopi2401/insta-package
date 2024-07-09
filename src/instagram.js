import encrypt from "./encrypt"

function postAndReel(url) {
    return new Promise(async (resolve, reject) => {
        try {
            const base_url = "https://backend.instavideosave.com/allinone"
            const headers = {
                'url': encrypt(url)
            }
            const response = await fetch(base_url, {
                method: "GET",
                headers,
            })
            const data = await response.json();

            if (!data) reject({ result: null })
            delete data.fetch
            resolve(data);
        } catch (err) {
            reject(err)
        }
    })
};
function stories(userName) {
    return new Promise(async (resolve, reject) => {
        try {
            const url = `https://igs.sf-converter.com/api/userInfoByUsername/${userName}`;
            const userResponse = await fetch(url);
            const userData = await userResponse.json();
            const userId = userData.result.user.pk;
            const url1 = `https://igs.sf-converter.com/api/stories/${userId}`;
            const storiesResponse = await fetch(url1);
            const storiesData = await storiesResponse.json();
            resolve(storiesData.result);
        } catch (err) {
            reject(err)
        }
    })
};
export { postAndReel, stories };

