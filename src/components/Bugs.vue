<template>
  <div class="backlog">
    <h1>Bug Backlog:</h1>
    <table class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">Number</th>
          <th scope="col">Status</th>
          <th scope="col">Author</th>
          <th scope="col">Title</th>
          <th scope="col">Date Opened/Closed</th>
        </tr>
      </thead>
      <tbody v-for="bug in bugs" :key="bug._id">
        <router-link :to="{name: 'bugcloseup', params: { id: bug._id }}">
          <tr>
            <th scopt="row">1</th>
            <td>{{ bug.closed }}</td>
            <td>{{ bug.creator }}</td>
            <td>{{ bug.title }}</td>
            <td>{{ bug.title }}</td>
          </tr>
        </router-link>
      </tbody>
    </table>
  </div>
  </div>
</template>


<script>
  export default {
    name: 'Bugs',

    data() {
      return {};
    },
    computed: {
      bugs() {
        return this.$store.state.bugs
      }
    }

    // selectBug(id){

    // }
  }
</script>

<style>


</style>