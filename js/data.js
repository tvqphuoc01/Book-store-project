/* eslint-disable max-len */
const ctx = document.getElementById('myChart').getContext('2d');
const ctx2 = document.getElementById('myChart2').getContext('2d');
const ctx3 = document.getElementById('myChart3').getContext('2d');

const userData = usersData; // Load Data from Locals var
const bookData = booksData; // Load Book Data
console.log(bookData);
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [{
      label: 'Number of Orders in a Week',
      data: [12, 19, 3, 5, 2, 3, 12],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(56, 235, 76, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(39, 226, 0, 1)',
      ],
      borderWidth: 1,
    }],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});


const myChart2 = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: [
      'Red',
      'Blue',
      'Yellow',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
      hoverOffset: 4,
    }],
  },
});

const myChart3 = new Chart(ctx3, {
  type: 'doughnut',
  data: {
    labels: [
      'Prepare',
      'Delivery',
      'Done',
    ],
    datasets: [{
      label: 'Order Status',
      data: [18, 23, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
      hoverOffset: 4,
    }],
  },
});


myChart2.canvas.parentNode.style.height = '500px';
myChart2.canvas.parentNode.style.width = '400px';
myChart3.canvas.parentNode.style.height = '500';
myChart3.canvas.parentNode.style.width = '400px';

