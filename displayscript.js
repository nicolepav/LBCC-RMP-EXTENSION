// // example object
var request = require('./node_modules/request');


var doc = function(data){

  // outermost box (the one with dropshadow)
  var professorbox = document.createElement('div');
  professorbox.className = "singleprof";


  var organizationTable = document.createElement("TABLE");
  organizationTable.className = "tableclass";
  var row1 = organizationTable.insertRow(0);  // [score] row
  var row2 = organizationTable.insertRow(1);  // score row
  var cell1 = row2.insertCell(0);             // quality cell
  var cell2 = row2.insertCell(1);             // difficulty cell


  // create box to hold the name
  var professorNameBox =  document.createElement('div');
  professorNameBox.className = "namebox";
  professorNameBox.innerHTML = data.name; 

  // color coding
  var classN = '';
  if (data.quality > 3.5 ){
    classN = "good";
  }
  else if (data.quality > 2.5) {
    classN = "average";
  }
  else{
    classN = "bad";
  }

  // create another div element (inner container for quality score)
  var qBox = document.createElement('div');
  qBox.className = classN;
  qBox.innerHTML = 'Q: ' + data.quality;
  cell1.append(qBox);

  // create another div element (inner containter for difficulty score)
  var dBox = document.createElement('div');
  dBox.className = "dBox";
  dBox.innerHTML = 'D: ' + data.difficulty;
  cell2.append(dBox);
  
  // append the professor box to the html file
  document.getElementById('proflist').append(professorbox);
  professorbox.append(professorNameBox);
  professorbox.append(organizationTable);
}
// end Nicole's section

var url = 'https://apps.lbcc.edu/schedule/scheduleDetail.cfm?term=1625&courseID=000848&semester=FALL&Descr=Second%20Calculus%20Course&strAction=&campus=&subject=MATH&catalog_nbr=70';

request({
  uri : url,
},function(error,response,htmlString){

  profList = getLbccProfList(htmlString)
  for(var i = 0 ; i<profList.length ; i++){
    var link = 'https://www.google.com/search?&q='+ profList[i][0] + profList[i][1] +"+RMP+"+"lbcc";

    request({
      uri: link
    },function(error,response,htmlString){

      var rmpLink =  getGoogleLinks(htmlString)

      if(rmpLink.includes('http://'))
        request({
          uri: rmpLink
        },function(error,response,htmlString){

          getRmpProfRatings(htmlString,doc)

        })

    })

  }

})