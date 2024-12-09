var gameData = ['{"game":\
{"name": "Call of Duty",\
"imgs":["callOfDuty/img1.jpg","callOfDuty/img2.jpg" ,"callOfDuty/img3.jpg", "callOfDuty/img4.jpg" ,"callOfDuty/img5.jpg"],\
"description":"Call of Duty is a military first-person shooter video game series and media franchise published by Activision,\
starting in 2003. The games were first developed by Infinity Ward, then by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers.\
The most recent, Call of Duty: Black Ops 6, was released on October 25, 2024."}, "link": "https://www.callofduty.com/"}'

];

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


function loadGame(){
  gameID = window.localStorage.getItem("gameID")
  var gameInfo = JSON.parse(gameData[gameID-1])
  const attachArea = document.getElementById("gameItems")

  const title = document.createElement("h1")
  title.textContent = gameInfo.game.name
  attachArea.append(title)

  for (const imgLoc in gameInfo.game.imgs){
    const img = document.createElement("img")
    img.src = gameInfo.game.imgs[imgLoc]
    img.width = 200
    attachArea.append(img)
  }

  const descr = document.createElement("p")
  descr.textContent = gameInfo.game.description
  attachArea.append(descr)

  const link = document.createElement("a")
  link.href = gameInfo.game.link
  link.textContent = "get Game Now"
  attachArea.append(link)
}