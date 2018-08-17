import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://lowest-number.herokuapp.com/`
  })
}
