<template>
  <nav class="navbar is-white">
    <div class="container">
      <div class="navbar-brand">
        <router-link :to="{ name: 'dashboard' }" class="navbar-item brand-text">SDU PDGT Admin</router-link>
      </div>
      <div class="navbar-end">
        <a class="button is-small is-danger" href="#">Sign out</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav.navbar {
  border-top: 4px solid #276cda;
  margin-bottom: 1rem;
}
.navbar-item.brand-text {
  font-weight: 300;
}
.navbar-item,
.navbar-link {
  font-size: 14px;
  font-weight: 700;
}
</style>