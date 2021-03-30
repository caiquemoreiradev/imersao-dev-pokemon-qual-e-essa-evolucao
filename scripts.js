const Pokemons = [
    {
        namePokemon: 'squirtle',
        pokemonImage: 'http://assets.stickpng.com/images/580b57fcd9996e24bc43c32a.png',
        pokemonImageEvolve: 'http://static.pokemonpets.com/images/monsters-images-800-800/8-Wartortle.png',
        evolution: 'wartortle',
        type: 'Water'
    },
    {
        namePokemon: 'charmander',
        pokemonImage: 'https://o.remove.bg/downloads/cbd42a7f-6d99-47db-a3a2-e7c44b7440fb/charchar-removebg-preview.png',
        pokemonImageEvolve: 'http://static.pokemonpets.com/images/monsters-images-800-800/5-Charmeleon.png',
        evolution: 'charmeleon',
        type: 'fire'
    },
    {
        namePokemon: 'bulbassaur',
        pokemonImage: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f619ed0-b566-4538-8392-bf02ca7a76cd/dck5gnp-4ba6e734-e9ab-415b-9e73-8a3118bd39d1.png/v1/fill/w_600,h_624,strp/001_bulbasaur_png_0__1__by_andersonaas107_dck5gnp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02MjQiLCJwYXRoIjoiXC9mXC8xZjYxOWVkMC1iNTY2LTQ1MzgtODM5Mi1iZjAyY2E3YTc2Y2RcL2RjazVnbnAtNGJhNmU3MzQtZTlhYi00MTViLTllNzMtOGEzMTE4YmQzOWQxLnBuZyIsIndpZHRoIjoiPD02MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Vj88q3ukdX7Gww1ya8tuK9Tmsg_cNSVnuYL8-AgPF1M',
        pokemonImageEvolve: 'https://i.pinimg.com/originals/e7/91/72/e79172fef348260adb1de1406b332deb.png',
        evolution: 'ivysaur',
        type: 'earth'
    },
    {
        namePokemon: 'pikachu',
        pokemonImage: 'http://pngimg.com/uploads/pokemon/pokemon_PNG148.png',
        pokemonImageEvolve: 'https://i.pinimg.com/originals/e5/bf/8b/e5bf8bef9365a5da9362a6c0c4917e87.png',
        evolution: 'raichu',
        type: 'lighting'
    },
]

let pokemonPosition = 0;

const DOM = {
    guess_poke: document.querySelector('input#guess_poke'),
    guess_poke_evolve: document.querySelector('input#guess_poke_evolve'),

    pokemonActive: Pokemons[pokemonPosition],

    getValues() {
        return {
            guess_poke: DOM.guess_poke.value,
            guess_poke_evolve: DOM.guess_poke_evolve.value
        }
    },

    validatePoke() {
        let { guess_poke, guess_poke_evolve } = DOM.getValues();

        let correct__poke = DOM.pokemonActive.namePokemon;
        let correct__poke__evolve = DOM.pokemonActive.evolution;

        if (guess_poke != correct__poke || guess_poke_evolve != correct__poke__evolve) {
            DOM.wrongPoke();
        }

        else if (guess_poke == correct__poke && guess_poke_evolve == correct__poke__evolve) {
            DOM.correctPoke()
        }

        DOM.clearValues();
    },

    correctPoke() {
        document.querySelector('.pokemon__correct').src = DOM.pokemonActive.pokemonImageEvolve;
        document.querySelector('.correct_pokemon__type').innerHTML = `Type: ${DOM.pokemonActive.type}`;
        document.querySelector('#nameCorrectPoke').innerHTML = DOM.pokemonActive.evolution;

        document.querySelector('#pokemon_wrong').classList.add('hide');

        document.querySelector('#pokemon_correct').classList.remove('hide');

        pokemonPosition++;
        DOM.pokemonActive = Pokemons[pokemonPosition];
    },

    wrongPoke() {
        document.querySelector('#wrong').classList.remove('hide');

        setTimeout(() => document.querySelector('#wrong').classList.add('hide'), 2000)
    },

    clearValues() {
        DOM.guess_poke.value = '';
        DOM.guess_poke_evolve.value = '';
    }
}

const APP = {

    init() {
        document.querySelector('.pokemon__type').innerHTML = `Type: ${DOM.pokemonActive.type}`
        document.querySelector('.pokemon__shadow').src = DOM.pokemonActive.pokemonImage;

        document.querySelector('#pokemon_correct').classList.add('hide');
        document.querySelector('#pokemon_wrong').classList.remove('hide');

        console.log(DOM.pokemonActive);
    },

    reload() {
        APP.init();

        DOM.clearValues();
    }
}

APP.init();

