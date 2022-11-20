// X is west (neg -) and Y is North (pos +)

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']
const finalPosition = function(moves) {
  let current = [0,0];
  for (let dir of moves)  {
    if (dir === "north") {
      current[1] += 1;
    }  else if (dir === "south") {
      current[1] -= 1;
    } else if (dir === "east") {
      current[0] += 1;
    } else if (dir === "west") {
      current[0] -= 1;
    }
  }
  return current
}
console.log(finalPosition(moves));

//WHAT

function hasEnoughPlayers(players) {
  if (players.length >= 7) {
    return true;
  } else {
    return false;
  }
}
 team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"]
   // if >= 8 = false
   // if <= 7 = true 
    
    
console.log(hasEnoughPlayers(team));