<template>
  <div class="row">
    <div class="col">
      <button class="btn btn-danger" data-toggle="modal" data-target="#bugModal">Report a
        Bug</button>
      <div class="modal fade" id="bugModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog cascading-modal" role="document">
          <div class="modal-content">
            <div class="modal-header info-color white-text">
              <h4 class="title">
                <i class="fa fa-pencil-alt"></i> Report Bug Form</h4>
              <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="createBug">
                <label for="defaultFormNameModalEx">Your name</label>
                <input required v-model="newBug.creator" type="text" id="defaultFormNameModalEx"
                  class="form-control form-control-sm">
                <br>
                <label for="defaultFormTitleModalEx">Bug Title</label>
                <input required v-model="newBug.title" type="text" id="defaultFormTitleModalEx"
                  class="form-control form-control-sm">
                <br>
                <label for="defaultFormMessageModalEx">Bug Description</label>
                <textarea required v-model="newBug.description" type="text" id="defaultFormMessageModalEx"
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
  </div>
</template>


<script>
  export default {
    name: "ReportBug",
    data() {
      return {
        newBug: {
          creator: "",
          description: "",
          title: "",
          closed: Boolean,
        }
      };
    },
    methods: {
      createBug() {
        this.$store.dispatch('createBug', this.newBug)
      },
    }
  }

</script>

<style>

</style>