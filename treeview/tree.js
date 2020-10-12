let menu =  [
    {
        mainmenu: "Level1",
        submenu:[
            {
                submenu:'submenu1-1'
            },
            {
                submenu:'submenu2-1'
            },
            {
                submenu:'submenu2-1'
            }

        ]
    },
    {
        mainmenu: "Level2",
    },

    {
        mainmenu: "Level3",
        submenu:[
            {
                submenu:'submenu1-3'
            },
            {
                submenu:'submenu2-3'
            }
        ]
    },
   
];

let setAttributes = (element,attribute) => {
    for(let key in attribute) {
        element.setAttribute(key, attribute[key]);
    }
}

let createUi = (dropDownData) => {
    //console.log(dropDownData);
    let myLi = document.createElement("li");
    let liText = document.createTextNode(dropDownData['mainmenu']);
    myLi.appendChild(liText);
    document.getElementById("nestedUl").appendChild(myLi);
    if(dropDownData['submenu']){
        let span = document.createElement("span");
        setAttributes(span,{'class':'caret'});
        myLi.appendChild(span);
        let secondLevelUl = document.createElement("ul");
        setAttributes(secondLevelUl,{'class':'nested'});
        myLi.appendChild(secondLevelUl);
        for(let i=0; i<dropDownData['submenu'].length;i++){
            let secondlevelLi = document.createElement("li");
            let secondlevelliText = document.createTextNode(dropDownData['submenu'][i]['submenu']);
            secondlevelLi.appendChild(secondlevelliText);
            secondLevelUl.appendChild(secondlevelLi);
        }
    }
    
}

let createMainMenu = () => {
    menu.map(function(data,index){
        createUi(data);
    });
}

createMainMenu();

var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}