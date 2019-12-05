// What is destructuring and why would I want to do it?

  const mod3 = {
    name: "Gainfully Deployed",
    population: 23,
    founded: 100719,
    languages_mastered: ["Ruby", "Rails", "Javascript"]
  }

  const name = mod3.name;
  const population = mod3.population;
  const founded = mod3.founded;

  // console.log(name, population, foundingYear)

  // console.log(mod3)





// Could I do it to an array?

  const boroughNames = ["Brooklyn", "Manhattan", "Bronx", "Queens", "Staten Island"];

  const brooklyn = boroughNames[0]





// Could I do it to the parameters of a function?

  function greet(person) {

    const spicyName = person.name;
    const touring = person.fullName;

    return `Hello, ${ name }! Your legal name is ${ fullName }.`
  }


  const me = {
    name: "Eric",
    fullName: "Hyeok Jung Kim"
  }
