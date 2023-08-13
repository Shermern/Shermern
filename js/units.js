
// function updateStatistics(scale) {
//   const statistics = [
//     { metricValue: 125, imperialValue: 275.58, unit: scale === 'imperial' ? 'lbs' : 'kg', percentage: 5.2, direction: 'up', exercise: 'Bench Press' },
//     { metricValue: 140, imperialValue: 308.65, unit: scale === 'imperial' ? 'lbs' : 'kg', percentage: 2.0, direction: 'down', exercise: 'Squat' },
//     { metricValue: 150, imperialValue: 330.69, unit: scale === 'imperial' ? 'lbs' : 'kg', percentage: 10.0, direction: 'up', exercise: 'Deadlift' },
//     { metricValue: 53.52, imperialValue: 33.25, unit: scale === 'imperial' ? 'miles' : 'km', percentage: 13.6, direction: 'down', exercise: 'Longest Continuous Run' },
//     // Add similar entries for other statistics
//   ];

//   statistics.forEach((stat, index) => {
//     const element = document.getElementById(`stat-${index}`);
//     const value = scale === 'imperial' ? stat.imperialValue : stat.metricValue;
//     element.querySelector('.stats-amount h3').textContent = `${value.toFixed(2)}${stat.unit}`;
//     element.querySelector('.sub-heading').textContent = stat.exercise;
//     element.querySelector('.inc-dec-percentage small').textContent = `${stat.direction === 'up' ? '↑' : '↓'} ${stat.percentage}%`;
//   });
// }

// // Toggle button click event handler
// const toggleButton = document.getElementById('toggleButton');
// toggleButton.addEventListener('click', function () {
//   const currentScale = document.body.classList.contains('imperial') ? 'imperial' : 'metric';
//   const newScale = currentScale === 'metric' ? 'imperial' : 'metric';

//   document.body.classList.toggle('imperial');
//   updateStatistics(newScale);
// });

// function updateStatistics(scale) {
//   const statistics = [
//       { metricValue: 125, imperialValue: 275, unit: scale === 'imperial' ? 'lbs' : 'kg', exercise: 'Bench Press' },
//       { metricValue: 140, imperialValue: 308, unit: scale === 'imperial' ? 'lbs' : 'kg', exercise: 'Squat' },
//       { metricValue: 150, imperialValue: 330, unit: scale === 'imperial' ? 'lbs' : 'kg', exercise: 'Deadlift' },
//       { metricValue: 53.52, imperialValue: 33.25, unit: scale === 'imperial' ? 'miles' : 'km', exercise: 'Longest Continuous Run' }
//   ];

//   statistics.forEach((stat, index) => {
//       const element = document.getElementById(`stat-${index}`);
//       const value = scale === 'imperial' ? stat.imperialValue : stat.metricValue;
//       element.querySelector('.stats-amount h3').textContent = `${value.toFixed(2)}${stat.unit}`;
//       element.querySelector('.sub-heading').textContent = stat.exercise;
//   });
// }

// const toggleButton = document.getElementById('toggleButton');
// toggleButton.addEventListener('click', function () {
//   const currentScale = document.body.classList.contains('imperial') ? 'imperial' : 'metric';
//   const newScale = currentScale === 'metric' ? 'imperial' : 'metric';

//   document.body.classList.toggle('imperial');
//   updateStatistics(newScale);
// });


function updateStatistics(scale) {
    const statistics = [
        { metricValue: 125, imperialValue: 276, unit: scale === 'imperial' ? ' lbs' : ' kg', exercise: 'Bench Press' },
        { metricValue: 140, imperialValue: 309, unit: scale === 'imperial' ? ' lbs' : ' kg', exercise: 'Squat' },
        { metricValue: 150, imperialValue: 331, unit: scale === 'imperial' ? ' lbs' : ' kg', exercise: 'Deadlift' },
        { metricValue: 53.52, imperialValue: 33.25, unit: scale === 'imperial' ? ' mi' : ' km', exercise: 'Longest Continuous Run' }
    ];

    statistics.forEach((stat, index) => {
        const element = document.getElementById(`stat-${index}`);
        const value = Math.round(scale === 'imperial' ? stat.imperialValue : stat.metricValue);
        element.querySelector('.stats-amount h3').textContent = `${value}${stat.unit}`;
        element.querySelector('.sub-heading').textContent = stat.exercise;
    });
}

const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', function () {
    const currentScale = document.body.classList.contains('imperial') ? 'imperial' : 'metric';
    const newScale = currentScale === 'metric' ? 'imperial' : 'metric';

    document.body.classList.toggle('imperial');
    updateStatistics(newScale);

    toggleButton.textContent = `${newScale === 'imperial' ? 'Metric' : 'Imperial'}`;
});






