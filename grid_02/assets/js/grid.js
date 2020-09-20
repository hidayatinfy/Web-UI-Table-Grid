let orderData = [
    {
        "order_id" : "109",
        "customer_name":"John Deo",
        "price":"123"
    },
    {
        "order_id" : "102",
        "customer_name":"Kedar",
        "price":"234"
    },
    {
        "order_id" : "103",
        "customer_name":"Sachin",
        "price":"354"
    },
    {
        "order_id" : "104",
        "customer_name":"Sourabh",
        "price":"456"
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

    let tbld3 = document.createElement('td');
    tblRow.appendChild(tbld3);
    let deleteIcon = document.createElement("i");
    setAttributes(deleteIcon,{'class':"fa fa-trash-o","onclick":'deleteData('+ index + ')'});
    tbld3.appendChild(deleteIcon);
    
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

let currentSortingState = {
    "property":"order_id",
    "order":"asc"
}

let sort = (property,order) => {
    currentSortingState['property'] = property;
    currentSortingState['order'] = order;
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
        document.getElementById(property).classList.add(newOrder);
    }else{
        newOrder = "asc";
        document.getElementById(property).classList.remove("desc");
        document.getElementById(property).classList.add(newOrder);
    }
    document.getElementById(property).setAttribute('onclick','sort1(\''+property+'\',\''+newOrder+'\')');

    orderData.sort(sort(property,order));

    document.getElementById('tbody').innerHTML = "";
    displayGrid();
}

let displayForm = () => {
    createForm();
}

let saveFormData = () => {
    let order_id = document.getElementById('order_id1').value;
    let customer_name = document.getElementById('customer_name1').value;
    let price = document.getElementById("price1").value;

    if(order_id != "" && customer_name != "" && price != ""){
        let newObj = {
            'order_id': order_id,
            'customer_name':customer_name,
            'price':price
        }
        
        orderData.push(newObj);
        
        document.getElementById("addNewData").style.display ="none";

        orderData.sort(sort(currentSortingState['property'],currentSortingState['order']));
        document.getElementById('tbody').innerHTML = "";
        displayGrid();
     
    }else{
        alert("Please enter all data");
    }
}

let createForm = () => {
    document.getElementById('addNewForm').innerHTML = "";
    
    let iDiv = document.createElement('div');
    setAttributes(iDiv, {"id": "addNewData"});
    document.getElementById('addNewForm').appendChild(iDiv);

    let heading = document.createElement('h4');
    heading.innerHTML = "Add New Data";
    iDiv.appendChild(heading);

    let sOrderIdDiv = document.createElement('div');
    setAttributes(sOrderIdDiv, {"class": "form-group"});
    iDiv.appendChild(sOrderIdDiv);

    let sOrderIdLable = document.createElement('label');
    sOrderIdLable.innerHTML = "Enter Order Id:";
    sOrderIdDiv.appendChild(sOrderIdLable);

    let sOrderIdInput = document.createElement('input');
    setAttributes(sOrderIdInput,{'class':'form-control','id':'order_id1'});
    sOrderIdDiv.appendChild(sOrderIdInput);

    let sCustomerNameLable = document.createElement('label');
    sCustomerNameLable.innerHTML = "Enter Customer Name:";
    sOrderIdDiv.appendChild(sCustomerNameLable);

    let sCustomerNameInput = document.createElement('input');
    setAttributes(sCustomerNameInput,{'class':'form-control','id':'customer_name1'});
    sOrderIdDiv.appendChild(sCustomerNameInput);

    let sPriceLable = document.createElement('label');
    sPriceLable.innerHTML = "Enter Price:";
    sOrderIdDiv.appendChild(sPriceLable);

    let sPriceInput = document.createElement('input');
    setAttributes(sPriceInput,{'class':'form-control','id':'price1'});
    sOrderIdDiv.appendChild(sPriceInput);

    let saveanchor = document.createElement('a');
    setAttributes(saveanchor, {"class": "btn btn-primary","onclick":"saveFormData()"});
    saveanchor.innerHTML = "Save";
    iDiv.appendChild(saveanchor);
}

let deleteData = (index) => {
    orderData.splice(index,1);
    document.getElementById('tbody').innerHTML = "";
    displayGrid();
}






