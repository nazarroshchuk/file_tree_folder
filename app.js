const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

function createTree (destination, arr) {
  destination.append(createTreeDom(arr))
}

function createTreeDom(arr) {
  let ul = document.createElement('ul');
  for (let el in arr) {
    let li = document.createElement('li');
   
    if(arr[el]['folder']) {
      li.classList.add('folder');
    }
    li.textContent = arr[el]['title'];
    ul.appendChild(li);

    let childrenUl = createTreeDom(arr[el]['children']);
    if(childrenUl) {
      li.append(childrenUl);
    }
  }
  return ul
}

createTree(rootNode, data)


for (let li of rootNode.querySelectorAll('li')) {
  let span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling); 
}

function addImages() {
  for (let li of rootNode.querySelectorAll('li')) {
    let span = document.createElement('span');
    span.classList.add('material-icons');
    if(li.className === "folder") { 
    span.textContent = 'folder'
    } else {
      span.textContent = 'description'
      span.classList.add('color')
    }
    li.prepend(span);
  }
}

rootNode.addEventListener('click', event => {
  if (event.target.tagName !== 'SPAN') {
    return
  }

  if (event.target.tagName === 'SPAN' && event.target.textContent !=='description') {
    if (event.target.textContent ==='folder') {
      event.target.textContent = 'folder_open'
    } else {
      event.target.textContent = 'folder'
    }
  }
    
  let childrenContainer = event.target.parentNode.querySelector('ul');
  if (!childrenContainer) {
    return
  }
  
  childrenContainer.hidden = !childrenContainer.hidden;

})

let startingListLook = rootNode.querySelector('ul').childNodes
  for ( let li of startingListLook) {
    let allUl = li.querySelectorAll('ul')
    for(let ul of allUl) {
      ul.setAttribute('hidden', true);
    }
  }

  addImages()



 


