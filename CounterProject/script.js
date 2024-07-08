const dataValue = document.getElementById("DataHere")
var data = 0;

const valueIncrement =() =>{
    let Selectvalue = document.getElementById("select_id").value;
    let value = parseInt(Selectvalue)   

    if(Selectvalue >=0){
        data += value
    }else{
        data -= value
    }
    dataValue.innerHTML = data
}

const valueDecrement =() =>{
    let Selectvalue = document.getElementById("select_id").value;
    let value = parseInt(Selectvalue)   

    if(Selectvalue >=0){
        data -= value

    }else{
        data += value
    }
    dataValue.innerHTML = data
}

window.onload = () =>{ 
    selectBoxValue()
}

const selectBoxValue = () =>{
    let Selectvalue = document.getElementById("select_id");
    for(let i = 1; i <= 10; i++){
        let CreateOption = document.createElement("option")
        CreateOption.text = i*5
        CreateOption.value = i*5
        Selectvalue.add(CreateOption)   
    }
}