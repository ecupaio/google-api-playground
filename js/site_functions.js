$(function(){
  var googleApi = "AIzaSyDXF-TsAl08BQHZUUupA-kE7BEeJ5DRpWM";
  var sheetId = "1r7z_tOogS1UmFTlM1L0etCdO-odl8yEbtT7yBPv-Cgk";
  $('#test-form').submit(function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var age = $('#age').val();
    var sheetData = {
      "range": "Sheet1!A1:B1",
      "majorDimension": "ROWS",
      "values": [
        ["Ed","32"]
      ]
    };
    $.ajax({
      type: 'PUT',
      url: "https://sheets.googleapis.com/v4/spreadsheets/"+sheetId+"/values/Sheet1!A2:B2?valueInputOption=RAW&key="+googleApi,
      data: sheetData,
      success: function(data) {
        console.log(data);
      },
      error: function(data) {
        console.log(data);
      }
    });
  });

});
