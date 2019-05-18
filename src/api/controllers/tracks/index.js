import baserequest from './../baserequest'

export default {
  getTracks (name) {
    console.log(baserequest.URL)
    return baserequest.get(`?q=${name}&type=track`)
  }
}
