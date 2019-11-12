<template>
  <div>
    <h2> MENU</h2>
    <ul>
      <li
        v-for="program in programs"
        :key="program"
      >
        <div
          class="card mb-3"
          style="max-width: 540px;"
        >
          <div class="row no-gutters">
            <div class="col-md-4">
              <img
                :src="program.img"
                class="card-img"
                alt="image"
              >
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <div
                  class="alert alert-info"
                  role="alert"
                >
                  <h5>{{ program.name }}</h5>
                </div>
                <p class="card-text">
                  {{ program.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      programs: []
    }
  },
  created: function () {
    fetch('https://api.myjson.com/bins/ok3yi')
      .then(response => response.json())
      .then(json => {
        this.programs = json.programs
      })
  }
}
</script>
