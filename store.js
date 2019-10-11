const tinkeringStuff = [
  {
  title: 'BookMarking App',
  liveLink: 'https://thinkful-ei-heron.github.io/bookmark-app-danielb/',
  githubLink: 'https://github.com/thinkful-ei-heron/bookmark-app-danielb',
  desc: 'Bookmarking App that utilizes Jquery and Javascript with communicate with an API to store and manage data in the form of a bookmark. ',
  preview: 'images/bookmarks.png',
  alt: 'Screenshot of the a bookmarking app that I made in Jquery and Javascript.'
  },
  {
  title: 'Quiz Hunter',
  liveLink: 'https://thinkful-ei-heron.github.io/Mike-DanielB-quiz-hunter/',
  githubLink: 'https://github.com/thinkful-ei-heron/Mike-DanielB-quiz-hunter/',
  desc: 'A singlepage Javascript app that utilized jquery, HTML and CSS to create a quiz app',
  preview: 'images/qhunt.png',
  alt: 'Image of an app I call quiz hunter.  I built this in Javascript and HTML with CSS.'
  },
  {
  title: 'Chalmun\'s Cantina',
  liveLink: 'https://www.url.com',
  githubLink: 'https://github.com/hone/chalmuns-cantina',
  desc: 'Web app that is built using Ember and Javascript for Star Wars: Outter Rim.',
  preview: 'images/chaul.png',
  alt: 'Image of an app I call Chalmuns Cantina. I built it in Ember.'
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
