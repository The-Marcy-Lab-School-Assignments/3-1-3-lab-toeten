export const renderBookList = (bookListEl, books) => {
  bookListEl.innerHTML =''
  books.forEach(book => {
    const li = document.createElement('li')
    const img = document.createElement('img')
    const p = document.createElement('p')
    const button = document.createElement('button')

    img.src = book.coverUrl
    img.alt = `An old cover of ${book.title}`

    p.textContent = `Title: ${book.title}`
    
    button.textContent = `View ${book.author.name}`
    button.setAttribute('data-author-url-key', book.author.urlKey)

    li.append(img,p,button)
    bookListEl.appendChild(li)
  });
}

export const renderAuthorInfo = (authorInfoEl, author) => {
 
  authorInfoEl.innerHTML = ''

  const h2 = document.createElement('h2')
  const img = document.createElement('img')
  const bornParagraph = document.createElement('p')
  const bioParagraph = document.createElement('p')
  const wikipediaLink = document.createElement('a')

  h2.textContent = author.name
  
  img.src = author.pictureUrl
  img.alt = `A picture of ${author.name}`

  bornParagraph.textContent = `Born: ${author.birthDate}`

  bioParagraph.textContent = author.bio

  wikipediaLink.href = author.wikipediaUrl
  wikipediaLink.textContent = 'Wikipedia Link'

  authorInfoEl.append(h2, img, bornParagraph, bioParagraph, wikipediaLink)
};


export const renderNewUserForm = (newUserFormEl) => {
  newUserFormEl.innerHTML = `
  <label for="username">Username</label>
  <input type="text" id="username" name="username">

  <label for="is-cool">Is this user cool?</label>
  <input type="checkbox" id="is-cool" name="isCool">

  <label for="favorite-language">Favorite Language</label>
  <select id="favorite-language" name="favoriteLanguage">
    <option value="None">None</option>
    <option value="JavaScript">JavaScript</option>
    <option value="Python">Python</option>
    <option value="Ruby">Ruby</option>
  </select>

  <button type="submit">Create User</button>
`
}

export const renderNewUser = (newUserEl, newUser) => {
  newUserEl.innerHTML=''
  const username = document.createElement('h2')
  const isCoolP = document.createElement('p')
  const languageP = document.createElement('p')

  username.textContent = newUser.username
  username.dataset.userId = newUser.id

  isCoolP.textContent = newUser.isCool ? 'The hippest in the house!' : 'A real square.'

  languageP.textContent = `Favorite Language: ${newUser.favoriteLanguage}`

  newUserEl.append(username, isCoolP, languageP)
}