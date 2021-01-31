const Url = 'https://www.anapioficeandfire.com/api/books'

export const requestCharacters = (url: string) => fetch(url)
.then(result => result.json())


export const request = fetch(Url)
.then(result => result.json())