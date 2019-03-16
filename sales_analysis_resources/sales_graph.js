google.charts.load('current', {'packages' : ['corechart']});
google.charts.setOnLoadCallback(dataChart);

function dataChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales'],
    ['2004',  1000],
    ['2005',  1170],
    ['2006',  660],
    ['2007',  1030],
    ['2008',  2000],
    ['2009',  3000]
  ]);
  
  var options = {
    title: "Company Sales",
    curveType: "function"
  };
  
  var chart = new google.visualization.LineChart(document.getElementById("data_line_chart"));
  
  chart.draw(data, options);
}