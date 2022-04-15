function whatday(num) { 
  const day = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday"
  }
  if (num in day) return day[num]
  return "Wrong, please enter a number between 1 and 7"
}