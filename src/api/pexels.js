import axios from "axios";

export default axios.create({
    baseURL: 'https://api.pexels.com/v1/search',
    headers: {
        Authorization: '563492ad6f91700001000001c1adf319769f4a5e9878dec9213f47fe'
      }
})