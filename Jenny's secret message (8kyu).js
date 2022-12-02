// first way
function greet(name){
  if(name === "Johnny"){
    return "Hello, my love!";
} else return "Hello, " + name + "!";
}

// second way
function greet(name){
  return name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";
}
