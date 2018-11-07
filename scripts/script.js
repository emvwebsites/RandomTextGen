const muscleBTN = document.getElementById('muscle-button');
const testoBTN = document.getElementById('testo-button');
const genHead = document.getElementById('generated-head');
const genBody = document.getElementById('generated-body');
const genCTA = document.getElementById('generated-cta');

muscleBTN.addEventListener('click', generateMuscleText);
testoBTN.addEventListener('click', generateTestoText);

function randomNum(n) {
  return Math.floor(Math.random() * n);
}

function generateMuscleText() {
  let headText = muscleHeadText[randomNum(muscleHeadText.length)];
  let bodyText = muscleBodyText[randomNum(muscleBodyText.length)];
  let ctaText = muscleCTAText[randomNum(muscleCTAText.length)];

  genHead.innerHTML = `<h3>Generated Head</h3>
    <p>${headText}</p>`;
  genBody.innerHTML = `<h3>Generated Body</h3>
    <p>${bodyText}</p>`;
  genCTA.innerHTML = `<h3>Generated CTA</h3>
    <p>${ctaText}</p>`;

  console.log(bodyText);
}

function generateTestoText() {
  let headText = testoHeadText[randomNum(testoHeadText.length)];
  // let bodyText = muscleBodyText[randomNum(muscleBodyText.length)];
  // let ctaText = muscleCTAText[randomNum(muscleCTAText.length)];

  genHead.innerHTML = `<h3>Generated Head</h3>
    <p>${headText}</p>`;
  genBody.innerHTML = ``;
  genCTA.innerHTML = ``;
}

// Below is the text content for generated content. Keep things clean and separated! All variables will still be valid due to hoisting.

const muscleHeadText = [
  'Conquer Your Dreams!',
  'Overcome, Overpower, Overwhelm.',
  'Get To The Next Level!',
  'Surpass All Expectations!',
  'Ascend To The Top!',
  'Taste Triumph!',
  'Power Overwhelming',
  'Unleash the Beast',
  'Silence the Haters!'
];

const muscleBodyText = [
  ' Break free from being stuck between a rock and a hard place. PRODUCT_NAME is the new product for you!',
  'In the middle of every difficulty lies opportunity. Increase your odds with PRODUCT_NAME.',
  'The best revenge is massive success. Show them who’s boss with PRODUCT_NAME.',
  'When the going gets tough. The tough gets going. Go with PRODUCT_NAME.',
  'Get going. Move forward. Aim High. Use PRODUCT_NAME.',
  'Change your attitude and gain some altitude. Use PRODUCT_NAME.',
  'Show the naysayers who the real deal is. \n\n While they talk, you walk. \n\n Get a boost.',
  'Getting a ripped body is not just about looking good. Being active is a lifestyle. Time for a boost.'
];

const muscleCTAText = [
  'Use...',
  'Order...',
  'Feel the power of...',
  'Now is your chance to order...',
  'Discover the Power of...',
  'Reach your potential with...',
  'Perform With...',
  'Bring out your best with...'
];

const testoHeadText = [
  'Get Intimacy back to the forefront',
  'Give a boost to your love life',
  'Time for a complete upgrade',
  'Take it to the next level',
  'Revitalize the intimate moments.',
  'Heat things up with her',
  'Make your love life great again.',
  'Sweeten up your love life'
];
