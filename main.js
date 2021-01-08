const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '今日は寒い寒い冬の日です。 :insertx: は友人のXと一緒に雪の中を歩いていました。Xも :insertx: もとても寒がりだったので文句ばかり言っていました。すると突然雪の中から杖をもったおじさんと弟子Yが現れたのです。おじさんは文句ばかり言っているとバチが当たるぞと言い消えてしまいました。弟子Yは見張っていろと言われたからと二人について歩き始めました。「僕も文句ばかり言っていたんだ」と突然弟子が言いました。「そうしたらおじさんに弟子にされてしまってこの世界に戻って来られなくなってしまったんだ」弟子がそう言ったにも関わらずXはその言葉を信じなかったため文句を言い続け結局おじさんの弟子にさせられ今までいた世界には戻って来られなくなってしまった。';
let insertX = ['友人X','杖を持ったおじさん','弟子Y'];
let insertY = ['冬の日','雪','世界'];
let insertZ = ['雪の中を歩いていた','文句ばかり言っていた','世界に戻って来られなくなった'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('ボブ',name);
  }

  if(document.getElementById("jp").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
