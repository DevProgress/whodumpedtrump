$('table').DataTable({ "order": [[ 3, "desc" ], [ 4, "desc" ]] });

google.charts.load('current', {'packages':['corechart']});

function drawCirleChart(id, title, office) {
  var unendorsedCount = 0;
  var denouncedCount = 0;
  var noRemarkCount = 0;

  tableData.forEach(function(retraction) {
    if (retraction.office !== office) return;
    if (retraction.unendorsed === 'Yes') {
      unendorsedCount += 1;
      return;
    }
    if (retraction.denounced === 'Yes') {
      denouncedCount += 1;
      return;
    }
    noRemarkCount += 1;
  });

  var data = google.visualization.arrayToDataTable([
    ['Task', 'People'],
    ['Unendorsed', unendorsedCount],
    ['Denounced',  denouncedCount],
    ['No Remark', noRemarkCount],
  ]);

  var options = {
    title: title
  };

  var chart = new google.visualization.PieChart(document.getElementById(id));
  chart.draw(data, options);
}

function drawCharts() {
  drawCirleChart('chart1', 'House Candidates', 'House');
  drawCirleChart('chart2', 'Senate Candidates', 'Senate');
  drawCirleChart('chart3', 'Governer Candidates', 'Governor');
}

google.charts.setOnLoadCallback(drawCharts);
