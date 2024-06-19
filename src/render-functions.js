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
}

export const renderNewUser = (newUserEl, newUser) => {
}