var spreadsheet = "https://docs.google.com/spreadsheets/d/1Ki_lj8YkndX71ryLXiyBPJAzqHrmUzGBE_xDAc5288o/edit?gid=0";

jQuery(document).ready(function(){
    // Compile the Handlebars template for HR leaders.
  var HRTemplate = Handlebars.compile($('#top-rated-template').html());

  // Load top five HR leaders.
  jQuery('#top-rated-ico').sheetrock({
    url: spreadsheet,
    query: "select A,B,C,D,E,F,G,H,I,J,K order by B desc",
    fetchSize: 20,
    rowTemplate: HRTemplate
  });
});
