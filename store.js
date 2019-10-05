const tinkeringStuff = [
  {
  title: 'BookMarking App',
  liveLink: 'https://thinkful-ei-heron.github.io/bookmark-app-danielb/',
  githubLink: 'https://github.com/thinkful-ei-heron/bookmark-app-danielb',
  desc: 'Store your favorite websites and give them ratings.  This utilizes an API that holds a user’s bookmarks and utilizes appropriate CRUD functionality.',
  preview: './images/bookmarks.png'
  },
  {
  title: 'Quiz Hunter',
  liveLink: 'https://thinkful-ei-heron.github.io/Mike-DanielB-quiz-hunter/',
  githubLink: 'https://github.com/thinkful-ei-heron/Mike-DanielB-quiz-hunter/',
  desc: 'A single page quiz app that gives the user a test on their monster hunter knowledge.',
  preview: './images/qhunt.png'
  },
  {
  title: 'Chalmun\'s Cantina',
  liveLink: 'https://www.url.com',
  githubLink: 'https://github.com/hone/chalmuns-cantina',
  desc: 'An Ember.js App built to automate the AI deck for Star Wars Outer Rim board game.',
  preview: './images/chaul.png'
  }
]

const tinkerSnippit = function(tinkerObj) {
  return `
    <div class="tinker-item">
      <div>
        <img class="tinker-image" src="${tinkerObj.preview}">
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
