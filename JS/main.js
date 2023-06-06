const minhaSenha = 12345;
const fullName = 'samuel';

const formLogin = document.querySelector('.loginFields');

formLogin.addEventListener("submit" ,function(e){
	e.preventDefault();

	var name = e.target.querySelector('#full-name').value;
	var name = e.target.querySelector('#email').value;
	var name = e.target.querySelector('#password').value;
	
	if(name==fullName){
		
	}
	

})