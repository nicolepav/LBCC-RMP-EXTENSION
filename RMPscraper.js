var cheerio = require('cheerio')
var urllib = require('urllib')



//Takes hmtl as string, returns url to professor profile
var getRmpProfLink = function(htmlString){

  //loads hmtl into cheerio 
  var search = cheerio.load(htmlString); 
 
  //finds the link and appends to base url
  var link = 'https://www.ratemyprofessors.com' + search('li.listing.PROFESSOR').find("a").attr("href");

  console.log(link)

  return link;

}


//Takes hmtl as string, prints ratings from rmp
var getRmpProfRatings = function(htmlString){

  //loads html into cheerio
  var search = cheerio.load(htmlString);

  //finds the quality of professor
  var quality = search("div.breakdown-container.quality").find("div.grade").text();

  //finds the difficulty of professor
  var difficulty = search("div.breakdown-section.difficulty").find("div.grade").text().trim();

  console.log(quality);

  console.log(difficulty);

}

//url going to be given from blairs stuff
const url = 'https://www.ratemyprofessors.com/search.jsp?query=lbcc+ryan+carroll';

//request the html file of the search page
urllib.request(url, (err, rmpSeachHtml) => {

    //grabs the url of the profile page
    var profLink = getRmpProfLink(rmpSeachHtml.toString());

    //request the html file of the profile page
    urllib.request(profLink,(err,rmpProfHtml) => {
      
      //prints the ratings
      getRmpProfRatings(rmpProfHtml.toString());

    })
})