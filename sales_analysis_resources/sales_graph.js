/*
  Javascript file for sales analysis that utilizes a combination of JavaScript, Vue.js, and jQuery
*/

// Vue object that allows user to decide what sales graph should be displayed
//    - if yearly, a range of years is needed
//    - if monthly or seasonal, a specific year is needed
var vueChartSales = new Vue({
  el: "#showChart",
  data: {
    yearlyRangeUpper: 0,
    yearlyRangeLower: 0,
    specificYear: 0
  },
  methods: {
    yearly: function() {
      google.charts.load('current', {'packages' : ['corechart']});
      google.charts.setOnLoadCallback(driverFuncYearly);
      
      function driverFuncYearly() {
        dataChartYearly(this.yearlyRangeLower.value, this.yearlyRangeUpper.value);
      };
      
    },
    monthly: function() {
      google.charts.load('current', {'packages' : ['corechart']});
      google.charts.setOnLoadCallback(driverFuncMonthly);
      
      function driverFuncMonthly() {
        dataChartMonthly(this.specificYear.value);
      }
    },
    seasonal: function() {
      google.charts.load('current', {'packages' : ['corechart']});
      google.charts.setOnLoadCallback(driverFuncSeasonal);
      
      function driverFuncSeasonal() {
        dataChartSeasonal(this.specificYear.value);
      }
    }
  }
});

// Creates a chart that shows yearly company sales of specified year range in a line-chart format
function dataChartYearly(startYear, endYear) {
  var data_array = [
    ['Year', 'Sales'],
    ['2004',  1000],
    ['2005',  1170],
    ['2006',  660],
    ['2007',  1030],
    ['2008',  2000],
    ['2009',  3000]
  ];
  
  var data = google.visualization.arrayToDataTable(data_array);
  
  var options = {
    title: "Company Sales Yearly (" + startYear + " - " + endYear + ")",
    curveType: "function",
    width: 1000,
    height: 500,
    legend: 'none',
    hAxis: {
      title: "Period"
    },
    vAxis: {
      title: "Income($)"
    }
  };
  
  var chart = new google.visualization.LineChart(document.getElementById("dataLineChart"));
  
  chart.draw(data, options);
}

// Creates a chart that shows monthly company sales of specified year in a line-chart format
function dataChartMonthly(year) {
  var data_array = [
    ['Month', 'Sales'],
    ['January',  1000],
    ['February',  1170],
    ['March',  660],
    ['April',  1030],
    ['May',  2000],
    ['June',  4000],
    ['July',  3000],
    ['August',  1100],
    ['September',  3000],
    ['October',  2200],
    ['November',  3000],
    ['December',  1500]
  ];
  
  var data = google.visualization.arrayToDataTable(data_array);
  
  var options = {
    title: "Company Sales Monthly (" + year + ")",
    curveType: "function",
    width: 1000,
    height: 500,
    legend: 'none',
    hAxis: {
      title: "Period"
    },
    vAxis: {
      title: "Income($)"
    }
  };
  
  var chart = new google.visualization.LineChart(document.getElementById("dataLineChart"));
  
  chart.draw(data, options);
}

// Creates a chart that shows seasonal company sales of specified year in a line-chart format
function dataChartSeasonal(year) {
  var data_array = [
    ['Year', 'Sales'],
    ['Winter',  1000],
    ['Spring',  1170],
    ['Summer',  660],
    ['Fall',  1030]
  ];
  
  var data = google.visualization.arrayToDataTable(data_array);
  
  var options = {
    title: "Company Sales Seasonal (" + year + ")",
    curveType: "function",
    width: 1000,
    height: 500,
    legend: 'none',
    hAxis: {
      title: "Period"
    },
    vAxis: {
      title: "Income($)"
    }
  };
  
  var chart = new google.visualization.LineChart(document.getElementById("dataLineChart"));
  
  chart.draw(data, options);
}