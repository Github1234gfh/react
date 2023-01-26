export const IsValidName = (name, func) => {

	name.length < 2 && name!=''?func(true):func(false)
}

export const NullFieldInput = (field, func) =>{
	field === ''? func(true):func(false)
}

export const IsValidEmail = (email, func) => {
	const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  !email.match(validRegex) && email !=''?func(true) :func(false)

}

export const IsValidPass = (pass, func, func2) => {
	const paswd = ['-' ,'_' , '@' , '$' , '!' , '*' , '^']
	const chech = []
	const dfs = paswd.map(elem => {
		chech.push(pass.includes(elem))
	})
	if(pass.length < 8 && pass!='') {
		func2(true)
	}
	else if ( !chech.includes(true) && pass!='') {
		func(true)
	}

	else {
		func(false)
		func2(false)
	}
}