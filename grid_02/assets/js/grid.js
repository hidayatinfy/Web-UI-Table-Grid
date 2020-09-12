let orderData = [
    {
        "order_id" : "109",
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
    // let orderSpan = document.createElement('span');
    // orderSpan.innerHTML = data.order_id;
    //tbld.appendChild(orderSpan);

    let orderIdInput = document.createElement("input");
    setAttributes(orderIdInput,{'class':"test","onblur":'updateData('+ index + ',this.value,\'' + data.customer_name + '\',\'' + data.price + '\')'});
    orderIdInput.value = data.order_id;
    tbld.appendChild(orderIdInput);

    // td 2
    let tbld1 = document.createElement('td');
    tblRow.appendChild(tbld1);
    let custNameInput = document.createElement("input");
    setAttributes(custNameInput,{'class':"test","onblur":'updateData('+ index + ',\''+ data.order_id +'\',this.value,\''+data.price+'\')'});
    custNameInput.value = data.customer_name;
    tbld1.appendChild(custNameInput);

    // td 3
    let tbld2 = document.createElement('td');
    tblRow.appendChild(tbld2);
    let priceInput = document.createElement("input");
    setAttributes(priceInput,{'class':"test","onblur":'updateData('+ index + ',\''+ data.order_id +'\',\''+data.customer_name+'\',this.value)'});
    priceInput.value = data.price;
    tbld2.appendChild(priceInput);
}

let displayGrid = () => {
    orderData.map(function(data,index){
        createUi(data,index);
    });
}

displayGrid();

let updateData = (index,order_id,customer_name,price) => {
    // orderData[index][key] = value;
    // console.log(orderData);
    let updatedObj = {
        "order_id" :order_id,
        "customer_name":customer_name,
        "price":price
    }
    Object.assign(orderData[index],updatedObj);
    console.log(orderData);

    document.getElementById('tbody').innerHTML = "";
    displayGrid();
}

let sort = (property,order) => {
    let sort_order = 1;
    if(order === "desc"){
        sort_order = -1;
    }
    return function (a, b){
        if(a[property] < b[property]){
            return -1 * sort_order;
        }else if(a[property] > b[property]){
            return 1 * sort_order;
        }else{
            return 0 * sort_order;
        }
    }
}

let sort1 = (property,order) => {
    let newOrder;
    if(order === "asc"){
        newOrder = "desc";
        document.getElementById(property).classList.remove("asc");
        document.getElementById(property).classList.add("desc");
    }else{
        newOrder = "asc";
        document.getElementById(property).classList.remove("desc");
        document.getElementById(property).classList.add("asc");
    }
    document.getElementById(property).setAttribute('onclick','sort1(\''+property+'\',\''+newOrder+'\')');
    orderData.sort(sort(property,order));

    document.getElementById('tbody').innerHTML = "";
    displayGrid();

}




