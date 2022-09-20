export const pokemonIdByUrl =  (url: string) => {
    const splittedUrl = url.split('/');
    return url.split('/')[splittedUrl.length - 2];
}

export const pokemonSprite = (id: string | number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}
