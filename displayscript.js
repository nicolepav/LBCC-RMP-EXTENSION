// // example object
var request = require('./node_modules/request');


var doc = function(data){
    var professorbox = document.createElement('div');
    professorbox.id = data; 
    professorbox.className = "singleprof";

        // create professor name as content for the prof box
        let str = '';
        str += data.name + '\n\n'; 
        professorbox.innerHTML = str; //put nothing here, inner HTML will be more divs?

    // create another div element (inner container for quality score)
    var qBox = document.createElement('div');
    qBox.className = "qBox";
        
        // create quality score as content for the qBox
        var qstr = "";
        qstr += 'Q: ' + data.quality;
        qBox.innerHTML = qstr;

    // create another div element (inner containter for difficulty score)
    var dBox = document.createElement('div');
    dBox.className = "dBox";

        // create difficulty score as content for the dBox
        let dstr = '';
        dstr += 'D: ' + data.difficulty;
        dBox.innerHTML = dstr;
    

    // append the professor box to the html file
    document.getElementById('proflist').append(professorbox);

        // nest the quality box & difficulty box inside the professor box
        professorbox.append(qBox);
        professorbox.append(dBox); 
}

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