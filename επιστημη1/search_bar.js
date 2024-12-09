var gameData = ['{"game":'
+ '{"name": "Call of Duty", "imgs":["callOfDuty/img1.jpg","callOfDuty/img2.jpg" ,"callOfDuty/img3.jpg"],'
+' "description":"Call of Duty is a military first-person shooter video game series and media franchise published by Activision,'
+' starting in 2003. The games were first developed by Infinity Ward, then by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers.'
+' The most recent, Call of Duty: Black Ops 6, was released on October 25, 2024."}}'];

function search_games() {
  let input = document.getElementById('searchbar').value.toLowerCase();
  let games = document.getElementsByClassName('Games');
  
  if (input.length == 0) {
    for (let i = 0; i < games.length; i++) {
      games[i].style.display = 'none'; 
    }
  } else {
    let visibleCount = 0; 
    
    for (let i = 0; i < games.length; i++) {
      if (games[i].innerHTML.toLowerCase().includes(input)) {
        if (visibleCount < 3) { 
          games[i].style.display = 'block'; 
          visibleCount++; 
        } else {
          games[i].style.display = 'none'; 
        }
      } else {
        games[i].style.display = 'none';
      }
    }
  }



}


function loadGame(gameID){
  var gameInfo = JSON.parse(gameData[gameID])
  console.log(gameInfo)
}