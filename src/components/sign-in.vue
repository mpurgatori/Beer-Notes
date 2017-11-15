<template>
  <div>
    <h1>Sign In or Sign up</h1>
    <form>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Email:</label>
            <input type="text" class="form-control" v-model="item.name">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Password:</label>
              <input type="text" class="form-control col-md-6" v-model="item.price">
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Sign In</button>
        </div>
    </form>
    <div id='firebaseui-auth-container'></div>
  </div>
</template>
<script>
export default {
    data(){
        return{
          item:{}
        }
    },
    methods: {
      addItem(){

      }
  }
}
</script>
