
//Wysokosc podatkow w stanach
var podatki = [4, 0,5.6,6.5];



function podatek() {
  //Wysokosc podatku w stanie w %
  var podatek_wys="Wysokość podatku: "+podatki[$('#stan').val()-1]+" %";
  $('#info').text( podatek_wys );
}

function oblicz() {
  //Definicja zmiennych
  var brutto=$('#brutto').val();
  var podatek = ( (parseInt(brutto) * parseInt(+podatki[$('#stan').val()-1])) / 100 ).toFixed(2);
  var pensja =brutto-parseInt(podatek);

  //Validacja czy wybrano stan i czy pensja nie jest pusta
  if($('#brutto').val()!= null && $('#stan').val()!=0)
    {
    $('#podatek').val(podatek);
    $('#netto').val(pensja.toFixed(2));
    }

  else {
    alert("Wypełnij poprawnie dane")
  }
}

//Czysczenie pól
function czysc() {
  $('#podatek').val('');
  $('#netto').val('');
  $('#stan').val(0);
  $('#brutto').val('');
  $('#info').text('');
}
