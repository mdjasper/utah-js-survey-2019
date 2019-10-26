const charts = []

charts.push({
  c: "job-titles-chart",
  d: {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Job titles'
    },
    xAxis: {
        categories: [
          "Junior Developer",
          "Mid-level Developer",
          "Senior Developer",
          "Team Lead",
          "Manager of People"
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Responses'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
      name: 'Job Titles',
      data: [38, 84, 56, 16, 6],
      colorByPoint: true,
      dataLabels: {
        enabled: true,
        rotation: -90,
        color: '#fff',
        align: 'right',
        format: '{point.y:.1f}', // one decimal
        y: 10, // 10 pixels down from the top
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    }]
  }
})

charts.push({
  c: "job-titles-experience",
  d:{

    chart: {
      type: 'boxplot'
    },

    title: {
      text: 'Experience by Job Title'
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: ['Junior', 'Mid-level', 'Senior', 'Team Lead', 'People Manager'],
      title: {
        text: 'Job titles'
      }
    },

    yAxis: {
      title: {
        text: 'Years of Experience'
      },
      min: 0,
      max: 40
    },

    series: [{
      name: 'Years of Experience',
      colorByPoint: true,
      data: [
        [0, 1, 1.273684211, 2, 3],
        [0, 2, 3.446428571, 4, 12],
        [3, 5, 9.852631579, 12, 20],
        [1.5, 5, 10.65625, 12.75, 20],
        [7, 9.75, 13.33333333, 14.5, 24]
      ],
      tooltip: {
        headerFormat: '<em>Job Title: {point.key}</em><br/>'
      }
    }, {
      name: 'Outlier',
      color: Highcharts.getOptions().colors[0],
      type: 'scatter',
      data: [ // x, y positions where 0 is the first category
        [2, 40],
        [3,35]
      ],
      marker: {
        fillColor: 'white',
        lineWidth: 1,
        lineColor: Highcharts.getOptions().colors[0]
      },
      tooltip: {
        pointFormat: '{point.y} years'
      }
    }
  ]}
})

charts.push({
  c: "overall-experience",
  d: {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Overall Experience'
    },
    subtitle: {
      text: 'Bucketed by 1 year'
  },
    yAxis: {
        title: {
            text: 'Experience in years'
        },

    },
    series: [{
        name: 'Survey Responses',
        data: [
          6,34,28,31,25,21,6,6,15,3,6,2,7,3,1,5,1,0,0,1,6,2,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1
        ]
    }]
}
})

charts.push({
  c: "overall-experience-5",
  d: {
    chart: {
        type: 'column'
    },
    // accessibility: {
    //     description: 'An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
    // },
    title: {
        text: 'Overall Experience'
    },
    subtitle: {
      text: 'Bucketed by 5 years'
  },
    xAxis: {
      categories:["0", "1-4", "5-9", "10-14", "15-19", "20-24", "25-29", "30-34", "35-39", "40+"]
    },
    yAxis: {
        title: {
            text: 'Experience in years'
        },

    },
    series: [{
        name: 'Survey Responses',
        data: [
          6,133,36,18,8,3,0,1,2
        ]
    }]
}
})

charts.push({
  c: "gender",
  d: {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Gender'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },
            // showInLegend: true
        }
    },
    series: [{
        name: 'Responses',
        colorByPoint: true,
        data: [
        //   {
        //     name: 'Chrome',
        //     y: 61.41,
        //     sliced: true,
        //     selected: true
        // },
         {
            name: 'Male',
            y: 184
        }, {
            name: 'Female',
            y: 17
        }, {
            name: 'Other',
            y: 6
        }]
    }]
}
})

charts.push({
  c: "gender-comparison",
  d: {
    chart: {
        type: 'column'
    },
    title: {
        text: '2018-19 gender comparison'
    },
    xAxis: {
        categories: [
            'Male',
            'Female',
            'Other'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percent of responses'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: '2018',
        data: [86.6, 10.31, 3.09]

    }, {
        name: '2019',
        data: [88.9, 8.2, 2.9]

    }]
}
})

charts.push({
  c: "total-comp-with-nones",
  d:{

    chart: {
      type: 'boxplot'
    },

    title: {
      text: 'Total Compensation'
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: ['All Responses', 'Currently Employed Only'],
      title: {
        text: 'Compensation'
      }
    },

    yAxis: {
      title: {
        text: 'Years of Experience'
      },
      min: 0
    },

    series: [{
      name: 'Years of Experience',
      colorByPoint: true,
      data: [
        [1,75000,98903,117500,225000],
        [30000, 75000,100852,119000,225000],
      ],
      tooltip: {
        headerFormat: '<em>Job Title: {point.key}</em><br/>'
      }
    }
  ]}
})

charts.push({
  c: "total-comp-by-experience",
  d: {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    // accessibility: {
    //     description: 'A scatter plot compares the height and weight of 507 individuals by gender. Height in centimeters is plotted on the X-axis and weight in kilograms is plotted on the Y-axis. The chart is interactive, and each data point can be hovered over to expose the height and weight data for each individual. The scatter plot is fairly evenly divided by gender with females dominating the left-hand side of the chart and males dominating the right-hand side. The height data for females ranges from 147.2 to 182.9 centimeters with the greatest concentration between 160 and 165 centimeters. The weight data for females ranges from 42 to 105.2 kilograms with the greatest concentration at around 60 kilograms. The height data for males ranges from 157.2 to 198.1 centimeters with the greatest concentration between 175 and 180 centimeters. The weight data for males ranges from 53.9 to 116.4 kilograms with the greatest concentration at around 80 kilograms.'
    // },
    title: {
        text: 'Total Compensation by Years of Experience'
    },
    subtitle: {
        text: 'Sum of salary, liquid equity, and cash bonuses'
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Years of experience'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
        min:0,
        max:40
    },
    yAxis: {
        title: {
            text: 'Total Compensation'
        }
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 3,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} years, ${point.y}'
            }
        }
    },
    series: [{
        name: 'Responses',
        color: 'rgba(223, 83, 83, .5)',
        data: [[15,115000],[3.5,90000],[5,105000],[12,107000],[8,111000],[4,75000],[13,151000],[3,100000],[10,143943],[9,145000],[3,92000],[2.5,80000],[4,93600],[13,126000],[1,150000],[12,170000],[4.5,131000],[5,80000],[1,72000],[3,85000],[3,78000],[21,140000],[3,140000],[1,74000],[1.5,65000],[6.5,153850],[2,68000],[3,87500],[4,180000],[10,100000],[2,67000],[1.5,60000],[1,50000],[3,72500],[3.5,118000],[5,139000],[8,110000],[4,112000],[9,90000],[4,114000],[5,135000],[2,72000],[8,116500],[3,94000],[6,126400],[3,77000],[3,84771],[1,55000],[1,75000],[3,83411.64],[5,135000],[4,120100],[15,138000],[4,111000],[2,77000],[13,175000],[4,104000],[1.5,98300],[11,200000],[1,78000],[2,60000],[2,102000],[5,130000],[2.5,97000],[2,113000],[3,50000],[1,85000],[5,171350],[12,95000],[5,135000],[19,188000],[6.5,113000],[8,106000],[2.5,80000],[11,38500],[2,90000],[8,130500],[36,100000],[1,72000],[1,70000],[4,82000],[5,144000],[3,85000],[2,75000],[5,85000],[4,96800],[14,207000],[15,140000],[3,75000],[2,114000],[6,105000],[2,71500],[5,225000],[5,80000],[5,93000],[2,75000],[4,100000],[40,170000],[1,87000],[1,40000],[4,114700],[16,107000],[4,99000],[7,87400],[5.6,109000],[4,95000],[1.5,72000],[7,100000],[1,57500],[1,80000],[3.5,70000],[4,87600],[3,73000],[20,112400],[0,57500],[5,111000],[8,110000],[3,80000],[10,110000],[1,75000],[5,2],[2,95000],[15,145000],[20,101000],[2,112000],[2.5,66500],[1,74000],[8,88000],[10,150000],[3,72000],[1,90000],[3,100000],[20,139000],[21,140000],[2,76000],[1,67000],[8,120000],[5,95000],[35,100001],[10,120010],[8,95000],[1,50000],[2,54000],[10,130000],[2,31000],[1,150000],[2,50000],[5,141000],[2.5,80000],[1,60000],[8,150000],[8,112000],[1.5,94000],[3,126000],[2,110000],[7,104000],[4,162000],[5,115000],[0,30000],[15,165000],[6,84000],[20,100000],[3,100000],[7,120750],[0,1],[0,1],[1.5,90000],[12,145000],[0.4,50000],[4,89000],[6,110000],[1.5,48000],[9,188000],[12,117000],[3,76000],[2,67500],[0.5,75000],[4,54000],[3,72000],[1,71500],[6,83000],[4,110000],[3,100000],[8,79900],[2.5,94000],[8,49500],[1,72000],[5,146990],[2,55000],[8,135000],[4,135000],[5,113000],[8,156000],[0.5,50000.1],[4,60000],[12,69300],[0.5,37542],[4,94000],[0,2],[20,104000],[3,75000],[1,85000],[20,180000],[12,70000],[0,70000],[24,170000],[3,80000]]

    }]
}
})

charts.push({
  c: "received-non-cash",
  d: {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Received Equity or a Bonus'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },
            slicedOffset: 20
        }
    },
    series: [{
        name: 'Responses',
        colorByPoint: true,
        data: [{
          name: 'Salary Only',
          y: 130
        }, {
          name: 'Received equity or a bonus',
          y: 78,
          sliced: true,

        }]
    }]
}
})

charts.push({
  c:"non-cash-comp",
  d:{
    chart: {
        type: 'column'
    },
    // accessibility: {
    //     description: 'An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
    // },
    title: {
        text: 'Liquid equity or cash bonus'
    },
    xAxis: {
      categories:["0-5k","5-10k","10-15k","15-20k","20-25k","25-30k","30-35k","35-40k","40-45k","45-50k","50-55k","55-60k","60-65k","65-70k","70-75k","75-80k","80-85k","85-90k","90-95k","95-100k"]
    },
    yAxis: {
        title: {
            text: 'Responses'
        },

    },
    series: [{
        name: 'Survey Responses',
        data: [13,6,5,4,4,0,3,1,1,0,1,0,1,0,0,1,0,0,1]
    }]
}
})

charts.push({
  c: "salary-by-gender",
  d: {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    // accessibility: {
    //     description: 'A scatter plot compares the height and weight of 507 individuals by gender. Height in centimeters is plotted on the X-axis and weight in kilograms is plotted on the Y-axis. The chart is interactive, and each data point can be hovered over to expose the height and weight data for each individual. The scatter plot is fairly evenly divided by gender with females dominating the left-hand side of the chart and males dominating the right-hand side. The height data for females ranges from 147.2 to 182.9 centimeters with the greatest concentration between 160 and 165 centimeters. The weight data for females ranges from 42 to 105.2 kilograms with the greatest concentration at around 60 kilograms. The height data for males ranges from 157.2 to 198.1 centimeters with the greatest concentration between 175 and 180 centimeters. The weight data for males ranges from 53.9 to 116.4 kilograms with the greatest concentration at around 80 kilograms.'
    // },
    title: {
        text: 'Salary by Experience'
    },
    subtitle: {
        text: 'Grouped by gender'
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Years of experience'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
        min:0,
        max:40
    },
    yAxis: {
        title: {
            text: 'Salary (base cash compensation)'
        }
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 3,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} years, ${point.y}'
            }
        }
    },
    series: [{
      name: 'Male',
      color: 'rgba(83, 83, 223, .5)',
      data: [[15,115000],[3.5,90000],[5,83000],[12,102000],[8,95000],[4,75000],[13,145000],[3,97000],[10,134286],[9,145000],[3,90000],[4,93600],[13,126000],[1,90000],[12,170000],[4.5,101000],[5,80000],[1,72000],[3,85000],[3,75000],[21,140000],[3,115000],[1.5,60000],[6.5,137000],[2,68000],[3,87500],[4,165000],[10,100000],[2,67000],[1.5,60000],[1,50000],[3,72500],[3.5,118000],[5,119000],[8,110000],[4,112000],[9,90000],[4,90000],[5,135000],[2,72000],[8,115000],[3,86000],[6,89100],[3,77000],[3,84771],[1,55000],[1,75000],[3,83411.64],[4,109200],[15,138000],[4,110000],[2,77000],[13,155000],[1.5,93800],[11,170000],[1,78000],[2,60000],[2,102000],[2.5,90000],[3,50000],[5,171350],[12,95000],[5,130000],[19,160000],[6.5,108000],[8,106000],[2.5,80000],[11,38500],[2,90000],[8,130000],[1,72000],[1,70000],[4,82000],[5,144000],[3,85000],[2,70000],[5,85000],[4,88000],[14,137000],[15,140000],[3,75000],[2,104000],[6,105000],[5,125000],[5,80000],[5,91000],[2,75000],[4,80000],[40,170000],[1,87000],[1,40000],[4,110700],[16,107000],[4,95000],[7,87400],[5.6,109000],[4,95000],[1,57500],[1,80000],[3.5,70000],[4,83600],[3,73000],[20,110000],[0,57500],[5,111000],[8,110000],[3,80000],[10,110000],[1,75000],[5,1],[2,90000],[15,145000],[20,100000],[2,102000],[2.5,66000],[1,72000],[8,88000],[10,150000],[3,72000],[1,90000],[3,100000],[20,127000],[21,140000],[2,76000],[1,67000],[8,115000],[5,95000],[8,95000],[1,42000],[2,54000],[10,130000],[2,31000],[1,110000],[2,50000],[5,141000],[1,60000],[8,145000],[1.5,94000],[3,120000],[2,110000],[7,100000],[4,81000],[15,165000],[6,84000],[20,100000],[3,90000],[7,120750],[0,1],[0,1],[1.5,90000],[12,145000],[0.4,50000],[4,89000],[6,110000],[1.5,48000],[12,106000],[3,75000],[2,67500],[0.5,75000],[4,54000],[3,72000],[6,80000],[4,110000],[8,79900],[2.5,94000],[8,48000],[1,72000],[5,110900],[2,55000],[8,135000],[4,130000],[5,105000],[8,151000],[0.5,50000],[4,60000],[0.5,37542],[4,94000],[0,1],[20,100000],[1,85000],[20,135000],[12,70000],[24,140000],[3,80000]]
    },{
      name: 'Female',
      color: 'rgba(223, 83, 83, 1)',
      data: [[2.5,80000],[1,60000],[5,135000],[4,91000],[5,105000],[2,103000],[1,85000],[1.5,72000],[2.5,80000],[8,112000],[0,30000],[9,138000],[1,65000],[3,100000],[12,69300],[3,75000],[0,65000]]
    },{
        name: 'Other',
        color: 'rgba(50, 200, 50, 1)',
        data: [[2,70000],[36,100000],[35,100000],[10,120000],[7,100000],[5,115000]]
    }]
  }
})

charts.push({
  c: "salary-by-gender-zoomed",
  d: {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    // accessibility: {
    //     description: 'A scatter plot compares the height and weight of 507 individuals by gender. Height in centimeters is plotted on the X-axis and weight in kilograms is plotted on the Y-axis. The chart is interactive, and each data point can be hovered over to expose the height and weight data for each individual. The scatter plot is fairly evenly divided by gender with females dominating the left-hand side of the chart and males dominating the right-hand side. The height data for females ranges from 147.2 to 182.9 centimeters with the greatest concentration between 160 and 165 centimeters. The weight data for females ranges from 42 to 105.2 kilograms with the greatest concentration at around 60 kilograms. The height data for males ranges from 157.2 to 198.1 centimeters with the greatest concentration between 175 and 180 centimeters. The weight data for males ranges from 53.9 to 116.4 kilograms with the greatest concentration at around 80 kilograms.'
    // },
    title: {
        text: 'Salary by Experience (partial/zoomed)'
    },
    subtitle: {
        text: 'Grouped by gender'
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Years of experience'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
        min:0,
        max:12
    },
    yAxis: {
        title: {
            text: 'Salary (base cash compensation)'
        }
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} years, ${point.y}'
            }
        }
    },
    series: [{
      name: 'Male',
      color: 'rgba(83, 83, 223, .5)',
      data: [[0,57500],[0,1],[0,1],[0,1],[0.4,50000],[0.5,75000],[0.5,50000],[0.5,37542],[1,90000],[1,72000],[1,50000],[1,55000],[1,75000],[1,78000],[1,72000],[1,70000],[1,87000],[1,40000],[1,57500],[1,80000],[1,75000],[1,72000],[1,90000],[1,67000],[1,42000],[1,110000],[1,60000],[1,72000],[1,85000],[1.5,60000],[1.5,60000],[1.5,93800],[1.5,94000],[1.5,90000],[1.5,48000],[2,68000],[2,67000],[2,72000],[2,77000],[2,60000],[2,102000],[2,90000],[2,70000],[2,104000],[2,75000],[2,90000],[2,102000],[2,76000],[2,54000],[2,31000],[2,50000],[2,110000],[2,67500],[2,55000],[2.5,90000],[2.5,80000],[2.5,66000],[2.5,94000],[3,90000],[3,97000],[3,85000],[3,75000],[3,115000],[3,87500],[3,72500],[3,86000],[3,77000],[3,84771],[3,83411.64],[3,50000],[3,85000],[3,75000],[3,73000],[3,80000],[3,72000],[3,100000],[3,120000],[3,90000],[3,75000],[3,72000],[3,80000],[3.5,90000],[3.5,118000],[3.5,70000],[4,75000],[4,93600],[4,165000],[4,112000],[4,90000],[4,109200],[4,110000],[4,82000],[4,88000],[4,80000],[4,110700],[4,95000],[4,95000],[4,83600],[4,81000],[4,89000],[4,54000],[4,110000],[4,130000],[4,60000],[4,94000],[4.5,101000],[5,80000],[5,83000],[5,119000],[5,135000],[5,171350],[5,130000],[5,144000],[5,85000],[5,125000],[5,80000],[5,91000],[5,111000],[5,1],[5,95000],[5,141000],[5,110900],[5,105000],[5.6,109000],[6,89100],[6,105000],[6,84000],[6,110000],[6,80000],[6.5,137000],[6.5,108000],[7,87400],[7,100000],[7,120750],[8,95000],[8,110000],[8,115000],[8,106000],[8,130000],[8,110000],[8,88000],[8,115000],[8,95000],[8,145000],[8,79900],[8,48000],[8,135000],[8,151000],[9,145000],[9,90000],[10,134286],[10,100000],[10,110000],[10,150000],[10,130000],[11,170000],[11,38500],[12,102000],[12,170000],[12,95000],[12,145000],[12,106000],[12,70000]]
    },{
      name: 'Female',
      color: 'rgba(223, 83, 83, 1)',
      data: [[0,30000],[0,65000],[1,60000],[1,85000],[1,65000],[1.5,72000],[2,103000],[2.5,80000],[2.5,80000],[3,100000],[3,75000],[4,91000],[5,105000],[5,135000],[8,112000],[9,138000],[12,69300]]
    },{
        name: 'Other',
        color: 'rgba(50, 200, 50, 1)',
        data: [[2,70000],[5,115000],[7,100000],[10,120000]]
    }]
  }
})

charts.push({
  c: "tc-by-gender",
  d: {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    // accessibility: {
    //     description: 'A scatter plot compares the height and weight of 507 individuals by gender. Height in centimeters is plotted on the X-axis and weight in kilograms is plotted on the Y-axis. The chart is interactive, and each data point can be hovered over to expose the height and weight data for each individual. The scatter plot is fairly evenly divided by gender with females dominating the left-hand side of the chart and males dominating the right-hand side. The height data for females ranges from 147.2 to 182.9 centimeters with the greatest concentration between 160 and 165 centimeters. The weight data for females ranges from 42 to 105.2 kilograms with the greatest concentration at around 60 kilograms. The height data for males ranges from 157.2 to 198.1 centimeters with the greatest concentration between 175 and 180 centimeters. The weight data for males ranges from 53.9 to 116.4 kilograms with the greatest concentration at around 80 kilograms.'
    // },
    title: {
        text: 'Total Compensation by Experience'
    },
    subtitle: {
        text: 'Grouped by gender'
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Years of experience'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
        min:0,
        max:40
    },
    yAxis: {
        title: {
            text: 'Salary (base cash compensation)'
        }
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 3,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} years, ${point.y}'
            }
        }
    },
    series: [{
      name: 'Male',
      color: 'rgba(83, 83, 223, .5)',
      data: [[0,57500],[0,1],[0,1],[0,2],[0.4,50000],[0.5,75000],[0.5,50000.1],[0.5,37542],[1,150000],[1,72000],[1,50000],[1,55000],[1,75000],[1,78000],[1,72000],[1,70000],[1,87000],[1,40000],[1,57500],[1,80000],[1,75000],[1,74000],[1,90000],[1,67000],[1,50000],[1,150000],[1,60000],[1,72000],[1,85000],[1.5,65000],[1.5,60000],[1.5,98300],[1.5,94000],[1.5,90000],[1.5,48000],[2,68000],[2,67000],[2,72000],[2,77000],[2,60000],[2,102000],[2,90000],[2,75000],[2,114000],[2,75000],[2,95000],[2,112000],[2,76000],[2,54000],[2,31000],[2,50000],[2,110000],[2,67500],[2,55000],[2.5,97000],[2.5,80000],[2.5,66500],[2.5,94000],[3,92000],[3,100000],[3,85000],[3,78000],[3,140000],[3,87500],[3,72500],[3,94000],[3,77000],[3,84771],[3,83411.64],[3,50000],[3,85000],[3,75000],[3,73000],[3,80000],[3,72000],[3,100000],[3,126000],[3,100000],[3,76000],[3,72000],[3,80000],[3.5,90000],[3.5,118000],[3.5,70000],[4,75000],[4,93600],[4,180000],[4,112000],[4,114000],[4,120100],[4,111000],[4,82000],[4,96800],[4,100000],[4,114700],[4,99000],[4,95000],[4,87600],[4,162000],[4,89000],[4,54000],[4,110000],[4,135000],[4,60000],[4,94000],[4.5,131000],[5,80000],[5,105000],[5,139000],[5,135000],[5,171350],[5,135000],[5,144000],[5,85000],[5,225000],[5,80000],[5,93000],[5,111000],[5,2],[5,95],[5,141000],[5,146990],[5,113000],[5.6,109000],[6,126400],[6,105000],[6,84000],[6,110000],[6,83000],[6.5,153850],[6.5,113000],[7,87400],[7,104000],[7,120750],[8,111000],[8,110000],[8,116500],[8,106000],[8,130500],[8,110000],[8,88000],[8,120000],[8,95000],[8,150000],[8,79900],[8,49500],[8,135000],[8,156000],[9,145000],[9,90000],[10,143943],[10,100000],[10,110000],[10,150000],[10,130000],[11,200000],[11,38500],[12,107000],[12,170000],[12,95000],[12,145000],[12,117000],[12,70000],[13,151000],[13,126000],[13,175000],[14,207000],[15,115000],[15,138000],[15,140000],[15,145000],[15,165000],[16,107000],[19,188000],[20,112400],[20,101000],[20,139000],[20,100000],[20,104000],[20,180000],[21,140000],[21,140000],[24,170000],[40,170000]]
    },{
      name: 'Female',
      color: 'rgba(223, 83, 83, 1)',
      data: [[0,30000],[0,70000],[1,74000],[1,85000],[1,71500],[1.5,72000],[2,113000],[2.5,80000],[2.5,80000],[3,100000],[3,75000],[4,104000],[5,130000],[5,135000],[8,112000],[9,188000],[12,69300]]
    },{
        name: 'Other',
        color: 'rgba(50, 200, 50, 1)',
        data: [[2,71500],[5,115000],[7,100000],[10,130000],[35,100001],[36,100000]]
    }]
  }
})

charts.push({
  c: "tc-by-gender-zoomed",
  d: {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    // accessibility: {
    //     description: 'A scatter plot compares the height and weight of 507 individuals by gender. Height in centimeters is plotted on the X-axis and weight in kilograms is plotted on the Y-axis. The chart is interactive, and each data point can be hovered over to expose the height and weight data for each individual. The scatter plot is fairly evenly divided by gender with females dominating the left-hand side of the chart and males dominating the right-hand side. The height data for females ranges from 147.2 to 182.9 centimeters with the greatest concentration between 160 and 165 centimeters. The weight data for females ranges from 42 to 105.2 kilograms with the greatest concentration at around 60 kilograms. The height data for males ranges from 157.2 to 198.1 centimeters with the greatest concentration between 175 and 180 centimeters. The weight data for males ranges from 53.9 to 116.4 kilograms with the greatest concentration at around 80 kilograms.'
    // },
    title: {
        text: 'Total Compensation by Experience (partial/zoomed)'
    },
    subtitle: {
        text: 'Grouped by gender'
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Years of experience'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
        min:0,
        max:12
    },
    yAxis: {
        title: {
            text: 'Salary (base cash compensation)'
        }
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} years, ${point.y}'
            }
        }
    },
    series: [{
      name: 'Male',
      color: 'rgba(83, 83, 223, .5)',
      data: [[0,57500],[0,1],[0,1],[0,2],[0.4,50000],[0.5,75000],[0.5,50000.1],[0.5,37542],[1,150000],[1,72000],[1,50000],[1,55000],[1,75000],[1,78000],[1,72000],[1,70000],[1,87000],[1,40000],[1,57500],[1,80000],[1,75000],[1,74000],[1,90000],[1,67000],[1,50000],[1,150000],[1,60000],[1,72000],[1,85000],[1.5,65000],[1.5,60000],[1.5,98300],[1.5,94000],[1.5,90000],[1.5,48000],[2,68000],[2,67000],[2,72000],[2,77000],[2,60000],[2,102000],[2,90000],[2,75000],[2,114000],[2,75000],[2,95000],[2,112000],[2,76000],[2,54000],[2,31000],[2,50000],[2,110000],[2,67500],[2,55000],[2.5,97000],[2.5,80000],[2.5,66500],[2.5,94000],[3,92000],[3,100000],[3,85000],[3,78000],[3,140000],[3,87500],[3,72500],[3,94000],[3,77000],[3,84771],[3,83411.64],[3,50000],[3,85000],[3,75000],[3,73000],[3,80000],[3,72000],[3,100000],[3,126000],[3,100000],[3,76000],[3,72000],[3,80000],[3.5,90000],[3.5,118000],[3.5,70000],[4,75000],[4,93600],[4,180000],[4,112000],[4,114000],[4,120100],[4,111000],[4,82000],[4,96800],[4,100000],[4,114700],[4,99000],[4,95000],[4,87600],[4,162000],[4,89000],[4,54000],[4,110000],[4,135000],[4,60000],[4,94000],[4.5,131000],[5,80000],[5,105000],[5,139000],[5,135000],[5,171350],[5,135000],[5,144000],[5,85000],[5,225000],[5,80000],[5,93000],[5,111000],[5,2],[5,95],[5,141000],[5,146990],[5,113000],[5.6,109000],[6,126400],[6,105000],[6,84000],[6,110000],[6,83000],[6.5,153850],[6.5,113000],[7,87400],[7,104000],[7,120750],[8,111000],[8,110000],[8,116500],[8,106000],[8,130500],[8,110000],[8,88000],[8,120000],[8,95000],[8,150000],[8,79900],[8,49500],[8,135000],[8,156000],[9,145000],[9,90000],[10,143943],[10,100000],[10,110000],[10,150000],[10,130000],[11,200000],[11,38500],[12,107000],[12,170000],[12,95000],[12,145000],[12,117000],[12,70000]]
    },{
      name: 'Female',
      color: 'rgba(223, 83, 83, 1)',
      data: [[0,30000],[0,70000],[1,74000],[1,85000],[1,71500],[1.5,72000],[2,113000],[2.5,80000],[2.5,80000],[3,100000],[3,75000],[4,104000],[5,130000],[5,135000],[8,112000],[9,188000],[12,69300]]
    },{
        name: 'Other',
        color: 'rgba(50, 200, 50, 1)',
        data: [[2,71500],[5,115000],[7,100000],[10,130000]]
    }]
  }
})

// const colors = Highcharts.getOptions().colors

charts.push({
  c: "comp-by-title",
  d:{
    title: {
      text: 'Compensation by Job Title'
    },
    subtitle: {
      text: 'Base bay & Total Compensation'
    },
    yAxis: [{
      // labels: { style: { color: colors[0] } },
      title: {
        text: 'Compensation'
    }
    }],
    xAxis:[{
      categories: ['Junior', 'Mid-level', 'Senior', 'Team Lead', 'People Manager'],
    }],
    series: [{
      name: 'Base Pay (salary)',
      type: 'boxplot',
      data: [
        [37542,54750,67487.27778,75250,110000],
        [30000,67500,80775.86207,94000,130000],
        [69300,100000,115621.7966,135000,170000],
        [94000,103750,126534.375,146250,171350],
        [120750,138500,144791.6667,152500,170000]
      ]
    },{
      name: 'Outlier',
      type: 'scatter',
      data: [
        [2, 38500]
      ]
    },
    {
      name: 'Total Compensation',
      type: 'boxplot',
      data: [
        [37542,54750,71237.28056,75250,150000],
        [30000,67500,84517.24138,95000,162000],
        [69300,105500,124911.5763,140000,225000],
        [94000,107750,128716.3125,150000,171350],
        [120750,151250,161458.3333,173750,188000]
      ]
    },{
      name: 'Outlier',
      type: 'scatter',
      data: [
        [2, 38500]
      ]
    }
  ]
  }
})

charts.push({
  c: "edu-type",
  d: {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Education type'
    },
    xAxis: {
        categories: [
          "Self-taught",
          "Bootcamp",
          "Some College",
          "Bachelor's Degree",
          "Graduate Degree",
          "Other"
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Responses'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
      name: 'Job Titles',
      data: [36, 62, 22, 66, 14, 7],
      colorByPoint: true,
      dataLabels: {
        enabled: true,
        rotation: -90,
        color: '#fff',
        align: 'right',
        format: '{point.y:.1f}', // one decimal
        y: 10, // 10 pixels down from the top
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    }]
  }
})

charts.push({
  c: "comp-by-edu",
  d:{

    chart: {
      type: 'boxplot'
    },

    title: {
      text: 'Total Compensation by Education'
    },

    legend: {
      enabled: false
    },

    xAxis: {
      categories: [
        "Self-taught",
        "Bootcamp",
        "Some College",
        "Bachelor's Degree",
        "Graduate Degree"
      ],
      title: {
        text: 'Education Type'
      }
    },

    yAxis: {
      title: {
        text: 'Total Compensation'
      },
      min: 0,
      // max: 40
    },

    series: [{
      name: 'Total Compensation',
      colorByPoint: true,
      data: [
        [31000,85000,103109.7568,120010,188000],
        [30000,69375,79231.379,90000,150000],
        [37542,80500,100284.4348,125000,180000],
        [49500,82000,113454.2029,138000,225000],
        [70000,106250,126378.0714,152985.75,188000]
      ],
      tooltip: {
        headerFormat: '<em>Education Type: {point.key}</em><br/>'
      }
    }, {
      name: 'Outlier',
      color: Highcharts.getOptions().colors[0],
      type: 'scatter',
      data: [ // x, y positions where 0 is the first category
        // [1, 0],
        // [1, 0],
        // [1, 0],
        [2, 0]
      ],
      marker: {
        fillColor: 'white',
        lineWidth: 1,
        lineColor: Highcharts.getOptions().colors[0]
      },
      tooltip: {
        pointFormat: '{point.y} years'
      }
    }
  ]}
})

charts.push({
  c: "degree-type",
  d: {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Type of degree'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },
            slicedOffset: 20
        }
    },
    series: [{
        name: 'Responses',
        colorByPoint: true,
        data: [{
          name: 'Computer Science',
          y: 42,
          sliced: true
        }, {
          name: 'Information Systems, MIS',
          y: 26,

        },{
          name: 'Business',
          y: 12
        },{
          name: 'Other',
          y: 56
        }]
    }]
}
})

// Create the chart
Highcharts.mapChart('live-location', {
  chart: {
      map: 'countries/us/us-ut-all'
  },

  title: {
      text: 'Counties where respondants live'
  },

  // subtitle: {
  //     text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/us/us-ut-all.js">Utah</a>'
  // },

  // mapNavigation: {
  //     enabled: true,
  //     buttonOptions: {
  //         verticalAlign: 'bottom'
  //     }
  // },
  colorAxis: {
      min: 0
  },

  series: [{
      data: [
        // ["us-ut-003", 0],
        // ["us-ut-039", 0],
        // ["us-ut-027", 0],
        // ["us-ut-037", 0],
        ["us-ut-005", 4],
        // ["us-ut-055", 0],
        // ["us-ut-023", 0],
        // ["us-ut-033", 0],
        // ["us-ut-013", 0],
        // ["us-ut-047", 0],
        // ["us-ut-015", 0],
        ["us-ut-049", 90],
        ["us-ut-035", 81],
        // ["us-ut-043", 0],
        // ["us-ut-041", 0],
        // ["us-ut-007", 0],
        // ["us-ut-031", 0],
        // ["us-ut-009", 0],
        // ["us-ut-017", 0],
        ["us-ut-051", 1],
        // ["us-ut-001", 0],
        ["us-ut-057", 8],
        // ["us-ut-029", 0],
        ["us-ut-053", 2],
        // ["us-ut-021", 0],
        ["us-ut-011", 17],
        // ["us-ut-025", 0],
        // ["us-ut-019", 0],
        // ["us-ut-045", 0]
      ],
      name: 'Random data',
      states: {
          hover: {
              color: '#BADA55'
          }
      },
      dataLabels: {
          enabled: true,
          format: '{point.name}'
      }
  }]
});

Highcharts.mapChart('work-location', {
  chart: {
      map: 'countries/us/us-ut-all'
  },

  title: {
      text: 'Counties where respondants live'
  },

  // subtitle: {
  //     text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/us/us-ut-all.js">Utah</a>'
  // },

  // mapNavigation: {
  //     enabled: true,
  //     buttonOptions: {
  //         verticalAlign: 'bottom'
  //     }
  // },
  colorAxis: {
      min: 0
  },

  series: [{
      data: [
        // ["us-ut-003",  0],
        // ["us-ut-039",  0],
        // ["us-ut-027",  0],
        // ["us-ut-037",  0],
        ["us-ut-005",  3],
        // ["us-ut-055",  0],
        // ["us-ut-023",  0],
        // ["us-ut-033",  0],
        // ["us-ut-013",  0],
        // ["us-ut-047",  0],
        // ["us-ut-015",  0],
        ["us-ut-049",  89],
        ["us-ut-035",  94],
        // ["us-ut-043",  0],
        // ["us-ut-041",  0],
        // ["us-ut-007",  0],
        // ["us-ut-031",  0],
        // ["us-ut-009",  0],
        // ["us-ut-017",  0],
        ["us-ut-051",  1],
        // ["us-ut-001",  0],
        ["us-ut-057",  6],
        // ["us-ut-029",  0],
        ["us-ut-053",  2],
        // ["us-ut-021",  0],
        ["us-ut-011",  6],
        // ["us-ut-025",  0],
        // ["us-ut-019",  0],
        // ["us-ut-045",  0]
      ],
      name: 'Random data',
      states: {
          hover: {
              color: '#BADA55'
          }
      },
      dataLabels: {
          enabled: true,
          format: '{point.name}'
      }
  }]
});

charts.push({
  c: "raise-received",
  d: {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Received Equity or a Bonus'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },
            slicedOffset: 20
        }
    },
    series: [{
        name: 'Responses',
        colorByPoint: true,
        data: [{
          name: 'No Raise',
          y: 70,
          sliced: true
        }, {
          name: 'Raise via changing jobs',
          y: 95
        },{
          name: 'Raise at same company',
          y: 52
        }]
    }]
}
})

charts.push({
  c: "raise-vs-move",
  d: {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Increase in salary'
    },
    subtitle: {
        text: 'via raise and moving jobs'
    },
    xAxis: {
        categories: [
            "0-5k",
            "5k-10k",
            "10k-15k",
            "15k-20k",
            "20k-25k",
            "25k-30k",
            "30k-35k",
            "35k-40k",
            "40k-45k",
            "45k-50k",
            "50k-55k",
          ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Responses'
        }
    },
    // tooltip: {
    //     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    //     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
    //         '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    //     footerFormat: '</table>',
    //     shared: true,
    //     useHTML: true
    // },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Raise',
        data: [4,34,33,15,5,2,1,1,0,0,0]

    }, {
        name: 'New Employer',
        data: [7,5,7,12,5,11,0,2,1,1,1]
    }]
}
})

charts.push({
  c: "raise-vs-move-box",
  d:{

    chart: {
      type: 'boxplot'
    },

    title: {
      text: 'Increase in Salary'
    },
    subtitle: {
      text: 'as a percentage of salary'
    },
    legend: {
      enabled: false
    },

    xAxis: {
      categories: ['Raise', 'Move'],
      title: {
        text: 'Responses'
      }
    },

    yAxis: {
      title: {
        text: 'Percent Increase'
      }

    },

    series: [{
      name: 'Percent increase',
      colorByPoint: true,
      data: [
        [1.30,3.74,9.97,13.27,29.41],
        [4.35,9.13,17.59,28.37,43.06]
      ],
      // tooltip: {
      //   headerFormat: '<em>Job Title: {point.key}</em><br/>'
      // }
    }, {
      name: 'Outlier',
      type: 'scatter',
      data: [
        [1, -11.11111111],
        [1, -6.25],
        [1, -3.571428571]
      ],
      marker: {
        fillColor: 'white',
        lineWidth: 1,
        lineColor: "rgba(255,0,0,1)"
      },
      tooltip: {
        pointFormat: '{point.y} Percent'
      }
    }, {
      name: 'Outlier',
      type: 'scatter',
      data: [
        [0, 37.66],
        [0, 41.03],
      ],
      marker: {
        fillColor: 'white',
        lineWidth: 1,
        lineColor: "rgba(0,255,0,1)"
      },
      tooltip: {
        pointFormat: '{point.y} Percent'
      }
    }
  ]}
})

charts.push({
  c: "comp-by-edu-exp",
  d: {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    // accessibility: {
    //     description: 'A scatter plot compares the height and weight of 507 individuals by gender. Height in centimeters is plotted on the X-axis and weight in kilograms is plotted on the Y-axis. The chart is interactive, and each data point can be hovered over to expose the height and weight data for each individual. The scatter plot is fairly evenly divided by gender with females dominating the left-hand side of the chart and males dominating the right-hand side. The height data for females ranges from 147.2 to 182.9 centimeters with the greatest concentration between 160 and 165 centimeters. The weight data for females ranges from 42 to 105.2 kilograms with the greatest concentration at around 60 kilograms. The height data for males ranges from 157.2 to 198.1 centimeters with the greatest concentration between 175 and 180 centimeters. The weight data for males ranges from 53.9 to 116.4 kilograms with the greatest concentration at around 80 kilograms.'
    // },
    title: {
        text: 'Total Compensation by Experience'
    },
    subtitle: {
        text: 'Grouped by education type'
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Years of experience'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
        min:0,
        max:40
    },
    yAxis: {
        title: {
            text: 'Total Compensation'
        }
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 4,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} years, ${point.y}'
            }
        }
    },
    series: [{
      name: 'Bachelors Degree',
      // color: 'rgba(83, 83, 223, .5)',
      data: [[1,78000],[12,107000],[4,75000],[13,151000],[9,145000],[4,93600],[21,140000],[6.5,153850],[4,180000],[4,112000],[8,116500],[6,126400],[3,77000],[5,135000],[4,120100],[15,138000],[4,111000],[13,175000],[4,104000],[1.5,98300],[11,200000],[5,130000],[2,113000],[5,135000],[6.5,113000],[8,130500],[4,82000],[2,75000],[14,207000],[6,105000],[5,225000],[5,80000],[5,93000],[4,100000],[7,87400],[5.6,109000],[7,100000],[1,57500],[3.5,70000],[3,73000],[20,112400],[3,80000],[10,110000],[5,2],[2,112000],[20,139000],[21,140000],[2,76000],[1,67000],[5,95000],[1,150000],[5,141000],[8,150000],[8,112000],[3,126000],[4,162000],[3,100000],[0.5,75000],[6,83000],[4,110000],[2.5,94000],[5,146990],[4,60000],[12,69300],[3,75000],[24,170000],[3,80000]]
    },{
      name: 'Bootcamp',
      // color: 'rgba(223, 83, 83, 1)',
      data: [[3,100000],[3,92000],[2.5,80000],[1,150000],[5,80000],[1,72000],[3,78000],[3,140000],[1.5,65000],[2,67000],[1.5,60000],[1,50000],[3,72500],[2,72000],[3,94000],[3,84771],[1,55000],[1,75000],[3,83411.64],[2,102000],[2.5,97000],[3,50000],[1,85000],[2.5,80000],[1,72000],[3,85000],[2,71500],[1,87000],[4,114700],[1.5,72000],[1,80000],[0,57500],[5,111000],[1,75000],[2,95000],[2.5,66500],[1,74000],[3,72000],[1,90000],[3,100000],[2.5,80000],[1,60000],[1.5,94000],[0,30000],[0,1],[0,1],[1.5,90000],[0.4,50000],[4,89000],[1.5,48000],[3,76000],[2,67500],[4,54000],[3,72000],[1,71500],[3,100000],[1,72000],[5,113000],[0.5,50000.1],[0,2],[1,85000],[0,70000],[1,74000]]
    },{
      name: 'Graduate Degree',
      // color: 'rgba(50, 200, 50, 1)',
      data: [[15,115000],[3.5,90000],[5,105000],[8,111000],[10,143943],[12,170000],[4,114000],[5,171350],[2,90000],[8,110000],[9,188000],[4,135000],[8,156000],[12,70000]]
    },{
      name: 'Self-taught',
      // color: 'rgba(50, 200, 50, 1)',
      data: [[2,68000],[3,87500],[3.5,118000],[8,110000],[5,135000],[2,60000],[12,95000],[19,188000],[11,38500],[36,100000],[1,70000],[5,85000],[4,96800],[15,140000],[2,114000],[2,75000],[40,170000],[1,40000],[16,107000],[4,87600],[20,101000],[35,100001],[10,130000],[2,31000],[2,50000],[2,110000],[5,115000],[15,165000],[7,120750],[12,145000],[6,110000],[12,117000],[8,79900],[8,135000],[20,104000],[4.5,131000]]
    },{
      name: 'Some College',
      // color: 'rgba(50, 200, 50, 1)',
      data: [[9,90000],[2,77000],[8,106000],[5,144000],[3,75000],[4,99000],[15,145000],[8,88000],[10,150000],[8,120000],[1,50000],[2,54000],[10,130000],[7,104000],[6,84000],[20,100000],[2,55000],[4,94000],[20,180000],[0.5,37542]]
    }]
  }
})

charts.forEach(({c,d}) => Highcharts.chart(c, d))