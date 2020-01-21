const tinkeringStuff = [
  {
  title: 'Dragon Fire app',
  liveLink: 'https://www.weyr-alliance.com/',
  githubLink1: 'https://github.com/thinkful-ei-heron/bookmark-app-danielb',
  githubLink2: '',
  desc: 'A party managment tool for the card game Dragon Fire.  Built in React, Node/Express, utilizing a postgresql database.',
  preview: 'images/bookmarks.png',
  alt: 'Screenshot of the a bookmarking app that I made in Jquery and Javascript.'
  },
  {
  title: 'Quendi - Spaced Repetition',
  liveLink: 'https://www.quendi.app',
  githubLink1: 'https://github.com/thinkful-ei-heron/Spaced-Rep-Andrea-DanB-Server',
  githubLink2: '',
  desc: 'Full stack Javascript web app built in React, Express and Node utilizing Linked List data structure and a SQL database',
  preview: 'images/qhunt.png',
  alt: 'Green background website with lists of words to learn.'
  },
  {
  title: 'Danger Room',
  liveLink: 'https://danger-room.herokuapp.com/situation',
  githubLink1: 'https://github.com/hone/danger-room',
  githubLink2: '',
  desc: 'Web app that is built using Ember.js and Javascript for the Marvel Champions Card Game',
  preview: 'images/chaul.png',
  alt: 'Website screenshot of Danger Room.'
  }
]

const tinkerSnippit = function(tinkerObj) {
  return `
    <div class="tinker-item">
      <div>
        <img class="tinker-image" src="${tinkerObj.preview}" alt="${tinkerObj.alt}">
      </div>
      <div>
        <div class="tinker-title">
          <h4>${tinkerObj.title}</h4>
        </div>
        <div class="tinker-item-buttons">
          <a href="${tinkerObj.liveLink}" target="_blank"><button>Live!</button></a>
          <a href="${tinkerObj.githubLink}" target="_blank"><button>Repo</button></a>
        </div>
        <div class="tinker-disc">
          <p>${tinkerObj.desc}</p>
        </div>
      </div>
    </div>
  ` 
}

const generateTinkerSnippit = function() {
  let result = [];
  tinkeringStuff.forEach((obj) => {
    result.push(tinkerSnippit(obj));
  })
  return result.join('');
}

const populateTinkering = function() {
  const tinkerEntry = document.querySelector('.js-tinkering')
  console.log(tinkerEntry)
  tinkerEntry.innerHTML = generateTinkerSnippit()
}

export default {
  populateTinkering
}
