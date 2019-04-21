// example object
const data = {
    name: 'Professor RealGood',
    quality: 5.0,
    difficulty: 3.3,
};

const data2 = {
    name: 'Professor HeckNoWay',
    quality: 1.0,
    difficulty: 4.3,
};

const data3 = {
    name: 'Professor Mediocre',
    quality: 3.0,
    difficulty: 3.0
}

const data4 = {
    name: 'Professor KindaAverage',
    quality: 3.4,
    difficulty: 2.7
}

const data5 = {
    name: 'Professor Likeable',
    quality: 3.7,
    difficulty: 0.2
}

// array of objects that is fed to the 
const arr = [data, data2, data3, data4, data5];

// create a professor block for each item in the array
for (i = 0; i < arr.length; i++) 
{

    // create the div element (outer container for prof box)
    var professorbox = document.createElement('div');
    professorbox.id = arr[i]; 
    professorbox.className = "singleprof";

        // create professor name as content for the prof box
        let str = '';
        str += arr[i].name + '\n\n'; 
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
    

    // append the professor box to the html file
    document.getElementById('proflist').append(professorbox);

        // nest the quality box & difficulty box inside the professor box
        professorbox.append(qBox);
        professorbox.append(dBox); 
    
} 
