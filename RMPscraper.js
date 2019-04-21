
var JSSoup = require('jssoup').default
var urllib = require('urllib')

//Rate my professor Search Url
//Takes a url, returns another

var ratemyprofessorSearch = function(name,i){
  htmlString = "https://www.ratemyprofessors.com/search.jsp?query=lbcc+" + name[0]+"+"+name[1];
  var rmpSearch = new JSSoup(htmlString);

  linkr = rmpSearch.findAll('a');
  for(var i = 0; i<linkr.length;i++){
     link = linkr[i].attrs.href;
      if (link != undefined && link.startsWith('/ShowRatings'))
        break;
  }

  return link = "https://www.ratemyprofessors.com"+link;
}

//Rate my professor Rating Page
//Takes url and returns list of ratings [Quality, Would take again, Difficulty]

var ratemyprofessorRating = function(htmlString,name1){

  var rmpRatings = new JSSoup(htmlString);

  var ratings = rmp.findAll('div', {class: 'grade'});

  for(var i = 0; i < ratings.length; i++){
   data = ratings[i].getText("|");
  }

  list = [];
  str = ''
  var count = 0;

    for(var i = 0;i<data.length;i++){
     if(data[i]!= ' ' && data[i]!='\n'&& list.length < 3){
    
      while(data[i]!=' ' && count < 3){
        str += data[i];
        count++
        i++
      }
      count = 0;
     list.push(str)
      str = ''
    }
    
  
  }
  var obj = {
    name: name1,
    quality: list[0],
    difficulty: list[2],
};
return obj;
}

var getHtmlString = async function(url)
{   
    const promise = new Promise(resolve => {
        urllib.request(url, (err, data) => {
            resolve(data.toString())
        })
    })
    return promise
}

var sum = getHtmlString("https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2093080").then(data => {
 // console.log(data.toString());
})

// This is asynchronous... 
// function processData(callback) {   
//   fetchDataInAFarAwayAndMysticDatabase(function (err, data) {     
//       if (err) {
//          return callback(err);
//       }     
//       data += 1;     
//       callback(null, data);   
//   }); 
// }

// function getHtmlString(url,callback) {
//   urllib.request(url,function(err,data){
//     callback(data);
//   })
//   return callback
// }

// function foo(address, fn){
//   geocoder.geocode( { 'address': address}, function(results, status) {
//      fn(results[0].geometry.location); 
//   });
// }

// foo("address", function(location){
//   alert(location); // this is where you get the return value
// });

// function urlToHtml(url, fn,str) {
//   urllib.request(url, function(err, data,str) {
//     fn(data,str);
//   });
// }

// varObj = {htmlstring: ''}
// str = []

// var thingy = urlToHtml("https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2093080", function(data,str) {
//   console.log(data.toString());
// })
profNames = [ [ 'Han', 'J' ], [ 'Taylor', 'L' ] ];
// pass the array to ruben

// RUBEN

// accept the array of names
var ratingpageURL;
console.log(profNames)
// for each name 
for (i = 0; i < profNames.length; i++){
    
    // find their rate my prof page
    // ratingpageURL = rmp.ratemyprofessorSearch(name[i]);
    searchpageURL = "https://www.ratemyprofessors.com/search.jsp?query=lbcc+" + profNames[i][0]+"+"+profNames[i][1];
    getHtmlString(searchpageURL).then(data => 
    {
        var searchpageHTML = data.toString(); //gets html string to use with soup
        console.log(searchpageHTML)
        var rmpSearch = new JSSoup(searchpageHTML); //makes soup

        linkr = rmpSearch.findAll('a'); //scraps all tags with <a>

        for(var i = 0; i < linkr.length;i++)
        {
            link = linkr[i].attrs.href;
            if (link != undefined && link.startsWith('/ShowRatings')) 
                break;
        }

        ratingpageURL = "https://www.ratemyprofessors.com"+link;
        
        // scrape RMP page
        getHtmlString(ratingpageURL).then(data => {
            var rmpRatings = new JSSoup(data.toString());

            var ratings = rmpRatings.findAll('div', {class: 'grade'});

            for(var i = 0; i < ratings.length; i++)
            {
                data = ratings[i].getText("|");
            }

            list = [];
            str = '';
            var count = 0;

            for(var i = 0;i<data.length;i++)
            {
                if(data[i]!= ' ' && data[i]!='\n'&& list.length < 3)
                {
                    while(data[i]!=' ' && count < 3)
                    {
                        str += data[i];
                        count++
                        i++
                    }
                    
                    count = 0;
                    list.push(str)
                    str = ''
                }
            }

            // write object with
            var professorDetails = 
            {
                name,
                quality,
                difficulty
            }
            
            // pass object to Nicole
            // pass all scraped qualities here
            professorDetails.name = "Prof. " + profNames[i][0],
            professorDetails.quality = list[0];
            professorDetails.difficulty = list[2];
            
                // inject object // 

                // create the div element (outer container for prof box)
                var professorbox = document.createElement('div');
                professorbox.id = name[i][0]; 
                professorbox.className = "singleprof";

                    // create professor name as content for the prof box
                    professorbox.innerHTML = "professorDetails.name"; 

                // create another div element (inner container for quality score)
                var qBox = document.createElement('div');
                qBox.className = "qBox";
                    
                    // create quality score as content for the qBox
                    qBox.innerHTML =  professorDetails.quality;

                // create another div element (inner containter for difficulty score)
                var dBox = document.createElement('div');
                dBox.className = "dBox";

                    // create difficulty score as content for the dBox
                    dBox.innerHTML = professorDetails.difficulty;
                
                // nest the quality box & difficulty box inside the professor box
                professorbox.append(qBox);
                professorbox.append(dBox); 

                // append the professor box to the html file
                document.getElementById('proflist').append(professorbox);
                console.log("injection sucessful")



        })   
            
})  
        
}

