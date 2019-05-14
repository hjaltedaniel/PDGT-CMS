<template>
	<section class="hero">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-2">
                    <h3 class="title has-text-grey">Login</h3>
                    <p class="subtitle has-text-grey">Please login to proceed.</p>
                    <div class="box">
						<ul>
							<li v-for="(error, index) in appStore.authorization.errors" :key="index">
								<p class="help is-danger" v-for="e in error" :key="e">{{e}}</p>
							</li>
						</ul>
						<br/>
                        <form @submit.prevent="login">
                            <div class="field">
                                <div class="control">
                                    <input 
										class="input is-large" 
										type="email" 
										v-model="username"
										placeholder="Your Email" 
										autofocus="" 
										style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input 
										class="input is-large" 
										type="password" 
										v-model="password"
										placeholder="Your Password" 
										style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
							<input type="checkbox">
							Remember me
							</label>
                            </div>
                            <button 
								class="button is-block is-info is-large is-fullwidth"
							>
							Login
							</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import appStore from "./../stores/appStore.js"

export default {
	data() {
		return {
			appStore: appStore,
			username: null,
			password: null
		}
	},
	methods: {
		login() {
			this.appStore.authenticate(this.username, this.password);
		}
	}
}
</script>
