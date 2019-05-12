<template>
  <section class="hero is-info welcome is-small">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Hello, {{ name }}.</h1>
        <h2 class="subtitle">I hope you are having a great day!</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    name
  }
};
</script>

<style lang="scss" scoped>
.hero.welcome.is-info {
  background: #36d1dc;
  background: -webkit-linear-gradient(to right, #5b86e5, #36d1dc);
  background: linear-gradient(to right, #5b86e5, #36d1dc);
}
.hero.welcome .title,
.hero.welcome .subtitle {
  color: hsl(192, 17%, 99%);
}
</style>