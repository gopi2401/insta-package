const crypto = require('crypto');

export default async function youtube(link) {
    try {
        const data = '28092c5adf73dfe1043e22afc831a963d8926e00376069b4fa6f11f2a749ca71c3858d6b92e169c7eddae27198e9db04';

        const response = await (await fetch(decrypt(data), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: { url: link },
        })).json();
console.log(response)
        if (response.status === 200) {
            const jsons = response.data;
            const d = '28092c5adf73dfe1043e22afc831a9630f64a4da5e3ff0e33ce8f4c48fb2ec78a429ae8534d4463fb501aef3331ac7ea';
            let payload;

            do {
                await new Promise(resolve => setTimeout(resolve, 1000));

                const jobResponse = await axios.get(decryptFun(d) + jsons['job_id'], {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (jobResponse.status === 200) {
                    payload = jobResponse.data;
                }
            } while (payload['status'] === 'working');

            console.log(payload);
        }
    } catch (error) {
        console.error(error);
    }
}
function decrypt(encryptedHex) {
    const key = Buffer.from('qwertyuioplkjhgf', 'utf8');
    const iv = Buffer.alloc(16, 0); // IV length is 16 for AES and initialized with zeros
    const encryptedBytes = Buffer.from(encryptedHex, 'hex');

    const decipher = crypto.createDecipheriv('aes-128-ecb', key, iv);
    decipher.setAutoPadding(true);

    let decrypted = decipher.update(encryptedBytes, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
}