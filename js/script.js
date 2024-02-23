//elements
const lsitMail = ['mariorossi@gmail.com', 'valerossi46@gmail.com', 'baipass'];
let userNumber = '';
let pcNumber = '';

//button
const playGameButton = document.querySelector('.play-btn');
const backLoginButton = document.querySelector('.back-btn');
const generateNumber = document.querySelector('.genrate-number');

//output
const diceGame = document.getElementById('dice-game');
const userNumOutput = document.querySelector('.user-num-output');
const pcNumOutput = document.querySelector('.pc-num-output');
const result = document.getElementById('result')

//---------------------------------------------------

const userMail = prompt('Inserisci la tua mail:');

let mailValid = ' ';

if((userMail === lsitMail[0]) || (userMail === lsitMail[1]) || (userMail === lsitMail[2])){
  mailValid = 'yes';
}else{
  mailValid = 'not';
}

console.log(mailValid);

const title = document.getElementById('title')

if(mailValid === 'yes'){
  console.log('Sei loggato');
  title.innerHTML = 'Sei loggato'
  playGameButton.classList.remove('d-none')
}else if(userMail === ''){
  title.innerHTML = `
  <div class="text-danger d-flex mt-2 align-items-center justify-content-center">
    <div class="my-error">
      Mail mancante
    </div>
  </div>
  `;
  backLoginButton.classList.remove('d-none');
  playGameButton.classList.add('d-none');
}else{
  console.log('Mail errata, non puoi loggarti');
  title.innerHTML =`
  <div class="text-danger d-flex mt-2 align-items-center justify-content-center">
    <div class="my-error">
      Mail errata, non puoi loggarti
    </div>
  </div>
  `
  backLoginButton.classList.remove('d-none');
  playGameButton.classList.add('d-none')
}

playGameButton.addEventListener('click',function () {
  console.log('ciao');
  title.classList.add('d-none');
  playGameButton.classList.add('d-none');
  backLoginButton.classList.remove('d-none');
  diceGame.classList.remove('d-none');
})

backLoginButton.addEventListener('click',function(){
  backLoginButton.classList.add('d-none');
  diceGame.classList.add('d-none');
  title.classList.add('d-none');
  location.reload();
})

generateNumber.addEventListener('click',function(){
  userNumber = Math.ceil(Math.random() * 6)
  console.log(userNumber);
  userNumOutput.innerHTML=`
  Il tuo numero é: ${userNumber}.
  `

  pcNumber = Math.ceil(Math.random() * 6)
  console.log(pcNumber);
  pcNumOutput.innerHTML=`
  Il numero del Pc é: ${pcNumber}.
  `

  if(userNumber > pcNumber){
    userNumOutput.classList.remove('bg-white');
    userNumOutput.classList.remove('bg-danger');
    userNumOutput.classList.remove('bg-warning');
    userNumOutput.classList.add('bg-success');
    userNumOutput.classList.add('text-white');
    pcNumOutput.classList.remove('text-white');
    pcNumOutput.classList.remove('bg-white');
    pcNumOutput.classList.remove('bg-warning');
    pcNumOutput.classList.add('bg-danger');
    pcNumOutput.classList.remove('bg-success');

    result.innerHTML = `
      <span class="text-success pt-3 fw-bold fs-2">Hai vinto<span>
    `

  }else if(userNumber < pcNumber){
    pcNumOutput.classList.remove('bg-white');
    pcNumOutput.classList.remove('bg-danger');
    pcNumOutput.classList.remove('bg-warning');
    pcNumOutput.classList.add('bg-success');
    pcNumOutput.classList.add('text-white');
    userNumOutput.classList.remove('text-white');
    userNumOutput.classList.remove('bg-white');
    userNumOutput.classList.remove('bg-warning');
    userNumOutput.classList.add('bg-danger');
    userNumOutput.classList.remove('bg-success');

    result.innerHTML = `
      <span class="text-danger pt-3 fw-bold fs-2">Hai perso<span>
    `

  }else{
    userNumOutput.classList.remove('bg-white');
    userNumOutput.classList.remove('bg-danger');
    userNumOutput.classList.remove('bg-success');
    userNumOutput.classList.remove('text-white');
    pcNumOutput.classList.remove('bg-white');
    pcNumOutput.classList.remove('bg-danger');
    pcNumOutput.classList.remove('bg-success');
    pcNumOutput.classList.remove('text-white');
    userNumOutput.classList.add('bg-warning');
    pcNumOutput.classList.add('bg-warning');

    result.innerHTML = `
      <span class="text-warning pt-3 fw-bold fs-2">Hai pareggiato<span>
    `

  }

})

