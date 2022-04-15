function calculateTip(amount, rating) {
  const ratings = {
    'terrible': 0,
    'poor': 0.05,
    'good': 0.1,
    'great': 0.15,
    'excellent': 0.2
  }
  
  rating = rating.toLowerCase()
  if (rating in ratings) {
    return Math.ceil(amount * ratings[rating])
  } else {
    return "Rating not recognised"
  }
}