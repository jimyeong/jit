window.onload = function () {
    var limit = 1000;    //increase number of dataPoints by increasing this
    var y = 0;
    var data = []; var dataSeries = { type: "line" };
    var dataPoints = [];
    for (var i = 0; i < limit; i += 1) {
        y += (Math.random() * 10 - 5);
        dataPoints.push({
            x: i - limit / 2,
            y: y
        });
    }
    dataSeries.dataPoints = dataPoints;
    data.push(dataSeries);


    var chart1 = new CanvasJS.Chart("chartContainer1", {
        title:{
            text: "Variation"
        },

        axisX:{
            minimum: -300,
            maximum: 400,
            viewportMinimum: -200,
            viewportMaximum: 300
        },
        data:data
    });


    var chart2 = new CanvasJS.Chart("chartContainer2", {
        title:{
            text: "Variation"
        },
        data: [
            {
                type: "line",

                dataPoints: [
                    { x: new Date(2012, 00, 1), y: 450 },
                    { x: new Date(2012, 01, 1), y: 414 },
                    { x: new Date(2012, 02, 1), y: 520 },
                    { x: new Date(2012, 03, 1), y: 460 },
                    { x: new Date(2012, 04, 1), y: 450 },
                    { x: new Date(2012, 05, 1), y: 500 },
                    { x: new Date(2012, 06, 1), y: 480 },
                    { x: new Date(2012, 07, 1), y: 480 },
                    { x: new Date(2012, 08, 1), y: 410 },
                    { x: new Date(2012, 09, 1), y: 500 },
                    { x: new Date(2012, 10, 1), y: 480 },
                    { x: new Date(2012, 11, 1), y: 510 }
                ]
            }
        ]
    });
    chart1.render();
    chart2.render();

}



