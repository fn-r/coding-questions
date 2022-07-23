function validateHello(greetings) {
  const hellos = [
    'hello',
    'ciao',
    'salut',
    'hallo',
    'hola',
    'ahoj',
    'czesc'
  ]
  
  greetings = greetings.toLowerCase()
  return hellos.filter(hello => greetings.includes(hello)).length > 0
}