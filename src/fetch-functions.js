export const getFirstThreeFantasyBooks = async () => {
  const url = `https://openlibrary.org/subjects/fantasy.json`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Failed to get fantasy books');
    }
    const data = await response.json();
  
    const firstThreeBooks = data.works.slice(0, 3).map(work => ({
      title: work.title,
      author: {
        name: work.authors[0].name, 
        urlKey: work.authors[0].key,
      },
      coverUrl: `https://covers.openlibrary.org/a/id/${work.cover_id}-M.jpg`,
    }));

    return firstThreeBooks;
  } catch (error) {
    console.warn(error);
    return null
  }
};


export const getAuthor = async (urlKey) => {
  const baseURL = 'https://openlibrary.org'
  const url = `${baseURL}${urlKey}.json`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Failed to get author')
    }

    const data = await response.json()

    const formattedAuthor = {
      birthDate: data.birth_date,
      bio: data.bio,
      wikipediaUrl: data.wikipedia,
      name: data.name,
      pictureUrl: data.photos ? `https://covers.openlibrary.org/a/id/${data.photos[0]}-M.jpg` : null,
    };
    return formattedAuthor

  } catch (error) {
    console.warn('Network Error');
    console.warn('Failed to get author');
    console.warn(error)
    return null;
  }
};


export const createNewUser = async (newUserData) => {
  const url = `https://jsonplaceholder.typicode.com/users`
  const postOptions = {
    method: "POST",
    body: JSON.stringify(newUserData),
    headers: {
      "Content-Type": "application/json"
    }
  }

  try {
    const response = await fetch(url, postOptions)
    if (!response.ok) {
      throw new Error('Failed to create new user')
    }
    const data = await response.json();
    return { ...data, id: 11 }
  } catch (error) {
    console.warn(error)
    return null
  }
};
