/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const ctx = document.getElementById('myChart').getContext('2d');
const ctx4 = document.getElementById('myChart4').getContext('2d');

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

const myChart4 = new Chart(ctx4, {
  type: 'bar',
  data: {
    labels: ['January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'],
    datasets: [{
      label: 'Orders by Month',
      data: [12, 19, 3, 5, 2, 19, 12, 8, 10, 15, 23, 30],
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

myChart2.canvas.parentNode.style.height = '500px';
myChart2.canvas.parentNode.style.width = '400px';
myChart3.canvas.parentNode.style.height = '500px';
myChart3.canvas.parentNode.style.width = '400px';
myChart3.canvas.parentNode.style.height = '500px';
