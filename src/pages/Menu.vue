<template>
<p>Menu under construction.</p>
<ul>
    <li v-for="product in menu">
        {{ product.name }}
    </li>
</ul>
</template>

<script>
export default {
  data: function () {
    return {
      menu: []
    }
  },
  created: function () {
    fetch('https://api.myjson.com/bins/pwtwz')
      .then(response => response.json())
      .then(json => {
        this.menu = json.products
      })
  }
}

</script>
