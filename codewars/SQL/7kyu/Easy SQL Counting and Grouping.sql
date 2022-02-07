SELECT race, COUNT(race) AS count from demographics
GROUP BY race
ORDER BY count DESC