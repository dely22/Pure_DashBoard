var xmlhttp = new XMLHttpRequest();
var url = "/js/jsonData.json";
//var url = "http://127.0.0.1:5501/js/jsonData.json";

xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        console.log(data)
        date = data.date_Orders.map(function (elem) {
            return elem.date;
        })
        Orders = data.date_Orders.map(function (elem) {
            return elem.Orders;
        })
        console.log(Orders)

        const ctx = document.getElementById('canvas').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: date,
                datasets: [{
                    label: 'Orders Per Year',
                    data: Orders,
                    backgroundColor: "#e2cfff"

                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

}
