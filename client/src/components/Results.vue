<template>
  <div class="posts">
    <h1>Lowest number</h1>
    <p>Guess a positive integer. The person with the lowest unique number wins!</p>
    <p>Next game has {{numSubmissions}}/{{entry_limit}} submissions</p>
    <div class="table">
      <table>
          <tr>
            <td>Game</td>
            <td>Name</td>
            <td>Guess</td>
          </tr>
          <tr v-for="event in events" v-bind:key="event.id" v-bind:class="event.color ? 'white' : 'gray'">
            <td>{{event.game}}</td>
            <td>{{event.name}}</td>
            <td>{{event.number}}</td>
            <td v-if="event.winner"><img src="https://freeiconshop.com/wp-content/uploads/edd/star-curved-outline.png" width="13px"></td>
          </tr>
      </table>
    </div>
  </div>
</template>

<script>
import EventService from '@/services/EventService'
export default {
  name: 'results',
  data () {
    return {
      events: [],
      debug: [],
      entry_limit: 3,
      numSubmissions: 0
    }
  },
  mounted () {
    this.getEvents()
  },
  methods: {
    async getEvents () {
      const response = await EventService.fetchEvents({})
      const events = response.data.events
      this.debug = events
      var winners = {}
      var count = {}
      for (var i = events.length - 1; i >= 0; i--) {
        if (count[events[i].game]) count[events[i].game]++
        else count[events[i].game] = 1
        if (i > 0 && events[i].number === events[i - 1].number && events[i].game === events[i - 1].game) {
          continue
        }
        if (i < events.length - 1 && events[i].number === events[i + 1].number && events[i].game === events[i + 1].game) {
          continue
        }
        winners[events[i].game] = events[i].number
      }
      this.numSubmissions = events.length % this.entry_limit
      for (var e of events) {
        console.log(count[e.game])
        if (count[e.game] === this.entry_limit) {
          this.events.push(
            {
              name: e.name,
              game: e.game,
              number: e.number,
              color: e.game % 2,
              winner: winners[e.game] === e.number
            }
          )
        }
      }
      // this.$router.push({ name: 'Posts' })
    }
  }
}
</script>
<style type="text/css">
table {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border-spacing: 0;
}
td, th {
  padding-left: 20px;
  padding-right: 20px;
}
.table {
  margin: 0 auto;
  width: 200px; 
}
.gray {
  background-color: #D3D3D3;
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

