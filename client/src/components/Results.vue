<template>
  <div class="posts">
    <h1>Lowest number</h1>
    <p>Guess a positive integer. The person with the lowest unique number wins!</p>
    <div class="table">
      <table>
          <tr v-for="event in events" v-bind:key="event.id" v-bind:class="event.color ? 'white' : 'gray'">
              
              <td>{{event.name}}</td>
              <td>{{event.number}}</td>
              <td v-if="event.winner">WINN</td>
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
      events: []
    }
  },
  mounted () {
    this.getEvents()
  },
  methods: {
    async getEvents () {
      const response = await EventService.fetchEvents({})
      const events = response.data.events
      var winners = {}
      for (var i = events.length - 1; i >= 0; i--) {
        if (i > 0 && events[i].number === events[i - 1].number && events[i].game === events[i - 1].game) {
          continue
        }
        if (i < events.length && events[i].number === events[i + 1].number && events[i].game === events[i + 1].game) {
          continue
        }
        winners[events[i].game] = events[i].number
      }
      for (var e of events) {
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
table {

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

