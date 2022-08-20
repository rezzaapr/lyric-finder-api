const cheerio = require("cheerio")
const axios = require("axios")
const cfg = require("./scrape_cfg")

const search = function(title_song,callback){
    var baseurl = `${cfg.baseurl}${cfg.search_query}${title_song}`;
    let result;
    axios.get(baseurl)
    .then((response) => {
        let $ = cheerio.load(response.data);
        var finder = $("div.lf-list__cell.lf-list__meta").find("a");
        let result = finder.attr("href")
        let titlesong = finder.text()
        if (result == undefined){
            callback(false)
        }else{
            callback(result,titlesong)
        }
        
        
})

}

module.exports=search
