<template>
  <div class="row">
    <div class="col">
      <button class="btn btn-secondary" data-toggle="modal" data-target="#bugModal"
        style="font-family: 'Sintony', sans-serif;">Report a
        Bug</button>
      <!-- Report Bug Modal -->
      <div class="modal fade" id="bugModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div class="modal-dialog cascading-modal" role="document">
          <div class="modal-content">
            <div class="modal-header info-color white-text">
              <h4 class="title" style="font-family: 'Sintony', sans-serif; color: #113c4a;">
                <i class="fa fa-pencil-alt"></i> Report Bug Form</h4>
              <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" style="color: #113c4a;">×</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="createBug">
                <label for="defaultFormNameModalEx" style="font-family: 'Sintony', sans-serif; color: #113c4a;">Your
                  name</label>
                <input required v-model="newBug.creator" type="text" id="defaultFormNameModalEx"
                  class="form-control form-control-sm">
                <br>
                <label for="defaultFormTitleModalEx" style="font-family: 'Sintony', sans-serif; color: #113c4a;">Bug
                  Title</label>
                <input required v-model="newBug.title" type="text" id="defaultFormTitleModalEx"
                  class="form-control form-control-sm">
                <br>
                <label for="defaultFormMessageModalEx" style="font-family: 'Sintony', sans-serif; color: #113c4a;">Bug
                  Description</label>
                <textarea required v-model="newBug.description" type="text" id="defaultFormMessageModalEx"
                  class="md-textarea form-control"></textarea>
                <div class="text-center mt-4 mb-2">
                  <button type="submit" class="btn btn-secondary">Submit</button>
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
        $("#bugModal").modal("hide");
        $(".modal-backdrop").remove();
      },
    }
  }

</script>

<style scoped>
  .modal {
    background-color: #113c4a76;
  }
</style>