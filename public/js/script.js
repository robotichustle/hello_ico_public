jQuery(document).ready(function(e){

  jQuery('html span span').each(function(){
    var text = jQuery(this).text();
    jQuery(this).text(text.replace('#-_', '@'));
  });
  jQuery('#closeDisclamer').on('click',function(){
    jQuery("#disclamer-overlay").addClass('hideMe');
    return false;
  });
  $(window).scroll(function(){
    $('#top').css("background-position", "-100px " + (-100 + parseInt($(this).scrollTop()*0.05 ))+"px" );
})
  jQuery('#panel-circles.appear-anim').addClass('appeared');
  e('.appear-anim').appear();
  e('.appear-anim').on('appear',function(t, n) {
      n.each(function() {
          e(this).addClass('appeared');
      });
  });
});


jQuery(document).ready(function(){

  // Uncomment to style it like Apple Watch
  if (!Highcharts.theme) {
      Highcharts.setOptions({
          chart: {
              backgroundColor: 'transparent'
          },
      });
  }

  Highcharts.chart('first-circle', {
      chart: {
          type: 'solidgauge',
          marginTop: 50
      },

      title: {
          text: '',
          x: 0,
          y: 180,
      },

      pane: {
          startAngle: 0,
          endAngle: 360,
          background: [{ // Track for Stand
              outerRadius: '90%',
              innerRadius: '87%',
              backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
                  .setOpacity(0.3)
                  .get(),
              borderWidth: 0
          }]
      },
  		tooltip: false,
      yAxis: {
          min: 0,
          max: 100,
          lineWidth: 0,
          tickPositions: []
      },

      plotOptions: {
          solidgauge: {
              dataLabels: {
                  enabled: false
              },
              linecap: 'round',
              stickyTracking: false,
              rounded: true
          }
      },

      series: [{
          name: 'ICO <br/>analysed',
          data: [{
              color: Highcharts.getOptions().colors[2],
              radius: '90%',
              innerRadius: '87%',
              y: 100
          }]
      }]
  },
  function callback() {
    var s = document.getElementById("first-circle-var");
    for (i = 0; i <= 200; i++) {

      // create a closure to preserve the value of "i"
      (function(i){

        window.setTimeout(function(){
          s.innerHTML = i.toString();
        }, i * 5);
      }(i));
    }
  });

  if (!Highcharts.theme) {
      Highcharts.setOptions({
          chart: {
              backgroundColor: 'transparent'
          },
      });
  }

  Highcharts.chart('second-circle', {
      chart: {
          type: 'solidgauge',
          marginTop: 50
      },

      title: {
          text: '',
          x: 0,
          y: 180,
      },

      pane: {
          startAngle: 0,
          endAngle: 360,
          background: [{ // Track for Stand
              outerRadius: '90%',
              innerRadius: '87%',
              backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
                  .setOpacity(0.3)
                  .get(),
              borderWidth: 0
          }]
      },
  		tooltip: false,
      yAxis: {
          min: 0,
          max: 100,
          lineWidth: 0,
          tickPositions: []
      },

      plotOptions: {
          solidgauge: {
              dataLabels: {
                  enabled: false
              },
              linecap: 'round',
              stickyTracking: false,
              rounded: true
          }
      },

      series: [{
          name: 'Team members',
          data: [{
              color: Highcharts.getOptions().colors[2],
              radius: '90%',
              innerRadius: '87%',
              y: 100
          }]
      }]
  },
  function callback() {
    var s = document.getElementById("second-circle-var");
    for (i = 0; i <= 121; i++) {

      // create a closure to preserve the value of "i"
      (function(i){

        window.setTimeout(function(){
          s.innerHTML = i.toString();
        }, i * 8);
      }(i));
    }
  });


    Highcharts.chart('third-circle', {
        chart: {
            type: 'solidgauge',
            marginTop: 50
        },

        title: {
            text: '',
            x: 0,
            y: 180,
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Stand
                outerRadius: '90%',
                innerRadius: '87%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
                    .setOpacity(0.3)
                    .get(),
                borderWidth: 0
            }]
        },
    		tooltip: false,
        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },

        series: [{
            name: 'Team members',
            data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '90%',
                innerRadius: '87%',
                y: 100
            }]
        }]
    },
    function callback() {
      var s = document.getElementById("third-circle-var");
      for (i = 0; i <= 20; i++) {

        // create a closure to preserve the value of "i"
        (function(i){

          window.setTimeout(function(){
            s.innerHTML = i.toString();
          }, i * 50);
        }(i));
      }
    });

    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    var d = new Date();
    jQuery('.actual-month-name').html(monthNames[d.getMonth()]);
/*
    Highcharts.chart('toprating-chart', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Kyber Network'
        },
        xAxis: {
            categories: ['Overal Rating','Market Cap','Team','Protype','Idea'],
            title: {
                text: null
            }
        },
        yAxis: {
          min: 0,
           max: 10,
           title: {
               text: 'Points',
               align: 'high'
           },
           labels: {
               overflow: 'justify'
           }
       },
       tooltip: {
           valueSuffix: ' points'
       },
       plotOptions: {
           bar: {
               dataLabels: {
                   enabled: false
               },
               colorByPoint: true
           },
       },
       legend: false,
       credits: {
           enabled: false
       },
       series: [{
           name: 'Last evaluation',
           data: [10, 9, 10, 10, 10],
            colors: ['#90ed7d','#90ed7d','#90ed7d', '#90ed7d', '#90ed7d', '#90ed7d', '#de5454']
        }]
    }); */
});
