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
}

export const renderNewUserForm = (newUserFormEl) => {
}

export const renderNewUser = (newUserEl, newUser) => {
}