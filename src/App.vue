<script setup>
import DoctorInfo from "./DoctorInfo.vue";
import Introduction from "./Introduction.vue";
import TryProject from "./TryProject.vue";
</script>

<template>
  <div class="surface-overlay">
    <!-- Introduction -->
    <Introduction></Introduction>

    <TryProject></TryProject>
    <!-- Doctor Info -->
    <DoctorInfo></DoctorInfo>
  </div>
</template>

<style>
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
</style>
