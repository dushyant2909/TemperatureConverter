let inputbtn=document.getElementById("initialtemp"),btn1=document.getElementById("initialTemperature"),btn2=document.getElementById("finalTemperature");function temperatureConverter(){let e=parseInt(document.getElementById("initialtemp").value),t=document.getElementById("initialTemperature").options[document.getElementById("initialTemperature").selectedIndex].value,n=document.getElementById("finalTemperature").options[document.getElementById("finalTemperature").selectedIndex].value;if(1==t&&2==n){let l=9*e/5+32,i=`(${e} c x 9/5) + 32 = ${l} F`;document.getElementById("formulae").innerHTML=i,document.getElementById("finaltemp").value=l}else if(1==t&&3==n){let a=e+273.15,m=`${e} C + 273.15 = ${a} K`;document.getElementById("formulae").innerHTML=m,document.getElementById("finaltemp").value=a}else if(2==t&&1==n){let r=Math.round((e-32)*5/9*100)/100,d=`(${e} F-32) x 5/9 = ${r} C`;document.getElementById("formulae").innerHTML=d,document.getElementById("finaltemp").value=r}else if(2==t&&3==n){let u=(e-32)*5/9+273.15,f=`(${e} F-32) x 5/9+273.15 = ${u=u.toFixed(2)} C`;document.getElementById("formulae").innerHTML=f,document.getElementById("finaltemp").value=u}else if(3==t&&1==n){let o=e-273.15,p=`${e} K-273.15 = ${o} C`;document.getElementById("formulae").innerHTML=p,document.getElementById("finaltemp").value=o}else if(3==t&&2==n){let E=(e-273.15)*9/5+32,g=`(${e} F-273.15) x 9/5+32 = ${E=E.toFixed(2)} F`;document.getElementById("formulae").innerHTML=g,document.getElementById("finaltemp").value=E}else document.getElementById("formulae").innerHTML="Please select valid option.."}inputbtn.addEventListener("keyup",function(){temperatureConverter()}),btn1.addEventListener("change",function(){temperatureConverter()}),btn2.addEventListener("change",function(){temperatureConverter()});