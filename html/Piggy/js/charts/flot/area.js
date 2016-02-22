$(function () {
    
    var d1, data, chartOptions;

    d1 = [
        [1262304000000, 50], [1264982400000, 200], [1267401600000, 500], [1270080000000, 1129],
        [1272672000000, 1163], [1275350400000, 1605], [1277942400000, 1002], [1280620800000, 2217],
        [1283299200000, 2100], [1285891200000, 2300], [1288569600000, 2300], [1291161600000, 1700]
    ];
 
    d2 = [
        [1262304000000, 934], [1264982400000, 1000], [1267401600000, 1475], [1270080000000, 1460],
        [1272672000000, 1600], [1275350400000, 1650], [1277942400000, 2000], [1280620800000, 1526],
        [1283299200000, 1640], [1285891200000, 1892], [1288569600000, 2147], [1291161600000, 2256]
    ];

    data = [{ 
        label: "Total visitors", 
        data: d2
    }, {
        label: "Total sales",
        data: d1
    }];
 
    chartOptions = {
        xaxis: {
            min: (new Date(2009, 12, 1)).getTime(),
            max: (new Date(2010, 11, 2)).getTime(),
            mode: "time",
            tickSize: [1, "month"],
            monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            tickLength: 0
        },
        yaxis: {

        },
        series: {
            lines: {
                show: true, 
                fill: true,
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

    var holder = $('#area-chart');

    if (holder.length) {
        $.plot(holder, data, chartOptions);
    }

});