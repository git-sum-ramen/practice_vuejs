// index.js
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      name: "brian",
      showInfo: true,
      isEcoFriendly: false,
      fruits: ['raspberry', 'strawberry', 'cantaloupe', 'apple'],
      newFruit: ""
    };
  },
  methods: {
    changeMessage: function() {
      console.log('changing message...');
      this.message = "new messaage value";
    },
    toggleInfo: function() {
      console.log('toggling info...');
      this.showInfo = !this.showInfo;
      // if (this.showInfo === true) {
      //   this.showInfo = false;
      // } else {
      //   this.showInfo = true;
      // }
    },
    toggleEcoFriendly: function() {
      console.log('toggling eco friendly');
      this.isEcoFriendly = !this.isEcoFriendly;
    },
    addFruit: function() {
      console.log('adding fruit...')
      console.log(this.newFruit)
      // how can i add newFruit to the array?
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    }
  }
});


// should i make future cohorts deal with the multiple apps issue?

// should i explain how to combine the multiple apps before the exercise?


