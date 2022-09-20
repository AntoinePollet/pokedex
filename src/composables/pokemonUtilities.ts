export const pokemonIdByUrl =  (url: string) => {
    const splitUrl = url.split('/');
    return url.split('/')[splitUrl.length - 2];
}

export const pokemonSprite = (id: string | number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}
