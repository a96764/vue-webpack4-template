<template>
  <div>
    <li
      v-for="program in programs"
      :key="program"
    >
      <div>
        <b-card-group deck>
          <b-card
            :title="program.name"
            :img-src="program.img"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              {{ program.text }}
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>
    </li>
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
