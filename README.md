# unit-4-game

This game contains simple logic and uses couple of loops and if statements to present the player with game experience.
The player is presented with a set number, which is different in each itteration of the game.
The player have 4 clickable pictures of crystals that he can click and initiate generation of a random number.

The player adds the clicked numbers onto a scoreboard.

When the player wins?
When the random number that was generated at the begining of the game happen to be equal to the scoreboard number the browser alerts the player "You won!" . When the player's scoreboard number happen to pass the value of the number generated at the begining of the game a mesage alerts "You loose! Try again!"


## Technologies used

### jQuery
### CSS, HTML
### JavaScript
### Bootstrap-Tweeter framework


#### Example code
```
if (score === goal){
        alert("You win!");
        win++;
        $("#wins").text("Wins: " + win);
        gameStart();
      
    
    }
```

### Installing
Sipmly launch the index.html 
Kepp the folder structure as original. There are relative links that need the files referencing to them.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Northwestern Univeristy
* Phill


