import Api from '@/services/Api'

export default {
  fetchEvents () {
    return Api().get('events')
  },
  getGame (params) {
    return Api().get('getGame/' + params.id)
  },
  addEvent (params) {
    return Api().post('add_event', params)
  },
  getCurrentGame () {
    return Api().get('currentGame')
  }

}
