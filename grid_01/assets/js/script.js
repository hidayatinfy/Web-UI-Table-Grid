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

//contenteditable="true"

let setAttributes = (element,attribute) => {
    for(let key in attribute) {
        element.setAttribute(key, attribute[key]);
    }
}

let tableBody = document.querySelector('.tbody');

const singleRowUi = (data, index) =>{

    // our tr
    let mainRow = document.createElement('tr');
    setAttributes(mainRow,{'class':'main_row', 'id' : `data-row-${index + 1}`, 'data-index': index});

    // td first 
    let orderIdWrap = document.createElement('td');
    setAttributes(orderIdWrap,{'class':'order_id_wrap td_wrap'});
    mainRow.appendChild(orderIdWrap);

    // input field
    let orderIdInput = document.createElement('input');
    setAttributes(orderIdInput,{'class':'order_id_input input_wrap','onfocusout' : 'getUpadtedValue(event)', 'name':'order_ID'});
    orderIdInput.value = data.order_ID;
    orderIdWrap.appendChild(orderIdInput);

    // td second
    let customerIdWrap = document.createElement('td');
    setAttributes(customerIdWrap,{'class':'customer_id_wrap td_wrap'});
    mainRow.appendChild(customerIdWrap);

    // second td input
    let customerIdInput = document.createElement('input');
    setAttributes(customerIdInput,{'class':'customer_id_input input_wrap', 'onfocusout' : 'getUpadtedValue(event)', 'name':'customer_ID'});
    customerIdInput.value = data.customer_ID;
    customerIdWrap.appendChild(customerIdInput);

    // td third
    let priceWrap = document.createElement('td');
    setAttributes(priceWrap,{'class':'price_wrap td_wrap'});
    mainRow.appendChild(priceWrap);

    // third td input 
    let priceInput = document.createElement('input');
    setAttributes(priceInput,{'class':'price_input input_wrap', 'onfocusout' : 'getUpadtedValue(event)', 'name':'price'});
    priceInput.value = data.price;
    priceWrap.appendChild(priceInput);

    // forth td
    let shipCountryWrap = document.createElement('td');
    setAttributes(shipCountryWrap,{'class':'ship_country_wrap td_wrap'});
    mainRow.appendChild(shipCountryWrap);

    // forth td input 
    let shipCountryInput = document.createElement('input');
    setAttributes(shipCountryInput,{'class':'ship_country_input input_wrap', 'value' : data.ship_country , 'onfocusout' : 'getUpadtedValue(event)', 'name':'ship_country'});
    shipCountryInput.value = data.ship_country;
    shipCountryWrap.appendChild(shipCountryInput);


    tableBody.appendChild(mainRow);

}

let displayData = () => {
    allDataInfo.map(function(data,index){
        singleRowUi(data,index);
    });
}
const getUpadtedValue = (event) => {
    const getRow = event.currentTarget.parentElement.parentElement.getAttribute('id');
    let currentElement = document.querySelectorAll(`#${getRow} input`);
    
    currentElement.forEach((item, index) => {
        console.log(item.value);
    
    });
}

displayData();



