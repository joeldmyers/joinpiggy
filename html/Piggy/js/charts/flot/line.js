$(function () {
    
    var d1, d2, data, chartOptions,monthNames;

    d1 = [
        [1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 1129], 
        [1272672000000, 1163], [1275350400000, 1905], [1277942400000, 2002], [1280620800000, 2917], 
        [1283299200000, 2700], [1285891200000, 2700], [1288569600000, 2100], [1291161600000, 1700]
    ];
 
    d2 = [
        [1262304000000, 434], [1264982400000, 232], [1267401600000, 475], [1270080000000, 553],
        [1272672000000, 675], [1275350400000, 679], [1277942400000, 789], [1280620800000, 1026], 
        [1283299200000, 1640], [1285891200000, 1892], [1288569600000, 2147], [1291161600000, 2256]
    ];

    monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var realData=$("#line-chart").data("series");
    if (realData){
        d1=realData.contributions;
        d2=realData.bonuses;
        //monthNames = realData.xlabels;
    }

    data = [{ 
        label: "Contributions", 
        data: d1
    }, {
        label: "Bonus",
        data: d2
    }];
 
    chartOptions = {
        xaxis: {
            min: d1[0][0],
            max: d1[d1.length-1][0],
            mode: "time",
            tickSize: [1, "month"],
            timeformat: "%b %y",
            monthNames: monthNames,
            tickLength: 0
        },
        yaxis: {

        },
        series: {
            lines: {
                show: true, 
                fill: false,
                lineWidth: 3
            },
            points: {
                show: true,
                radius: 4.5,
                fill: true,
                fillColor: "#ffffff",
                lineWidth: 2.75
            }
        },
       grid: { 
            hoverable: true, 
            clickable: false, 
            borderWidth: 0 
        },
        legend: {
            show: false
        },
        
        tooltip: true,
        tooltipOpts: {
            content: '%s: %y'
        },
        colors: target_admin.layoutColors
    };

    

    var holder = $('#line-chart');

    if (holder.length) {
        $.plot(holder, data, chartOptions );
    }


});