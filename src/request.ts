import { XMLHttpRequest } from 'xmlhttprequest-ts';
let Promise = require('es6-promise');

export function Request(url: string, method: string, args: Array<Array<any>>) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText)
                } else {
                    reject(xhr.responseText)
                }
            }
        }
        xhr.open(method, url, true);
        args.forEach(arg => {
            xhr.setRequestHeader(arg[0], arg[1]);
        });
        xhr.send();
    });
}