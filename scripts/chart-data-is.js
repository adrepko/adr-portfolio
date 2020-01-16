var serviceChart = document.getElementById('serviceChart').getContext('2d');
var chart = new Chart(serviceChart, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['SoundCloud', 'Google Drive', 'Spotify', 'Apple Music', 'None', 'Dropbox', 'Other'],
        datasets: [{
            label: 'What cloud storage service do you primarily use for music?',
            backgroundColor: ['rgb(51, 102, 204)',
            'rgb(220, 57, 18)',
            'rgb(255, 153, 0)',
            'rgb(101, 169, 0)',
            'rgb(153, 0, 153)',
            'rgb(0, 153, 198)',
            'rgb(214, 65, 115)'
          ],
            borderColor: ['rgb(51, 102, 204)',
            'rgb(220, 57, 18)',
            'rgb(255, 153, 0)',
            'rgb(101, 169, 0)',
            'rgb(153, 0, 153)',
            'rgb(0, 153, 198)',
            'rgb(214, 65, 115)'
          ],
            data: [1, 6, 5, 1, 2, 3, 5]
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
        labels: ['Use music services at least once a week', 'Do not use more than once a week'],
        datasets: [{
            label: 'How often do you use music services',
            backgroundColor: ['rgb(40, 95, 159)',
            'rgb(226,226,226'
          ],
            borderColor: ['rgb(40, 95, 159)',
            'rgb(226,226,226'
          ],
            data: [19, 3]
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      },
    }
});

var importChart = document.getElementById('importChart').getContext('2d');
var chart = new Chart(importChart, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['View exposure to new music as highly important', 'Do not view exposure to new music as important'],
        datasets: [{
            label: 'How important do you view exposure to new music and sounds?',
            backgroundColor: ['rgb(40, 95, 159)',
            'rgb(226,226,226'
          ],
            borderColor: ['rgb(40, 95, 159)',
            'rgb(226,226,226'
          ],
            data: [16, 6]
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      },
    }
});
