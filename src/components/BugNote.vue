<template>
  <div class="col-4">
    <form>
      <div class="card">
        <div class="card-body">
          <h6 class="card-title">{{ note.creator }} </h6>
          <p class="card-text">{{ note.content }}</p>
          <p class="card-text">{{ note.flagged }}</p>
        </div>
        <div class="card-body">
          <button class="btn btn-danger" @click="deleteNote(note)">Delete Note?</button>
        </div>
      </div>
    </form>
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
</style>