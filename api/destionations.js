import axios from 'axios'

export default {
getDestinations() {
return axios.get('/api/v1/taxonomy/destinations')
}
}