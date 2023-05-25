debugger;
const people = [
    { name: 'Wes', cool: true, country: 'Canada' },
    { name: 'Scott', cool: true, country: 'Merica' },
    { name: 'Snickers', cool: false, country: 'Dog Country' },
  ];
  
  
  // Console Methods
  people.forEach((person, index) => {
    console.groupCollapsed(`${person.name} Debug`);
    console.log(`Country: ${person.country}`);
    console.warn(`Cool: ${person.cool}`);
    console.error(`Doesnt exist: ${person.doesntExist}`);
    console.groupEnd(`${person.name} Debug`);
  });

  console.table(people);
  
  // Callstack
  
  // Grabbing Elements
  
  // Breakpoints
  
  // Scope
  
  // Network Requests
  
  // Break On Attribute
  
  // Some Setup Code

  function doALotOfStuff() {
    console.group('Doing some stuff');
    console.log('Hey Im one');
    console.warn('watch out!');
    console.error('hey');
    console.groupEnd('Doing some stuff');
  }
  
  function doctorize(name) {
    return `Dr. ${name}`;
  }
  
  function greet(name) {
    doesntExist();
    return `Hello ${name}`;
  }
  
  function go() {
    const name = doctorize(greet('Wes'));
    console.log(name);
  }
  

  function bootstrap() {
    console.log('Starting the app!');
    go();
  }

  bootstrap();
  
  const button = document.querySelector('.bigger');
  button.addEventListener('click', function(e) {
    const newFontSize =
      parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
    e.currentTarget.style.fontSize = `${newFontSize}px`;
  });
  
  // A Dad joke fetch
  async function fetchDadJoke() {
    const res = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'text/plain',
      },
    });
    const joke = await res.text();
    console.log(joke);
    return joke;
  }