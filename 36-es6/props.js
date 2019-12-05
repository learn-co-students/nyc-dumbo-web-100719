// Is there a shorthand way to create properties in an object literal
// that have the the same names as variables I have in scope?

  const name = "Eric Kim"
  const age = 11
  const eating = ["junk", "garbage"]

  const eric = { name, age, eating }
  // let's make ⬆️ this object have some props!

  console.log(eric);





// Is there a way to dynamically define (or compute) property names
// in an object literal e.g. based on the value of a variable?

  const whatIwantToDoMore = "dance";

  const newYearsResolution = {
    body: "Write code every day",
    [whatIwantToDoMore]: "more"
  }

  // newYearsResolution.dance = "more"

  // newYearsResolution[ans] = "more!!!"

  console.log(newYearsResolution);
