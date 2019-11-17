<template>
  <b-card
          overlay
          img-src="https://www.wallpapergeeks.com/wp-content/uploads/2014/02/Quiet-Night-Lake-Wallpaper-1024x575.jpg"
          img-alt="Card Image"
          text-variant="white"
        >
          <b-card-text>
            <h2 class="h1-responsive font-weight-bold text-center my-4">
              You are logged out.
            </h2>
          </b-card-text>
        </b-card>
</template>
<script>
export default {
  mounted: function () {
    sessionStorage.user = 'undefined'
  }
}
</script>