var chart;

AmCharts.ready(function () {
    // RADAR CHART
    chart = new AmCharts.AmRadarChart();
    chart.dataProvider = radarData;
    chart.categoryField = "category";
    chart.startDuration = 0;
    chart.radius = "40%";
    chart.realRadius = 20;

    // TITLE
    chart.addTitle("CI-PKG TECH RADAR", 15);

    // VALUE AXIS
    var valueAxis = new AmCharts.ValueAxis();
    valueAxis.gridType = "circles";
    valueAxis.fillAlpha = 0.05;   //圆环内部颜色的深浅 1黑色  0白色
    valueAxis.fillColor = "#000000";
    valueAxis.axisAlpha = 0.02;  //坐标轴的颜色深浅  1黑色   0白色
    valueAxis.gridAlpha = 0;  //调整线条圆环边界线的颜色深浅 1黑色线  0白色线
    valueAxis.fontWeight = "bold";
    valueAxis.minimum = 0;
    chart.addValueAxis(valueAxis);

    // GRAPH
    var graph = new AmCharts.AmGraph();
    graph.lineColor = "#FFCC00";
    graph.fillAlphas = 0.2;
    graph.bullet = "round";
    graph.valueField = "value";
    graph.balloonText = "[[name]]: [[description]]";
    chart.addGraph(graph);

    // GUIDES
    var guide = new AmCharts.Guide();
    guide.angle = 0;
    guide.tickLength = 0;
    guide.toAngle = 360;
    guide.value = 0;
    guide.toValue = 5;
    guide.fillColor = "DimGray";
    guide.fillAlpha = 0.6;
    valueAxis.addGuide(guide);

    guide = new AmCharts.Guide();
    guide.angle = 0;
    guide.tickLength = 0;
    guide.toAngle = 360;
    guide.value = 5;
    guide.toValue = 10;
    guide.fillColor = "Gray";
    guide.fillAlpha = 0.6;
    valueAxis.addGuide(guide);

    guide = new AmCharts.Guide();
    guide.angle = 0;
    guide.tickLength = 0;
    guide.toAngle = 360;
    guide.value = 10;
    guide.toValue = 15;
    guide.fillColor = "DarkGray";
    guide.fillAlpha = 0.6;
    valueAxis.addGuide(guide);

    guide = new AmCharts.Guide();
    guide.angle = 0;
    guide.tickLength = 0;
    guide.toAngle = 360;
    guide.value = 15;
    guide.toValue = 20;
    guide.fillColor = "Silver";
    guide.fillAlpha = 0.6;
    valueAxis.addGuide(guide);

    // WRITE
    chart.write("chartdiv");
});