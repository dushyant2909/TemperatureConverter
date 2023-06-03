let inputbtn = document.getElementById('initialtemp');
let btn1 = document.getElementById('initialTemperature');
let btn2 = document.getElementById('finalTemperature');

function temperatureConverter()
{
    // let initialTemperature = parseInt(this.value); //can use if already working in that selected element
    let initialTemperature = parseInt(document.getElementById('initialtemp').value);
    let initialSelectedOption = document.getElementById('initialTemperature').options[document.getElementById('initialTemperature').selectedIndex].value;
    let finalSelectedOption = document.getElementById('finalTemperature').options[document.getElementById('finalTemperature').selectedIndex].value;
    if(initialSelectedOption == 1 && finalSelectedOption == 2)//Degree celcius to fahrenheit
    {
        let fahrenheitTemp = (9*initialTemperature)/5+32;
        let formulaeShow = `(${initialTemperature} c x 9/5) + 32 = ${fahrenheitTemp} F`;
        document.getElementById('formulae').innerHTML = formulaeShow;
        document.getElementById('finaltemp').value = fahrenheitTemp;
    }
    else if(initialSelectedOption == 1 && finalSelectedOption == 3)//Degree celcius to kelvin
    {
        let kelvinTemp = initialTemperature+273.15;
        let formulaeShow = `${initialTemperature} C + 273.15 = ${kelvinTemp} K`;
        document.getElementById('formulae').innerHTML = formulaeShow;
        document.getElementById('finaltemp').value = kelvinTemp;
    }
    else if(initialSelectedOption == 2 && finalSelectedOption == 1)//Fahrenheit to Degree celcius
    {
        let celciusTemp = Math.round((initialTemperature-32)*5/9*100)/100;
        let formulaeShow = `(${initialTemperature} F-32) x 5/9 = ${celciusTemp} C`;
        document.getElementById('formulae').innerHTML = formulaeShow;
        document.getElementById('finaltemp').value = celciusTemp;
    }
    else if(initialSelectedOption == 2 && finalSelectedOption == 3)//Fahrenheit to Kelvin
    {
        // let kelvinTemp = Math.round((initialTemperature-32)*5/9*100)/100+273.15;
        let kelvinTemp = (initialTemperature-32)*5/9+273.15;
        kelvinTemp = kelvinTemp.toFixed(2);
        let formulaeShow = `(${initialTemperature} F-32) x 5/9+273.15 = ${kelvinTemp} C`;
        document.getElementById('formulae').innerHTML = formulaeShow;
        document.getElementById('finaltemp').value = kelvinTemp;
    }
    else if(initialSelectedOption == 3 && finalSelectedOption == 1)//Kelvin to Degree Celcius
    {
        let celciusTemp = initialTemperature-273.15;
        let formulaeShow = `${initialTemperature} K-273.15 = ${celciusTemp} C`;
        document.getElementById('formulae').innerHTML = formulaeShow;
        document.getElementById('finaltemp').value = celciusTemp;
    }
    else if(initialSelectedOption == 3 && finalSelectedOption == 2)//Kelvin to Fahrenheit
    {
        // let farenheitTemp = Math.round((initialTemperature-273.15)*9/5*100)/100+32;
        let farenheitTemp = (initialTemperature-273.15)*9/5+32;
        farenheitTemp = farenheitTemp.toFixed(2);
        let formulaeShow = `(${initialTemperature} F-273.15) x 9/5+32 = ${farenheitTemp} F`;
        document.getElementById('formulae').innerHTML = formulaeShow;
        document.getElementById('finaltemp').value = farenheitTemp;
    }
    else{
        document.getElementById('formulae').innerHTML = "Please select valid option..";
    }
}

inputbtn.addEventListener('keyup',function(){
    temperatureConverter();
})

btn1.addEventListener('change',function(){
    temperatureConverter();
})

btn2.addEventListener('change',function(){
    temperatureConverter();
})