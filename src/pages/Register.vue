<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <form @submit="formSubmit">
              <strong>Name:</strong>
              <input
                v-model="name"
                type="text"
                class="form-control"
              >

              <strong>Email:</strong>
              <input
                v-model="email"
                type="text"
                class="form-control"
              >

              <strong>Password:</strong>
              <input
                v-model="password"
                type="password"
                class="form-control"
              >

              <button class="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  mounted () {
    console.log('Component mounted.')
  },
  methods: {
    formSubmit (e) {
      e.preventDefault()
      this.$axios.post('/users', {
        name: this.name,
        password: this.password,
        email: this.email
      })
      this.$router.push('/login')
    }
  }
}
</script>
