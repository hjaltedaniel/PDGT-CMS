import config from "./../app.config";

export default {
	authenticate(username, password, callback) {
		var xmlhttp = new XMLHttpRequest();

		xmlhttp.onreadystatechange = () => {
			if (xmlhttp.readyState == XMLHttpRequest.DONE) {
				console.log(typeof xmlhttp.response);
				if (xmlhttp.response == "" || xmlhttp.response == null) {
					callback(xmlhttp.status, { login: ["Wrong username or password"] });	
				}
				else {
					callback(xmlhttp.status, JSON.parse(xmlhttp.response));	
				}
			}
		};
	
		xmlhttp.open("POST", config.apiEndpoint + "authenticate", true);
		xmlhttp.setRequestHeader("Content-Type", "application/json")
		xmlhttp.send(JSON.stringify({
			"Email": username,
			"Password": password
		}));
	}
}
