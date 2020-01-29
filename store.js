const tinkeringStuff = [
  {
  title: 'Live List',
  liveLink: 'https://social-playlist.netlify.com',
  githubLink: 'https://github.com/thinkful-ei-heron/SocialPlaylist-Client',
  githubLink2: 'https://github.com/thinkful-ei-heron/SocialPlaylist-server',
    desc: 'A 5 person group project Mobile app, built in React, Node/Express, and Postgresql, leveraging Maps and GeoData services from Google. Live List is an app to find new things to do based on your location and likes.',
  preview: 'images/ll.png',
  alt: 'mobile design for website that contains a list of places with choices for ramen.'
  },
  {
  title: 'weyr alliance',
  liveLink: 'https://weyr-alliance.com',
  githubLink: 'https://github.com/brahyt/weyr-client',
  githubLink2: 'https://github.com/brahyt/weyr-server',
  desc: 'charactor/party managment for dragonfire game. built in react, express.js, node.js, and sql. ',
  preview: 'images/weyr.png',
  alt: 'screenshot of the a bookmarking app that i made in jquery and javascript.'
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
  githubLink2: 'https://github.com/hone/danger-room',
  desc: 'Web app that is built using Ember.js and Javascript for the Marvel Champions Card Game',
  preview: 'images/danger.png',
  alt: 'Orange background with marvel characters, with overlay website with options.'
  },
  {
  title: 'Chaulmans Cantina',
  liveLink: 'https://chalmuns-cantina.herokuapp.com/',
  githubLink: 'https://github.com/hone/chalmuns-cantina',
  githubLink2: 'https://github.com/hone/chalmuns-cantina',
  desc: 'Web app that creates an AI deck for Star Wars Outer Rim card game. Built in Ember.js and Javascript ',
  preview: 'images/chaul.png',
  alt: 'black screen with purple icons with star wars characters, one in color because it is being selected'
  },
  {
  title: 'IE Culinary Apprentice',
  liveLink: 'https://ieculinaryapprentice.com/',
  githubLink: 'https://github.com/Brahyt/ieculinary',
  githubLink2: 'https://github.com/Brahyt/ieculinary',
  desc: 'Webapp built on Ruby on Rails. Used for a culinary apprenticeship program to attract new mentors and apprentices. ',
  preview: 'images/cul.png',
  alt: 'blue kitchen image with students working in a kitchen.'
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
