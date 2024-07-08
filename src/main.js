import encrypt from "./encrypt"
export default async function (url) {

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

}

