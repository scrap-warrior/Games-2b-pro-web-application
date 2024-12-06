function search_games() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let games = document.getElementsByClassName('Games');
  
    if (input.length == 0) {
      for (let i = 0; i < games.length; i++) {
        games[i].style.display = 'none';
      }
    } else {
      for (let i = 0; i < games.length; i++) {
        if (games[i].innerHTML.toLowerCase().includes(input)) {
          games[i].style.display = 'block'; // Ή block, αν προτιμάς
        } else {
          games[i].style.display = 'none';
        }
      }
    }
  }
  
   