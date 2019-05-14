<template>
  <div id="app">
    <Topbar/>
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <Navigation/>
        </div>
        <div class="column is-9">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from "./components/generics/Topbar.vue";
import Navigation from "./components/generics/Navigation.vue";
import AuthenticationService from "./services/authenticationService.js"
export default {
	components: {
		Navigation,
		Topbar
	},
};
</script>

<style lang="scss">
html,
body {
  font-family: "Open Sans", serif;
  font-size: 16px;
  line-height: 1.5;
  height: 100%;
  background: #ecf0f3;
}
</style>
