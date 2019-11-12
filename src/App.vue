<template>
  <div class="container center-content">
    <b-container class="bv-example-row">
      <b-row>
        <b-col
          cols="12"
          offset="0"
        >
          <div>
            <b-navbar
              toggleable="lg"
              type="dark"
              variant="dark"
            >
              <b-navbar-toggle target="nav-collapse" />
              <b-collapse
                id="nav-collapse"
                is-nav
              >
                <b-navbar-nav>
                  <b-link
                    to="/"
                    router-tag="b-nav-item"
                  >
                    HOME
                  </b-link>

                  <b-link
                    to="/"
                    router-tag="b-nav-item"
                  />

                  <b-link
                    to="/about"
                    router-tag="b-nav-item"
                  >
                    ABOUT
                  </b-link>

                  <b-link
                    to="/"
                    router-tag="b-nav-item"
                  />

                  <b-link
                    to="/programs"
                    router-tag="b-nav-item"
                  >
                    PROGRAMS
                  </b-link>

                  <b-link
                    to="/"
                    router-tag="b-nav-item"
                  />

                  <b-link
                    to="/nutrition"
                    router-tag="b-nav-item"
                  >
                    NUTRITION
                  </b-link>

                  <b-link
                    to="/"
                    router-tag="b-nav-item"
                  />

                  <b-link
                    to="/bookings"
                    router-tag="b-nav-item"
                  >
                    BOOKINGS
                  </b-link>

                  <b-link
                    to="/"
                    router-tag="b-nav-item"
                  />

                  <b-link
                    to="/contact"
                    router-tag="b-nav-item"
                  >
                    CONTACT
                  </b-link>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <RouterView />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="stylus" scoped>
.container
    font-family 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
    max-width 1200px
</style>
