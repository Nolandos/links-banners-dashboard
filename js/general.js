function general () {

    document.querySelector('.links-container').addEventListener('click', (e) => {    
        removeRecord(e.target);
    });

    document.querySelector('.links-container').addEventListener('click', (e) => {    
        if(e.target.classList.contains('add-btn')) {
            document.querySelector('.popup-add-banners-wrapper').style.display = "flex";
          }
    });


/*FUNCTION FOR CHART*/

let ctx = document.getElementById('myChart').getContext('2d');
let signups = document.querySelector('#option-signups');
let ftd = document.querySelector('#ftd');
let earned = document.querySelector('#earned');


let chart = new Chart(ctx, {
    
    type: 'bar',
    data: {
       
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
     
        datasets: [{
            label: "Signups",
            
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
            hidden: false,
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
            hidden: false,
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
          
            hidden: true,
        }]
    },
    options: {
        legend: {
            display: false,
        },
        /* Change scope Axes 
        scales: {
            yAxes: [{
                     display: true,
                     stacked: true,
                     ticks: {
                         min: 0, // minimum value
                         max: 600, // maximum value
                         stepSize: 100
                     }
            }]
         }
         */
    },
});



/*LISTENERS FOR LEGEND CHART*/

signups.addEventListener('click', (e) => {
    toggleTab(0, signups);
});

ftd.addEventListener('click', (e) => {
    toggleTab(1, ftd);
});

earned.addEventListener('click', (e) => {
    toggleTab(2, earned);
});

/*FUNCTION FOR ON/OFF LABELS*/
function toggleTab(i, label) {
    if(chart.data.datasets[i].hidden === false) {
        chart.data.datasets[i].hidden = true;        
        label.classList.remove('option-active');
    } else if(chart.data.datasets[i].hidden === true) {
        chart.data.datasets[i].hidden = false;
        label.classList.add('option-active');
    } 
    chart.update();
}

}

general();