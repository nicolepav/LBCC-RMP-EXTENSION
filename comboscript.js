// COMBO SCRIPT
// 04-21-19 Beachhacks
// Scrapes LBCC, then scrapes Rate My Professor

var JSSoup = require('jssoup').default;
var urllib = require('urllib');
// src='bundle.js';
// var JSSoup = require('./dependencies/jssoup');
// var urllib = require('./dependencies/urllib');

// Function
var getHtmlString = async function(url)
{   
    const promise = new Promise(resolve => {
        urllib.request(url, (err, data) => {
            resolve(data)
        })
    })
    return promise
}

// BLAIR
// var soup = new JSSoup(document.body);  // Parsing current page (class details)
// allLinks = soup.findAll('a'); // All <a> tags from body

// profNames = [];
// for (var i = 0; i < allLinks.length; i++) // Iterate through <a> tags
// {
//     link = allLinks[i].attrs.href;
//     name = allLinks[i].text;
//     // Ensure that link is to phonebook and name is not a duplicate
//     if (link.startsWith('https://phonebook.lbcc.edu/phonedir/') && !profNames.includes(name)) {
//         profNames.push(name);
//     }
// }
// for (var i = 0; i < profNames.length; i++)
// {
//     profNames[i] = profNames[i].split(/[ ,]+/); // Split by whitespace
// }
// profNames = [ [ 'Han', 'J' ], [ 'Taylor', 'L' ] ];

var soup = new JSSoup(document.body);  // Parsing current page (class details)
allLinks = soup.findAll('a'); // All <a> tags from body

profileLinks = [];
for (var i = 0; i < allLinks.length; i++) // Iterate through <a> tags
{
    link = allLinks[i].attrs.href;
    // Ensure that link is to phonebook and is not a duplicate
    if (link.startsWith('https://phonebook.lbcc.edu/phonedir/') && !profileLinks.includes(link)) {
        profileLinks.push(link);
    }
}

var ratingpageURL;

// for each professor profile
for (i = 0; i < profileLinks.length; i++)
{
    getHtmlString(profileLinks[i]).then(data =>
    {
        var profileHTML = data.toString();

        var profileSoup = new JSSoup(profileHTML);

        var cell = profileSoup.find('td', {id:'emp0', class:'expand-me bold-text'});

        // find their rate my prof page
        // ratingpageURL = rmp.ratemyprofessorSearch(name[i]);
        searchpageURL = "https://www.ratemyprofessors.com/search.jsp?query=lbcc+" + profNames[i][0];
        getHtmlString(searchpageURL).then(data => 
        {
            var searchpageHTML = data.toString(); //gets html string to use with soup

            var rmpSearch = new JSSoup(searchpageHTML); //makes soup

            allLinks = rmpSearch.findAll('a'); //scraps all tags with <a>

            for(var i = 0; i < allLinks.length;i++) //filters for the url containing the rating page
            { 
                link = allLinks[i].attrs.href;
                if (link != undefined && link.startsWith('/ShowRatings'))
                {
                    break;
                }
            }
            ratingpageURL = "https://www.ratemyprofessors.com"+link;
            console.log(ratingpageURL);
            // scrape RMP page
            //passes the url for rating page
            getHtmlString(ratingpageURL).then(data =>
            {
                var rmpRatings = new JSSoup(data.toString());

                var ratings = rmpRatings.findAll('div', {class: 'grade'});

                var profInfo;

                for(var i = 0; i < ratings.length; i++)
                {
                    profInfo = ratings[i].getText("|");
                }

                list = [];
                str = '';
                var count = 0;

                for(var i = 0;i<profInfo.length;i++)
                {
                    if(profInfo[i]!= ' ' && profInfo[i]!='\n'&& list.length < 3)
                    {
                        while(profInfo[i]!=' ' && count < 3)
                        {
                            str += profInfo[i];
                            count++
                            i++
                        }
                        
                        count = 0;
                        list.push(str)
                        str = ''
                    }
                }
                console.log(list);

                //  // write object with
                //  var professorDetails = 
                //  {
                //     name = ' ',
                //     quality = 0.0,
                //     difficulty = 0.0
                // }
                
                // // pass object to Nicole
                // // pass all scraped qualities here
                // professorDetails.name = "Prof. " + name[i][0],
                // professorDetails.quality = list[0];
                // professorDetails.difficulty = list[2];
                
                    // inject object // 

                    // create the div element (outer container for prof box)
                    var professorbox = document.createElement('div');
                    professorbox.id = name[i][0]; 
                    professorbox.className = "singleprof";

                        // create professor name as content for the prof box
                        professorbox.innerHTML = "fa=ncy prof name"; 

                    // create another div element (inner container for quality score)
                    var qBox = document.createElement('div');
                    qBox.className = "qBox";
                        
                        // create quality score as content for the qBox
                        qBox.innerHTML =  5.0;

                    // create another div element (inner containter for difficulty score)
                    var dBox = document.createElement('div');
                    dBox.className = "dBox";

                        // create difficulty score as content for the dBox
                        dBox.innerHTML = 1.0;
                    
                    // nest the quality box & difficulty box inside the professor box
                    professorbox.append(qBox);
                    professorbox.append(dBox); 

                    // append the professor box to the html file
                    document.getElementById('proflist').append(professorbox);
            })             
        })
    })          
}

