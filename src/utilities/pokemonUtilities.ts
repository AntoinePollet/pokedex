export const pokemonSprite = (id: string | number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

export const pokemonShinySprite = (pokemonId: string | number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonId}.png`;
}

export const firstUppercase = (pokemonName: string) => pokemonName[0].toUpperCase() + pokemonName.substring(1, pokemonName.length);

export const colorFromType = (type: string) => {
    const colours: any = {
        normal: { bg: '#A8A77A', text: 'black' },
        fire: { bg: '#EE8130', text: 'white' },
        water: { bg: '#6390F0', text: 'white' },
        electric: { bg: '#F7D02C', text: 'black' },
        grass: { bg: '#7AC74C', text: 'black' },
        ice: { bg: '#96D9D6', text: 'black' },
        fighting: { bg: '#C22E28', text: 'white' },
        poison: { bg: '#A33EA1', text: 'white' },
        ground: { bg: '#E2BF65', text: 'black' },
        flying: { bg: '#A98FF3', text: 'black' },
        psychic: { bg: '#F95587', text: 'white' },
        bug: { bg: '#A6B91A', text: 'white' },
        rock: { bg: '#B6A136', text: 'black' },
        ghost: { bg: '#735797', text: 'white' },
        dragon: { bg: '#6F35FC', text: 'white' },
        dark: { bg: '#705746', text: 'white' },
        steel: { bg: '#B7B7CE', text: 'white' },
        fairy: { bg: '#D685AD', text: 'black' },
    };

    if(type) {
        return colours[type];
    } else {
        return colours;
    }


}

