// click event listener on bell icon

// const notification = document.getElementsByClassName("bell-notify-container");

// notification.addEventListener('click', () => {
//     alert("Traffic activity has been updated");
// });

// create the html for the banner 

const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = 
`
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">x</p>
    </div>
`

// click event

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if(element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }
});

//---- chart.js ----

// traffic chart
const trafficCanvas = document.getElementById('traffic-chart');

let trafficData = {
    // this is the x-axis
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-7", "18-24", "25-31"],
    datasets: [{
        // this is the y-axis
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        // chart css
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxis: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }, 
    legend: {
        display: false
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

// daily chart
const dailyCanvas = document.getElementById('daily-chart');

let dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200 ,100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

let dailyOptions ={
    scales: {
        yAxis: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// doughnut chart
const mobileCanvas = document.getElementById('mobile-chart');

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]  
    }]
};

let mobileOptions = {
   legend: {
       position: 'right',
       labels: {
           boxwidth: 20,
           fontStyle: 'bold'
       }
   }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

//---- Messaging Section ----

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

// click event listener on send

send.addEventListener('click', () => {
    // ensure user and message fileds are filled out 
    if(user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if(user.value === "") {
        alert("Please fill out user field before sending")
    } else if(message.value === "") {
        alert("Please fill out message field before sending")
    } else {
        alert(`Message successfully sent to: ${user.value}`)
    }
});