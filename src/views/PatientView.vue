<template>
  <div>
    <div class="columns">
      <div class="column is-6">
        <SessionList/>
      </div>
      <div class="column is-6">
        <PatientData/>
        <ExerciseList/>
      </div>
    </div>
  </div>
</template>

<script>
import SessionList from "@/components/patientView/SessionList.vue";
import PatientData from "@/components/patientView/PatientData.vue";
import ExerciseList from "@/components/patientView/ExerciseList.vue";
export default {
  components: { SessionList, PatientData, ExerciseList },
  props: ["id"]
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 2rem;
}
</style>