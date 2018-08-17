import axios from 'axios'

export default() => {
  if (process.env.NODE_ENV === 'production') {
    return axios.create({
      baseURL: `http://lowest-number.herokuapp.com`
    })
  } else {
    return axios.create({
      baseURL: `http://localhost:8081`
    })
  }
}
