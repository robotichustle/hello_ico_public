var spreadsheet = "https://docs.google.com/spreadsheets/d/14kgeUhNwSsyNNdTu4mZHGNRB5p6xb47qfUP329O-lPo/edit?gid=0";

jQuery(document).ready(function(){
    // Compile the Handlebars template for HR leaders.
  var HRTemplate = Handlebars.compile($('#top-rated-template').html());

  // Load top five HR leaders.
  jQuery('#top-rated-ico').sheetrock({
    url: spreadsheet,
  /*  query: "select A,C,D,I order by I desc",*/
    fetchSize: 5,
    rowTemplate: HRTemplate
  });
});
