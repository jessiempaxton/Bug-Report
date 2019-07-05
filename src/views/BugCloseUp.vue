<template>
  <div class="details container-fluid">
    <div class="row">
      <div class="col-12">
        <router-link :to="{name: 'home'}" style="font-family: 'Sintony', sans-serif; color: #2c3e50;">Return to Bug Log
        </router-link>
        <h1 style="font-family: 'Poppins', sans-serif;"><b>DETAILS</b></h1>
        <div class="col-12" style="align-items: center;">
          <div class="card border-dark mb-3 justify-content-center" style="width: 100vh;">
            <div class="card-header bg-transparent border-dark">Author: {{bug.creator}}</div>
            <div class="card-body text-dark">
              <h5 class="card-title">{{bug.title}}</h5>
              <h5 class="card-title" :class="[bug.closed ? 'black' : 'green']">{{bug.closed ? 'closed' : 'open'}}</h5>
              <p class=" card-text">{{bug.description}}</p>
            </div>
            <div class="card-footer bg-transparent border-dark">
              <button class="btn btn-danger" @click="resolveBug(bug)" :disabled="bug.closed">Resolve Bug</button>
              <button class="btn btn-danger offset-1" data-toggle="modal" data-target="#noteModal"
                :disabled="bug.closed">Add Note</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="noteModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
      aria-hidden="true">
      <div class="modal-dialog cascading-modal" role="document">
        <div class="modal-content">
          <div class="modal-header info-color white-text">
            <h4 class="title">
              <i class="fa fa-pencil-alt"></i> Bug Note Form</h4>
            <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addNote">
              <label for="defaultFormNameModalEx">Your name</label>
              <input required v-model="newNote.creator" type="text" id="defaultFormNameModalEx"
                class="form-control form-control-sm">
              <br>
              <select v-model="newNote.flagged">
                <option value="pending" selected>Pending</option>
                <option value="completed">Completed</option>
                <option value="rejected">Rejected</option>
              </select>
              <br />
              <label for="defaultFormMessageModalEx">Note Description</label>
              <textarea required v-model="newNote.content" type="text" id="defaultFormMessageModalEx"
                class="md-textarea form-control"></textarea>
              <div class="text-center mt-4 mb-2">
                <button type="submit" class="btn btn-info">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
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

<style>
  .details {
    background-color: #dddddd;
    height: 100%;
  }
</style>