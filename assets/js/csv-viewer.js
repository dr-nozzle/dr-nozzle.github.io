// CSV Viewer using Papa Parse
function loadCSVViewer() {
  // Load Papa Parse library
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.4.1/papaparse.min.js';
  script.onload = function () {
    // Load CSV data and create table
    const csvUrl =
      'https://docs.google.com/spreadsheets/d/1soK8JYdsaYyLJ7ANSUX7J71X6k1QErrZGS9keB799PU/export?format=csv';

    Papa.parse(csvUrl, {
      download: true,
      header: true,
      complete: function (results) {
        createCSVTable(results.data);
      },
      error: function (error) {
        console.error('Error loading CSV:', error);
        document.getElementById('csv-container').innerHTML =
          '<p>Error loading CSV data. Please check the link.</p>';
      },
    });
  };
  document.head.appendChild(script);
}

function createCSVTable(data) {
  const container = document.getElementById('csv-container');

  if (data.length === 0) {
    container.innerHTML = '<p>No data available.</p>';
    return;
  }

  let html =
    '<div class="csv-table-container" style="overflow-x: auto; margin: 20px 0;">';
  html +=
    '<table class="csv-table" style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">';

  // Create header
  const headers = Object.keys(data[0]);
  html += '<thead><tr style="background-color: #f5f5f5;">';
  headers.forEach((header) => {
    html += `<th style="border: 1px solid #ddd; padding: 8px; text-align: left;">${header}</th>`;
  });
  html += '</tr></thead>';

  // Create rows
  html += '<tbody>';
  data.forEach((row) => {
    html += '<tr>';
    headers.forEach((header) => {
      const cellValue = row[header] || '';
      html += `<td style="border: 1px solid #ddd; padding: 8px;">${cellValue}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody></table></div>';

  container.innerHTML = html;
}

// Load CSV viewer when page loads
document.addEventListener('DOMContentLoaded', loadCSVViewer);
