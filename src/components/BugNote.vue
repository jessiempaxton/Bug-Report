<template>
  <div class="bugNote">
    <form>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h6 class="card-title">{{ note.creator }} </h6>
          <p class="card-text">{{ note.content }}</p>
        </div>
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
    props: ['note'],
    data() {
      return {
        // newNote: {
        //   title: "",
        //   content: "",
        //   creator: "",
        //   flagged: "",
        // }
      };
    },
    methods: {
    }
  }
</script>