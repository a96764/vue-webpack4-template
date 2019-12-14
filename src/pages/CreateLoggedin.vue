<template>
  <div class="full-width center-content">
    <ul>
      <h1
        v-if="user"
        style="font-family:papyrus"
      >
        Hello {{ user.name }} !
      </h1>
      <h1>Hello!</h1>
       <div>
    <b-form-select v-model="selected" :options="options"></b-form-select>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
    </ul>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Please select the program' },
          { value: 'Fitness', text: 'Fitness' },
          { value: 'Yoga', text: 'Yoga' },
          { value: 'Relaxation' , text: 'Relaxation' },
          { value: 'Weight Loss', text: 'Weight Loss', disabled: true }
        ]
      }
    }
  }
</script>
