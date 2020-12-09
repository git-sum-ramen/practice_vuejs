/* global axios, Vue */

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello Vue!",
      todos: []
    };
  },
  methods: {
    getData: function() {
    // HTTP.get('/user?ID=12345')
      // axios.get('https://jsonplaceholder.typicode.com/todos').then(function(response) {          
      axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {          
        console.log('i am on line 12')
        console.log(response);
        this.todos = response.data;
      });
      console.log('i am on line 15')
    }
  }
});