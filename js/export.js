// pdf
$("body").on("click", "#btnExport", function () {
    html2canvas($('#table')[0], {
        onrendered: function (canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 500
                }]
            };
            pdfMake.createPdf(docDefinition).download("Users In the Site.pdf");
        }
    });
});

// excel
$(document).ready(function() {
    $('#Xls').on('click', function(e){
        $("#table").table2excel({
            exclude: ".noExport",
            name: "Data",
            filename: "Users In the Site",
            columns: [0, 1, 2, 3] // export first three columns
        });
    });
});