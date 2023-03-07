function addWork(){
let newNode = document.createElement('textarea')
newNode.classList.add('form-control')
newNode.classList.add('weField') 
newNode.classList.add('mt-3') 
newNode.setAttribute('placeholder','enter here')

let weOb = document.getElementById('we')
let weAddButtonOb = document.getElementById('weAddButton')
weOb.insertBefore(newNode,weAddButtonOb)
}

function addAQ(){
    let newNode = document.createElement('textarea')
newNode.classList.add('form-control')
newNode.classList.add('eqField') 
newNode.classList.add('mt-3') 
newNode.setAttribute('placeholder','enter here')

let aqOb = document.getElementById('aq')
let aqAddButtonOb = document.getElementById('aqAddButton')
aqOb.insertBefore(newNode,aqAddButtonOb)
}

// generating CV
function generateCV(){

    //name
    let nameField = document.getElementById('nameField').value
    let nameT = document.getElementById('nameT')
    nameT.innerHTML=nameField
    document.getElementById('nameT2').innerHTML=nameField

    // contact
    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value

    //Address
    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value

    //adding photo
    let file = document.getElementById('imgField').files[0]
    console.log(file)
    let reader = new FileReader()
    reader.readAsDataURL(file)
    console.log(reader.result)

    //setting img to temp
    reader.onloadend = function(){
        document.getElementById('img-template').src = reader.result;
    }

 //Important_Links

    //facebook
    document.getElementById('fbT').innerHTML = document.getElementById('fbField').value
    
    //instagram
    document.getElementById('igT').innerHTML = document.getElementById('igField').value

    //Linkdin
    document.getElementById('linkT').innerHTML = document.getElementById('linkField').value

    //Objective
    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value

    //work_Experience

    let wes = document.getElementsByClassName('weField')

    let str = " "

    for( let e of wes ){
        str = str + `<li> ${e.value} </li>`
    }
    document.getElementById('weT').innerHTML = str;

   //Acadmic Experience
    let aqs = document.getElementsByClassName('eqField')

    let str1 = " "

    for(let e of aqs ){
        str1 = str1 + `<li> ${e.value} </li>`
    }
    document.getElementById('aqT').innerHTML = str1
    
    document.getElementById('cv-form').style.display='none'
    document.getElementById('cv-template').style.display='block'
}
    //Printing CV
    function printCV(){
        window.print()
    }