$(function () {
  $("#vki_hesapla").on("click", function () {
    let kilo = Number($("#kilo").val());
    let boy = Number($("#boy").val()) / 100;

    let vki = Math.round(Number(kilo / Math.pow(boy, 2)));
    $("#result").html("vki: <b>" + vki + "</b> <br/>");

    if(vki<18){
        $("#result2").html("vki: <b> Zayıfsınız</b>");
    }else {

        $("#result2").html("vki: <b> normal kilo </b>");
    }

  });
});
