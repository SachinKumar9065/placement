// Data for the bar graph (year-wise placement in B.Tech)
const barGraphData = [
    { year: 2018, placements: 1200 },
    { year: 2019, placements: 1500 },
    { year: 2020, placements: 1800 },
    { year: 2021, placements: 2100 },
    { year: 2022, placements: 2400 }
  ];
  
  // Data for the pie chart (placement distribution)
  const pieChartData = [
    { sector: "IT/Software", percentage: 40 },
    { sector: "Manufacturing", percentage: 30 },
    { sector: "Finance", percentage: 15 },
    { sector: "Consultancy", percentage: 10 },
    { sector: "Others", percentage: 5 }
  ];
  
  // Create the bar graph
  new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
      labels: barGraphData.map(data => data.year),
      datasets: [{
        label: "Placement in B.Tech (Year-wise)",
        data: barGraphData.map(data => data.placements),
        backgroundColor: "rgba(54, 162, 235, 0.5)"
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  // Create the pie chart
  new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
      labels: pieChartData.map(data => data.sector),
      datasets: [{
        label: "Placement Distribution",
        data: pieChartData.map(data => data.percentage),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(153, 102, 255, 0.5)"
        ]
      }]
    }
  });




  // Data for the bar graph (year-wise placement in ABES Engineering College)
const abesbarGraphData = [
    { year: 2018, placements: 100 },
    { year: 2019, placements: 120 },
    { year: 2020, placements: 150 },
    { year: 2021, placements: 180 },
    { year: 2022, placements: 200 }
  ];
  
  // Data for the pie chart (placement distribution)
  const abespieChartData = [
    { sector: "IT/Software", percentage: 40 },
    { sector: "Manufacturing", percentage: 30 },
    { sector: "Finance", percentage: 15 },
    { sector: "Consultancy", percentage: 10 },
    { sector: "Others", percentage: 5 }
  ];
  
  // Create the bar graph
  new Chart(document.getElementById("abesbarChart"), {
    type: "bar",
    data: {
      labels: abesbarGraphData.map(data => data.year),
      datasets: [{
        label: "Placement in ABES Engineering College (Year-wise)",
        data: abesbarGraphData.map(data => data.placements),
        backgroundColor: "rgba(54, 162, 235, 0.5)"
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  // Create the pie chart
  new Chart(document.getElementById("abespieChart"), {
    type: "pie",
    data: {
      labels: abespieChartData.map(data => data.sector),
      datasets: [{
        label: "Placement Distribution",
        data: abespieChartData.map(data => data.percentage),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(153, 102, 255, 0.5)"
        ]
      }]
    }
  });


  
  
  