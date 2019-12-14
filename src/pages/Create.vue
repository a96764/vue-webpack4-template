<template>
  <div>
    <b-alert show>
      Please Login in order to personalize your wellness retreat. <div>
        <b-link href="#/register">
          If you do not have an account click here to register.
        </b-link>
      </div>
    </b-alert>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <form @submit="formSubmit">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
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
      this.$axios.post('/users/login', {
        password: this.password,
        email: this.email
      })
        .then(response => {
          console.log(response)
          sessionStorage.userId = JSON.stringify(response.data.data.id)
          sessionStorage.userName = JSON.stringify(response.data.data.name)
          console.log(sessionStorage)
          if (response.data.data.id) {
            alert('Hello ' + sessionStorage.userName)
            this.$router.push('/createloggedin')
          } else { alert('User does not exist. Try again') }
        })
    }
  } }

</script>

<style>

<style>
.form-1 {
    /* Size & position */
    width: 300px;
    margin: 60px auto 30px;
    padding: 10px;
    position: relative; /* For the submit button positioning */

    /* Styles */
    box-shadow:
        0 0 1px rgba(0, 0, 0, 0.3),
        0 3px 7px rgba(0, 0, 0, 0.3),
        inset 0 1px rgba(255,255,255,1),
        inset 0 -3px 2px rgba(0,0,0,0.25);
    border-radius: 5px;
    background: linear-gradient(#eeefef, #ffffff 10%);
}

.form-1 .field {
    position: relative; /* For the icon positioning */
}

.form-1 .field i {
    /* Size and position */
    left: 0px;
    top: 0px;
    position: absolute;
    height: 36px;
    width: 36px;

    /* Line */
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 1px 0 0 rgba(255, 255, 255, 0.7);

    /* Styles */
    color: #777777;
    text-align: center;
    line-height: 42px;
    transition: all 0.3s ease-out;
    pointer-events: none;
}
.form-1 input[type=text],
.form-1 input[type=password] {
    font-family: 'Lato', Calibri, Arial, sans-serif;
    font-size: 13px;
    font-weight: 400;
    text-shadow: 0 1px 0 rgba(255,255,255,0.8);

    /* Size and position */
    width: 100%;
    padding: 10px 18px 10px 45px;

    /* Styles */
    border: none; /* Remove the default border */
    box-shadow:
        inset 0 0 5px rgba(0,0,0,0.1),
        inset 0 3px 2px rgba(0,0,0,0.1);
    border-radius: 3px;
    background: #f9f9f9;
    color: #777;
    transition: color 0.3s ease-out;
}

.form-1 input[type=text] {
    margin-bottom: 10px;
}

.form-1 input[type=text]:hover ~ i,
.form-1 input[type=password]:hover ~ i {
    color: #52cfeb;
}

.form-1 input[type=text]:focus ~ i,
.form-1 input[type=password]:focus ~ i {
    color: #42A2BC;
}

.form-1 input[type=text]:focus,
.form-1 input[type=password]:focus,
.form-1 button[type=submit]:focus {
    outline: none;
}
.form-1 .submit {
    /* Size and position */
    width: 65px;
    height: 65px;
    position: absolute;
    top: 17px;
    right: -25px;
    padding: 10px;
    z-index: 2;

    /* Styles */
    background: #ffffff;
    border-radius: 50%;
    box-shadow:
        0 0 2px rgba(0,0,0,0.1),
        0 3px 2px rgba(0,0,0,0.1),
        inset 0 -3px 2px rgba(0,0,0,0.2);
}
.form-1 .submit:after {
    /* Size and position */
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    top: -2px;
    left: 30px;

    /* Styles */
    background: #ffffff;

    /* Other masks trick */
    box-shadow: 0 62px white, -32px 31px white;
}

</style>
