import { host } from './config.js';

export default async function request(url, option) {
    let options = {
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        ...option,
    };

    url = host + url;
    return fetch(url, options)
                .then(resp=>{
                    return resp.json();
                })
                .then(
                    json => {
                        if (json.errno !== 0) {
                        } else {
                            return json.data;
                        }
                    }
                )
                .catch( e => {
                    console.log(e);
                })
}