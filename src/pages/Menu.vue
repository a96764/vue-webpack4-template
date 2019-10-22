<template>
    <ul>
      <li
        v-for="product in menu"
        :key="product"
      >
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
