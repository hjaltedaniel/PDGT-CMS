<template>
  <div class="card events-card">
    <header class="card-header">
      <p class="card-header-title">Patient metadata</p>
    </header>
    <div class="card-table">
      <div class="content">
        <table class="table is-fullwidth is-striped">
          <tbody>
            <tr>
              <td>
                <strong>Name</strong>
              </td>
              <td>Bente Johansen</td>
            </tr>
            <tr>
              <td>
                <strong>Group</strong>
              </td>
              <td>Intervention</td>
            </tr>
            <tr>
              <td>
                <strong>Project start date</strong>
              </td>
              <td>2019-05-03</td>
            </tr>
            <tr>
              <td>
                <strong>RedCap record ID</strong>
              </td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
        <footer class="card-footer">
          <a href="#" class="button card-footer-item is-primary">Edit</a>
          <a href="#" class="button card-footer-item is-danger">Delete</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card-footer {
  .button {
    margin: 10px;
  }
}
</style>