import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://eksenlojistik.com.tr'
});

export default {
  install: function(Vue) {
    Object.defineProperty(Vue.prototype, '$axios', { value: instance });
  }
}