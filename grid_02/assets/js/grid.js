let orderData = [
    {
        "order_id" : "101",
        "customer_name":"John Deo",
        "price":"674"
    },
    {
        "order_id" : "102",
        "customer_name":"Kedar",
        "price":"9876"
    },
    {
        "order_id" : "103",
        "customer_name":"Sachin",
        "price":"2345"
    },
    {
        "order_id" : "104",
        "customer_name":"Sourabh",
        "price":"976"
    }
];


let setAttributes = (element,attribute) => {
    for(let key in attribute) {
        element.setAttribute(key, attribute[key]);
    }
}

let createUi = (data,index) => {
    let tblRow = document.createElement('tr');
    setAttributes(tblRow,{'id':index,"class":"abc"});
    document.getElementById('tbody').appendChild(tblRow);

    // td 1
    let tbld = document.createElement('td');
    tblRow.appendChild(tbld);
    let orderIdInput = document.createElement("input");
    setAttributes(orderIdInput,{'class':"test","onblur":'updateData('+ index +',this.value,\'order_id\')'});
    orderIdInput.value = data.order_id;
    tbld.appendChild(orderIdInput);

    // td 2
    let tbld1 = document.createElement('td');
    tblRow.appendChild(tbld1);
    let custNameInput = document.createElement("input");
    setAttributes(custNameInput,{'class':"test","onblur":'updateData('+ index +',this.value,\'customer_name\')'});
    custNameInput.value = data.customer_name;
    tbld1.appendChild(custNameInput);

    // td 3
    let tbld2 = document.createElement('td');
    tblRow.appendChild(tbld2);
    let priceInput = document.createElement("input");
    setAttributes(priceInput,{'class':"test","onblur":'updateData('+ index +',this.value,\'price\')'});
    priceInput.value = data.price;
    tbld2.appendChild(priceInput);
}



let displayGrid = () => {
    orderData.map(function(data,index){
        createUi(data,index);
    });
}



displayGrid();

let updateData = (index,value,key) => {
    orderData[index][key] = value;
    console.log(orderData);
}


