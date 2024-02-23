const lsitMail = ['mariorossi@gmail.com', 'rossimario@gmail.com', 'valerossi46@gmail.com'];

const userMail = prompt('Inserisci la tua mail:');

let mailValid = ' ';

if((userMail === lsitMail[0]) || (userMail === lsitMail[1]) || (userMail === lsitMail[2])){
  mailValid = 'yes';
}else{
  mailValid = 'not';
}

console.log(mailValid);
