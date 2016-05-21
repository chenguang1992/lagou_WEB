var http = require("http");
var url = require("url");
var fs = require("fs");
var server = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    try {
        var reg = /\.(TXT|HTML|CSS|JS|PNG|JPG|GIF|JPEG|SVG|ICON|ICO|MP3|OGG|WAV|MP4|WEBM|BMP)/i;
        if (reg.test(pathname)) {
            //->根据文件的后缀名获取MIME类型
            var suffix = reg.exec(pathname)[1].toUpperCase();
            var suffixType = null;
            switch (suffix) {
                case "TXT":
                    suffixType = "text/plain";
                    break;
                case "HTML":
                    suffixType = "text/html";
                    break;
                case "CSS":
                    suffixType = "text/css";
                    break;
                case "JS":
                    suffixType = "text/javascript";
                    break;
                case "PNG":
                    suffixType = "image/png";
                    break;
                case "JPG":
                case "JPEG":
                    suffixType = "image/jpeg";
                    break;
                case "GIF":
                    suffixType = "image/gif";
                    break;
                case "BMP":
                    suffixType = " application/x-MS-bmp";
                    break;
                case "SVG":
                    suffixType = "image/svg+xml";
                    break;
                case "ICO":
                case "ICON":
                    suffixType = "image/x-icon";
                    break;
                case "MP3":
                    suffixType = "audio/mpeg";
                    break;
                case "OGG":
                    suffixType = "audio/ogg";
                    break;
                case "WAV":
                    suffixType = "audio/wav";
                    break;
                case "MP4":
                    suffixType = "video/mp4";
                    break;
                case "WEBM":
                    suffixType = "video/webm";
                    break;
            }

            //->读取文件内容,然后返回给客户端渲染
            var conFile = /(HTML|CSS|JS|TXT)/i.test(suffix) ? fs.readFileSync("." + pathname, "utf8") : fs.readFileSync("." + pathname);
            res.writeHead(200, {'content-type': suffixType});
            res.end(conFile);
        }
    } catch (e) {
        res.writeHead(404);
        res.end();
    }
});
server.listen(8080);
