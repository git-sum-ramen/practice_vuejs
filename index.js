// index.js
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      name: "brian"
    };
  },
  methods: {
    changeMessage: function() {
      console.log('changing message...');
      this.message = "new messaage value";
    }
  }
});


// should i make future cohorts deal with the multiple apps issue?

// should i explain how to combine the multiple apps before the exercise?


