<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <report-bug />
        <bugs />
      </div>
    </div>
  </div>
</template>

<script>
  import ReportBug from "@/components/ReportBug.vue";
  import Bugs from "@/components/Bugs.vue"

  export default {
    name: "home",
    mounted() {
      this.$store.dispatch("getBugs");
    },
    computed: {
      bug() {
        return this.$store.state.bug;
      },
    },
    components: {
      Bugs,
      ReportBug
    }
  };

</script>