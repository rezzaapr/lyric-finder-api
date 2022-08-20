

const express = require('express');
const app = express();
const fs = require('fs');
const path = require("path");
const cheerio = require("cheerio")
const axios = require("axios")
const search = require("./src/scripts/search")
const cfg = require ("./src/scripts/scrape_cfg")

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});
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
