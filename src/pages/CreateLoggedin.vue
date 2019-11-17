<template>
<div class="full-width center-content">
      <ul>
        <h1
          v-if="user"
          style="font-family:papyrus"
        >
          Hello {{ user.name }} !
        </h1>
        <p>We are working on the page. It will be available soon!</p>
      </ul>
    </div>
</template>

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
