<template>
  <div class="backlog">
    <h1>Bug Backlog:</h1>
    <table class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope=" col">Author</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col">Date Opened</th>
        </tr>
      </thead>
      <tbody v-for="(bug, index) in bugs" :key="bug._id">
        <tr>
          <th scope="row">{{ index+1 }}</th>
          <td>
            <router-link :to=" {name: 'bugcloseup' , params: { id: bug._id }}">{{ bug.title }}</router-link>
          </td>
          </td>
          <td>
            <router-link :to="{name: 'bugcloseup', params: { id: bug._id }}">{{ bug.creator }}</router-link>
          </td>
          <td>
            <router-link :to="{name: 'bugcloseup', params: { id: bug._id }}">
              {{ bug.closed ? 'closed' : 'open' }}
            </router-link>
          <td>
            <router-link :to="{name: 'bugcloseup', params: { id: bug._id }}">
              {{ new Date(bug.createdAt).toLocaleDateString() }}</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- v-if="{'bug.closed= closed' ? 'color= red' : 'color= green'}" -->
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
  }
</script>

<style>
  /* .router-link {} */
</style>