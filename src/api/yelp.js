import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer -w-B2WTL7qS2rJdoDKMqA05Kx_9VmvvXRf85uy_duRNqU2nWmu64Bn9tM2M5iccyS8P3K5NFAluJ8pLFU4coH16OywLfvkBS0APD3uEjB-bRYHxIhQtWgx1R-BtXXnYx',
  },
});