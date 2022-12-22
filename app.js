console.log("count down app testing");
//get all the input filed value for starting the logic to run
let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
console.log(hr);
console.log(min);
console.log(sec);

//declear the variable on which our condition will run
let timer = false;

//now create 3 functions for starting, stoping and reseting. on each click this function should run according to action.

const start = () => {
  console.log("start");
  timer = true;
  myFunction();
};
const stop = () => {
  timer = false;
  console.log("stop");
};
const reset = () => {
  timer = false;
  console.log("reset");
  //   for reloading the page
  location.reload();
};

// write the function for running the app.
const myFunction = () => {
  console.log("myFunction");

  if (timer === true) {
    //jub hr>0 and min=0 then substract 1 from hr and add 60 min to min.beacuse 1 hour is equal to 60 min.
    if (hr.value > 0 && min.value == 0) {
      min.value = 60;
      hr.value = hr.value - 1;
    }
    //jub hr.value>0 and min.value>0
    if (hr.value > 0 || min.value > 0) {
      // then hear will be the 2 condition for second when sec==0 and sec>0
      if (sec.value == 0) {
        sec.value = 60;
        min.value = min.value - 1;
      }
      if (sec.value > 0) {
        sec.value = sec.value - 1;
      }
    } else {
      //this condition only for second section whrn hr and min is zero.
      if (sec.value > 0) {
        sec.value = sec.value - 1;
      }
      if (sec.value == 0) {
        timer = false;
      }
    }
    setTimeout(myFunction, 1000);
  } else {
    console.log("timer stop");
  }
};
