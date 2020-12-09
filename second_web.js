var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      todos: []
    };
  },
  methods: {
    getTodos: function() {
      console.log('getting todos...')
      axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
        console.log(response.data);
        this.todos = response.data;
      })
    }
  },
  created: function() {
    console.log('in created...');
    this.getTodos();
  }
});
