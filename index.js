// Code your solutions in this file

function writeCards(names) {
    let messages = []; // Initialize an empty array to store the messages
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
      messages.push(message); // Push each message into the array
    }
  
    return messages; // Return the array of messages
  }

  function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
  
  countDown(10);