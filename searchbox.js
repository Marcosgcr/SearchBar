
var a = document.getElementById('Enter')
var texto = document.getElementById("Procure")
a.addEventListener('click',Procura)
  
function Procura(){
  if (texto.innerHTML.lenght == 0){
    window.alert("Não foi possível buscar, você não inseriu nenhuma palavra na caixa de busca")
  }else{
    window.alert("Inserir aqui a procura")
  }
