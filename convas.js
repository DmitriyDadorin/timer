/*  document.querySelector('#calc').addEventListener('click', function() {
    var flat = document.getElementById('flat').value;
    flat = parseInt(flat);
    if (flat>=1 && flat<=20) alert('Первый подъезд');
    else if (flat >= 21 && flat <= 48) alert ('Второй подъезд');
    else if (flat >= 49 && flat <= 90) alert ('Третий подъезд');
    else alert('Ошибка! Повторите ввод!');

});

 */


 /* function buttonClick(){
     alert("Your click");
 } */





var sec=6;
var min=00;
function refresh()
{
	sec--;
	if(sec==-01){sec=59; min=min-1;}
	else{min=min;}
	if(sec<=9){sec="0" + sec;}
	 var time=(min<=9 ? "0"+min : min) + ":" + sec;
	if(document.getElementById){timer.innerHTML=time;}
	 var inter=setTimeout("refresh()", 1000);
	
	if(min=='00' && sec=='00'){
		sec="00";
		clearInterval(inter);
       var x = document.querySelector('.hide');
            timer.innerHTML =  x;

            var y = document.querySelector('.block');
            y.classList.remove('block_delete');            
	}
}
refresh() 



