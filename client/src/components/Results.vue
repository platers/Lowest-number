<template>
  <div class="posts">
    <h1>Lowest number</h1>
    <p>Guess a positive integer. The person with the lowest unique number wins!</p>
    <ul>
        <li v-for="event in events" v-bind:key="event.id">
            {{event.game}}, {{event.name}}, {{event.number}}
        </li>
    </ul>
  </div>
</template>

<script>
import EventService from '@/services/EventService'
export default {
  name: 'results',
  data () {
    return {
      events: []
    }
  },
  mounted () {
    this.getEvents()
  },
  methods: {
    async getEvents () {
      const response = await EventService.fetchEvents({})
      this.events = response.data.events
      // this.$router.push({ name: 'Posts' })
    },
    async currentGame () {
      const response = await EventService.getCurrentGame({})
      return response
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

