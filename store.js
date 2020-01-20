const tinkeringStuff = [
  {
  title: 'Weyr Alliance',
  liveLink: 'https://wery-alliance.com',
  githubLink: 'https://github.com/Brahyt/weyr-client',
  githubLink2: 'https://github.com/Brahyt/weyr-server',
  desc: 'Charactor/Party managment for dragonfire game. Built in React, Express.js, Node.js, and SQL. ',
  preview: 'images/weyr.png',
  alt: 'Screenshot of the a bookmarking app that I made in Jquery and Javascript.'
  },
  {
  title: 'Quendi - Spaced Repetition',
  liveLink: 'https://www.quendi.app',
  githubLink: 'https://github.com/thinkful-ei-heron/Spaced-Rep-Andrea-DanB-Client',
  githubLink2: 'https://github.com/thinkful-ei-heron/Spaced-Rep-Andrea-DanB-Server',
  desc: 'Full stack Javascript web app built in React, Express and Node utilizing Linked List data structure and a SQL database. Built with a collaboration with another person.',
  preview: 'images/quendi.png',
  alt: 'Green background website with lists of words to learn.'
  },
  {
  title: 'Danger Room',
  liveLink: 'https://danger-room.herokuapp.com/situation',
  githubLink: 'https://github.com/hone/danger-room',
  githubLink: 'https://github.com/hone/danger-room',
  desc: 'Web app that is built using Ember.js and Javascript for the Marvel Champions Card Game',
  preview: 'images/danger.png',
  alt: 'Orange background with marvel characters, with overlay website with options.'
  },

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
          <a href="${tinkerObj.githubLink}" target="_blank"><button>Client</button></a>
          <a href="${tinkerObj.githubLink2}" target="_blank"><button>Server</button></a>
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
