function  calculateAge(birth_year, future_year) {
  let age = future_year - birth_year
  if(age > 0) {
    if(age !== 1) {
      return `You are ${age} years old.`
    }
    return `You are ${age} year old.`
  } else if (age < 0) {
    age = Math.abs(age)
    if(age !== 1) {
      return `You will be born in ${age} years.`
    }
    return `You will be born in ${age} year.`
  }
  return "You were born this very year!"
}