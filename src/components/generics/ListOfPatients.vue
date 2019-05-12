<template>
  <div>
    <header class="card-header">
      <p class="card-header-title">Patients</p>
    </header>
    <div class="card-table">
      <div class="content">
        <table class="table is-fullwidth is-striped">
          <tbody>
            <tr>
              <td width="5%">
                <i class="fas fa-user"></i>
              </td>
              <td>Bente Johansen</td>
              <td>
                <router-link
                  :to="{ name: 'patient', params: {id: '1' }}"
                  class="is-pulled-right button is-small is-primary"
                  href="#"
                >View</router-link>
              </td>
            </tr>
            <tr>
              <td width="5%">
                <i class="fas fa-user"></i>
              </td>
              <td>Bente Johansen</td>
              <td>
                <router-link
                  :to="{ name: 'patient', params: {id: '2' }}"
                  class="is-pulled-right button is-small is-primary"
                  href="#"
                >View</router-link>
              </td>
            </tr>
            <tr>
              <td width="5%">
                <i class="fas fa-user"></i>
              </td>
              <td>Bente Johansen</td>
              <td>
                <router-link
                  :to="{ name: 'patient', params: {id: '3' }}"
                  class="is-pulled-right button is-small is-primary"
                  href="#"
                >View</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["patients"]
};
</script>

<style lang="scss" scoped>
</style>