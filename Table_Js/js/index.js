var infoArray = [{
        id: 'id',
        orderId: 'Order Id',
        customerId: 'Customer Name',
        freight: 'freight',
        shipCountry: 'Ship Country'
    }, {
        id: 1,
        orderId: 1,
        customerId: 'vaibbhav',
        freight: 100,
        shipCountry: 'india'
    },
    {
        id: 2,
        orderId: 2,
        customerId: 'Santosh',
        freight: 200,
        shipCountry: 'Pune'
    }, {
        id: 3,
        orderId: 3,
        customerId: 'Swapnil',
        freight: 300,
        shipCountry: 'Pune'
    }
];

//var infoArray = ['vaibbhav', 'santosh', 'swapnil']

var table = document.getElementById('table');

function loadTable() {
    var tableElement = document.createElement('table');
    var tableBody = document.createElement('tbody');
    for (var i = 0; i < infoArray.length; i++) {
        var trElement = document.createElement('tr');
        //var tdElement = document.createElement('td');
        var tdElement1 = document.createElement('td');
        var tdElement2 = document.createElement('td');
        var tdElement3 = document.createElement('td');
        var tdElement4 = document.createElement('td');
        var infoHolder1 = document.createElement('span');
        var infoHolder2 = document.createElement('span');
        var infoHolder3 = document.createElement('span');
        var infoHolder4 = document.createElement('span');
        //trElement.innerHTML = infoArray[i];
        // tdElement.innerHTML = infoArray[i].orderId;
        tdElement1.appendChild(infoHolder1);
        tdElement2.appendChild(infoHolder2);
        tdElement3.appendChild(infoHolder3);
        tdElement4.appendChild(infoHolder4);

        infoHolder1.innerHTML = infoArray[i].orderId;
        infoHolder2.innerHTML = infoArray[i].customerId;
        infoHolder3.innerHTML = infoArray[i].freight;
        infoHolder4.innerHTML = infoArray[i].shipCountry;

        tableElement.appendChild(tableBody);
        tableBody.appendChild(trElement);
        //trElement.appendChild(tdElement);
        trElement.appendChild(tdElement1);
        trElement.appendChild(tdElement2);
        trElement.appendChild(tdElement3);
        trElement.appendChild(tdElement4);

    }
    table.appendChild(tableElement);

    tableElement.setAttribute("class", "table table-striped table-dark");
}
loadTable();


var editText = document.getElementsByTagName("span");
for (let index = 0; index < editText.length; index++) {
    const element = editText[index];
    console.log(element)
    editText[index].addEventListener("click", myFunction);
    var textBox = document.createElement('input');
    textBox.setAttribute("type", "text");

    function myFunction() {
        this.replaceWith(textBox);
        //this.appendChild(textBox);
    }
}

// editText[i].addEventListener("click", myFunction);

// function myFunction() {
//     alert("Hello World!");
// }