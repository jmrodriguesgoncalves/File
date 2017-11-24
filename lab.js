/*var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis!\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');*/

var CryptoJS = require("crypto-js");

function alertName() {
	var file = document.getElementById('name');
    
    file.addEventListener('change', function() {
        alert("File name: " + this.files[0].name );
    });
}

function alertSize(){    
    var file = document.getElementById('size');
    
    file.addEventListener('change', function() {
        alert("Size : " + this.files[0].size + " bytes");
    });
}

function alertSha1(){
	var file = document.getElementById('sha1');

    file.addEventListener('change', function() {
        alert("Sha1 Digest of " + this.files[0].name + ": " + CryptoJS.SHA1(this.files[0].name).toString());
    });
}

function alertMD5() {
	var file = document.getElementById('md5');

    file.addEventListener('change', function() {
        alert("MD5 Digest of " + this.files[0].name + ": " + CryptoJS.MD5(this.files[0].name).toString());
    });
}
