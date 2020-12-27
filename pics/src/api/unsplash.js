import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID saupWLmv2aHhYEd-SU2yiVoKHjaczhufeAhZERl_-wo',
  },
});
