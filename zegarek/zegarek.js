function pokazCzas() {
  var czas = new Date();
  var sek = czas.getSeconds();
  var min = czas.getMinutes();
  var godz = czas.getHours();

  function fix(fix) {
    if(fix<10)
    {fix='0' + fix}
    return fix
  }

  document.getElementById('godzina').innerHTML = fix(godz);
  document.getElementById('minuta').innerHTML = fix(min);
  document.getElementById('sekunda').innerHTML = fix(sek);
}
var interval = setInterval(pokazCzas, 10);
const start = () => {
  interval(setInterval(pokazCzas, 10));
}
const stop = () => {
  interval(clearInterval(1));
  return interval;
}

const btn = document.getElementById('stop').addEventListener('click', stop);
const btn1 = document.getElementById('start').addEventListener('click', start);

function pokazDate() {
  var czas = new Date();
  var rok = czas.getFullYear();
  var miesiac = czas.getMonth();
  var dzien = czas.getDay();
  var data = czas.getDate();

  if (miesiac==0)
  { miesiac = "styczen" };

  if (miesiac==1)
  { miesiac = "luty" };

  if (miesiac==2)
  { miesiac = "marzec" };

  if (miesiac==3)
  { miesiac = "kwiecien" };

  if (miesiac==4)
  { miesiac = "maj" };

  if (miesiac==5)
  { miesiac = "czerwiec" };

  if (miesiac==6)
  { miesiac = "lipiec" };

  if (miesiac==7)
  { miesiac = "sierpien" };

  if (miesiac==8)
  { miesiac = "wrzesien" };

  if (miesiac==9)
  { miesiac = "pazdziernik" };

  if (miesiac==10)
  { miesiac = "listopad" };

  if (miesiac==11)
  { miesiac = "grudzien" };

  switch (dzien)
  {
    case 1:
      dzien = "poniedzialek"
    break;

    case 2:
      dzien = "wtorek"
    break;

    case 3:
      dzien = "sroda"
    break;

    case 4:
      dzien = "czwartek"
    break;

    case 5:
      dzien = "piatek"
    break;

    case 6:
      dzien = "sobota"
    break;

    case 7:
      dzien = "niedziela"
    break;
  }

  document.getElementById('dzien').innerHTML = dzien;
  document.getElementById('data').innerHTML = data;
  document.getElementById('miesiac').innerHTML = miesiac;
  document.getElementById('rok').innerHTML = rok + ' roku';

}
setTimeout(pokazDate);
