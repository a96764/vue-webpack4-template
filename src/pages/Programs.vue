<template>
  <div>
    <b-container>
      <b-row>
        <b-col-6
          v-for="program in programs"
          :key="program"
        >
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
          </b-vol-4>
          <b-row />
        </b-col-6>
      </b-row>
    </b-container>
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
    fetch('https://api.myjson.com/bins/w9rem')
      .then(response => response.json())
      .then(json => {
        this.programs = json.programs
      })
  }
}
</script>


