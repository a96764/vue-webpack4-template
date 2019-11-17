<template>
  <b-card
    overlay
    img-src="https://nourishdaily.com/wp-content/uploads/2015/11/Aro-Ha-Final-2015-1-2-1024x682.jpg"
    img-alt="Card Image"
    text-variant="white"
  >
    <b-card-text>
      <h2 class="h1-responsive text-center my-4">
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
