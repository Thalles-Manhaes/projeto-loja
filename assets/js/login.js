/*
  //1. O que eu tenho que fazer
   [] - Validar o formulário com os dados do usuário
   [] - cancelar o evento padrao do carregamento a pagina do formulario


  //2. O que eu preciso ter pra fazer
   [] - O formulario e e os campos do formulario

  //3. como eu faço

  [] - pegar sempre o formulario com atributos como id e name
  [] - pegar os campos do formulario com atributos como id e name


*/

let user = {name:"Thalles", password:"123456"};

let form = document.querySelector("#form > [id]");
console.log(form);
var fields = document.querySelectorAll("form [name]");

fields.forEach(function(field, index){

    if(field.name.value === user[field.name]){
        console.log(" e um nome");
    };

});

//deixando padrao o carregamento da página
let btn = document.querySelector(".btn-login");
btn.addEventListener("submit", (e)=>{
  e.preventDefault();
})

/*
tampar o cimento





*/


function cobrirCimento(cimento, tapado ){
  let Tampado = false;
  while( cimento !== tampado  ){
      cimento = Tampado
      if(cimento == tampado){
        tampado = true;
      }
  }
}
