import authenticationService from "./../services/authenticationService";
import router from "../router";

class appStore {
	authorization = {
		token: "",
		isLogedIn: false,
		errors: {}
	};
	authProvider;

	constructor(authenticationProvider) {
		this.authProvider = authenticationProvider;
	};
	
	authenticate = (username, password) => {
		this.authProvider.authenticate(username, password, (status, response) => {
			if (status == 200) {
				this.authorization.token = response;
				this.authorization.isLogedIn = true;
			}
			else {
				this.authorization.errors = response;
			}
		});
		for(var key in this.authorization.errors) {
			if(this.authorization.errors.hasOwnProperty(key)){
				console.log("fail auth")
				return;
			}
		}
		router.push("/");
	}
}

export default new appStore(authenticationService);