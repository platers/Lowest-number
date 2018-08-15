<template>
  <div class="posts">
    <h1>Lowest number</h1>
    <div>
      <router-link v-bind:to="{ name: 'results' }" class="">Results</router-link>
    </div>
    <p>Guess a positive integer. The person with the lowest unique number wins!</p>
      <div class="form">
        <div>
          <input type="text" name="name" placeholder="Name" v-model="name">
        </div>
        <div>
          <input type="text" name="number" placeholder="Number" v-model="number">
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
      number: '',
      entry_limit: 3,
      gameId: 0,
      events: [],
      debug: -1
    }
  },
  methods: {
    async getGame () {
      const response = await EventService.getGame({
        id: this.gameId
      })
      this.events = response.data.events
      if (this.events.length >= this.entry_limit) {
        this.gameId += 1
      }
      // this.$router.push({ name: 'Posts' })
    },
    async addGuess () {
      await this.currentGame()
      await this.getGame()
      await EventService.addEvent({
        name: this.name,
        number: this.number,
        game: this.gameId
      })
      // this.$swal(
      //   'Great!',
      //   `Your post has been updated!`,
      //   'success'
      // )
      this.$router.push({ name: 'home' })
    },
    async currentGame () {
      var buf = await EventService.getCurrentGame().data
      if (buf) {
        this.gameId = buf.id
        this.debug = buf.id
      }
      // this.$router.push({ name: 'Posts' })
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

