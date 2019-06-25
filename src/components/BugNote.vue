<template>
  <div class="notes container-fluid">
    <!-- <div class="row"> -->
    <!-- <div class="col-4"> -->
    <div class="bugNote col-4">
      <form>
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">{{ note.creator }} </h6>
            <p class="card-text">{{ note.content }}</p>
            <p class="card-text">{{ note.flagged }}</p>
          </div>
          <div class="card-body">
            <button type="btn btn-dager" @click="deleteNote(note)">Delete Note?</button>
          </div>
        </div>
      </form>
    </div>
    <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
  export default {
    name: "BugNote",
    props: ['note'],
    data() {
      return {
      };
    },

    methods: {
      deleteNote(note) {
        debugger
        this.$store.dispatch("deleteNote", note)
      }
    }
  }
</script>

<style scoped>
  /* .bugNote {} */
</style>