<template>
  <div class="posts">
    <h1>Lowest number</h1>
    <div>
      <router-link v-bind:to="{ name: 'results' }" class="">Results</router-link>
    </div>
    <p>Guess a positive integer. The person with the lowest unique number wins!</p>
      <div class="form">
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
          </ul>
        </p>
        <div>
          <input type="text" name="name" placeholder="Name" v-model="name">
        </div>
        <div>
          <input type="number" name="number" placeholder="Number" v-model="number" min="1" step="1">
        </div>
        <div>
          <button class="app_post_btn" @click="addGuess">Guess</button>
        </div>
      </div>
  </div>
</template>

<script>
import EventService from '@/services/EventService'
export default {
  name: 'home',
  data () {
    return {
      name: '',
      number: 0,
      entry_limit: 3,
      gameId: 0,
      events: [],
      errors: [],
      debug: -1
    }
  },
  methods: {
    checkForm () {
      this.errors = []

      if (!this.name) {
        this.errors.push('Name required')
      }
      if (!this.number) {
        this.errors.push('Number required')
      }
      if (this.number < 1) {
        this.errors.push('Number must be at least 1')
      }
      if (this.number > 100000) {
        this.errors.push('Number must be less than 100000')
      }
      if (this.number % 1 !== 0) {
        this.errors.push('Number must be an integer')
      }
    },
    async getGame () {
      const response = await EventService.getGame({
        id: this.gameId
      })
      this.debug = response
      this.events = response.data.events
      if (this.events.length >= this.entry_limit) {
        this.gameId += 1
      }
      // this.$router.push({ name: 'Posts' })
    },
    async currentGame () {
      const response = await EventService.getCurrentGame({})
      this.debug = response.data
      this.gameId = response.data.id
      // this.$router.push({ name: 'Posts' })
    },
    async addGuess () {
      this.checkForm()
      if (this.errors.length) {
        this.$swal(
          `Input was not valid`,
          `Please fix the above errors`,
          'error'
        )
        return
      }
      await this.currentGame()
      await this.getGame()
      await EventService.addEvent({
        name: this.name,
        number: this.number,
        game: this.gameId
      })
      this.$swal(
        'Great!',
        `Your post has been updated!`,
        'success'
      )
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
ul {
  list-style: none;
  padding: 0px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>

