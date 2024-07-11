import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js';
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js';

export default async function app(appDiv) {
  const bookListEl = document.createElement('ul');
  bookListEl.id = 'book-list';
  appDiv.append(bookListEl);

  try {
    const books = await getFirstThreeFantasyBooks()
    renderBookList(bookListEl, books)
    bookListEl.addEventListener('click', async (event) => {
      if (event.target.tagName === 'BUTTON') {
        const urlKey = event.target.dataset.authorUrlKey
        try {
          const author = await getAuthor(urlKey)
          if (author) {
            renderAuthorInfo(authorInfoEl, author)
          } else {
            console.warn('Failed to get author data.')
          }
          } catch (error) {
            console.error('Error fetching author data:', error)
          }
        }
      })
  } catch (error) {
    console.log(error)
  }
  
  const authorInfoEl = document.createElement('div');
  authorInfoEl.id = 'author-info';
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement('div');
  newUserEl.id = 'new-user';
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement('form');
  newUserFormEl.id = 'new-user-form';
  appDiv.append(newUserFormEl);
  
  renderNewUserForm(newUserFormEl)


 

  newUserFormEl.addEventListener('submit', async (event) => {
    event.preventDefault()
    const formData = new FormData(newUserFormEl)
    const newUser = {
      username: formData.get('username'),
      isCool: formData.get('isCool') === 'on',
      favoriteLanguage: formData.get('favoriteLanguage')
    }
    /*
    FEEDBACK:
      Interesting solution! Just wanted to point out that doing
      `const newUser = Object.fromEntries(formData);`
      achieves the same effect, for future reference!
    */
    newUserFormEl.reset()
    try {
      const createdUser = await createNewUser(newUser)
      renderNewUser(newUserEl, createdUser)
    } catch (error) {
      console.warn(error)
    }
  })
}
