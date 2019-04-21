// example object
const data = {
    name: 'Prof. Examples',
    quality: 5.0,
    difficulty: 3.3,
};

// array of objects that is fed to the 
const arr = [data, data, data, data, data, data, data, data];

// create a professor block for each item in the array
for (i = 0; i < arr.length; i++) 
{

    // create the div element (outer container for prof box)
    var professorbox = document.createElement('div');
    professorbox.id = arr[i]; 
    professorbox.className = "singleprof";

        // create professor name as content for the prof box
        let str = '';
        str += arr[i].name + '\n'; 
        professorbox.innerHTML = str; //put nothing here, inner HTML will be more divs?

    // create another div element (inner container for quality score)
    var qBox = document.createElement('div');
    qBox.className = "qBox";
        
        // create quality score as content for the qBox
        let qstr = '';
        qstr += 'Q: ' + arr[i].quality.toFixed(1);
        qBox.innerHTML = qstr;

    // create another div element (inner containter for difficulty score)
    var dBox = document.createElement('div');
    dBox.className = "dBox";

        // create difficulty score as content for the dBox
        let dstr = '';
        dstr += 'D: ' + arr[i].difficulty.toFixed(1);
        dBox.innerHTML = dstr;
    
    // nest the quality box & difficulty box inside the professor box
    professorbox.append(qBox);
    professorbox.append(dBox); 

    // append the professor box to the html file
    document.getElementById('proflist').append(professorbox);
} 