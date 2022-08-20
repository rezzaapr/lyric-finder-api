// load the things we need
var express = require('express');
var app = express();
var fs = require('fs');
const cheerio = require("cheerio")
const axios = require("axios")
const search = require("./src/scripts/search")
const cfg = require ("./src/scripts/scrape_cfg")
// set the view engine to ejs

app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('pages/index', {
        
    });
});
// about page
app.get('/api/lyric', function(req, res) {
    const query = req.query.q
    search(query,function (result,titlesong){
    if(result == false){
        res.json({
            "status":false,
            "response":"sorry lyric not found"
            
        })
    }else{
        axios.get(`${cfg.baseurl}${result}`)
        .then((response) => {
            let $ = cheerio.load(response.data)
            var root_element = $("div.wrapper.large_wrapper")
            var result = root_element.find("div.lyrictxt.js-lyrics.js-share-text-content")
            var album_img = root_element.find("div.lf-album__left > img")
            var title = root_element.find("div.lf-hero__item > h2 ")
            var artist = root_element.find("div.lf-hero__item > h2 > a")
            var albums = root_element.find("div.lf-hero__subtitle > a")
            res.json({
                "status":true,
                "response":{
                    "song_info": {
                        "artist":artist.text(),
                        "title":title.text(),
                        "album_name":albums.text(),
                        "album_img": album_img.attr("src")
                    },
                    "lyrics":result.text()
                }
            })
            
        })
        
    }
})

    
    
 
    
});

app.listen(8080);
console.log('8080 is the magic port');
