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
            id="contact-form"
            name="contact-form"
            action="mail.php"
            method="POST"
          >
            <!--Grid row-->
            <div class="row">
              <!--Grid column-->
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    class="form-control"
                  >
                  <label
                    for="name"
                    class=""
                  >Your name</label>
                </div>
              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input
                    id="email"
                    type="text"
                    name="email"
                    class="form-control"
                  >
                  <label
                    for="email"
                    class=""
                  >Your email</label>
                </div>
              </div>
              <!--Grid column-->
            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    class="form-control"
                  >
                  <label
                    for="subject"
                    class=""
                  >Subject</label>
                </div>
              </div>
            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row">
              <!--Grid column-->
              <div class="col-md-12">
                <div class="md-form">
                  <textarea
                    id="message"
                    type="text"
                    name="message"
                    rows="2"
                    class="form-control md-textarea"
                  />
                  <label for="message">Your message</label>
                </div>
              </div>
            </div>
            <!--Grid row-->
          </form>

          <div class="text-center text-md-left">
            <a
              class="btn btn-info"
              onclick="document.getElementById('contact-form').submit();"
            >Send</a>
          </div>
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
