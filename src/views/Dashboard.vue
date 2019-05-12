<template>
  <div>
    <Welcome name="Hjalte"/>
    <Titles/>
    <div class="columns">
      <div class="column is-6">
        <PatientList/>
      </div>
      <div class="column is-6">
        <Search/>
        <Search/>
      </div>
    </div>
  </div>
</template>

<script>
import Welcome from "@/components/dashboard/Welcome.vue";
import Titles from "@/components/dashboard/Titles.vue";
import PatientList from "@/components/dashboard/PatientList.vue";
import Search from "@/components/dashboard/Search.vue";
export default {
  components: {
    Welcome,
    Titles,
    PatientList,
    Search
  }
};
</script>

<style lang="scss" scoped>
.columns {
  width: 100%;
  height: 100%;
  margin-left: 0;
}

.card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  margin-bottom: 2rem;
}
.card-header-title {
  color: #8f99a3;
  font-weight: 400;
}

.card .content {
  font-size: 14px;
}
.card-footer-item {
  font-size: 14px;
  font-weight: 700;
  color: #8f99a3;
}
.card-footer-item:hover {
}
.card-table .table {
  margin-bottom: 0;
}
</style>