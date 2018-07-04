import React from "react";
import forge from "node-forge";

const baseUrl = "http://kaifa.huaqiaobao.cn/";//开发站
// const baseUrl = "http://moni.huaqiaobao.cn/";//模拟站
// const baseUrl = "https://www.hqblicai.com/";//正式站

const appkey = "42121AAF5F09205A6C56ED5A4CE1A887";
const version = "3.4";

export default {

    fetchRequest(url, method, token="", fileds="") {
        const header = {
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',//表单
            // "accesstoken": token,  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
        };

        const ts = parseInt(Date.now()/1000);
        let body = "ts=" + ts+ "&appkey=" + appkey + "&version=" + version + "&sign_method=" + "MD5";
        const md5 = forge.md.md5.create();
        const md = forge.md.md5.create();
        md.update("72789CB4BD41A0DC" + ts + "MD5" + version);
        md5.update(md.digest().toHex() + appkey + token);
        body = body + "&signa=" + md5.digest().toHex().toUpperCase();
        if (token !== null && token.length > 0) body = body + "&oauth_token=" + token;
        if (fileds !== null && fileds.length > 0) body = body + "&fileds=" + fileds;

        console.debug("body:" + body);
        // noinspection JSAnnotator
        return new Promise(function (resolve, reject) {
            fetch(baseUrl + url, {
                method: method,
                headers: header,
                body: body,
            }).then(response => response.json())
                .then((jsonData) => {
                    console.debug("jsonData:" + JSON.stringify(jsonData));
                    resolve(jsonData);

                })
                .catch(error => {
                    console.debug("error:" + error);
                    reject(error);

                })
        });


    }
}
