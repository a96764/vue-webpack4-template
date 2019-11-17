<template>
  <div>
    <!--Section: Contact v.2-->
    <section class="mb-4">
      <!--Section heading-->
      <div>
        <b-card
          overlay
          img-src="https://i.pinimg.com/originals/1e/df/a3/1edfa3ce874c318c471aabea9b515535.jpg"
          img-alt="Card Image"
          text-variant="white"
        >
          <b-card-text>
            <h2 class="h1-responsive font-weight-bold text-center my-4">
              Contact us
            </h2>
            <p class="text-center w-responsive mx-auto mb-5">
              Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
              a matter of hours to help you.
            </p>
          </b-card-text>
        </b-card>
      </div>

      <hr>
      <div class="row">
        <!--Grid column-->
        <div class="col-md-9 mb-md-0 mb-5">
          <form
  action="https://formspree.io/xleeoqzl"
  method="POST"
>
  <label>
    Your email:
    <input type="text" name="_replyto">
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>

  <!-- your other form fields go here -->

  <button class="btn btn-info" type="submit">Send</button>
</form>
          
          <div class="status" />
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-md-3 text-center">
          <ul class="list-unstyled mb-0">
            <li>
              <i class="fas fa-map-marker-alt fa-2x" />
              <p>Via Lungolago Conca d'Oro, 11, 38069 Nago-Torbole TN, Italy</p>
            </li>

            <li>
              <i class="fas fa-phone mt-4 fa-2x" />
              <p>+ 01 234 567 89</p>
            </li>

            <li>
              <i class="fas fa-envelope mt-4 fa-2x" />
              <p>retreat@onga.com</p>
            </li>
          </ul>
        </div>
        <!--Grid column-->
      </div>
    </section>
    <!--Section: Contact v.2-->
  </div>
</template>

<style>
form {
    max-width: 450px;
    margin: 0 auto 100px;
}
label {
    display: block;
    margin-bottom: 100px;
}
span {
    display: block;
}
.info {
    label {
        width: 100%;
        padding-right: 10px;
        float: left;
    }
}
input, textarea {
    border: 3px solid;
    width: 100%;
}
</style>
