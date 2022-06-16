function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
  
 this.isWorthIt = () => draft - (crew * 1.5) > 20
}