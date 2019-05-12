<template>
  <aside class="menu is-hidden-mobile">
    <p class="menu-label">General</p>
    <ul class="menu-list">
      <li>
        <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'patients' }">Patients</router-link>
        <ul>
          <li>
            <a>Add patient</a>
          </li>
        </ul>
      </li>
      <li>
        <router-link :to="{ name: 'exercises' }">Exercises</router-link>
        <ul>
          <li>
            <a>Add exercise</a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
</script>

<style lang="scss" scoped>
.menu-label {
  color: #8f99a3;
  letter-spacing: 1.3;
  font-weight: 700;
}
.menu-list a {
  color: #0f1d38;
  font-size: 14px;
  font-weight: 700;
}
.menu-list a:hover {
  background-color: transparent;
  color: #276cda;
}
.menu-list a.is-active {
  background-color: transparent;
  color: #276cda;
  font-weight: 700;
}
</style>