
<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
        <b-container>
          <b-row>
            <b-col>
              <h1>Onga Wellness Resort</h1>
            </b-col>
          </b-row>
        </b-container>
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
