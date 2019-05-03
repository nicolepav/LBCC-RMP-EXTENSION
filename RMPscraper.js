var cheerio = require('./node_modules/cheerio');

//Takes hmtl as string, returns url to professor profile
getGoogleLinks = function(htmlString){

  //loads hmtl into cheerio 
  var search = cheerio.load(htmlString); 

  //gets prof name
  var link = search("div#search").find('a').attr('href');

  if(link == undefined)
    return 0;
  
  link = link  .replace('&',' ').replace('=',' ').replace('%3','').replace('%3','').replace('F','?').replace('D','=').split(' ');

  return link[1];

}

//Takes hmtl as string, prints ratings from rmp
getRmpProfRatings = function(htmlString, doc){

  //div.r .find(a)

  //loads html into cheerio
  var search = cheerio.load(htmlString);

  //gets the quality of professor
  var qual = search("div.breakdown-container.quality").find("div.grade").text();

  //gets the difficulty of professor
  var diff = search("div.breakdown-section.difficulty").find("div.grade").text().trim();

  //gets prof name 
  var profName = search("span.pfname").text() + ' ' + search("span.plname").text();

  //prep return obj
  var data = {
    name: profName,
    quality: qual,
    difficulty: diff,
  };

  doc(data);
  console.log(data)

}

//takes htmlString from the lbcc schedule & returns a list of professor name
getLbccProfList = function(htmlString){
  
  //makes a cheerio from htmlString ;)
  var search = cheerio.load(htmlString);

  //delcare vars for loop
  var profNameList = []; 
  var i = 0 ;

  //This loop iterate through the rows on the lbcc website
  do{

    i++;

    //append i to 'tr#row' to select a row on the lbcc website
    var selector =('tr#row'+i); 

    //get a list of professor name [Last, Middle, First Initial]
    var profName =search(selector).children().last().text().trim().replace(',','').split(' ');
    
    //Pushes to list if name is found, if not break
    if(profName == '')
      break;

    profNameList.push(profName);
  
  }while(true);

  //for debug, take out when done
  console.log(profNameList);

  return profNameList;

}

testBed =  function(url,func){
  request({
    uri : url,
  },function(error,response,htmlString){
    func(htmlString)
  })
}

