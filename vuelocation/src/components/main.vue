<template>
  <div class="main">
    <h1>{{ header }}</h1>
      <p> {{ message }}</p>
        <div class="temp">
          <form id="weather-form" @submit.prevent="processForm">
            <input type="text" name="city" v-model="location" placeholder="Zone">
            <button type="submit">Show Temperature</button>
          </form>
        </div>
    <h3> {{ requestedCity }} </h3>
    <h3> {{ requestedTemp }}  </h3>
    <h3> {{ errmessage }}  </h3>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      header: 'Welcome to HelloWeather',
      message: 'Please write a zone:',
      location: '',
      requestedCity: '',
      requestedTemp: '',
      errmessage: ''
    }
  },
  methods: {
    processForm: function () {
      if (this.location.length === 0) {
        this.errmessage = 'Zone cannot be empty'
      }
      axios.post('http://localhost:3000', { city: this.location })
        .then((response) => {
          this.requestedCity = response.data.city
          this.requestedTemp = response.data.temp + ' °C'
          this.errmessage = ''
        })
    }
  }
}
</script>
