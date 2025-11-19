/*
Team Stats
We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.*/
const team = {
  _players: [
    {
      firstName: "Luis",
      lastName: "Ardila", 
      age: 38
    },
    {
      firstName: "Giovanni",
      lastName: "Ardila", 
      age: 5
    }
  ],
  _games: [
    {
      opponent: "Giovanni",
      teamPoints: "", 
      opponentPoints: 0
    },
    {
      opponent: "Pepe",
      teamPoints: "", 
      opponentPoints: 0
    },
    {
      opponent: "Juan",
      teamPoints: "", 
      opponentPoints: 0
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
   const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    }
    this._players.push(player);
  },
  addGame(newOpponent,newTeamPoints,newOpponentPoints){
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    }
    this._games.push(game);
  }
  }

  team.addPlayer("Bugs","Bunny", 76);
  team.addGame("Titans", 100, 98);
  console.log(team.players);
  console.log(team.games);


  /* CONCLUSIONES:
* Una forma sencilla de implementar getters y setters en un objeto JavaScript.
*/