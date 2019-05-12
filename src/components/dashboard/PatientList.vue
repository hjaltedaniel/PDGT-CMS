<template>
  <div class="card events-card">
    <ListOfPatients/>
    <footer class="card-footer">
      <router-link :to="{ name: 'patients' }" class="card-footer-item">View All</router-link>
    </footer>
  </div>
</template>

<script>
import ListOfPatients from "@/components/generics/ListOfPatients.vue";
export default {
  components: {
    ListOfPatients
  },
  data() {
    return {
      patients: [
        {
          name: "Bente Johansen",
          id: "2"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.events-card .card-table {
  max-height: 250px;
  overflow-y: scroll;
}
</style>