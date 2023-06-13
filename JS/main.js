const senhaCadastrada = 12345;
const fullName = 'samuel';

const formLogin = document.querySelector('.loginFields');

formLogin.addEventListener("submit" ,function(e){
	e.preventDefault();

	var name = e.target.querySelector('#full-name').value;
	var senha = e.target.querySelector('#password').value;
	var botaoClicado = e.submitter.name;
	if(botaoClicado="Login"){	
		if(name==fullName  && senhaCadastrada == senha){
			window.location.href = "https://samueloliveira-m.github.io/materialize/";
		}	
		else{
			alert("Invalido")
		}
	}

})