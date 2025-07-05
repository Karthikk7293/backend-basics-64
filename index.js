const http = require('http')
const cripto = require('crypto')
const process = require('process')
const fs = require('fs')

http.createServer((req, res) => {

    fs.writeFile('newFile.txt', "hello world with new file data", (err) => {
        if (err) {
            console.log(err);

        } else {
            console.log("successfull!");

        }
    })


    const secret = 'abcdefg';
    const hash = cripto.createHmac('sha256', secret)
        .update('I love cupcakes')
        .digest('hex');

    console.log(hash);

    console.log("api is working.............");
    console.log("asdfassafd-----------------------");

    res.write("server is ok")
    res.end()


}).listen(4000, () => {
    console.log('server working....');
})