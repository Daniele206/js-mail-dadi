

const lsitMail = ['mariorossi@gmail.com', 'c', 'valerossi46@gmail.com'];

//button
const playGameButton = document.querySelector('.play-btn')

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
  <div class="text-danger my-h-100 d-flex align-items-center justify-content-center">
    <div class="my-error">
      Mail mancante
    </div>
  </div>
  `
  playGameButton.classList.add('d-none')
}else{
  console.log('Mail errata, non puoi loggarti');
  title.innerHTML =`
  <div class="text-danger my-h-100 d-flex align-items-center justify-content-center">
    <div class="my-error">
      Mail errata, non puoi loggarti
    </div>
  </div>
  `
  playGameButton.classList.add('d-none')
}

playGameButton.addEventListener('click',function () {
  console.log('ciao');
  di
})
