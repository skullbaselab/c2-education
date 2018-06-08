function onOpen() {
  SpreadsheetApp.getUi().createMenu('Automation')
  .addItem('Sort and sum', 'sortAndSum')
  .addItem('Find error', 'findError')
   .addToUi();
}

var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
var n = sheet.getLastRow();

function sortAndSum() {
  var i = 3;
  while (i < n) {
    if (sheet.getRange(i, 1).isBlank()) {
      sheet.deleteRow(i);
      sheet.deleteRow(i);
      i = i - 2;
      n = n - 2;
    }
      i++;
  }
  var range = sheet.getRange(2, 9, n - 1);
  range.setNumberFormat('mm/dd/yyyy');
  sheet.getRange(2, 1, n, sheet.getLastColumn()).sort(9);
  sheet.insertColumns(9);
  sheet.getRange(2, 9).setValue(sheet.getRange(2, 8).getValue());
  range.setNumberFormat('0.0');
  for (i = 3; i <= n; i++) sheet.getRange(i, 9).setValue(sheet.getRange(i - 1, 9).getValue() + sheet.getRange(i, 8).getValue());
}

function findError() {
  sheet.insertColumns(10);
  sheet.getRange(2, 10, n - 1).setNumberFormat('0.0');
  var ui = SpreadsheetApp.getUi();
  var lBound = 2;
  var uBound = n;
  var median = 0;
  while (uBound - lBound > 1) {
    median = Math.floor((lBound + uBound)/2);
    var bbHours = parseInt(ui.prompt(sheet.getRange(median, 11).getValue()).getResponseText());
    sheet.getRange(median, 10).setValue(bbHours);
    if (bbHours == sheet.getRange(median, 9).getValue()) lBound = median;
    else uBound = median;
  }
  sheet.getRange(median, 1, 1, sheet.getLastColumn()).setBackground('red');
}