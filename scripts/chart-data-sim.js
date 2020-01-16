var serviceChart = document.getElementById('typeChart').getContext('2d');
var chart = new Chart(typeChart, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Generic spreadsheet', 'Budget app/software', 'By hand', 'Other', 'All of the above'],
        datasets: [{
            label: 'What tools do you use to budget?',
            backgroundColor: ['rgb(51, 102, 204)',
            'rgb(220, 57, 18)',
            'rgb(255, 153, 0)',
            'rgb(101, 169, 0)',
            'rgb(153, 0, 153)',
          ],
            borderColor: ['rgb(51, 102, 204)',
            'rgb(220, 57, 18)',
            'rgb(255, 153, 0)',
            'rgb(101, 169, 0)',
            'rgb(153, 0, 153)',
          ],
            data: [7, 3, 7, 1, 1]
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      },
    }
});

var useChart = document.getElementById('useChart').getContext('2d');
var chart = new Chart(useChart, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Yes', 'No', 'Maybe'],
        datasets: [{
            label: 'Would you consider using a budget app or software?',
            backgroundColor: ['rgb(255, 153, 0)',
            'rgb(219, 56, 17)',
            'rgb(51, 102, 204)'
          ],
            borderColor: ['rgb(255, 153, 0)',
            'rgb(219, 56, 17)',
            'rgb(51, 102, 204)'
          ],
            data: [6, 2, 8]
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      },
    }
});
