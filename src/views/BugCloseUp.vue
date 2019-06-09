<template>
  <div class="details container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>BUG DETAILS</h1>
        <div class="card border-danger mb-3 justify-content-center" style="width: 100vh;">
          <div class="card-header bg-transparent border-danger">Author: {{bug.creator}}</div>
          <div class="card-body text-success">
            <h5 class="card-title">{{bug.title}}</h5>
            <p class="card-text">{{bug.description}}
            </p>
          </div>
          <div class="card-footer bg-transparent border-danger">
            <button class="btn btn-danger" data-toggle="modal" data-target="#noteModal">Add Note</button>
            <button>Mark Bug as Resolved</button>
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
                <label for="defaultFormTitleModalEx">Note Title</label>
                <input required v-model="newNote.title" type="text" id="defaultFormTitleModalEx"
                  class="form-control form-control-sm">
                <br>
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
    </div>
  </div>
  </div>
</template>

<script>
  import ReportBug from "@/components/ReportBug.vue";
  import Bugs from "@/components/Bugs.vue";

  export default {
    name: 'Bug',
    props: ["id"],

    mounted() {
      this.$store.dispatch("setBug", this.id)
    },

    data() {
      return {
        newNote: {
          title: "",
          content: "",
          creator: "",
          flagged: "",

        }
      };
    },

    computed: {
      bug() {
        return this.$store.state.bug
      }
    },
    methods: {
      addNote(item) {
        this.$store.dispatch('addNote', item)
      }
    }
  }

</script>