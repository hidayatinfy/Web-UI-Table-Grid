const allDataInfo = [
    {
        order_ID : 1,
        customer_ID : "Nachiket",
        price : 50,
        ship_country : "india" 
    },
    {
        order_ID : 2,
        customer_ID : "Tushar",
        price : 50,
        ship_country : "india" 
    },
    {
        order_ID : 3,
        customer_ID : "Vaibhav",
        price : 50,
        ship_country : "india" 
    },
    {
        order_ID : 4,
        customer_ID : "Sanket",
        price : 50,
        ship_country : "india" 
    }
]

/*
    Function :  setAttributes()
    Purpose: this helper is used to set attribute which is needed to create dynamic html
*/
let setAttributes = (element,attribute) => {
    for(let key in attribute) {
        element.setAttribute(key, attribute[key]);
    }
}

let tableBody = document.querySelector('.tbody');

const singleRowUi = (data, index) =>{
    let mainRow = document.createElement('tr');
    setAttributes(mainRow,{'class':'main_row'});

    let orderIdWrap = document.createElement('td');
    setAttributes(orderIdWrap,{'class':'order_id_wrap'});

    let orderIdInput = document.createElement('input');
    setAttributes(orderIdInput,{'class':'order_id_input'});
    orderIdInput.value = data.order_ID;

    let customerIdWrap = document.createElement('td');
    setAttributes(customerIdWrap,{'class':'customer_id_wrap'});

    let customerIdInput = document.createElement('input');
    setAttributes(customerIdInput,{'class':'customer_id_input', 'value' : data.customer_ID});
    customerIdInput.value = data.customer_ID;

    let priceWrap = document.createElement('td');
    setAttributes(priceWrap,{'class':'price_wrap'});

    let priceInput = document.createElement('input');
    setAttributes(priceInput,{'class':'price_input', 'value' : data.price});
    priceInput.value = data.price;

    let shipCountryWrap = document.createElement('td');
    setAttributes(shipCountryWrap,{'class':'ship_country_wrap'});

    let shipCountryInput = document.createElement('input');
    setAttributes(shipCountryInput,{'class':'ship_country_input', 'value' : data.ship_country});
    shipCountryInput.value = data.ship_country;

    mainRow.appendChild(orderIdWrap);
    orderIdWrap.appendChild(orderIdInput);
    mainRow.appendChild(customerIdWrap);
    customerIdWrap.appendChild(customerIdInput);
    mainRow.appendChild(priceWrap);
    priceWrap.appendChild(priceInput);
    mainRow.appendChild(shipCountryWrap);
    shipCountryWrap.appendChild(shipCountryInput);

    tableBody.appendChild(mainRow);

}

let displayData = () => {
    allDataInfo.map(function(data,index){
        singleRowUi(data,index);
    });
}

displayData();
