//
// Charts
//

google.charts.load('current', { packages: [ 'corechart' ] });

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
    ['Denounced',  10],
    ['No Remark', noRemarkCount],
  ]);

  var options = {
    title: title,
    titleTextStyle: {
      fontSize: 18,
    },
    backgroundColor: 'transparent',
    legend: {
      position: 'bottom',
      textStyle: {
        fontSize: 10,
      }
    },
    slices: {
      0: { color: '#aa0000' },
      1: { color: '#dd0000' },
      2: { color: '#ccc' }
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById(id));
  chart.draw(data, options);
}

google.charts.setOnLoadCallback(function() {
  $('.charts-section').show();
  drawCirleChart('chart1', 'House Candidates', 'House');
  drawCirleChart('chart2', 'Senate Candidates', 'Senate');
  drawCirleChart('chart3', 'Governer Candidates', 'Governor');
});

//
// DataTable
//

$('.js-retractions-table').DataTable({
  order: [
    [ 3, "desc" ], [ 4, "desc" ]
  ],
  responsive: true,
  info:     false,
  paging: false,
  scrollY: 400,
});
