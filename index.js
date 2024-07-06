const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(names) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages;
  }
//writeCards(names);

function countDown(count){
    let c = 10;
    while (c >= 0) {
    console.log(c--);
}   
    return count;
}
countDown(count);