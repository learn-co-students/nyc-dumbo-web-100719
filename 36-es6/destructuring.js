// What is destructuring and why would I want to do it?

  const mod3 = {
    name: "Gainfully Deployed",
    population: 23,
    founded: 100719,
    languages_mastered: ["Ruby", "Rails", "Javascript"]
  }

  // const name = mod3.name;
  // const population = mod3.population;
  // const founded = mod3.founded;
  // const languages = mod3.languages_mastered

  const {name, population, languages_mastered: languages} = mod3

  // console.log(languages)

  // console.log(mod3)





// Could I do it to an array?

  const boroughNames = ["Brooklyn", "Manhattan", "Bronx", "Queens", "Staten Island"];

  // const brooklynVar = boroughNames[0]
  // const manhattanVar = boroughNames[1]

  const [brooklynVar, , theBronxVar, , siVar] = boroughNames

  console.log(brooklynVar, theBronxVar, siVar);





// Could I do it to the parameters of a function?

  function greet({name, fullName}) {

    // const name = person.name;
    // const fullName = person.fullName;

    // const {name, fullName} = person

    return `Hello, ${ name }! Your legal name is ${ fullName }.`
  }

  const me = {
    name: "Eric",
    fullName: "Hyeok Jung Kim",
    middleName: "Hank"
  }

  const solo = {
    name: "solo",
    fullName: "Solomon",
    middleName: "Test"
  }

  console.log(greet(solo));
