<template>
  <div class="details container-fluid">
    <div class="row">
      <div class="col-12">
        <router-link :to="{name: 'home'}" style="font-family: 'Sintony', sans-serif; color: #3f7b70;">Return to Bug Log
        </router-link>
        <h1 style="font-family: 'Poppins', sans-serif; color: #113c4a;"><b>DETAILS</b></h1>
        <div class="card border-dark mb-3 justify-content-center">
          <div class="card-header bg-transparent border-dark"
            style="font-family: 'Sintony', sans-serif; color: #113c4a;">
            Author:
            {{bug.creator}}</div>
          <div class="card-body text-dark">
            <h5 class="card-title" style="font-family: 'Poppins', sans-serif; color: #113c4a;">{{bug.title}}</h5>
            <h5 class="card-title" style="font-family: 'Sintony', sans-serif; color: #113c4a;">
              {{bug.closed ? 'closed' : 'open'}}</h5>
            <p class=" card-text" style="font-family: 'Sintony', sans-serif; color: #113c4a;">{{bug.description}}</p>
          </div>
          <div class="card-footer bg-transparent border-dark">
            <button class="btn btn-secondary" @click="resolveBug(bug)" :disabled="bug.closed"
              style="font-family: 'Sintony', sans-serif;">Resolve Bug</button>
            <button class="btn btn-secondary offset-1" data-toggle="modal" data-target="#noteModal"
              :disabled="bug.closed" style="font-family: 'Sintony', sans-serif;">Add Note</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Note Modal -->
    <div class="modal fade" id="noteModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
      aria-hidden="true">
      <div class="modal-dialog cascading-modal" role="document">
        <div class="modal-content">
          <div class="modal-header info-color white-text">
            <h4 class="title" style="font-family: 'Sintony', sans-serif; color: #113c4a;">
              <i class="fa fa-pencil-alt"></i> Bug Note Form</h4>
            <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" style="color: #113c4a;">×</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addNote">
              <label for="defaultFormNameModalEx" style="font-family: 'Sintony', sans-serif; color: #113c4a;">Your
                name</label>
              <input required v-model="newNote.creator" type="text" id="defaultFormNameModalEx"
                class="form-control form-control-sm">
              <br>
              <select v-model="newNote.flagged">
                <option value="pending" style="font-family: 'Sintony', sans-serif; color: #113c4a;" selected>Pending
                </option>
                <option value="completed" style="font-family: 'Sintony', sans-serif; color: #113c4a;">Completed</option>
                <option value="rejected" style="font-family: 'Sintony', sans-serif; color: #113c4a;">Rejected</option>
              </select>
              <br />
              <label for="defaultFormMessageModalEx" style="font-family: 'Sintony', sans-serif; color: #113c4a;">Note
                Description</label>
              <textarea required v-model="newNote.content" type="text" id="defaultFormMessageModalEx"
                class="md-textarea form-control"></textarea>
              <div class="text-center mt-4 mb-2">
                <button type="submit" class="btn btn-secondary"
                  style="font-family: 'Sintony', sans-serif;">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Notes Render Here -->
    <div class="row notes">
      <bug-note v-for="note in notes" :note="note" />
    </div>
  </div>
</template>

<script>
  import ReportBug from "@/components/ReportBug.vue";
  import Bugs from "@/components/Bugs.vue";
  import BugNote from "@/components/BugNote.vue";

  export default {
    name: 'Bug',
    props: ["id"],

    mounted() {
      this.$store.dispatch("setBug", this.id)
      this.$store.dispatch("getNotes", this.id)

    },

    data() {
      return {
        newNote: {
          content: "",
          creator: "",
          flagged: "pending",
          bugId: this.id
        }
      };
    },

    computed: {
      bug() {
        return this.$store.state.bug
      },
      notes() {
        return this.$store.state.notes
      },
      bugs() {
        return this.$store.state.bugs
      }
    },
    methods: {
      addNote() {
        this.$store.dispatch('addNote', this.newNote)
      },

      resolveBug(bug) {
        this.$store.dispatch('resolveBug', bug)
      }
    },
    components: {
      BugNote,
    }
  }

</script>

<style scoped>
  .details {
    background-color: #dddddd;
    height: 100vh;
  }

  .option:hover {
    color: darkgrey;
  }

  .notes {
    background-color: #dddddd;
  }

  .closed {
    color: #113c4a;
  }

  .closed:hover {
    color: #113c4a;
  }

  .open {
    color: #3f7b70;
  }

  .open:hover {
    color: #3f7b70;
  }

  .modal {
    background-color: #113c4a76;
  }
</style>