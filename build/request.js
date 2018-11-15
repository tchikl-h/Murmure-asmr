"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xmlhttprequest_ts_1 = require("xmlhttprequest-ts");
let Promise = require('es6-promise');
function Request(url, method, args) {
    return new Promise((resolve, reject) => {
        let xhr = new xmlhttprequest_ts_1.XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                }
                else {
                    reject(xhr.responseText);
                }
            }
        };
        xhr.open(method, url, true);
        args.forEach(arg => {
            xhr.setRequestHeader(arg[0], arg[1]);
        });
        xhr.send();
    });
}
exports.Request = Request;
//# sourceMappingURL=request.js.map