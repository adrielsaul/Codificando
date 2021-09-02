function myFunction(){
  if(document.getElementById("selecionaCifra").value == "cesar"){
      document.getElementById("cesar").style.display = "flex";
      document.getElementById("base64").style.display = "none";
      
      
  }
  else if(document.getElementById("selecionaCifra").value == "base64"){
      
      document.getElementById("base64").style.display = "flex";
      document.getElementById("cesar").style.display = "none";

  } else{

    document.getElementById("cesar").style.display = "none";
    document.getElementById("base64").style.display = "none";
}


}
function a(){
  var s = document.getElementById("radioCod");
  var chave = document.getElementById("chavinha");
  var chavinha = parseInt(chave.value);
  chavinha = chavinha%26;
  console.log(s.value );
  if (document.getElementById('y').checked){
      chavinha = (-1)*chavinha
  }
  codeCesar(chavinha);
}

function codeCesar(chavinha){
  var entrada = document.getElementById("inputCesar").value;
  var saida = document.getElementById("cesarResultado"); 
  var y = "";
  saida.innerHTML = "";

  for (var i = 0; i < entrada.length; i++ ){
      y = entrada.charCodeAt(i);
      
      if (y>=97 && y<= 122){
          y = y + chavinha;
          if (y> 122){
              y = y - 26;
          }else if(y< 97){
              y = y + 26;
          }
      }

      if (y>=65 && y<= 90){
          y = y + chavinha;
          if (y> 90){
              y = y - 26;
          }else if(y<65){
              y = y + 26;
          }
      }
      saida.innerHTML += String.fromCharCode(y);
  }
  
}

function b(){

  var entrada = document.getElementById("inputBase64").value;
  var saida = document.getElementById("base64Resultado"); 
  
  var s = document.getElementById("radioCod");
 
  console.log(s.value );
  if (document.getElementById('y').checked){
      saida.innerHTML = atob(entrada);
  }
  else{
      console.log(btoa(entrada))
      
      saida.innerHTML = btoa(entrada);

  }
  
}