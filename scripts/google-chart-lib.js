console.log("test")

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart', 'bar', 'line']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawRenewableChart);
google.charts.setOnLoadCallback(drawConsumptionChart);

//Column Chart for Renewable Energy Data
function drawRenewableChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Year');
  data.addColumn('number', 'Billion BTU');
  data.addRows([
    ['1960', 35680],
    ['1961', 34417],
    ['1962', 35826],
    ['1963', 38613],
    ['1964', 39016],
    ['1965', 39916],
    ['1966', 42760],
    ['1967', 44550],
    ['1968', 49556],
    ['1969', 51489],
    ['1970', 51035],
    ['1971', 49968],
    ['1972', 54389],
    ['1973', 56250],
    ['1974', 52429],
    ['1975', 50007],
    ['1976', 56507],
    ['1977', 59953],
    ['1978', 65357],
    ['1979', 69419],
    ['1980', 90049],
    ['1981', 83117],
    ['1982', 104674],
    ['1983', 91705],
    ['1984', 108740],
    ['1985', 110698],
    ['1986', 116356],
    ['1987', 107606],
    ['1988', 113802],
    ['1989', 232261],
    ['1990', 198986],
    ['1991', 212955],
    ['1992', 230779],
    ['1993', 217028],
    ['1994', 215563],
    ['1995', 220211],
    ['1996', 240343],
    ['1997', 231308],
    ['1998', 205485],
    ['1999', 204114],
    ['2000', 194952],
    ['2001', 158038],
    ['2002', 174327],
    ['2003', 188473],
    ['2004', 179462],
    ['2005', 183175],
    ['2006', 185564],
    ['2007', 190489],
    ['2008', 195232],
    ['2009', 213642],
    ['2010', 223518],
    ['2011', 222956],
    ['2012', 220020],
    ['2013', 229666],
    ['2014', 226863],
    ['2015', 234192]
  ]);

  // Set chart options
  var options = {'title':'Renewable Energy Production in Florida',
                 'backgroundColor': '#E0E1FF',
                 'legend': 'none',
                 'colors': ['#00784b'],
                 animation: {
                   startup: true,
                   duration: 2000,
                   easing: 'out',
                 },
                 hAxis: {
                   title: 'Year'
                 },
                 vAxis: {
                   title: 'Billion BTU'
                 },
                 height: 300,
                };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('renewable-chart'));
  chart.draw(data, options);
}


function drawConsumptionChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Year');
  data.addColumn('number', 'Billion BTU');
  data.addRows([
    ['2016', 804283],
    ['2015', 803865],
    ['2014', 771379],
    ['2013', 757189],
    ['2012', 752941],
    ['2011', 768009],
    ['2010', 788887],
    ['2009', 766848],
    ['2008', 771702],
    ['2007', 788461],
    ['2006', 778685],
    ['2005', 767622],
    ['2004', 745810],
    ['2003', 741696],
    ['2002', 718136],
    ['2001', 684966],
    ['2000', 668216],
    ['1999', 638966],
    ['1998', 639254],
    ['1997', 597240],
    ['1996', 586291],
    ['1995', 571483],
    ['1994', 544365],
    ['1993', 521176],
    ['1992', 501598],
    ['1991', 499299],
    ['1990', 489741],
    ['1989', 472473],
    ['1988', 444382],
    ['1987', 417862],
    ['1986', 398095],
    ['1985', 379307],
    ['1984', 353246],
    ['1983', 329216],
    ['1982', 315744],
    ['1981', 317921],
    ['1980', 309694],
    ['1979', 295551],
    ['1978', 289031],
    ['1977', 270767],
    ['1976', 252408],
    ['1975', 242096],
    ['1974', 235482],
    ['1973', 237104],
    ['1972', 209665],
    ['1971', 188564],
    ['1970', 171346],
    ['1969', 153032],
    ['1968', 135509],
    ['1967', 119314],
    ['1966', 108610],
    ['1965', 95878],
    ['1964', 87016],
    ['1963', 78258],
    ['1962', 71216],
    ['1961', 62705],
    ['1960', 57344]
  ]);

  // Set chart options
  var options = {'title':'Total Electricity Consumption in Florida',
                 'backgroundColor': '#E0E1FF',
                 'legend': 'none',
                 hAxis: {
                   title: 'Year',
                   direction: '-1',
                 },
                 'colors': ['#981c1e'],
                 animation: {
                   startup: true,
                   duration: 2000,
                   easing: 'out',
                 },
                 vAxis: {
                   title: 'Billion BTU'
                 },
                 height: 300,
                };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.LineChart(document.getElementById('consumption-chart'));
  chart.draw(data, options);
}
