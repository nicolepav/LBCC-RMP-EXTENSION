var request = require("request")
var cheerio = require("cheerio")

request('https://stackoverflow.com/questions/34709765/cheerio-how-to-select-element-by-text-content',function(err,res,html){
    var x = cheerio.load(html)
    //console.log(x.html())
    console.log(x(this).text())
});