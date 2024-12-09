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




  
  
   