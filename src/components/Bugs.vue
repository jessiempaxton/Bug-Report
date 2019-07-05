<template>
  <div class="backlog">
    <h1 style="font-family: 'Poppins', sans-serif; color: #3f7b70;"><b>BACKLOG</b></h1>
    <table class="table table-dark table-hover" style="font-family: 'Sintony', sans-serif; background-color: #113c4a;">
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
          <th scope="row">
            <router-link :to=" {name: 'bugcloseup' , params: { id: bug._id }}"
              :class="[bug.closed ? 'darkgrey' : 'white']">{{ index+1 }}
            </router-link>
          </th>
          <td>
            <router-link :to=" {name: 'bugcloseup' , params: { id: bug._id }}"
              :class="[bug.closed ? 'darkgrey' : 'white']">{{ bug.title }}
            </router-link>
          </td>
          </td>
          <td>
            <router-link :to="{name: 'bugcloseup', params: { id: bug._id }}"
              :class="[bug.closed ? 'darkgrey' : 'white']">{{ bug.creator }}
            </router-link>
          </td>
          <td>
            <router-link :to="{name: 'bugcloseup', params: { id: bug._id }}"
              :class="[bug.closed ? 'darkgrey' : 'white']">
              {{ bug.closed ? 'closed' : 'open' }}
            </router-link>
          <td>
            <router-link :to="{name: 'bugcloseup', params: { id: bug._id }}"
              :class="[bug.closed ? 'darkgrey' : 'white']">
              {{ new Date(bug.createdAt).toLocaleDateString() }}</router-link>
          </td>
        </tr>
      </tbody>
    </table>
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
  }
</script>

<style>
  /* .router-link {} */
  .darkgrey {
    color: darkgrey;
  }

  .darkgrey:hover {
    color: darkgrey;
  }

  .white {
    color: white;
  }

  .white:hover {
    color: white;
  }
</style>