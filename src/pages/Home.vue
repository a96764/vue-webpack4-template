
<template>
  <div>
  <div class="full-width center-content">
    <ul>
      <h1 style = "font-family:cursive"
        v-if="user"
      >
       Hello {{ user.name }} !
      </h1>
    </ul>
  </div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="black"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        class="hero"
        img-src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      >
        <hgroup class="overlay">
          <h1>ONGA</h1>
          <h2>Wellness Resort</h2>
        </hgroup>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://i1.wp.com/activenorcal.com/wp-content/uploads/2018/05/L2.jpg?fit=1500%2C843&ssl=1" />

      <b-carousel-slide img-src="https://i.ytimg.com/vi/KVx2Ag_Y4T4/maxresdefault.jpg" />

      <b-carousel-slide img-src="https://mustseeplaces.eu/wp-content/uploads/2017/11/Aro-Ha.jpg" />

      <b-carousel-slide img-src="https://indyeastend.com/wp-content/uploads/2018/08/Trapeze-1.jpg" />
    </b-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<script>
export default {
  data: function () {
    return {
      user: undefined
    }
  },
  created: function () {
    fetch('https://api.myjson.com/bins/17yade')
      .then(response => response.json())
      .then(json => {
        this.products = json.products
      })
  },
  mounted: function () {
    let v = sessionStorage.user
    if (v !== 'undefined') {
      this.user = JSON.parse(v)
    }
  }
}
</script>

<style>
.fade-carousel {
    position: relative;
    height: 100vh;
}
.fade-carousel .carousel-inner .item {
    height: 100vh;
}
.fade-carousel .carousel-indicators > li {
    margin: 0 2px;
    background-color: #f39c12;
    border-color: #f39c12;
    opacity: .7;
}
.fade-carousel .carousel-indicators > li.active {
  width: 10px;
  height: 10px;
  opacity: 1;
}

/********************************/
/*          Hero Headers        */
/********************************/
.hero {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 3;
    color: black;
    text-align: center;
    text-shadow: 1px 1px 0 rgba(0,0,0,.75);
        transform: translate3d(-50%,-50%,0);
}
.hero h1 {
    font-family: papyrus;
    font-size: 6em;
    font-weight: bold;
    margin: 0;
    padding: 0;
}

h2 {
    font-family: Apple Chancery;
}

.fade-carousel .carousel-inner .item .hero {
    opacity: 0;
    -webkit-transition: 2s all ease-in-out .1s;
       -moz-transition: 2s all ease-in-out .1s;
        -ms-transition: 2s all ease-in-out .1s;
         -o-transition: 2s all ease-in-out .1s;
            transition: 2s all ease-in-out .1s;
}
.fade-carousel .carousel-inner .item.active .hero {
    opacity: 1;
    -webkit-transition: 2s all ease-in-out .1s;
       -moz-transition: 2s all ease-in-out .1s;
        -ms-transition: 2s all ease-in-out .1s;
         -o-transition: 2s all ease-in-out .1s;
            transition: 2s all ease-in-out .1s;
}

/********************************/
/*            Overlay           */
/********************************/
.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    opacity: 1;
}

/********************************/
/*          Media Queries       */
/********************************/
@media screen and (min-width: 980px){
    .hero { width: 980px; }
}
@media screen and (max-width: 640px){
    .hero h1 { font-size: 4em; }
}
</style>
