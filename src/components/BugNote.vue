<template>
  <div class="bugNote">
    <form>
      <!-- //@submit.prevent="handleSubmit" -->
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note title</h5>
          <h6 class="card-title">Note Author</h6>
          <p class="card-text">Note content.
          </p>
        </div>
        <!-- <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul> -->
        <div class="card-body">
          <button type="submit">Delete Note?</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "BugNote",
    data() {
      return {
        newNote: {
          title: "",
          content: "",
          creator: "",
          flagged: "",
        }
      };
      methods: {
        // handleSubmit() {
        //   let data = {
        //     newNote: this.newNote,
        //   }
        //   this.$store.dispatch('createNote', data)
        // }
      }
    }
  };