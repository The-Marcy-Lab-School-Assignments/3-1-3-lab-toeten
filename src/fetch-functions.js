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


export const getAuthor = () => {
};

export const createNewUser = () => {
}