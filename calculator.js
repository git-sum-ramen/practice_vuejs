var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello Vue!",
      number1: 0,
      number2: 0,
      number3: 0,
      sum: 0
    };
  },
  methods: {
    computeSum: function() {
      console.log('computing sum..');
      this.sum = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
    },
    computeDifference: function() {
      console.log('some stuff here')
    }
  }
});


// what steps do i need to implement to make the calculator work?

// make a function
  // actually do the math

// v-on:click for the button, so the function can run

// show the user the result in the correct place

// keep track of all the data the user inputs

// convert the text to an integer?