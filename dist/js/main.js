"use strict";

// import Highcharts from 'highcharts';
// import Exporting from 'highcharts/modules/exporting';
// Exporting(Highcharts);
// console.log(Highcharts);
Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var myChart = Highcharts.chart('chart-container', {
    chart: {
      type: 'variwide',
      styledMode: true,
      spacingBottom: 25,
      spacingRight: 100,
      marginLeft: 40
    },
    title: {
      text: null
    },
    series: [{
      data: [["6/1/1932 – 3/6/1937", 324.5, 57.2], ["4/29/1942 – 5/29/1946", 157.7, 49.0], ["6/14/1949 – 8/2/1956", 266.3, 85.6], ["10/22/1957 – 12/12/1961", 86.4, 49.7], ["6/27/1962 – 2/9/1966", 79.8, 43.5], ["10/7/1966 – 11/29/1968", 48.0, 25.8], ["5/26/1970 – 1/11/1973", 73.5, 31.5], ["10/3/1974 – 11/28/1980", 125.6, 73.9], ["8/12/1982 – 8/25/1987", 228.8, 56.5], ["12/4/1987 – 7/16/1990", 64.8, 31.4], ["10/11/1990 – 3/24/2000", 417.0, 113.5], ["10/9/2002 – 10/9/2007", 101.5, 56.0], ["3/9/2009 – present", 340.4, 124.0]]
    }],
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          // useHTML: true,  
          format: '{point.z:,.0f}',
          allowOverlap: true,
          verticalAlign: 'top',
          align: 'center'
        },
        pointPadding: .05
      }
    },
    legend: {
      enabled: false
    },
    xAxis: {
      title: {
        text: 'Duration of bull market, in months',
        align: 'low'
      },
      type: 'category',
      labels: {
        enabled: false,
        overflow: 'allow',
        padding: 20,
        style: {
          whiteSpace: 'wrap'
        }
      }
    },
    yAxis: {
      title: false,
      labels: {
        useHTML: true,
        overflow: 'allow'
      }
    },
    credits: {
      enabled: false
    },
    tooltip: {
      shadow: false,
      padding: 10,
      pointFormat: '<b>Total growth:</b> {point.y:.1f}%<br>' + '<b>Duration:</b> {point.z} months<br>'
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            spacingRight: 10
          },
          legend: {
            align: 'left',
            x: -18
          },
          tooltip: {
            enabled: false
          }
        }
      }]
    }
  });
});