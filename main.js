function rockPaperScissors(p1, p2) {
   if (p1 === p2) {
     console.log('ფრე');
   } else if (p1 === 'rock') {
     if (p2 === 'scissors') {
       console.log('1-ელი მოთამაშე იგებს');
     } else {
       console.log('მე-2 მოთამაშე იგებს');
     }
   } else if (p1 === 'paper') {
     if (p2 === 'rock') {
       console.log('1-ელი მოთამაშე იგებს');
     } else {
       console.log('მე-2 მოთამაშე იგებს');
     }
   } else if (p1 === 'scissors') {
     if (p2 === 'paper') {
       console.log('1-ელი მოთამაშე იგებს');
     } else {
       console.log('მე-2 მოთამაშე იგებს');
     }
   }
 }

    const player1 = prompt("Player 1, enter rock, paper, or scissors:").toLowerCase();
    const player2 = prompt("Player 2, enter rock, paper, or scissors:").toLowerCase();

 rockPaperScissors(player1, player2);