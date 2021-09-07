

// funcion que  realiza el request a una api
export  const getGifts = async (category) => {
    const _api_key='Nj4fErAy4lvAPrZOrTwFPoK4UfGggZdz'
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=${_api_key}`

    const resp = await fetch(url);
    const {data} = await resp.json()

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,

        }
    })
    return gifs
}
