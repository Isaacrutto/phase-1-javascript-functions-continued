// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (task = "go to the office") {
  return `This Monday, I will ${task}.`;
};

function wrapAdjective(wrapper = "*") {
  return function (adjective = "special") {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}

// Test cases
console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
console.log(saturdayFun("go swimming")); // "This Saturday, I want to go swimming!"

console.log(mondayWork()); // "This Monday, I will go to the office."
console.log(mondayWork("work from home")); // "This Monday, I will work from home."

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer")); // "You are !!!a dedicated programmer!!!!"
