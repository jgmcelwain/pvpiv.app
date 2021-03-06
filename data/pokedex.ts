import { IV } from './iv';
import { IVFloor } from './ivFloor';

export type PokemonID = string;

export type PokemonName = string;

export type PokemonStats = {
  atk: number;
  def: number;
  sta: number;
};

export type PokemonIVs = {
  atk: IV;
  def: IV;
  sta: IV;
};

export type PokemonFamilyStage = 1 | 2 | 3 | 4 | 5;

export type Pokemon = {
  id: PokemonID;
  name: PokemonName;
  stats: PokemonStats;
  floor?: IVFloor;
  speculative?: boolean;
  family: {
    id: PokemonID;
    stage: PokemonFamilyStage;
  };
};

export const POKEDEX: Pokemon[] = [
  {
    id: 'abomasnow',
    name: 'Abomasnow',
    stats: {
      atk: 178,
      def: 158,
      sta: 207,
    },
    family: {
      id: 'snover',
      stage: 2,
    },
  },
  {
    id: 'abomasnow_mega',
    name: 'Abomasnow (Mega)',
    stats: {
      atk: 240,
      def: 191,
      sta: 207,
    },
    family: {
      id: 'snover',
      stage: 3,
    },
  },
  {
    id: 'abra',
    name: 'Abra',
    stats: {
      atk: 195,
      def: 82,
      sta: 93,
    },
    family: {
      id: 'abra',
      stage: 1,
    },
  },
  {
    id: 'absol',
    name: 'Absol',
    stats: {
      atk: 246,
      def: 120,
      sta: 163,
    },
    family: {
      id: 'absol',
      stage: 1,
    },
  },
  {
    id: 'absol_mega',
    name: 'Absol (Mega)',
    stats: {
      atk: 314,
      def: 130,
      sta: 163,
    },
    family: {
      id: 'absol',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'accelgor',
    name: 'Accelgor',
    stats: {
      atk: 220,
      def: 120,
      sta: 190,
    },
    family: {
      id: 'shelmet',
      stage: 2,
    },
  },
  {
    id: 'aegislash',
    name: 'Aegislash',
    stats: {
      atk: 97,
      def: 291,
      sta: 155,
    },
    family: {
      id: 'honedge',
      stage: 3,
    },
  },
  {
    id: 'aerodactyl',
    name: 'Aerodactyl',
    stats: {
      atk: 221,
      def: 159,
      sta: 190,
    },
    family: {
      id: 'aerodactyl',
      stage: 1,
    },
  },
  {
    id: 'aerodactyl_mega',
    name: 'Aerodactyl (Mega)',
    stats: {
      atk: 292,
      def: 210,
      sta: 190,
    },
    family: {
      id: 'aerodactyl',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'aggron',
    name: 'Aggron',
    stats: {
      atk: 198,
      def: 257,
      sta: 172,
    },
    family: {
      id: 'aron',
      stage: 3,
    },
  },
  {
    id: 'aggron_mega',
    name: 'Aggron (Mega)',
    stats: {
      atk: 247,
      def: 331,
      sta: 172,
    },
    family: {
      id: 'aron',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'aipom',
    name: 'Aipom',
    stats: {
      atk: 136,
      def: 112,
      sta: 146,
    },
    family: {
      id: 'aipom',
      stage: 1,
    },
  },
  {
    id: 'alakazam',
    name: 'Alakazam',
    stats: {
      atk: 271,
      def: 167,
      sta: 146,
    },
    family: {
      id: 'abra',
      stage: 3,
    },
  },
  {
    id: 'alakazam_mega',
    name: 'Alakazam (Mega)',
    stats: {
      atk: 367,
      def: 193,
      sta: 146,
    },
    family: {
      id: 'abra',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'alomomola',
    name: 'Alomomola',
    stats: {
      atk: 138,
      def: 131,
      sta: 338,
    },
    family: {
      id: 'alomomola',
      stage: 1,
    },
  },
  {
    id: 'altaria',
    name: 'Altaria',
    stats: {
      atk: 141,
      def: 201,
      sta: 181,
    },
    family: {
      id: 'swablu',
      stage: 2,
    },
  },
  {
    id: 'altaria_mega',
    name: 'Altaria (Mega)',
    stats: {
      atk: 222,
      def: 218,
      sta: 181,
    },
    family: {
      id: 'swablu',
      stage: 3,
    },
  },
  {
    id: 'amaura',
    name: 'Amaura',
    stats: {
      atk: 124,
      def: 109,
      sta: 184,
    },
    family: {
      id: 'amaura',
      stage: 1,
    },
  },
  {
    id: 'ambipom',
    name: 'Ambipom',
    stats: {
      atk: 205,
      def: 143,
      sta: 181,
    },
    family: {
      id: 'aipom',
      stage: 2,
    },
  },
  {
    id: 'amoonguss',
    name: 'Amoonguss',
    stats: {
      atk: 155,
      def: 139,
      sta: 249,
    },
    family: {
      id: 'foongus',
      stage: 2,
    },
  },
  {
    id: 'ampharos',
    name: 'Ampharos',
    stats: {
      atk: 211,
      def: 169,
      sta: 207,
    },
    family: {
      id: 'mareep',
      stage: 3,
    },
  },
  {
    id: 'ampharos_mega',
    name: 'Ampharos (Mega)',
    stats: {
      atk: 294,
      def: 203,
      sta: 207,
    },
    family: {
      id: 'mareep',
      stage: 4,
    },
  },
  {
    id: 'anorith',
    name: 'Anorith',
    stats: {
      atk: 176,
      def: 100,
      sta: 128,
    },
    family: {
      id: 'anorith',
      stage: 1,
    },
  },
  {
    id: 'arbok',
    name: 'Arbok',
    stats: {
      atk: 167,
      def: 153,
      sta: 155,
    },
    family: {
      id: 'ekans',
      stage: 2,
    },
  },
  {
    id: 'arcanine',
    name: 'Arcanine',
    stats: {
      atk: 227,
      def: 166,
      sta: 207,
    },
    family: {
      id: 'growlithe',
      stage: 2,
    },
  },
  {
    id: 'arceus',
    name: 'Arceus',
    stats: {
      atk: 238,
      def: 238,
      sta: 237,
    },
    floor: 10,
    family: {
      id: 'arceus',
      stage: 1,
    },
  },
  {
    id: 'archen',
    name: 'Archen',
    stats: {
      atk: 213,
      def: 89,
      sta: 146,
    },
    family: {
      id: 'archen',
      stage: 1,
    },
  },
  {
    id: 'archeops',
    name: 'Archeops',
    stats: {
      atk: 292,
      def: 139,
      sta: 181,
    },
    family: {
      id: 'archen',
      stage: 2,
    },
  },
  {
    id: 'ariados',
    name: 'Ariados',
    stats: {
      atk: 161,
      def: 124,
      sta: 172,
    },
    family: {
      id: 'spinarak',
      stage: 2,
    },
  },
  {
    id: 'armaldo',
    name: 'Armaldo',
    stats: {
      atk: 222,
      def: 174,
      sta: 181,
    },
    family: {
      id: 'anorith',
      stage: 2,
    },
  },
  {
    id: 'aromatisse',
    name: 'Aromatisse',
    stats: {
      atk: 173,
      def: 150,
      sta: 226,
    },
    family: {
      id: 'spritzee',
      stage: 2,
    },
  },
  {
    id: 'aron',
    name: 'Aron',
    stats: {
      atk: 121,
      def: 141,
      sta: 137,
    },
    family: {
      id: 'aron',
      stage: 1,
    },
  },
  {
    id: 'articuno',
    name: 'Articuno',
    stats: {
      atk: 192,
      def: 236,
      sta: 207,
    },
    floor: 1,
    family: {
      id: 'articuno',
      stage: 1,
    },
  },
  {
    id: 'audino',
    name: 'Audino',
    stats: {
      atk: 114,
      def: 163,
      sta: 230,
    },
    family: {
      id: 'audino',
      stage: 1,
    },
  },
  {
    id: 'audino_mega',
    name: 'Audino (Mega)',
    stats: {
      atk: 147,
      def: 239,
      sta: 230,
    },
    family: {
      id: 'audino',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'aurorus',
    name: 'Aurorus',
    stats: {
      atk: 186,
      def: 163,
      sta: 265,
    },
    family: {
      id: 'amaura',
      stage: 2,
    },
  },
  {
    id: 'avalugg',
    name: 'Avalugg',
    stats: {
      atk: 196,
      def: 240,
      sta: 216,
    },
    family: {
      id: 'bergmite',
      stage: 2,
    },
  },
  {
    id: 'axew',
    name: 'Axew',
    stats: {
      atk: 154,
      def: 101,
      sta: 130,
    },
    family: {
      id: 'axew',
      stage: 1,
    },
  },
  {
    id: 'azelf',
    name: 'Azelf',
    stats: {
      atk: 270,
      def: 151,
      sta: 181,
    },
    family: {
      id: 'azelf',
      stage: 1,
    },
  },
  {
    id: 'azumarill',
    name: 'Azumarill',
    stats: {
      atk: 112,
      def: 152,
      sta: 225,
    },
    family: {
      id: 'azurill',
      stage: 3,
    },
  },
  {
    id: 'azurill',
    name: 'Azurill',
    stats: {
      atk: 36,
      def: 71,
      sta: 137,
    },
    family: {
      id: 'azurill',
      stage: 1,
    },
  },
  {
    id: 'bagon',
    name: 'Bagon',
    stats: {
      atk: 134,
      def: 93,
      sta: 128,
    },
    family: {
      id: 'bagon',
      stage: 1,
    },
  },
  {
    id: 'baltoy',
    name: 'Baltoy',
    stats: {
      atk: 77,
      def: 124,
      sta: 120,
    },
    family: {
      id: 'baltoy',
      stage: 1,
    },
  },
  {
    id: 'banette',
    name: 'Banette',
    stats: {
      atk: 218,
      def: 126,
      sta: 162,
    },
    family: {
      id: 'shuppet',
      stage: 2,
    },
  },
  {
    id: 'banette_mega',
    name: 'Banette (Mega)',
    stats: {
      atk: 312,
      def: 160,
      sta: 162,
    },
    family: {
      id: 'shuppet',
      stage: 3,
    },
    speculative: true,
  },
  {
    id: 'barbaracle',
    name: 'Barbaracle',
    stats: {
      atk: 194,
      def: 205,
      sta: 176,
    },
    family: {
      id: 'binacle',
      stage: 2,
    },
  },
  {
    id: 'barboach',
    name: 'Barboach',
    stats: {
      atk: 93,
      def: 82,
      sta: 137,
    },
    family: {
      id: 'barboach',
      stage: 1,
    },
  },
  {
    id: 'basculin',
    name: 'Basculin',
    stats: {
      atk: 189,
      def: 129,
      sta: 172,
    },
    family: {
      id: 'basculin',
      stage: 1,
    },
  },
  {
    id: 'bastiodon',
    name: 'Bastiodon',
    stats: {
      atk: 94,
      def: 286,
      sta: 155,
    },
    family: {
      id: 'shieldon',
      stage: 2,
    },
  },
  {
    id: 'bayleef',
    name: 'Bayleef',
    stats: {
      atk: 122,
      def: 155,
      sta: 155,
    },
    family: {
      id: 'chikorita',
      stage: 2,
    },
  },
  {
    id: 'beartic',
    name: 'Beartic',
    stats: {
      atk: 233,
      def: 152,
      sta: 216,
    },
    family: {
      id: 'cubchoo',
      stage: 2,
    },
  },
  {
    id: 'beautifly',
    name: 'Beautifly',
    stats: {
      atk: 189,
      def: 98,
      sta: 155,
    },
    family: {
      id: 'wurmple',
      stage: 3,
    },
  },
  {
    id: 'beedrill',
    name: 'Beedrill',
    stats: {
      atk: 169,
      def: 130,
      sta: 163,
    },
    family: {
      id: 'weedle',
      stage: 3,
    },
  },
  {
    id: 'beedrill_mega',
    name: 'Beedrill (Mega)',
    stats: {
      atk: 303,
      def: 148,
      sta: 163,
    },
    family: {
      id: 'weedle',
      stage: 4,
    },
  },
  {
    id: 'beheeyem',
    name: 'Beheeyem',
    stats: {
      atk: 221,
      def: 163,
      sta: 181,
    },
    family: {
      id: 'elgyem',
      stage: 2,
    },
  },
  {
    id: 'beldum',
    name: 'Beldum',
    stats: {
      atk: 96,
      def: 132,
      sta: 120,
    },
    family: {
      id: 'beldum',
      stage: 1,
    },
  },
  {
    id: 'bellossom',
    name: 'Bellossom',
    stats: {
      atk: 169,
      def: 186,
      sta: 181,
    },
    family: {
      id: 'oddish',
      stage: 3,
    },
  },
  {
    id: 'bellsprout',
    name: 'Bellsprout',
    stats: {
      atk: 139,
      def: 61,
      sta: 137,
    },
    family: {
      id: 'bellsprout',
      stage: 1,
    },
  },
  {
    id: 'bergmite',
    name: 'Bergmite',
    stats: {
      atk: 117,
      def: 120,
      sta: 146,
    },
    family: {
      id: 'bergmite',
      stage: 1,
    },
  },
  {
    id: 'bibarel',
    name: 'Bibarel',
    stats: {
      atk: 162,
      def: 119,
      sta: 188,
    },
    family: {
      id: 'bidoof',
      stage: 2,
    },
  },
  {
    id: 'bidoof',
    name: 'Bidoof',
    stats: {
      atk: 80,
      def: 73,
      sta: 153,
    },
    family: {
      id: 'bidoof',
      stage: 1,
    },
  },
  {
    id: 'binacle',
    name: 'Binacle',
    stats: {
      atk: 96,
      def: 120,
      sta: 123,
    },
    family: {
      id: 'binacle',
      stage: 1,
    },
  },
  {
    id: 'bisharp',
    name: 'Bisharp',
    stats: {
      atk: 232,
      def: 176,
      sta: 163,
    },
    family: {
      id: 'pawniard',
      stage: 2,
    },
  },
  {
    id: 'blastoise',
    name: 'Blastoise',
    stats: {
      atk: 171,
      def: 207,
      sta: 188,
    },
    family: {
      id: 'squirtle',
      stage: 3,
    },
  },
  {
    id: 'blastoise_mega',
    name: 'Blastoise (Mega)',
    stats: {
      atk: 264,
      def: 237,
      sta: 188,
    },
    family: {
      id: 'squirtle',
      stage: 3,
    },
  },
  {
    id: 'blaziken',
    name: 'Blaziken',
    stats: {
      atk: 240,
      def: 141,
      sta: 190,
    },
    family: {
      id: 'torchic',
      stage: 3,
    },
  },
  {
    id: 'blaziken_mega',
    name: 'Blaziken (Mega)',
    stats: {
      atk: 329,
      def: 168,
      sta: 190,
    },
    family: {
      id: 'torchic',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'blissey',
    name: 'Blissey',
    stats: {
      atk: 129,
      def: 169,
      sta: 496,
    },
    family: {
      id: 'happiny',
      stage: 3,
    },
  },
  {
    id: 'blitzle',
    name: 'Blitzle',
    stats: {
      atk: 118,
      def: 64,
      sta: 128,
    },
    family: {
      id: 'blitzle',
      stage: 1,
    },
  },
  {
    id: 'boldore',
    name: 'Boldore',
    stats: {
      atk: 174,
      def: 143,
      sta: 172,
    },
    family: {
      id: 'roggenrola',
      stage: 2,
    },
  },
  {
    id: 'bonsly',
    name: 'Bonsly',
    stats: {
      atk: 124,
      def: 133,
      sta: 137,
    },
    family: {
      id: 'bonsly',
      stage: 1,
    },
  },
  {
    id: 'bouffalant',
    name: 'Bouffalant',
    stats: {
      atk: 195,
      def: 182,
      sta: 216,
    },
    family: {
      id: 'bouffalant',
      stage: 1,
    },
  },
  {
    id: 'braixen',
    name: 'Braixen',
    stats: {
      atk: 171,
      def: 130,
      sta: 153,
    },
    family: {
      id: 'fennekin',
      stage: 2,
    },
  },
  {
    id: 'braviary',
    name: 'Braviary',
    stats: {
      atk: 232,
      def: 152,
      sta: 225,
    },
    family: {
      id: 'rufflet',
      stage: 2,
    },
  },
  {
    id: 'breloom',
    name: 'Breloom',
    stats: {
      atk: 241,
      def: 144,
      sta: 155,
    },
    family: {
      id: 'shroomish',
      stage: 2,
    },
  },
  {
    id: 'bronzong',
    name: 'Bronzong',
    stats: {
      atk: 161,
      def: 213,
      sta: 167,
    },
    family: {
      id: 'bronzor',
      stage: 2,
    },
  },
  {
    id: 'bronzor',
    name: 'Bronzor',
    stats: {
      atk: 43,
      def: 154,
      sta: 149,
    },
    family: {
      id: 'bronzor',
      stage: 1,
    },
  },
  {
    id: 'budew',
    name: 'Budew',
    stats: {
      atk: 91,
      def: 109,
      sta: 120,
    },
    family: {
      id: 'budew',
      stage: 1,
    },
  },
  {
    id: 'buizel',
    name: 'Buizel',
    stats: {
      atk: 132,
      def: 67,
      sta: 146,
    },
    family: {
      id: 'buizel',
      stage: 1,
    },
  },
  {
    id: 'bulbasaur',
    name: 'Bulbasaur',
    stats: {
      atk: 118,
      def: 111,
      sta: 128,
    },
    family: {
      id: 'bulbasaur',
      stage: 1,
    },
  },
  {
    id: 'buneary',
    name: 'Buneary',
    stats: {
      atk: 130,
      def: 105,
      sta: 146,
    },
    family: {
      id: 'buneary',
      stage: 1,
    },
  },
  {
    id: 'bunnelby',
    name: 'Bunnelby',
    stats: {
      atk: 68,
      def: 72,
      sta: 116,
    },
    family: {
      id: 'bunnelby',
      stage: 1,
    },
  },
  {
    id: 'burmy_plant',
    name: 'Burmy (Plant)',
    stats: {
      atk: 53,
      def: 83,
      sta: 120,
    },
    family: {
      id: 'burmy',
      stage: 1,
    },
  },
  {
    id: 'burmy_sandy',
    name: 'Burmy (Sandy)',
    stats: {
      atk: 53,
      def: 83,
      sta: 120,
    },
    family: {
      id: 'burmy',
      stage: 1,
    },
  },
  {
    id: 'burmy_trash',
    name: 'Burmy (Trash)',
    stats: {
      atk: 53,
      def: 83,
      sta: 120,
    },
    family: {
      id: 'burmy',
      stage: 1,
    },
  },
  {
    id: 'butterfree',
    name: 'Butterfree',
    stats: {
      atk: 167,
      def: 137,
      sta: 155,
    },
    family: {
      id: 'caterpie',
      stage: 3,
    },
  },
  {
    id: 'cacnea',
    name: 'Cacnea',
    stats: {
      atk: 156,
      def: 74,
      sta: 137,
    },
    family: {
      id: 'cacnea',
      stage: 1,
    },
  },
  {
    id: 'cacturne',
    name: 'Cacturne',
    stats: {
      atk: 221,
      def: 115,
      sta: 172,
    },
    family: {
      id: 'cacnea',
      stage: 2,
    },
  },
  {
    id: 'camerupt',
    name: 'Camerupt',
    stats: {
      atk: 194,
      def: 136,
      sta: 172,
    },
    family: {
      id: 'numel',
      stage: 2,
    },
  },
  {
    id: 'camerupt_mega',
    name: 'Camerupt (Mega)',
    stats: {
      atk: 253,
      def: 183,
      sta: 172,
    },
    family: {
      id: 'numel',
      stage: 3,
    },
    speculative: true,
  },
  {
    id: 'carbink',
    name: 'Carbink',
    stats: {
      atk: 95,
      def: 285,
      sta: 137,
    },
    family: {
      id: 'carbink',
      stage: 1,
    },
  },
  {
    id: 'carnivine',
    name: 'Carnivine',
    stats: {
      atk: 187,
      def: 136,
      sta: 179,
    },
    family: {
      id: 'carnivine',
      stage: 1,
    },
  },
  {
    id: 'carracosta',
    name: 'Carracosta',
    stats: {
      atk: 192,
      def: 197,
      sta: 179,
    },
    family: {
      id: 'tirtouga',
      stage: 2,
    },
  },
  {
    id: 'carvanha',
    name: 'Carvanha',
    stats: {
      atk: 171,
      def: 39,
      sta: 128,
    },
    family: {
      id: 'carvanha',
      stage: 1,
    },
  },
  {
    id: 'cascoon',
    name: 'Cascoon',
    stats: {
      atk: 60,
      def: 77,
      sta: 137,
    },
    family: {
      id: 'wurmple',
      stage: 4,
    },
  },
  {
    id: 'castform',
    name: 'Castform',
    stats: {
      atk: 139,
      def: 139,
      sta: 172,
    },
    family: {
      id: 'castform',
      stage: 1,
    },
  },
  {
    id: 'castform_rainy',
    name: 'Castform (Rainy)',
    stats: {
      atk: 139,
      def: 139,
      sta: 172,
    },
    family: {
      id: 'castform_rainy',
      stage: 1,
    },
  },
  {
    id: 'castform_snowy',
    name: 'Castform (Snowy)',
    stats: {
      atk: 139,
      def: 139,
      sta: 172,
    },
    family: {
      id: 'castform_snowy',
      stage: 1,
    },
  },
  {
    id: 'castform_sunny',
    name: 'Castform (Sunny)',
    stats: {
      atk: 139,
      def: 139,
      sta: 172,
    },
    family: {
      id: 'castform_sunny',
      stage: 1,
    },
  },
  {
    id: 'caterpie',
    name: 'Caterpie',
    stats: {
      atk: 55,
      def: 55,
      sta: 128,
    },
    family: {
      id: 'caterpie',
      stage: 1,
    },
  },
  {
    id: 'celebi',
    name: 'Celebi',
    stats: {
      atk: 210,
      def: 210,
      sta: 225,
    },
    floor: 10,
    family: {
      id: 'celebi',
      stage: 1,
    },
  },
  {
    id: 'chandelure',
    name: 'Chandelure',
    stats: {
      atk: 271,
      def: 182,
      sta: 155,
    },
    family: {
      id: 'litwick',
      stage: 3,
    },
  },
  {
    id: 'chansey',
    name: 'Chansey',
    stats: {
      atk: 60,
      def: 128,
      sta: 487,
    },
    family: {
      id: 'happiny',
      stage: 2,
    },
  },
  {
    id: 'charizard',
    name: 'Charizard',
    stats: {
      atk: 223,
      def: 173,
      sta: 186,
    },
    family: {
      id: 'charmander',
      stage: 3,
    },
  },
  {
    id: 'charizard_mega_x',
    name: 'Charizard (Mega X)',
    stats: {
      atk: 273,
      def: 213,
      sta: 186,
    },
    family: {
      id: 'charmander',
      stage: 4,
    },
  },
  {
    id: 'charizard_mega_y',
    name: 'Charizard (Mega Y)',
    stats: {
      atk: 319,
      def: 212,
      sta: 186,
    },
    family: {
      id: 'charmander',
      stage: 4,
    },
  },
  {
    id: 'charmander',
    name: 'Charmander',
    stats: {
      atk: 116,
      def: 93,
      sta: 118,
    },
    family: {
      id: 'charmander',
      stage: 1,
    },
  },
  {
    id: 'charmeleon',
    name: 'Charmeleon',
    stats: {
      atk: 158,
      def: 126,
      sta: 151,
    },
    family: {
      id: 'charmander',
      stage: 2,
    },
  },
  {
    id: 'chatot',
    name: 'Chatot',
    stats: {
      atk: 183,
      def: 91,
      sta: 183,
    },
    family: {
      id: 'chatot',
      stage: 1,
    },
  },
  {
    id: 'cherrim_overcast',
    name: 'Cherrim (Overcast)',
    stats: {
      atk: 170,
      def: 153,
      sta: 172,
    },
    family: {
      id: 'cherubi',
      stage: 2,
    },
  },
  {
    id: 'cherrim_sunny',
    name: 'Cherrim (Sunny)',
    stats: {
      atk: 170,
      def: 153,
      sta: 172,
    },
    family: {
      id: 'cherubi',
      stage: 2,
    },
  },
  {
    id: 'cherubi',
    name: 'Cherubi',
    stats: {
      atk: 108,
      def: 92,
      sta: 128,
    },
    family: {
      id: 'cherubi',
      stage: 1,
    },
  },
  {
    id: 'chesnaught',
    name: 'Chesnaught',
    stats: {
      atk: 201,
      def: 204,
      sta: 204,
    },
    family: {
      id: 'chespin',
      stage: 3,
    },
  },
  {
    id: 'chespin',
    name: 'Chespin',
    stats: {
      atk: 110,
      def: 106,
      sta: 148,
    },
    family: {
      id: 'chespin',
      stage: 1,
    },
  },
  {
    id: 'chikorita',
    name: 'Chikorita',
    stats: {
      atk: 92,
      def: 122,
      sta: 128,
    },
    family: {
      id: 'chikorita',
      stage: 1,
    },
  },
  {
    id: 'chimchar',
    name: 'Chimchar',
    stats: {
      atk: 113,
      def: 86,
      sta: 127,
    },
    family: {
      id: 'chimchar',
      stage: 1,
    },
  },
  {
    id: 'chimecho',
    name: 'Chimecho',
    stats: {
      atk: 175,
      def: 170,
      sta: 181,
    },
    family: {
      id: 'chingling',
      stage: 2,
    },
  },
  {
    id: 'chinchou',
    name: 'Chinchou',
    stats: {
      atk: 106,
      def: 97,
      sta: 181,
    },
    family: {
      id: 'chinchou',
      stage: 1,
    },
  },
  {
    id: 'chingling',
    name: 'Chingling',
    stats: {
      atk: 114,
      def: 94,
      sta: 128,
    },
    family: {
      id: 'chingling',
      stage: 1,
    },
  },
  {
    id: 'cinccino',
    name: 'Cinccino',
    stats: {
      atk: 198,
      def: 130,
      sta: 181,
    },
    family: {
      id: 'minccino',
      stage: 2,
    },
  },
  {
    id: 'clamperl',
    name: 'Clamperl',
    stats: {
      atk: 133,
      def: 135,
      sta: 111,
    },
    family: {
      id: 'clamperl',
      stage: 1,
    },
  },
  {
    id: 'clauncher',
    name: 'Clauncher',
    stats: {
      atk: 108,
      def: 117,
      sta: 137,
    },
    family: {
      id: 'clauncher',
      stage: 1,
    },
  },
  {
    id: 'clawitzer',
    name: 'Clawitzer',
    stats: {
      atk: 221,
      def: 171,
      sta: 174,
    },
    family: {
      id: 'clauncher',
      stage: 2,
    },
  },
  {
    id: 'claydol',
    name: 'Claydol',
    stats: {
      atk: 140,
      def: 229,
      sta: 155,
    },
    family: {
      id: 'baltoy',
      stage: 2,
    },
  },
  {
    id: 'clefable',
    name: 'Clefable',
    stats: {
      atk: 178,
      def: 162,
      sta: 216,
    },
    family: {
      id: 'cleffa',
      stage: 3,
    },
  },
  {
    id: 'clefairy',
    name: 'Clefairy',
    stats: {
      atk: 107,
      def: 108,
      sta: 172,
    },
    family: {
      id: 'cleffa',
      stage: 2,
    },
  },
  {
    id: 'cleffa',
    name: 'Cleffa',
    stats: {
      atk: 75,
      def: 79,
      sta: 137,
    },
    family: {
      id: 'cleffa',
      stage: 1,
    },
  },
  {
    id: 'cloyster',
    name: 'Cloyster',
    stats: {
      atk: 186,
      def: 256,
      sta: 137,
    },
    family: {
      id: 'shellder',
      stage: 2,
    },
  },
  {
    id: 'cobalion',
    name: 'Cobalion',
    stats: {
      atk: 192,
      def: 229,
      sta: 209,
    },
    floor: 1,
    family: {
      id: 'cobalion',
      stage: 1,
    },
  },
  {
    id: 'cofagrigus',
    name: 'Cofagrigus',
    stats: {
      atk: 163,
      def: 237,
      sta: 151,
    },
    family: {
      id: 'yamask',
      stage: 2,
    },
  },
  {
    id: 'combee',
    name: 'Combee',
    stats: {
      atk: 59,
      def: 83,
      sta: 102,
    },
    family: {
      id: 'combee',
      stage: 1,
    },
  },
  {
    id: 'combusken',
    name: 'Combusken',
    stats: {
      atk: 163,
      def: 115,
      sta: 155,
    },
    family: {
      id: 'torchic',
      stage: 2,
    },
  },
  {
    id: 'conkeldurr',
    name: 'Conkeldurr',
    stats: {
      atk: 243,
      def: 158,
      sta: 233,
    },
    family: {
      id: 'timburr',
      stage: 3,
    },
  },
  {
    id: 'corphish',
    name: 'Corphish',
    stats: {
      atk: 141,
      def: 99,
      sta: 125,
    },
    family: {
      id: 'corphish',
      stage: 1,
    },
  },
  {
    id: 'corsola',
    name: 'Corsola',
    stats: {
      atk: 118,
      def: 156,
      sta: 146,
    },
    family: {
      id: 'corsola',
      stage: 1,
    },
  },
  {
    id: 'cottonee',
    name: 'Cottonee',
    stats: {
      atk: 71,
      def: 111,
      sta: 120,
    },
    family: {
      id: 'cottonee',
      stage: 1,
    },
  },
  {
    id: 'cradily',
    name: 'Cradily',
    stats: {
      atk: 152,
      def: 194,
      sta: 200,
    },
    family: {
      id: 'lileep',
      stage: 2,
    },
  },
  {
    id: 'cranidos',
    name: 'Cranidos',
    stats: {
      atk: 218,
      def: 71,
      sta: 167,
    },
    family: {
      id: 'cranidos',
      stage: 1,
    },
  },
  {
    id: 'crawdaunt',
    name: 'Crawdaunt',
    stats: {
      atk: 224,
      def: 142,
      sta: 160,
    },
    family: {
      id: 'corphish',
      stage: 2,
    },
  },
  {
    id: 'cresselia',
    name: 'Cresselia',
    stats: {
      atk: 152,
      def: 258,
      sta: 260,
    },
    floor: 1,
    family: {
      id: 'cresselia',
      stage: 1,
    },
  },
  {
    id: 'croagunk',
    name: 'Croagunk',
    stats: {
      atk: 116,
      def: 76,
      sta: 134,
    },
    family: {
      id: 'croagunk',
      stage: 1,
    },
  },
  {
    id: 'crobat',
    name: 'Crobat',
    stats: {
      atk: 194,
      def: 178,
      sta: 198,
    },
    family: {
      id: 'zubat',
      stage: 3,
    },
  },
  {
    id: 'croconaw',
    name: 'Croconaw',
    stats: {
      atk: 150,
      def: 142,
      sta: 163,
    },
    family: {
      id: 'totodile',
      stage: 2,
    },
  },
  {
    id: 'crustle',
    name: 'Crustle',
    stats: {
      atk: 188,
      def: 200,
      sta: 172,
    },
    family: {
      id: 'dwebble',
      stage: 2,
    },
  },
  {
    id: 'cryogonal',
    name: 'Cryogonal',
    stats: {
      atk: 190,
      def: 218,
      sta: 190,
    },
    family: {
      id: 'cryogonal',
      stage: 1,
    },
  },
  {
    id: 'cubchoo',
    name: 'Cubchoo',
    stats: {
      atk: 128,
      def: 74,
      sta: 146,
    },
    family: {
      id: 'cubchoo',
      stage: 1,
    },
  },
  {
    id: 'cubone',
    name: 'Cubone',
    stats: {
      atk: 90,
      def: 144,
      sta: 137,
    },
    family: {
      id: 'cubone',
      stage: 1,
    },
  },
  {
    id: 'cyndaquil',
    name: 'Cyndaquil',
    stats: {
      atk: 116,
      def: 93,
      sta: 118,
    },
    family: {
      id: 'cyndaquil',
      stage: 1,
    },
  },
  {
    id: 'darkrai',
    name: 'Darkrai',
    stats: {
      atk: 285,
      def: 198,
      sta: 172,
    },
    floor: 10,
    family: {
      id: 'darkrai',
      stage: 1,
    },
  },
  {
    id: 'darmanitan_galarian_standard',
    name: 'Darmanitan (Galarian)',
    stats: {
      atk: 263,
      def: 114,
      sta: 233,
    },
    family: {
      id: 'darumaka_galarian',
      stage: 2,
    },
  },
  {
    id: 'darmanitan_galarian_zen',
    name: 'Darmanitan (Galarian Zen)',
    stats: {
      atk: 323,
      def: 123,
      sta: 233,
    },
    family: {
      id: 'darumaka_galarian',
      stage: 3,
    },
  },
  {
    id: 'darmanitan_standard',
    name: 'Darmanitan (Standard)',
    stats: {
      atk: 263,
      def: 114,
      sta: 233,
    },
    family: {
      id: 'darumaka',
      stage: 2,
    },
  },
  {
    id: 'darmanitan_zen',
    name: 'Darmanitan (Zen)',
    stats: {
      atk: 243,
      def: 202,
      sta: 233,
    },
    family: {
      id: 'darumaka',
      stage: 3,
    },
  },
  {
    id: 'darumaka',
    name: 'Darumaka',
    stats: {
      atk: 153,
      def: 86,
      sta: 172,
    },
    family: {
      id: 'darumaka',
      stage: 1,
    },
  },
  {
    id: 'darumaka_galarian',
    name: 'Darumaka (Galarian)',
    stats: {
      atk: 153,
      def: 86,
      sta: 172,
    },
    family: {
      id: 'darumaka_galarian',
      stage: 1,
    },
  },
  {
    id: 'dedenne',
    name: 'Dedenne',
    stats: {
      atk: 164,
      def: 134,
      sta: 167,
    },
    family: {
      id: 'dedenne',
      stage: 1,
    },
  },
  {
    id: 'deerling',
    name: 'Deerling',
    stats: {
      atk: 115,
      def: 100,
      sta: 155,
    },
    family: {
      id: 'deerling',
      stage: 1,
    },
  },
  {
    id: 'deino',
    name: 'Deino',
    stats: {
      atk: 116,
      def: 93,
      sta: 141,
    },
    family: {
      id: 'deino',
      stage: 1,
    },
  },
  {
    id: 'delcatty',
    name: 'Delcatty',
    stats: {
      atk: 132,
      def: 127,
      sta: 172,
    },
    family: {
      id: 'skitty',
      stage: 2,
    },
  },
  {
    id: 'delibird',
    name: 'Delibird',
    stats: {
      atk: 128,
      def: 90,
      sta: 128,
    },
    family: {
      id: 'delibird',
      stage: 1,
    },
  },
  {
    id: 'delphox',
    name: 'Delphox',
    stats: {
      atk: 230,
      def: 189,
      sta: 181,
    },
    family: {
      id: 'fennekin',
      stage: 3,
    },
  },
  {
    id: 'deoxys',
    name: 'Deoxys',
    stats: {
      atk: 345,
      def: 115,
      sta: 137,
    },
    floor: 10,
    family: {
      id: 'deoxys',
      stage: 1,
    },
  },
  {
    id: 'deoxys_attack',
    name: 'Deoxys (Attack)',
    stats: {
      atk: 414,
      def: 46,
      sta: 137,
    },
    floor: 10,
    family: {
      id: 'deoxys_atk',
      stage: 1,
    },
  },
  {
    id: 'deoxys_defense',
    name: 'Deoxys (Defense)',
    stats: {
      atk: 144,
      def: 330,
      sta: 137,
    },
    floor: 10,
    family: {
      id: 'deoxys_defense',
      stage: 1,
    },
  },
  {
    id: 'deoxys_speed',
    name: 'Deoxys (Speed)',
    stats: {
      atk: 230,
      def: 218,
      sta: 137,
    },
    floor: 10,
    family: {
      id: 'deoxys_speed',
      stage: 1,
    },
  },
  {
    id: 'dewgong',
    name: 'Dewgong',
    stats: {
      atk: 139,
      def: 177,
      sta: 207,
    },
    family: {
      id: 'seel',
      stage: 2,
    },
  },
  {
    id: 'dewott',
    name: 'Dewott',
    stats: {
      atk: 159,
      def: 116,
      sta: 181,
    },
    family: {
      id: 'oshawott',
      stage: 2,
    },
  },
  {
    id: 'dialga',
    name: 'Dialga',
    stats: {
      atk: 275,
      def: 211,
      sta: 205,
    },
    floor: 1,
    family: {
      id: 'dialga',
      stage: 1,
    },
  },
  {
    id: 'diggersby',
    name: 'Diggersby',
    stats: {
      atk: 112,
      def: 155,
      sta: 198,
    },
    family: {
      id: 'bunnelby',
      stage: 2,
    },
  },
  {
    id: 'diglett',
    name: 'Diglett',
    stats: {
      atk: 109,
      def: 78,
      sta: 67,
    },
    family: {
      id: 'diglett',
      stage: 1,
    },
  },
  {
    id: 'diglett_alolan',
    name: 'Diglett (Alolan)',
    stats: {
      atk: 108,
      def: 81,
      sta: 67,
    },
    family: {
      id: 'diglett_alolan',
      stage: 1,
    },
  },
  {
    id: 'ditto',
    name: 'Ditto',
    stats: {
      atk: 91,
      def: 91,
      sta: 134,
    },
    family: {
      id: 'ditto',
      stage: 1,
    },
  },
  {
    id: 'dodrio',
    name: 'Dodrio',
    stats: {
      atk: 218,
      def: 140,
      sta: 155,
    },
    family: {
      id: 'doduo',
      stage: 2,
    },
  },
  {
    id: 'doduo',
    name: 'Doduo',
    stats: {
      atk: 158,
      def: 83,
      sta: 111,
    },
    family: {
      id: 'doduo',
      stage: 1,
    },
  },
  {
    id: 'donphan',
    name: 'Donphan',
    stats: {
      atk: 214,
      def: 185,
      sta: 207,
    },
    family: {
      id: 'phanpy',
      stage: 2,
    },
  },
  {
    id: 'doublade',
    name: 'Doublade',
    stats: {
      atk: 188,
      def: 206,
      sta: 153,
    },
    family: {
      id: 'honedge',
      stage: 2,
    },
  },
  {
    id: 'dragalge',
    name: 'Dragalge',
    stats: {
      atk: 177,
      def: 207,
      sta: 163,
    },
    family: {
      id: 'skrelp',
      stage: 2,
    },
  },
  {
    id: 'dragonair',
    name: 'Dragonair',
    stats: {
      atk: 163,
      def: 135,
      sta: 156,
    },
    family: {
      id: 'dratini',
      stage: 2,
    },
  },
  {
    id: 'dragonite',
    name: 'Dragonite',
    stats: {
      atk: 263,
      def: 198,
      sta: 209,
    },
    family: {
      id: 'dratini',
      stage: 3,
    },
  },
  {
    id: 'drapion',
    name: 'Drapion',
    stats: {
      atk: 180,
      def: 202,
      sta: 172,
    },
    family: {
      id: 'skorupi',
      stage: 2,
    },
  },
  {
    id: 'dratini',
    name: 'Dratini',
    stats: {
      atk: 119,
      def: 91,
      sta: 121,
    },
    family: {
      id: 'dratini',
      stage: 1,
    },
  },
  {
    id: 'drifblim',
    name: 'Drifblim',
    stats: {
      atk: 180,
      def: 102,
      sta: 312,
    },
    family: {
      id: 'drifloon',
      stage: 2,
    },
  },
  {
    id: 'drifloon',
    name: 'Drifloon',
    stats: {
      atk: 117,
      def: 80,
      sta: 207,
    },
    family: {
      id: 'drifloon',
      stage: 1,
    },
  },
  {
    id: 'drilbur',
    name: 'Drilbur',
    stats: {
      atk: 154,
      def: 85,
      sta: 155,
    },
    family: {
      id: 'drilbur',
      stage: 1,
    },
  },
  {
    id: 'drowzee',
    name: 'Drowzee',
    stats: {
      atk: 89,
      def: 136,
      sta: 155,
    },
    family: {
      id: 'drowzee',
      stage: 1,
    },
  },
  {
    id: 'druddigon',
    name: 'Druddigon',
    stats: {
      atk: 213,
      def: 170,
      sta: 184,
    },
    family: {
      id: 'druddigon',
      stage: 1,
    },
  },
  {
    id: 'ducklett',
    name: 'Ducklett',
    stats: {
      atk: 84,
      def: 96,
      sta: 158,
    },
    family: {
      id: 'ducklett',
      stage: 1,
    },
  },
  {
    id: 'dugtrio',
    name: 'Dugtrio',
    stats: {
      atk: 167,
      def: 136,
      sta: 111,
    },
    family: {
      id: 'diglett',
      stage: 2,
    },
  },
  {
    id: 'dugtrio_alolan',
    name: 'Dugtrio (Alolan)',
    stats: {
      atk: 201,
      def: 142,
      sta: 111,
    },
    family: {
      id: 'diglett_alolan',
      stage: 2,
    },
  },
  {
    id: 'dunsparce',
    name: 'Dunsparce',
    stats: {
      atk: 131,
      def: 128,
      sta: 225,
    },
    family: {
      id: 'dunsparce',
      stage: 1,
    },
  },
  {
    id: 'duosion',
    name: 'Duosion',
    stats: {
      atk: 208,
      def: 103,
      sta: 163,
    },
    family: {
      id: 'solosis',
      stage: 2,
    },
  },
  {
    id: 'durant',
    name: 'Durant',
    stats: {
      atk: 217,
      def: 188,
      sta: 151,
    },
    family: {
      id: 'durant',
      stage: 1,
    },
  },
  {
    id: 'dusclops',
    name: 'Dusclops',
    stats: {
      atk: 124,
      def: 234,
      sta: 120,
    },
    family: {
      id: 'duskull',
      stage: 2,
    },
  },
  {
    id: 'dusknoir',
    name: 'Dusknoir',
    stats: {
      atk: 180,
      def: 254,
      sta: 128,
    },
    family: {
      id: 'duskull',
      stage: 3,
    },
  },
  {
    id: 'duskull',
    name: 'Duskull',
    stats: {
      atk: 70,
      def: 162,
      sta: 85,
    },
    family: {
      id: 'duskull',
      stage: 1,
    },
  },
  {
    id: 'dustox',
    name: 'Dustox',
    stats: {
      atk: 98,
      def: 162,
      sta: 155,
    },
    family: {
      id: 'wurmple',
      stage: 5,
    },
  },
  {
    id: 'dwebble',
    name: 'Dwebble',
    stats: {
      atk: 118,
      def: 128,
      sta: 137,
    },
    family: {
      id: 'dwebble',
      stage: 1,
    },
  },
  {
    id: 'eelektrik',
    name: 'Eelektrik',
    stats: {
      atk: 156,
      def: 130,
      sta: 163,
    },
    family: {
      id: 'tynamo',
      stage: 2,
    },
  },
  {
    id: 'eelektross',
    name: 'Eelektross',
    stats: {
      atk: 217,
      def: 152,
      sta: 198,
    },
    family: {
      id: 'tynamo',
      stage: 3,
    },
  },
  {
    id: 'eevee',
    name: 'Eevee',
    stats: {
      atk: 104,
      def: 114,
      sta: 146,
    },
    family: {
      id: 'eevee',
      stage: 1,
    },
  },
  {
    id: 'ekans',
    name: 'Ekans',
    stats: {
      atk: 110,
      def: 97,
      sta: 111,
    },
    family: {
      id: 'ekans',
      stage: 1,
    },
  },
  {
    id: 'electabuzz',
    name: 'Electabuzz',
    stats: {
      atk: 198,
      def: 158,
      sta: 163,
    },
    family: {
      id: 'elekid',
      stage: 2,
    },
  },
  {
    id: 'electivire',
    name: 'Electivire',
    stats: {
      atk: 249,
      def: 163,
      sta: 181,
    },
    family: {
      id: 'elekid',
      stage: 3,
    },
  },
  {
    id: 'electrike',
    name: 'Electrike',
    stats: {
      atk: 123,
      def: 78,
      sta: 120,
    },
    family: {
      id: 'electrike',
      stage: 1,
    },
  },
  {
    id: 'electrode',
    name: 'Electrode',
    stats: {
      atk: 173,
      def: 173,
      sta: 155,
    },
    family: {
      id: 'voltorb',
      stage: 2,
    },
  },
  {
    id: 'elekid',
    name: 'Elekid',
    stats: {
      atk: 135,
      def: 101,
      sta: 128,
    },
    family: {
      id: 'elekid',
      stage: 1,
    },
  },
  {
    id: 'elgyem',
    name: 'Elgyem',
    stats: {
      atk: 148,
      def: 100,
      sta: 146,
    },
    family: {
      id: 'elgyem',
      stage: 1,
    },
  },
  {
    id: 'emboar',
    name: 'Emboar',
    stats: {
      atk: 235,
      def: 127,
      sta: 242,
    },
    family: {
      id: 'tepig',
      stage: 3,
    },
  },
  {
    id: 'emolga',
    name: 'Emolga',
    stats: {
      atk: 158,
      def: 127,
      sta: 146,
    },
    family: {
      id: 'emolga',
      stage: 1,
    },
  },
  {
    id: 'empoleon',
    name: 'Empoleon',
    stats: {
      atk: 210,
      def: 186,
      sta: 197,
    },
    family: {
      id: 'piplup',
      stage: 3,
    },
  },
  {
    id: 'entei',
    name: 'Entei',
    stats: {
      atk: 235,
      def: 171,
      sta: 251,
    },
    floor: 1,
    family: {
      id: 'entei',
      stage: 1,
    },
  },
  {
    id: 'escavalier',
    name: 'Escavalier',
    stats: {
      atk: 223,
      def: 187,
      sta: 172,
    },
    family: {
      id: 'karrablast',
      stage: 2,
    },
  },
  {
    id: 'espeon',
    name: 'Espeon',
    stats: {
      atk: 261,
      def: 175,
      sta: 163,
    },
    family: {
      id: 'eevee',
      stage: 2,
    },
  },
  {
    id: 'espurr',
    name: 'Espurr',
    stats: {
      atk: 120,
      def: 114,
      sta: 158,
    },
    family: {
      id: 'espurr',
      stage: 1,
    },
  },
  {
    id: 'excadrill',
    name: 'Excadrill',
    stats: {
      atk: 255,
      def: 129,
      sta: 242,
    },
    family: {
      id: 'drilbur',
      stage: 2,
    },
  },
  {
    id: 'exeggcute',
    name: 'Exeggcute',
    stats: {
      atk: 107,
      def: 125,
      sta: 155,
    },
    family: {
      id: 'exeggcute',
      stage: 1,
    },
  },
  {
    id: 'exeggutor',
    name: 'Exeggutor',
    stats: {
      atk: 233,
      def: 149,
      sta: 216,
    },
    family: {
      id: 'exeggcute',
      stage: 2,
    },
  },
  {
    id: 'exeggutor_alolan',
    name: 'Exeggutor (Alolan)',
    stats: {
      atk: 230,
      def: 153,
      sta: 216,
    },
    family: {
      id: 'exeggutor_alolan',
      stage: 2,
    },
  },
  {
    id: 'exploud',
    name: 'Exploud',
    stats: {
      atk: 179,
      def: 137,
      sta: 232,
    },
    family: {
      id: 'whismur',
      stage: 3,
    },
  },
  {
    id: 'farfetchd',
    name: "Farfetch'd",
    stats: {
      atk: 124,
      def: 115,
      sta: 141,
    },
    family: {
      id: 'farfetchd',
      stage: 1,
    },
  },
  {
    id: 'farfetchd_galarian',
    name: 'Farfetchd (Galarian)',
    stats: {
      atk: 174,
      def: 114,
      sta: 141,
    },
    family: {
      id: 'farfetchd_galarian',
      stage: 1,
    },
  },
  {
    id: 'fearow',
    name: 'Fearow',
    stats: {
      atk: 182,
      def: 133,
      sta: 163,
    },
    family: {
      id: 'spearow',
      stage: 2,
    },
  },
  {
    id: 'feebas',
    name: 'Feebas',
    stats: {
      atk: 29,
      def: 85,
      sta: 85,
    },
    family: {
      id: 'feebas',
      stage: 1,
    },
  },
  {
    id: 'fennekin',
    name: 'Fennekin',
    stats: {
      atk: 116,
      def: 102,
      sta: 120,
    },
    family: {
      id: 'fennekin',
      stage: 1,
    },
  },
  {
    id: 'feraligatr',
    name: 'Feraligatr',
    stats: {
      atk: 205,
      def: 188,
      sta: 198,
    },
    family: {
      id: 'totodile',
      stage: 3,
    },
  },
  {
    id: 'ferroseed',
    name: 'Ferroseed',
    stats: {
      atk: 82,
      def: 155,
      sta: 127,
    },
    family: {
      id: 'ferroseed',
      stage: 1,
    },
  },
  {
    id: 'ferrothorn',
    name: 'Ferrothorn',
    stats: {
      atk: 158,
      def: 223,
      sta: 179,
    },
    family: {
      id: 'ferroseed',
      stage: 2,
    },
  },
  {
    id: 'finneon',
    name: 'Finneon',
    stats: {
      atk: 96,
      def: 116,
      sta: 135,
    },
    family: {
      id: 'finneon',
      stage: 1,
    },
  },
  {
    id: 'flaaffy',
    name: 'Flaaffy',
    stats: {
      atk: 145,
      def: 109,
      sta: 172,
    },
    family: {
      id: 'mareep',
      stage: 2,
    },
  },
  {
    id: 'flabebe',
    name: 'Flabebe',
    stats: {
      atk: 108,
      def: 120,
      sta: 127,
    },
    family: {
      id: 'flabebe',
      stage: 1,
    },
  },
  {
    id: 'flareon',
    name: 'Flareon',
    stats: {
      atk: 246,
      def: 179,
      sta: 163,
    },
    family: {
      id: 'eevee',
      stage: 2,
    },
  },
  {
    id: 'fletchinder',
    name: 'Fletchinder',
    stats: {
      atk: 145,
      def: 110,
      sta: 158,
    },
    family: {
      id: 'fletchling',
      stage: 2,
    },
  },
  {
    id: 'fletchling',
    name: 'Fletchling',
    stats: {
      atk: 95,
      def: 80,
      sta: 128,
    },
    family: {
      id: 'fletchling',
      stage: 1,
    },
  },
  {
    id: 'floatzel',
    name: 'Floatzel',
    stats: {
      atk: 221,
      def: 114,
      sta: 198,
    },
    family: {
      id: 'buizel',
      stage: 2,
    },
  },
  {
    id: 'floette',
    name: 'Floette',
    stats: {
      atk: 136,
      def: 151,
      sta: 144,
    },
    family: {
      id: 'flabebe',
      stage: 2,
    },
  },
  {
    id: 'florges',
    name: 'Florges',
    stats: {
      atk: 212,
      def: 244,
      sta: 186,
    },
    family: {
      id: 'flabebe',
      stage: 3,
    },
  },
  {
    id: 'flygon',
    name: 'Flygon',
    stats: {
      atk: 205,
      def: 168,
      sta: 190,
    },
    family: {
      id: 'trapinch',
      stage: 3,
    },
  },
  {
    id: 'foongus',
    name: 'Foongus',
    stats: {
      atk: 97,
      def: 91,
      sta: 170,
    },
    family: {
      id: 'foongus',
      stage: 1,
    },
  },
  {
    id: 'forretress',
    name: 'Forretress',
    stats: {
      atk: 161,
      def: 205,
      sta: 181,
    },
    family: {
      id: 'pineco',
      stage: 2,
    },
  },
  {
    id: 'fraxure',
    name: 'Fraxure',
    stats: {
      atk: 212,
      def: 123,
      sta: 165,
    },
    family: {
      id: 'axew',
      stage: 2,
    },
  },
  {
    id: 'frillish',
    name: 'Frillish',
    stats: {
      atk: 115,
      def: 134,
      sta: 146,
    },
    family: {
      id: 'frillish',
      stage: 1,
    },
  },
  {
    id: 'froakie',
    name: 'Froakie',
    stats: {
      atk: 122,
      def: 84,
      sta: 121,
    },
    family: {
      id: 'froakie',
      stage: 1,
    },
  },
  {
    id: 'frogadier',
    name: 'Frogadier',
    stats: {
      atk: 168,
      def: 114,
      sta: 144,
    },
    family: {
      id: 'froakie',
      stage: 2,
    },
  },
  {
    id: 'froslass',
    name: 'Froslass',
    stats: {
      atk: 171,
      def: 150,
      sta: 172,
    },
    family: {
      id: 'snorunt',
      stage: 2,
    },
  },
  {
    id: 'furfrou',
    name: 'Furfrou',
    stats: {
      atk: 164,
      def: 167,
      sta: 181,
    },
    family: {
      id: 'furfrou',
      stage: 1,
    },
  },
  {
    id: 'furret',
    name: 'Furret',
    stats: {
      atk: 148,
      def: 125,
      sta: 198,
    },
    family: {
      id: 'sentret',
      stage: 2,
    },
  },
  {
    id: 'gabite',
    name: 'Gabite',
    stats: {
      atk: 172,
      def: 125,
      sta: 169,
    },
    family: {
      id: 'gible',
      stage: 2,
    },
  },
  {
    id: 'gallade',
    name: 'Gallade',
    stats: {
      atk: 237,
      def: 195,
      sta: 169,
    },
    family: {
      id: 'ralts',
      stage: 3,
    },
  },
  {
    id: 'gallade_mega',
    name: 'Gallade (Mega)',
    stats: {
      atk: 326,
      def: 230,
      sta: 169,
    },
    family: {
      id: 'ralts',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'galvantula',
    name: 'Galvantula',
    stats: {
      atk: 201,
      def: 128,
      sta: 172,
    },
    family: {
      id: 'joltik',
      stage: 2,
    },
  },
  {
    id: 'garbodor',
    name: 'Garbodor',
    stats: {
      atk: 181,
      def: 164,
      sta: 190,
    },
    family: {
      id: 'trubbish',
      stage: 2,
    },
  },
  {
    id: 'garchomp',
    name: 'Garchomp',
    stats: {
      atk: 261,
      def: 193,
      sta: 239,
    },
    family: {
      id: 'gible',
      stage: 3,
    },
  },
  {
    id: 'garchomp_mega',
    name: 'Garchomp (Mega)',
    stats: {
      atk: 339,
      def: 222,
      sta: 239,
    },
    family: {
      id: 'gible',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'gardevoir',
    name: 'Gardevoir',
    stats: {
      atk: 237,
      def: 195,
      sta: 169,
    },
    family: {
      id: 'ralts',
      stage: 3,
    },
  },
  {
    id: 'gardevoir_mega',
    name: 'Gardevoir (Mega)',
    stats: {
      atk: 326,
      def: 229,
      sta: 169,
    },
    family: {
      id: 'ralts',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'gastly',
    name: 'Gastly',
    stats: {
      atk: 186,
      def: 67,
      sta: 102,
    },
    family: {
      id: 'gastly',
      stage: 1,
    },
  },
  {
    id: 'gastrodon',
    name: 'Gastrodon',
    stats: {
      atk: 169,
      def: 143,
      sta: 244,
    },
    family: {
      id: 'shellos',
      stage: 2,
    },
  },
  {
    id: 'genesect',
    name: 'Genesect',
    stats: {
      atk: 252,
      def: 199,
      sta: 174,
    },
    floor: 10,
    family: {
      id: 'genesect',
      stage: 1,
    },
  },
  {
    id: 'gengar',
    name: 'Gengar',
    stats: {
      atk: 261,
      def: 149,
      sta: 155,
    },
    family: {
      id: 'gastly',
      stage: 3,
    },
  },
  {
    id: 'gengar_mega',
    name: 'Gengar (Mega)',
    stats: {
      atk: 349,
      def: 199,
      sta: 155,
    },
    family: {
      id: 'gastly',
      stage: 4,
    },
  },
  {
    id: 'geodude',
    name: 'Geodude',
    stats: {
      atk: 132,
      def: 132,
      sta: 120,
    },
    family: {
      id: 'geodude',
      stage: 1,
    },
  },
  {
    id: 'geodude_alolan',
    name: 'Geodude (Alolan)',
    stats: {
      atk: 132,
      def: 132,
      sta: 120,
    },
    family: {
      id: 'geodude_alolan',
      stage: 1,
    },
  },
  {
    id: 'gible',
    name: 'Gible',
    stats: {
      atk: 124,
      def: 84,
      sta: 151,
    },
    family: {
      id: 'gible',
      stage: 1,
    },
  },
  {
    id: 'gigalith',
    name: 'Gigalith',
    stats: {
      atk: 226,
      def: 201,
      sta: 198,
    },
    family: {
      id: 'roggenrola',
      stage: 3,
    },
  },
  {
    id: 'girafarig',
    name: 'Girafarig',
    stats: {
      atk: 182,
      def: 133,
      sta: 172,
    },
    family: {
      id: 'girafarig',
      stage: 1,
    },
  },
  {
    id: 'giratina_altered',
    name: 'Giratina (Altered)',
    stats: {
      atk: 187,
      def: 225,
      sta: 284,
    },
    floor: 1,
    family: {
      id: 'giratina_altered',
      stage: 1,
    },
  },
  {
    id: 'giratina_origin',
    name: 'Giratina (Origin)',
    stats: {
      atk: 225,
      def: 187,
      sta: 284,
    },
    floor: 1,
    family: {
      id: 'giratina_origin',
      stage: 1,
    },
  },
  {
    id: 'glaceon',
    name: 'Glaceon',
    stats: {
      atk: 238,
      def: 205,
      sta: 163,
    },
    family: {
      id: 'eevee',
      stage: 2,
    },
  },
  {
    id: 'glalie',
    name: 'Glalie',
    stats: {
      atk: 162,
      def: 162,
      sta: 190,
    },
    family: {
      id: 'snorunt',
      stage: 2,
    },
  },
  {
    id: 'glalie_mega',
    name: 'Glalie (Mega)',
    stats: {
      atk: 252,
      def: 168,
      sta: 190,
    },
    family: {
      id: 'snorunt',
      stage: 3,
    },
    speculative: true,
  },
  {
    id: 'glameow',
    name: 'Glameow',
    stats: {
      atk: 109,
      def: 82,
      sta: 135,
    },
    family: {
      id: 'glameow',
      stage: 1,
    },
  },
  {
    id: 'gligar',
    name: 'Gligar',
    stats: {
      atk: 143,
      def: 184,
      sta: 163,
    },
    family: {
      id: 'gligar',
      stage: 1,
    },
  },
  {
    id: 'gliscor',
    name: 'Gliscor',
    stats: {
      atk: 185,
      def: 222,
      sta: 181,
    },
    family: {
      id: 'gligar',
      stage: 2,
    },
  },
  {
    id: 'gloom',
    name: 'Gloom',
    stats: {
      atk: 153,
      def: 136,
      sta: 155,
    },
    family: {
      id: 'oddish',
      stage: 2,
    },
  },
  {
    id: 'gogoat',
    name: 'Gogoat',
    stats: {
      atk: 196,
      def: 146,
      sta: 265,
    },
    family: {
      id: 'skiddo',
      stage: 2,
    },
  },
  {
    id: 'golbat',
    name: 'Golbat',
    stats: {
      atk: 161,
      def: 150,
      sta: 181,
    },
    family: {
      id: 'zubat',
      stage: 2,
    },
  },
  {
    id: 'goldeen',
    name: 'Goldeen',
    stats: {
      atk: 123,
      def: 110,
      sta: 128,
    },
    family: {
      id: 'goldeen',
      stage: 1,
    },
  },
  {
    id: 'golduck',
    name: 'Golduck',
    stats: {
      atk: 191,
      def: 162,
      sta: 190,
    },
    family: {
      id: 'psyduck',
      stage: 2,
    },
  },
  {
    id: 'golem',
    name: 'Golem',
    stats: {
      atk: 211,
      def: 198,
      sta: 190,
    },
    family: {
      id: 'geodude',
      stage: 3,
    },
  },
  {
    id: 'golem_alolan',
    name: 'Golem (Alolan)',
    stats: {
      atk: 211,
      def: 198,
      sta: 190,
    },
    family: {
      id: 'geodude_alolan',
      stage: 3,
    },
  },
  {
    id: 'golett',
    name: 'Golett',
    stats: {
      atk: 127,
      def: 92,
      sta: 153,
    },
    family: {
      id: 'golett',
      stage: 1,
    },
  },
  {
    id: 'golurk',
    name: 'Golurk',
    stats: {
      atk: 222,
      def: 154,
      sta: 205,
    },
    family: {
      id: 'golett',
      stage: 2,
    },
  },
  {
    id: 'goodra',
    name: 'Goodra',
    stats: {
      atk: 220,
      def: 242,
      sta: 207,
    },
    family: {
      id: 'goomy',
      stage: 3,
    },
  },
  {
    id: 'goomy',
    name: 'Goomy',
    stats: {
      atk: 101,
      def: 112,
      sta: 128,
    },
    family: {
      id: 'goomy',
      stage: 1,
    },
  },
  {
    id: 'gorebyss',
    name: 'Gorebyss',
    stats: {
      atk: 211,
      def: 179,
      sta: 146,
    },
    family: {
      id: 'clamperl',
      stage: 2,
    },
  },
  {
    id: 'gothita',
    name: 'Gothita',
    stats: {
      atk: 98,
      def: 112,
      sta: 128,
    },
    family: {
      id: 'gothita',
      stage: 1,
    },
  },
  {
    id: 'gothitelle',
    name: 'Gothitelle',
    stats: {
      atk: 176,
      def: 205,
      sta: 172,
    },
    family: {
      id: 'gothita',
      stage: 3,
    },
  },
  {
    id: 'gothorita',
    name: 'Gothorita',
    stats: {
      atk: 137,
      def: 153,
      sta: 155,
    },
    family: {
      id: 'gothita',
      stage: 2,
    },
  },
  {
    id: 'granbull',
    name: 'Granbull',
    stats: {
      atk: 212,
      def: 131,
      sta: 207,
    },
    family: {
      id: 'snubbull',
      stage: 2,
    },
  },
  {
    id: 'graveler',
    name: 'Graveler',
    stats: {
      atk: 164,
      def: 164,
      sta: 146,
    },
    family: {
      id: 'geodude',
      stage: 2,
    },
  },
  {
    id: 'graveler_alolan',
    name: 'Graveler (Alolan)',
    stats: {
      atk: 164,
      def: 164,
      sta: 146,
    },
    family: {
      id: 'geodude_alolan',
      stage: 2,
    },
  },
  {
    id: 'greninja',
    name: 'Greninja',
    stats: {
      atk: 223,
      def: 152,
      sta: 176,
    },
    family: {
      id: 'froakie',
      stage: 3,
    },
  },
  {
    id: 'greninja_ash',
    name: 'Greninja (Ash)',
    stats: {
      atk: 339,
      def: 155,
      sta: 176,
    },
    family: {
      id: 'froakie',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'grimer',
    name: 'Grimer',
    stats: {
      atk: 135,
      def: 90,
      sta: 190,
    },
    family: {
      id: 'grimer',
      stage: 1,
    },
  },
  {
    id: 'grimer_alolan',
    name: 'Grimer (Alolan)',
    stats: {
      atk: 135,
      def: 90,
      sta: 190,
    },
    family: {
      id: 'grimer_alolan',
      stage: 1,
    },
  },
  {
    id: 'grotle',
    name: 'Grotle',
    stats: {
      atk: 157,
      def: 143,
      sta: 181,
    },
    family: {
      id: 'turtwig',
      stage: 2,
    },
  },
  {
    id: 'groudon',
    name: 'Groudon',
    stats: {
      atk: 270,
      def: 228,
      sta: 205,
    },
    floor: 1,
    family: {
      id: 'groudon',
      stage: 1,
    },
  },
  {
    id: 'groudon_primal',
    name: 'Groudon (Primal)',
    stats: {
      atk: 331,
      def: 251,
      sta: 205,
    },
    floor: 1,
    family: {
      id: 'groudon',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'grovyle',
    name: 'Grovyle',
    stats: {
      atk: 172,
      def: 120,
      sta: 137,
    },
    family: {
      id: 'treecko',
      stage: 2,
    },
  },
  {
    id: 'growlithe',
    name: 'Growlithe',
    stats: {
      atk: 136,
      def: 93,
      sta: 146,
    },
    family: {
      id: 'growlithe',
      stage: 1,
    },
  },
  {
    id: 'grumpig',
    name: 'Grumpig',
    stats: {
      atk: 171,
      def: 188,
      sta: 190,
    },
    family: {
      id: 'spoink',
      stage: 2,
    },
  },
  {
    id: 'gulpin',
    name: 'Gulpin',
    stats: {
      atk: 80,
      def: 99,
      sta: 172,
    },
    family: {
      id: 'gulpin',
      stage: 1,
    },
  },
  {
    id: 'gurdurr',
    name: 'Gurdurr',
    stats: {
      atk: 180,
      def: 134,
      sta: 198,
    },
    family: {
      id: 'timburr',
      stage: 2,
    },
  },
  {
    id: 'gyarados',
    name: 'Gyarados',
    stats: {
      atk: 237,
      def: 186,
      sta: 216,
    },
    family: {
      id: 'magikarp',
      stage: 2,
    },
  },
  {
    id: 'gyarados_mega',
    name: 'Gyarados (Mega)',
    stats: {
      atk: 292,
      def: 247,
      sta: 216,
    },
    family: {
      id: 'magikarp',
      stage: 3,
    },
  },
  {
    id: 'happiny',
    name: 'Happiny',
    stats: {
      atk: 25,
      def: 77,
      sta: 225,
    },
    family: {
      id: 'happiny',
      stage: 1,
    },
  },
  {
    id: 'hariyama',
    name: 'Hariyama',
    stats: {
      atk: 209,
      def: 114,
      sta: 302,
    },
    family: {
      id: 'makuhita',
      stage: 2,
    },
  },
  {
    id: 'haunter',
    name: 'Haunter',
    stats: {
      atk: 223,
      def: 107,
      sta: 128,
    },
    family: {
      id: 'gastly',
      stage: 2,
    },
  },
  {
    id: 'hawlucha',
    name: 'Hawlucha',
    stats: {
      atk: 195,
      def: 153,
      sta: 186,
    },
    family: {
      id: 'hawlucha',
      stage: 1,
    },
  },
  {
    id: 'haxorus',
    name: 'Haxorus',
    stats: {
      atk: 284,
      def: 172,
      sta: 183,
    },
    family: {
      id: 'axew',
      stage: 3,
    },
  },
  {
    id: 'heatmor',
    name: 'Heatmor',
    stats: {
      atk: 204,
      def: 129,
      sta: 198,
    },
    family: {
      id: 'heatmor',
      stage: 1,
    },
  },
  {
    id: 'heatran',
    name: 'Heatran',
    stats: {
      atk: 251,
      def: 213,
      sta: 209,
    },
    floor: 1,
    family: {
      id: 'heatran',
      stage: 1,
    },
  },
  {
    id: 'heliolisk',
    name: 'Heliolisk',
    stats: {
      atk: 219,
      def: 168,
      sta: 158,
    },
    family: {
      id: 'helioptile',
      stage: 2,
    },
  },
  {
    id: 'helioptile',
    name: 'Helioptile',
    stats: {
      atk: 115,
      def: 78,
      sta: 127,
    },
    family: {
      id: 'helioptile',
      stage: 1,
    },
  },
  {
    id: 'heracross',
    name: 'Heracross',
    stats: {
      atk: 234,
      def: 179,
      sta: 190,
    },
    family: {
      id: 'heracross',
      stage: 1,
    },
  },
  {
    id: 'heracross_mega',
    name: 'Heracross (Mega)',
    stats: {
      atk: 334,
      def: 223,
      sta: 190,
    },
    family: {
      id: 'heracross',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'herdier',
    name: 'Herdier',
    stats: {
      atk: 145,
      def: 126,
      sta: 163,
    },
    family: {
      id: 'lillipup',
      stage: 2,
    },
  },
  {
    id: 'hippopotas',
    name: 'Hippopotas',
    stats: {
      atk: 124,
      def: 118,
      sta: 169,
    },
    family: {
      id: 'hippopotas',
      stage: 1,
    },
  },
  {
    id: 'hippowdon',
    name: 'Hippowdon',
    stats: {
      atk: 201,
      def: 191,
      sta: 239,
    },
    family: {
      id: 'hippopotas',
      stage: 2,
    },
  },
  {
    id: 'hitmonchan',
    name: 'Hitmonchan',
    stats: {
      atk: 193,
      def: 197,
      sta: 137,
    },
    family: {
      id: 'tyrogue',
      stage: 2,
    },
  },
  {
    id: 'hitmonlee',
    name: 'Hitmonlee',
    stats: {
      atk: 224,
      def: 181,
      sta: 137,
    },
    family: {
      id: 'tyrogue',
      stage: 2,
    },
  },
  {
    id: 'hitmontop',
    name: 'Hitmontop',
    stats: {
      atk: 173,
      def: 207,
      sta: 137,
    },
    family: {
      id: 'tyrogue',
      stage: 2,
    },
  },
  {
    id: 'ho_oh',
    name: 'Ho-Oh',
    stats: {
      atk: 239,
      def: 244,
      sta: 214,
    },
    floor: 1,
    family: {
      id: 'ho_oh',
      stage: 1,
    },
  },
  {
    id: 'honchkrow',
    name: 'Honchkrow',
    stats: {
      atk: 243,
      def: 103,
      sta: 225,
    },
    family: {
      id: 'murkrow',
      stage: 2,
    },
  },
  {
    id: 'honedge',
    name: 'Honedge',
    stats: {
      atk: 135,
      def: 139,
      sta: 128,
    },
    family: {
      id: 'honedge',
      stage: 1,
    },
  },
  {
    id: 'hoothoot',
    name: 'Hoothoot',
    stats: {
      atk: 67,
      def: 88,
      sta: 155,
    },
    family: {
      id: 'hoothoot',
      stage: 1,
    },
  },
  {
    id: 'hoppip',
    name: 'Hoppip',
    stats: {
      atk: 67,
      def: 94,
      sta: 111,
    },
    family: {
      id: 'hoppip',
      stage: 1,
    },
  },
  {
    id: 'horsea',
    name: 'Horsea',
    stats: {
      atk: 129,
      def: 103,
      sta: 102,
    },
    family: {
      id: 'horsea',
      stage: 1,
    },
  },
  {
    id: 'houndoom',
    name: 'Houndoom',
    stats: {
      atk: 224,
      def: 144,
      sta: 181,
    },
    family: {
      id: 'houndour',
      stage: 2,
    },
  },
  {
    id: 'houndoom_mega',
    name: 'Houndoom (Mega)',
    stats: {
      atk: 289,
      def: 194,
      sta: 181,
    },
    family: {
      id: 'houndour',
      stage: 3,
    },
  },
  {
    id: 'houndour',
    name: 'Houndour',
    stats: {
      atk: 152,
      def: 83,
      sta: 128,
    },
    family: {
      id: 'houndour',
      stage: 1,
    },
  },
  {
    id: 'huntail',
    name: 'Huntail',
    stats: {
      atk: 197,
      def: 179,
      sta: 146,
    },
    family: {
      id: 'clamperl',
      stage: 2,
    },
  },
  {
    id: 'hydreigon',
    name: 'Hydreigon',
    stats: {
      atk: 256,
      def: 188,
      sta: 211,
    },
    family: {
      id: 'deino',
      stage: 3,
    },
  },
  {
    id: 'hypno',
    name: 'Hypno',
    stats: {
      atk: 144,
      def: 193,
      sta: 198,
    },
    family: {
      id: 'drowzee',
      stage: 2,
    },
  },
  {
    id: 'igglybuff',
    name: 'Igglybuff',
    stats: {
      atk: 69,
      def: 32,
      sta: 207,
    },
    family: {
      id: 'igglybuff',
      stage: 1,
    },
  },
  {
    id: 'illumise',
    name: 'Illumise',
    stats: {
      atk: 143,
      def: 166,
      sta: 163,
    },
    family: {
      id: 'illumise',
      stage: 1,
    },
  },
  {
    id: 'infernape',
    name: 'Infernape',
    stats: {
      atk: 222,
      def: 151,
      sta: 183,
    },
    family: {
      id: 'chimchar',
      stage: 3,
    },
  },
  {
    id: 'inkay',
    name: 'Inkay',
    stats: {
      atk: 98,
      def: 95,
      sta: 142,
    },
    family: {
      id: 'inkay',
      stage: 1,
    },
  },
  {
    id: 'ivysaur',
    name: 'Ivysaur',
    stats: {
      atk: 151,
      def: 143,
      sta: 155,
    },
    family: {
      id: 'bulbasaur',
      stage: 2,
    },
  },
  {
    id: 'jellicent',
    name: 'Jellicent',
    stats: {
      atk: 159,
      def: 178,
      sta: 225,
    },
    family: {
      id: 'frillish',
      stage: 2,
    },
  },
  {
    id: 'jigglypuff',
    name: 'Jigglypuff',
    stats: {
      atk: 80,
      def: 41,
      sta: 251,
    },
    family: {
      id: 'igglybuff',
      stage: 2,
    },
  },
  {
    id: 'jirachi',
    name: 'Jirachi',
    stats: {
      atk: 210,
      def: 210,
      sta: 225,
    },
    floor: 10,
    family: {
      id: 'jirachi',
      stage: 1,
    },
  },
  {
    id: 'jolteon',
    name: 'Jolteon',
    stats: {
      atk: 232,
      def: 182,
      sta: 163,
    },
    family: {
      id: 'eevee',
      stage: 2,
    },
  },
  {
    id: 'joltik',
    name: 'Joltik',
    stats: {
      atk: 110,
      def: 98,
      sta: 137,
    },
    family: {
      id: 'joltik',
      stage: 1,
    },
  },
  {
    id: 'jumpluff',
    name: 'Jumpluff',
    stats: {
      atk: 118,
      def: 183,
      sta: 181,
    },
    family: {
      id: 'hoppip',
      stage: 3,
    },
  },
  {
    id: 'jynx',
    name: 'Jynx',
    stats: {
      atk: 223,
      def: 151,
      sta: 163,
    },
    family: {
      id: 'smoochum',
      stage: 2,
    },
  },
  {
    id: 'kabuto',
    name: 'Kabuto',
    stats: {
      atk: 148,
      def: 140,
      sta: 102,
    },
    family: {
      id: 'kabuto',
      stage: 1,
    },
  },
  {
    id: 'kabutops',
    name: 'Kabutops',
    stats: {
      atk: 220,
      def: 186,
      sta: 155,
    },
    family: {
      id: 'kabuto',
      stage: 2,
    },
  },
  {
    id: 'kadabra',
    name: 'Kadabra',
    stats: {
      atk: 232,
      def: 117,
      sta: 120,
    },
    family: {
      id: 'abra',
      stage: 2,
    },
  },
  {
    id: 'kakuna',
    name: 'Kakuna',
    stats: {
      atk: 46,
      def: 75,
      sta: 128,
    },
    family: {
      id: 'weedle',
      stage: 2,
    },
  },
  {
    id: 'kangaskhan',
    name: 'Kangaskhan',
    stats: {
      atk: 181,
      def: 165,
      sta: 233,
    },
    family: {
      id: 'kangaskhan',
      stage: 1,
    },
  },
  {
    id: 'kangaskhan_mega',
    name: 'Kangaskhan (Mega)',
    stats: {
      atk: 246,
      def: 210,
      sta: 233,
    },
    family: {
      id: 'kangaskhan',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'karrablast',
    name: 'Karrablast',
    stats: {
      atk: 137,
      def: 87,
      sta: 137,
    },
    family: {
      id: 'karrablast',
      stage: 1,
    },
  },
  {
    id: 'kecleon',
    name: 'Kecleon',
    stats: {
      atk: 161,
      def: 189,
      sta: 155,
    },
    family: {
      id: 'kecleon',
      stage: 1,
    },
  },
  {
    id: 'keldeo_ordinary',
    name: 'Keldeo (Ordinary)',
    stats: {
      atk: 260,
      def: 192,
      sta: 209,
    },
    family: {
      id: 'keldeo_ordinary',
      stage: 1,
    },
  },
  {
    id: 'keldeo_resolute',
    name: 'Keldeo (Resolute)',
    stats: {
      atk: 260,
      def: 192,
      sta: 209,
    },
    family: {
      id: 'keldeo_resolute',
      stage: 1,
    },
  },
  {
    id: 'kingdra',
    name: 'Kingdra',
    stats: {
      atk: 194,
      def: 194,
      sta: 181,
    },
    family: {
      id: 'horsea',
      stage: 3,
    },
  },
  {
    id: 'kingler',
    name: 'Kingler',
    stats: {
      atk: 240,
      def: 181,
      sta: 146,
    },
    family: {
      id: 'krabby',
      stage: 2,
    },
  },
  {
    id: 'kirlia',
    name: 'Kirlia',
    stats: {
      atk: 117,
      def: 90,
      sta: 116,
    },
    family: {
      id: 'ralts',
      stage: 2,
    },
  },
  {
    id: 'klang',
    name: 'Klang',
    stats: {
      atk: 150,
      def: 174,
      sta: 155,
    },
    family: {
      id: 'klink',
      stage: 2,
    },
  },
  {
    id: 'klefki',
    name: 'Klefki',
    stats: {
      atk: 160,
      def: 179,
      sta: 149,
    },
    family: {
      id: 'klefki',
      stage: 1,
    },
  },
  {
    id: 'klink',
    name: 'Klink',
    stats: {
      atk: 98,
      def: 121,
      sta: 120,
    },
    family: {
      id: 'klink',
      stage: 1,
    },
  },
  {
    id: 'klinklang',
    name: 'Klinklang',
    stats: {
      atk: 199,
      def: 214,
      sta: 155,
    },
    family: {
      id: 'klink',
      stage: 3,
    },
  },
  {
    id: 'koffing',
    name: 'Koffing',
    stats: {
      atk: 119,
      def: 141,
      sta: 120,
    },
    family: {
      id: 'koffing',
      stage: 1,
    },
  },
  {
    id: 'krabby',
    name: 'Krabby',
    stats: {
      atk: 181,
      def: 124,
      sta: 102,
    },
    family: {
      id: 'krabby',
      stage: 1,
    },
  },
  {
    id: 'kricketot',
    name: 'Kricketot',
    stats: {
      atk: 45,
      def: 74,
      sta: 114,
    },
    family: {
      id: 'kricketot',
      stage: 1,
    },
  },
  {
    id: 'kricketune',
    name: 'Kricketune',
    stats: {
      atk: 160,
      def: 100,
      sta: 184,
    },
    family: {
      id: 'kricketot',
      stage: 2,
    },
  },
  {
    id: 'krokorok',
    name: 'Krokorok',
    stats: {
      atk: 155,
      def: 90,
      sta: 155,
    },
    family: {
      id: 'sandile',
      stage: 2,
    },
  },
  {
    id: 'krookodile',
    name: 'Krookodile',
    stats: {
      atk: 229,
      def: 158,
      sta: 216,
    },
    family: {
      id: 'sandile',
      stage: 3,
    },
  },
  {
    id: 'kyogre',
    name: 'Kyogre',
    stats: {
      atk: 270,
      def: 228,
      sta: 205,
    },
    floor: 1,
    family: {
      id: 'kyogre',
      stage: 1,
    },
  },
  {
    id: 'kyogre_primal',
    name: 'Kyogre (Primal)',
    stats: {
      atk: 331,
      def: 251,
      sta: 205,
    },
    floor: 1,
    family: {
      id: 'kyogre',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'kyurem',
    name: 'Kyurem',
    stats: {
      atk: 246,
      def: 170,
      sta: 245,
    },
    floor: 1,
    family: {
      id: 'kyurem',
      stage: 1,
    },
  },
  {
    id: 'kyurem_black',
    name: 'Kyurem (Black)',
    stats: {
      atk: 310,
      def: 183,
      sta: 245,
    },
    floor: 1,
    family: {
      id: 'kyurem_black',
      stage: 1,
    },
  },
  {
    id: 'kyurem_white',
    name: 'Kyurem (White)',
    stats: {
      atk: 310,
      def: 183,
      sta: 245,
    },
    floor: 1,
    family: {
      id: 'kyurem_white',
      stage: 1,
    },
  },
  {
    id: 'lairon',
    name: 'Lairon',
    stats: {
      atk: 158,
      def: 198,
      sta: 155,
    },
    family: {
      id: 'aron',
      stage: 2,
    },
  },
  {
    id: 'lampent',
    name: 'Lampent',
    stats: {
      atk: 169,
      def: 115,
      sta: 155,
    },
    family: {
      id: 'litwick',
      stage: 2,
    },
  },
  {
    id: 'landorus_incarnate',
    name: 'Landorus (Incarnate)',
    stats: {
      atk: 261,
      def: 182,
      sta: 205,
    },
    floor: 1,
    family: {
      id: 'landorus_incarnate',
      stage: 1,
    },
  },
  {
    id: 'landorus_therian',
    name: 'Landorus (Therian)',
    stats: {
      atk: 289,
      def: 179,
      sta: 205,
    },
    floor: 1,
    family: {
      id: 'landorus_therian',
      stage: 1,
    },
  },
  {
    id: 'lanturn',
    name: 'Lanturn',
    stats: {
      atk: 146,
      def: 137,
      sta: 268,
    },
    family: {
      id: 'chinchou',
      stage: 2,
    },
  },
  {
    id: 'lapras',
    name: 'Lapras',
    stats: {
      atk: 165,
      def: 174,
      sta: 277,
    },
    family: {
      id: 'lapras',
      stage: 1,
    },
  },
  {
    id: 'larvesta',
    name: 'Larvesta',
    stats: {
      atk: 156,
      def: 107,
      sta: 146,
    },
    family: {
      id: 'larvesta',
      stage: 1,
    },
  },
  {
    id: 'larvitar',
    name: 'Larvitar',
    stats: {
      atk: 115,
      def: 93,
      sta: 137,
    },
    family: {
      id: 'larvitar',
      stage: 1,
    },
  },
  {
    id: 'latias',
    name: 'Latias',
    stats: {
      atk: 228,
      def: 246,
      sta: 190,
    },
    floor: 1,
    family: {
      id: 'latias',
      stage: 1,
    },
  },
  {
    id: 'latias_mega',
    name: 'Latias (Mega)',
    stats: {
      atk: 289,
      def: 297,
      sta: 190,
    },
    floor: 1,
    family: {
      id: 'latias',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'latios',
    name: 'Latios',
    stats: {
      atk: 268,
      def: 212,
      sta: 190,
    },
    floor: 1,
    family: {
      id: 'latios',
      stage: 1,
    },
  },
  {
    id: 'latios_mega',
    name: 'Latios (Mega)',
    stats: {
      atk: 335,
      def: 241,
      sta: 190,
    },
    floor: 1,
    family: {
      id: 'latios',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'leafeon',
    name: 'Leafeon',
    stats: {
      atk: 216,
      def: 219,
      sta: 163,
    },
    family: {
      id: 'eevee',
      stage: 2,
    },
  },
  {
    id: 'leavanny',
    name: 'Leavanny',
    stats: {
      atk: 205,
      def: 165,
      sta: 181,
    },
    family: {
      id: 'sewaddle',
      stage: 3,
    },
  },
  {
    id: 'ledian',
    name: 'Ledian',
    stats: {
      atk: 107,
      def: 179,
      sta: 146,
    },
    family: {
      id: 'ledyba',
      stage: 2,
    },
  },
  {
    id: 'ledyba',
    name: 'Ledyba',
    stats: {
      atk: 72,
      def: 118,
      sta: 120,
    },
    family: {
      id: 'ledyba',
      stage: 1,
    },
  },
  {
    id: 'lickilicky',
    name: 'Lickilicky',
    stats: {
      atk: 161,
      def: 181,
      sta: 242,
    },
    family: {
      id: 'lickitung',
      stage: 2,
    },
  },
  {
    id: 'lickitung',
    name: 'Lickitung',
    stats: {
      atk: 108,
      def: 137,
      sta: 207,
    },
    family: {
      id: 'lickitung',
      stage: 1,
    },
  },
  {
    id: 'liepard',
    name: 'Liepard',
    stats: {
      atk: 187,
      def: 106,
      sta: 162,
    },
    family: {
      id: 'purrloin',
      stage: 2,
    },
  },
  {
    id: 'lileep',
    name: 'Lileep',
    stats: {
      atk: 105,
      def: 150,
      sta: 165,
    },
    family: {
      id: 'lileep',
      stage: 1,
    },
  },
  {
    id: 'lilligant',
    name: 'Lilligant',
    stats: {
      atk: 214,
      def: 155,
      sta: 172,
    },
    family: {
      id: 'petilil',
      stage: 2,
    },
  },
  {
    id: 'lillipup',
    name: 'Lillipup',
    stats: {
      atk: 107,
      def: 86,
      sta: 128,
    },
    family: {
      id: 'lillipup',
      stage: 1,
    },
  },
  {
    id: 'linoone',
    name: 'Linoone',
    stats: {
      atk: 142,
      def: 128,
      sta: 186,
    },
    family: {
      id: 'zigzagoon',
      stage: 2,
    },
  },
  {
    id: 'linoone_galarian',
    name: 'Linoone (Galarian)',
    stats: {
      atk: 142,
      def: 128,
      sta: 186,
    },
    family: {
      id: 'zigzagoon_galarian',
      stage: 2,
    },
  },
  {
    id: 'litleo',
    name: 'Litleo',
    stats: {
      atk: 139,
      def: 112,
      sta: 158,
    },
    family: {
      id: 'litleo',
      stage: 1,
    },
  },
  {
    id: 'litwick',
    name: 'Litwick',
    stats: {
      atk: 108,
      def: 98,
      sta: 137,
    },
    family: {
      id: 'litwick',
      stage: 1,
    },
  },
  {
    id: 'lombre',
    name: 'Lombre',
    stats: {
      atk: 112,
      def: 119,
      sta: 155,
    },
    family: {
      id: 'lotad',
      stage: 2,
    },
  },
  {
    id: 'lopunny',
    name: 'Lopunny',
    stats: {
      atk: 156,
      def: 194,
      sta: 163,
    },
    family: {
      id: 'buneary',
      stage: 2,
    },
  },
  {
    id: 'lopunny_mega',
    name: 'Lopunny (Mega)',
    stats: {
      atk: 282,
      def: 214,
      sta: 163,
    },
    family: {
      id: 'buneary',
      stage: 3,
    },
  },
  {
    id: 'lotad',
    name: 'Lotad',
    stats: {
      atk: 71,
      def: 77,
      sta: 120,
    },
    family: {
      id: 'lotad',
      stage: 1,
    },
  },
  {
    id: 'loudred',
    name: 'Loudred',
    stats: {
      atk: 134,
      def: 81,
      sta: 197,
    },
    family: {
      id: 'whismur',
      stage: 2,
    },
  },
  {
    id: 'lucario',
    name: 'Lucario',
    stats: {
      atk: 236,
      def: 144,
      sta: 172,
    },
    family: {
      id: 'riolu',
      stage: 2,
    },
  },
  {
    id: 'lucario_mega',
    name: 'Lucario (Mega)',
    stats: {
      atk: 310,
      def: 175,
      sta: 172,
    },
    family: {
      id: 'riolu',
      stage: 3,
    },
    speculative: true,
  },
  {
    id: 'ludicolo',
    name: 'Ludicolo',
    stats: {
      atk: 173,
      def: 176,
      sta: 190,
    },
    family: {
      id: 'lotad',
      stage: 3,
    },
  },
  {
    id: 'lugia',
    name: 'Lugia',
    stats: {
      atk: 193,
      def: 310,
      sta: 235,
    },
    floor: 1,
    family: {
      id: 'lugia',
      stage: 1,
    },
  },
  {
    id: 'lumineon',
    name: 'Lumineon',
    stats: {
      atk: 142,
      def: 170,
      sta: 170,
    },
    family: {
      id: 'finneon',
      stage: 2,
    },
  },
  {
    id: 'lunatone',
    name: 'Lunatone',
    stats: {
      atk: 178,
      def: 153,
      sta: 207,
    },
    family: {
      id: 'lunatone',
      stage: 1,
    },
  },
  {
    id: 'luvdisc',
    name: 'Luvdisc',
    stats: {
      atk: 81,
      def: 128,
      sta: 125,
    },
    family: {
      id: 'luvdisc',
      stage: 1,
    },
  },
  {
    id: 'luxio',
    name: 'Luxio',
    stats: {
      atk: 159,
      def: 95,
      sta: 155,
    },
    family: {
      id: 'shinx',
      stage: 2,
    },
  },
  {
    id: 'luxray',
    name: 'Luxray',
    stats: {
      atk: 232,
      def: 156,
      sta: 190,
    },
    family: {
      id: 'shinx',
      stage: 3,
    },
  },
  {
    id: 'machamp',
    name: 'Machamp',
    stats: {
      atk: 234,
      def: 159,
      sta: 207,
    },
    family: {
      id: 'machop',
      stage: 3,
    },
  },
  {
    id: 'machoke',
    name: 'Machoke',
    stats: {
      atk: 177,
      def: 125,
      sta: 190,
    },
    family: {
      id: 'machop',
      stage: 2,
    },
  },
  {
    id: 'machop',
    name: 'Machop',
    stats: {
      atk: 137,
      def: 82,
      sta: 172,
    },
    family: {
      id: 'machop',
      stage: 1,
    },
  },
  {
    id: 'magby',
    name: 'Magby',
    stats: {
      atk: 151,
      def: 99,
      sta: 128,
    },
    family: {
      id: 'magby',
      stage: 1,
    },
  },
  {
    id: 'magcargo',
    name: 'Magcargo',
    stats: {
      atk: 139,
      def: 191,
      sta: 137,
    },
    family: {
      id: 'slugma',
      stage: 2,
    },
  },
  {
    id: 'magikarp',
    name: 'Magikarp',
    stats: {
      atk: 29,
      def: 85,
      sta: 85,
    },
    family: {
      id: 'magikarp',
      stage: 1,
    },
  },
  {
    id: 'magmar',
    name: 'Magmar',
    stats: {
      atk: 206,
      def: 154,
      sta: 163,
    },
    family: {
      id: 'magby',
      stage: 2,
    },
  },
  {
    id: 'magmortar',
    name: 'Magmortar',
    stats: {
      atk: 247,
      def: 172,
      sta: 181,
    },
    family: {
      id: 'magby',
      stage: 3,
    },
  },
  {
    id: 'magnemite',
    name: 'Magnemite',
    stats: {
      atk: 165,
      def: 121,
      sta: 93,
    },
    family: {
      id: 'magnemite',
      stage: 1,
    },
  },
  {
    id: 'magneton',
    name: 'Magneton',
    stats: {
      atk: 223,
      def: 169,
      sta: 137,
    },
    family: {
      id: 'magnemite',
      stage: 2,
    },
  },
  {
    id: 'magnezone',
    name: 'Magnezone',
    stats: {
      atk: 238,
      def: 205,
      sta: 172,
    },
    family: {
      id: 'magnemite',
      stage: 3,
    },
  },
  {
    id: 'makuhita',
    name: 'Makuhita',
    stats: {
      atk: 99,
      def: 54,
      sta: 176,
    },
    family: {
      id: 'makuhita',
      stage: 1,
    },
  },
  {
    id: 'malamar',
    name: 'Malamar',
    stats: {
      atk: 177,
      def: 165,
      sta: 200,
    },
    family: {
      id: 'inkay',
      stage: 2,
    },
  },
  {
    id: 'mamoswine',
    name: 'Mamoswine',
    stats: {
      atk: 247,
      def: 146,
      sta: 242,
    },
    family: {
      id: 'swinub',
      stage: 3,
    },
  },
  {
    id: 'manaphy',
    name: 'Manaphy',
    stats: {
      atk: 210,
      def: 210,
      sta: 225,
    },
    floor: 10,
    family: {
      id: 'manaphy',
      stage: 1,
    },
  },
  {
    id: 'mandibuzz',
    name: 'Mandibuzz',
    stats: {
      atk: 129,
      def: 205,
      sta: 242,
    },
    family: {
      id: 'vullaby',
      stage: 2,
    },
  },
  {
    id: 'manectric',
    name: 'Manectric',
    stats: {
      atk: 215,
      def: 127,
      sta: 172,
    },
    family: {
      id: 'electrike',
      stage: 2,
    },
  },
  {
    id: 'manectric_mega',
    name: 'Manectric (Mega)',
    stats: {
      atk: 286,
      def: 179,
      sta: 172,
    },
    family: {
      id: 'electrike',
      stage: 3,
    },
  },
  {
    id: 'mankey',
    name: 'Mankey',
    stats: {
      atk: 148,
      def: 82,
      sta: 120,
    },
    family: {
      id: 'mankey',
      stage: 1,
    },
  },
  {
    id: 'mantine',
    name: 'Mantine',
    stats: {
      atk: 148,
      def: 226,
      sta: 163,
    },
    family: {
      id: 'mantyke',
      stage: 2,
    },
  },
  {
    id: 'mantyke',
    name: 'Mantyke',
    stats: {
      atk: 105,
      def: 179,
      sta: 128,
    },
    family: {
      id: 'mantyke',
      stage: 1,
    },
  },
  {
    id: 'maractus',
    name: 'Maractus',
    stats: {
      atk: 201,
      def: 130,
      sta: 181,
    },
    family: {
      id: 'maractus',
      stage: 1,
    },
  },
  {
    id: 'mareep',
    name: 'Mareep',
    stats: {
      atk: 114,
      def: 79,
      sta: 146,
    },
    family: {
      id: 'mareep',
      stage: 1,
    },
  },
  {
    id: 'marill',
    name: 'Marill',
    stats: {
      atk: 37,
      def: 93,
      sta: 172,
    },
    family: {
      id: 'azurill',
      stage: 2,
    },
  },
  {
    id: 'marowak',
    name: 'Marowak',
    stats: {
      atk: 144,
      def: 186,
      sta: 155,
    },
    family: {
      id: 'cubone',
      stage: 2,
    },
  },
  {
    id: 'marowak_alolan',
    name: 'Marowak (Alolan)',
    stats: {
      atk: 144,
      def: 186,
      sta: 155,
    },
    family: {
      id: 'marowak_alolan',
      stage: 1,
    },
  },
  {
    id: 'marshtomp',
    name: 'Marshtomp',
    stats: {
      atk: 156,
      def: 133,
      sta: 172,
    },
    family: {
      id: 'mudkip',
      stage: 2,
    },
  },
  {
    id: 'masquerain',
    name: 'Masquerain',
    stats: {
      atk: 192,
      def: 150,
      sta: 172,
    },
    family: {
      id: 'surskit',
      stage: 2,
    },
  },
  {
    id: 'mawile',
    name: 'Mawile',
    stats: {
      atk: 155,
      def: 141,
      sta: 137,
    },
    family: {
      id: 'mawile',
      stage: 1,
    },
  },
  {
    id: 'mawile_mega',
    name: 'Mawile (Mega)',
    stats: {
      atk: 188,
      def: 217,
      sta: 137,
    },
    family: {
      id: 'mawile',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'medicham',
    name: 'Medicham',
    stats: {
      atk: 121,
      def: 152,
      sta: 155,
    },
    family: {
      id: 'meditite',
      stage: 2,
    },
  },
  {
    id: 'medicham_mega',
    name: 'Medicham (Mega)',
    stats: {
      atk: 205,
      def: 179,
      sta: 155,
    },
    family: {
      id: 'meditite',
      stage: 3,
    },
    speculative: true,
  },
  {
    id: 'meditite',
    name: 'Meditite',
    stats: {
      atk: 78,
      def: 107,
      sta: 102,
    },
    family: {
      id: 'meditite',
      stage: 1,
    },
  },
  {
    id: 'meganium',
    name: 'Meganium',
    stats: {
      atk: 168,
      def: 202,
      sta: 190,
    },
    family: {
      id: 'chikorita',
      stage: 3,
    },
  },
  {
    id: 'melmetal',
    name: 'Melmetal',
    stats: {
      atk: 226,
      def: 190,
      sta: 264,
    },
    family: {
      id: 'meltan',
      stage: 2,
    },
  },
  {
    id: 'meloetta_aria',
    name: 'Meloetta (Aria)',
    stats: {
      atk: 250,
      def: 225,
      sta: 225,
    },
    family: {
      id: 'meloetta_aria',
      stage: 1,
    },
  },
  {
    id: 'meloetta_pirouette',
    name: 'Meloetta (Pirouette)',
    stats: {
      atk: 269,
      def: 188,
      sta: 225,
    },
    family: {
      id: 'meloetta_pirouette',
      stage: 1,
    },
  },
  {
    id: 'meltan',
    name: 'Meltan',
    stats: {
      atk: 118,
      def: 99,
      sta: 130,
    },
    family: {
      id: 'meltan',
      stage: 1,
    },
  },
  {
    id: 'meowstic',
    name: 'Meowstic',
    stats: {
      atk: 166,
      def: 167,
      sta: 179,
    },
    family: {
      id: 'espurr',
      stage: 1,
    },
  },
  {
    id: 'meowth',
    name: 'Meowth',
    stats: {
      atk: 92,
      def: 78,
      sta: 120,
    },
    family: {
      id: 'meowth',
      stage: 1,
    },
  },
  {
    id: 'meowth_alolan',
    name: 'Meowth (Alolan)',
    stats: {
      atk: 99,
      def: 78,
      sta: 120,
    },
    family: {
      id: 'meowth_alolan',
      stage: 1,
    },
  },
  {
    id: 'meowth_galarian',
    name: 'Meowth (Galarian)',
    stats: {
      atk: 115,
      def: 92,
      sta: 137,
    },
    family: {
      id: 'meowth_galarian',
      stage: 1,
    },
  },
  {
    id: 'mesprit',
    name: 'Mesprit',
    stats: {
      atk: 212,
      def: 212,
      sta: 190,
    },
    family: {
      id: 'mesprit',
      stage: 1,
    },
  },
  {
    id: 'metagross',
    name: 'Metagross',
    stats: {
      atk: 257,
      def: 228,
      sta: 190,
    },
    family: {
      id: 'beldum',
      stage: 3,
    },
  },
  {
    id: 'metagross_mega',
    name: 'Metagross (Mega)',
    stats: {
      atk: 300,
      def: 289,
      sta: 190,
    },
    family: {
      id: 'beldum',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'metang',
    name: 'Metang',
    stats: {
      atk: 138,
      def: 176,
      sta: 155,
    },
    family: {
      id: 'beldum',
      stage: 2,
    },
  },
  {
    id: 'metapod',
    name: 'Metapod',
    stats: {
      atk: 45,
      def: 80,
      sta: 137,
    },
    family: {
      id: 'caterpie',
      stage: 2,
    },
  },
  {
    id: 'mew',
    name: 'Mew',
    stats: {
      atk: 210,
      def: 210,
      sta: 225,
    },
    floor: 10,
    family: {
      id: 'mew',
      stage: 1,
    },
  },
  {
    id: 'mewtwo',
    name: 'Mewtwo',
    stats: {
      atk: 300,
      def: 182,
      sta: 214,
    },
    floor: 1,
    family: {
      id: 'mewtwo',
      stage: 1,
    },
  },
  {
    id: 'mewtwo_armored',
    name: 'Mewtwo (Armored)',
    stats: {
      atk: 182,
      def: 278,
      sta: 214,
    },
    floor: 1,
    family: {
      id: 'mewtwo_armored',
      stage: 1,
    },
  },
  {
    id: 'mewtwo_mega_x',
    name: 'Mewtwo (Mega X)',
    stats: {
      atk: 375,
      def: 202,
      sta: 214,
    },
    floor: 1,
    family: {
      id: 'mewtwo',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'mewtwo_mega_y',
    name: 'Mewtwo (Mega Y)',
    stats: {
      atk: 388,
      def: 208,
      sta: 214,
    },
    floor: 1,
    family: {
      id: 'mewtwo',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'mienfoo',
    name: 'Mienfoo',
    stats: {
      atk: 160,
      def: 98,
      sta: 128,
    },
    family: {
      id: 'mienfoo',
      stage: 1,
    },
  },
  {
    id: 'mienshao',
    name: 'Mienshao',
    stats: {
      atk: 258,
      def: 127,
      sta: 163,
    },
    family: {
      id: 'mienfoo',
      stage: 2,
    },
  },
  {
    id: 'mightyena',
    name: 'Mightyena',
    stats: {
      atk: 171,
      def: 132,
      sta: 172,
    },
    family: {
      id: 'poochyena',
      stage: 2,
    },
  },
  {
    id: 'milotic',
    name: 'Milotic',
    stats: {
      atk: 192,
      def: 219,
      sta: 216,
    },
    family: {
      id: 'feebas',
      stage: 2,
    },
  },
  {
    id: 'miltank',
    name: 'Miltank',
    stats: {
      atk: 157,
      def: 193,
      sta: 216,
    },
    family: {
      id: 'miltank',
      stage: 1,
    },
  },
  {
    id: 'mime_jr',
    name: 'Mime (Jr)',
    stats: {
      atk: 125,
      def: 142,
      sta: 85,
    },
    family: {
      id: 'mime_jr',
      stage: 1,
    },
  },
  {
    id: 'minccino',
    name: 'Minccino',
    stats: {
      atk: 98,
      def: 80,
      sta: 146,
    },
    family: {
      id: 'minccino',
      stage: 1,
    },
  },
  {
    id: 'minun',
    name: 'Minun',
    stats: {
      atk: 147,
      def: 150,
      sta: 155,
    },
    family: {
      id: 'minun',
      stage: 1,
    },
  },
  {
    id: 'misdreavus',
    name: 'Misdreavus',
    stats: {
      atk: 167,
      def: 154,
      sta: 155,
    },
    family: {
      id: 'misdreavus',
      stage: 1,
    },
  },
  {
    id: 'mismagius',
    name: 'Mismagius',
    stats: {
      atk: 211,
      def: 187,
      sta: 155,
    },
    family: {
      id: 'misdreavus',
      stage: 2,
    },
  },
  {
    id: 'moltres',
    name: 'Moltres',
    stats: {
      atk: 251,
      def: 181,
      sta: 207,
    },
    floor: 1,
    family: {
      id: 'moltres',
      stage: 1,
    },
  },
  {
    id: 'monferno',
    name: 'Monferno',
    stats: {
      atk: 158,
      def: 105,
      sta: 162,
    },
    family: {
      id: 'chimchar',
      stage: 2,
    },
  },
  {
    id: 'mothim',
    name: 'Mothim',
    stats: {
      atk: 185,
      def: 98,
      sta: 172,
    },
    family: {
      id: 'burmy',
      stage: 3,
    },
  },
  {
    id: 'mr_mime',
    name: 'Mr. Mime',
    stats: {
      atk: 192,
      def: 205,
      sta: 120,
    },
    family: {
      id: 'mime_jr',
      stage: 2,
    },
  },
  {
    id: 'mr_mime_galarian',
    name: 'Mr. Mime (Galarian)',
    stats: {
      atk: 183,
      def: 169,
      sta: 137,
    },
    family: {
      id: 'mr_mime_galarian',
      stage: 1,
    },
  },
  {
    id: 'mr_rime',
    name: 'Mr. Rime',
    stats: {
      atk: 212,
      def: 179,
      sta: 190,
    },
    family: {
      id: 'mr_mime_galarian',
      stage: 2,
    },
  },
  {
    id: 'mudkip',
    name: 'Mudkip',
    stats: {
      atk: 126,
      def: 93,
      sta: 137,
    },
    family: {
      id: 'mudkip',
      stage: 1,
    },
  },
  {
    id: 'muk',
    name: 'Muk',
    stats: {
      atk: 190,
      def: 172,
      sta: 233,
    },
    family: {
      id: 'grimer',
      stage: 2,
    },
  },
  {
    id: 'muk_alolan',
    name: 'Muk (Alolan)',
    stats: {
      atk: 190,
      def: 172,
      sta: 233,
    },
    family: {
      id: 'grimer_alolan',
      stage: 2,
    },
  },
  {
    id: 'munchlax',
    name: 'Munchlax',
    stats: {
      atk: 137,
      def: 117,
      sta: 286,
    },
    family: {
      id: 'munchlax',
      stage: 1,
    },
  },
  {
    id: 'munna',
    name: 'Munna',
    stats: {
      atk: 111,
      def: 92,
      sta: 183,
    },
    family: {
      id: 'munna',
      stage: 1,
    },
  },
  {
    id: 'murkrow',
    name: 'Murkrow',
    stats: {
      atk: 175,
      def: 87,
      sta: 155,
    },
    family: {
      id: 'murkrow',
      stage: 1,
    },
  },
  {
    id: 'musharna',
    name: 'Musharna',
    stats: {
      atk: 183,
      def: 166,
      sta: 253,
    },
    family: {
      id: 'munna',
      stage: 2,
    },
  },
  {
    id: 'natu',
    name: 'Natu',
    stats: {
      atk: 134,
      def: 89,
      sta: 120,
    },
    family: {
      id: 'natu',
      stage: 1,
    },
  },
  {
    id: 'nidoking',
    name: 'Nidoking',
    stats: {
      atk: 204,
      def: 156,
      sta: 191,
    },
    family: {
      id: 'nidoran_male',
      stage: 3,
    },
  },
  {
    id: 'nidoqueen',
    name: 'Nidoqueen',
    stats: {
      atk: 180,
      def: 173,
      sta: 207,
    },
    family: {
      id: 'nidoran_female',
      stage: 3,
    },
  },
  {
    id: 'nidoran_female',
    name: 'Nidoran♀',
    stats: {
      atk: 86,
      def: 89,
      sta: 146,
    },
    family: {
      id: 'nidoran_female',
      stage: 1,
    },
  },
  {
    id: 'nidoran_male',
    name: 'Nidoran♂',
    stats: {
      atk: 105,
      def: 76,
      sta: 130,
    },
    family: {
      id: 'nidoran_male',
      stage: 1,
    },
  },
  {
    id: 'nidorina',
    name: 'Nidorina',
    stats: {
      atk: 117,
      def: 120,
      sta: 172,
    },
    family: {
      id: 'nidoran_female',
      stage: 2,
    },
  },
  {
    id: 'nidorino',
    name: 'Nidorino',
    stats: {
      atk: 137,
      def: 111,
      sta: 156,
    },
    family: {
      id: 'nidoran_male',
      stage: 2,
    },
  },
  {
    id: 'nincada',
    name: 'Nincada',
    stats: {
      atk: 80,
      def: 126,
      sta: 104,
    },
    family: {
      id: 'nincada',
      stage: 1,
    },
  },
  {
    id: 'ninetales',
    name: 'Ninetales',
    stats: {
      atk: 169,
      def: 190,
      sta: 177,
    },
    family: {
      id: 'vulpix',
      stage: 2,
    },
  },
  {
    id: 'ninetales_alolan',
    name: 'Ninetales (Alolan)',
    stats: {
      atk: 170,
      def: 193,
      sta: 177,
    },
    family: {
      id: 'vulpix_alolan',
      stage: 2,
    },
  },
  {
    id: 'ninjask',
    name: 'Ninjask',
    stats: {
      atk: 199,
      def: 112,
      sta: 156,
    },
    family: {
      id: 'nincada',
      stage: 2,
    },
  },
  {
    id: 'noctowl',
    name: 'Noctowl',
    stats: {
      atk: 145,
      def: 156,
      sta: 225,
    },
    family: {
      id: 'hoothoot',
      stage: 2,
    },
  },
  {
    id: 'noibat',
    name: 'Noibat',
    stats: {
      atk: 83,
      def: 73,
      sta: 120,
    },
    family: {
      id: 'noibat',
      stage: 1,
    },
  },
  {
    id: 'noivern',
    name: 'Noivern',
    stats: {
      atk: 205,
      def: 175,
      sta: 198,
    },
    family: {
      id: 'noibat',
      stage: 2,
    },
  },
  {
    id: 'nosepass',
    name: 'Nosepass',
    stats: {
      atk: 82,
      def: 215,
      sta: 102,
    },
    family: {
      id: 'nosepass',
      stage: 1,
    },
  },
  {
    id: 'numel',
    name: 'Numel',
    stats: {
      atk: 119,
      def: 79,
      sta: 155,
    },
    family: {
      id: 'numel',
      stage: 1,
    },
  },
  {
    id: 'nuzleaf',
    name: 'Nuzleaf',
    stats: {
      atk: 134,
      def: 78,
      sta: 172,
    },
    family: {
      id: 'seedot',
      stage: 2,
    },
  },
  {
    id: 'obstagoon',
    name: 'Obstagoon',
    stats: {
      atk: 180,
      def: 194,
      sta: 212,
    },
    family: {
      id: 'zigzagoon_galarian',
      stage: 3,
    },
  },
  {
    id: 'octillery',
    name: 'Octillery',
    stats: {
      atk: 197,
      def: 141,
      sta: 181,
    },
    family: {
      id: 'remoraid',
      stage: 2,
    },
  },
  {
    id: 'oddish',
    name: 'Oddish',
    stats: {
      atk: 131,
      def: 112,
      sta: 128,
    },
    family: {
      id: 'oddish',
      stage: 1,
    },
  },
  {
    id: 'omanyte',
    name: 'Omanyte',
    stats: {
      atk: 155,
      def: 153,
      sta: 111,
    },
    family: {
      id: 'omanyte',
      stage: 1,
    },
  },
  {
    id: 'omastar',
    name: 'Omastar',
    stats: {
      atk: 207,
      def: 201,
      sta: 172,
    },
    family: {
      id: 'omanyte',
      stage: 2,
    },
  },
  {
    id: 'onix',
    name: 'Onix',
    stats: {
      atk: 85,
      def: 232,
      sta: 111,
    },
    family: {
      id: 'onix',
      stage: 1,
    },
  },
  {
    id: 'oshawott',
    name: 'Oshawott',
    stats: {
      atk: 117,
      def: 85,
      sta: 146,
    },
    family: {
      id: 'oshawott',
      stage: 1,
    },
  },
  {
    id: 'pachirisu',
    name: 'Pachirisu',
    stats: {
      atk: 94,
      def: 172,
      sta: 155,
    },
    family: {
      id: 'pachirisu',
      stage: 1,
    },
  },
  {
    id: 'palkia',
    name: 'Palkia',
    stats: {
      atk: 280,
      def: 215,
      sta: 189,
    },
    floor: 1,
    family: {
      id: 'palkia',
      stage: 1,
    },
  },
  {
    id: 'palpitoad',
    name: 'Palpitoad',
    stats: {
      atk: 128,
      def: 109,
      sta: 181,
    },
    family: {
      id: 'tympole',
      stage: 2,
    },
  },
  {
    id: 'pancham',
    name: 'Pancham',
    stats: {
      atk: 145,
      def: 107,
      sta: 167,
    },
    family: {
      id: 'pancham',
      stage: 1,
    },
  },
  {
    id: 'pangoro',
    name: 'Pangoro',
    stats: {
      atk: 226,
      def: 146,
      sta: 216,
    },
    family: {
      id: 'pancham',
      stage: 2,
    },
  },
  {
    id: 'panpour',
    name: 'Panpour',
    stats: {
      atk: 104,
      def: 94,
      sta: 137,
    },
    family: {
      id: 'panpour',
      stage: 1,
    },
  },
  {
    id: 'pansage',
    name: 'Pansage',
    stats: {
      atk: 104,
      def: 94,
      sta: 137,
    },
    family: {
      id: 'pansage',
      stage: 1,
    },
  },
  {
    id: 'pansear',
    name: 'Pansear',
    stats: {
      atk: 104,
      def: 94,
      sta: 137,
    },
    family: {
      id: 'pansear',
      stage: 1,
    },
  },
  {
    id: 'paras',
    name: 'Paras',
    stats: {
      atk: 121,
      def: 99,
      sta: 111,
    },
    family: {
      id: 'paras',
      stage: 1,
    },
  },
  {
    id: 'parasect',
    name: 'Parasect',
    stats: {
      atk: 165,
      def: 146,
      sta: 155,
    },
    family: {
      id: 'paras',
      stage: 2,
    },
  },
  {
    id: 'patrat',
    name: 'Patrat',
    stats: {
      atk: 98,
      def: 73,
      sta: 128,
    },
    family: {
      id: 'patrat',
      stage: 1,
    },
  },
  {
    id: 'pawniard',
    name: 'Pawniard',
    stats: {
      atk: 154,
      def: 114,
      sta: 128,
    },
    family: {
      id: 'pawniard',
      stage: 1,
    },
  },
  {
    id: 'pelipper',
    name: 'Pelipper',
    stats: {
      atk: 175,
      def: 174,
      sta: 155,
    },
    family: {
      id: 'wingull',
      stage: 2,
    },
  },
  {
    id: 'perrserker',
    name: 'Perrserker',
    stats: {
      atk: 195,
      def: 162,
      sta: 172,
    },
    family: {
      id: 'meowth_galarian',
      stage: 2,
    },
  },
  {
    id: 'persian',
    name: 'Persian',
    stats: {
      atk: 150,
      def: 136,
      sta: 163,
    },
    family: {
      id: 'meowth',
      stage: 2,
    },
  },
  {
    id: 'persian_alolan',
    name: 'Persian (Alolan)',
    stats: {
      atk: 158,
      def: 136,
      sta: 163,
    },
    family: {
      id: 'meowth_alolan',
      stage: 2,
    },
  },
  {
    id: 'petilil',
    name: 'Petilil',
    stats: {
      atk: 119,
      def: 91,
      sta: 128,
    },
    family: {
      id: 'petilil',
      stage: 1,
    },
  },
  {
    id: 'phanpy',
    name: 'Phanpy',
    stats: {
      atk: 107,
      def: 98,
      sta: 207,
    },
    family: {
      id: 'phanpy',
      stage: 1,
    },
  },
  {
    id: 'phantump',
    name: 'Phantump',
    stats: {
      atk: 125,
      def: 103,
      sta: 125,
    },
    family: {
      id: 'phantump',
      stage: 1,
    },
  },
  {
    id: 'phione',
    name: 'Phione',
    stats: {
      atk: 162,
      def: 162,
      sta: 190,
    },
    floor: 10,
    family: {
      id: 'phione',
      stage: 1,
    },
  },
  {
    id: 'pichu',
    name: 'Pichu',
    stats: {
      atk: 77,
      def: 53,
      sta: 85,
    },
    family: {
      id: 'pichu',
      stage: 1,
    },
  },
  {
    id: 'pidgeot',
    name: 'Pidgeot',
    stats: {
      atk: 166,
      def: 154,
      sta: 195,
    },
    family: {
      id: 'pidgey',
      stage: 3,
    },
  },
  {
    id: 'pidgeot_mega',
    name: 'Pidgeot (Mega)',
    stats: {
      atk: 280,
      def: 175,
      sta: 195,
    },
    family: {
      id: 'pidgey',
      stage: 4,
    },
  },
  {
    id: 'pidgeotto',
    name: 'Pidgeotto',
    stats: {
      atk: 117,
      def: 105,
      sta: 160,
    },
    family: {
      id: 'pidgey',
      stage: 2,
    },
  },
  {
    id: 'pidgey',
    name: 'Pidgey',
    stats: {
      atk: 85,
      def: 73,
      sta: 120,
    },
    family: {
      id: 'pidgey',
      stage: 1,
    },
  },
  {
    id: 'pidove',
    name: 'Pidove',
    stats: {
      atk: 98,
      def: 80,
      sta: 137,
    },
    family: {
      id: 'pidove',
      stage: 1,
    },
  },
  {
    id: 'pignite',
    name: 'Pignite',
    stats: {
      atk: 173,
      def: 106,
      sta: 207,
    },
    family: {
      id: 'tepig',
      stage: 2,
    },
  },
  {
    id: 'pikachu',
    name: 'Pikachu',
    stats: {
      atk: 112,
      def: 96,
      sta: 111,
    },
    family: {
      id: 'pichu',
      stage: 2,
    },
  },
  {
    id: 'piloswine',
    name: 'Piloswine',
    stats: {
      atk: 181,
      def: 138,
      sta: 225,
    },
    family: {
      id: 'swinub',
      stage: 2,
    },
  },
  {
    id: 'pineco',
    name: 'Pineco',
    stats: {
      atk: 108,
      def: 122,
      sta: 137,
    },
    family: {
      id: 'pineco',
      stage: 1,
    },
  },
  {
    id: 'pinsir',
    name: 'Pinsir',
    stats: {
      atk: 238,
      def: 182,
      sta: 163,
    },
    family: {
      id: 'pinsir',
      stage: 1,
    },
  },
  {
    id: 'pinsir_mega',
    name: 'Pinsir (Mega)',
    stats: {
      atk: 305,
      def: 231,
      sta: 163,
    },
    family: {
      id: 'pinsir',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'piplup',
    name: 'Piplup',
    stats: {
      atk: 112,
      def: 102,
      sta: 142,
    },
    family: {
      id: 'piplup',
      stage: 1,
    },
  },
  {
    id: 'plusle',
    name: 'Plusle',
    stats: {
      atk: 167,
      def: 129,
      sta: 155,
    },
    family: {
      id: 'plusle',
      stage: 1,
    },
  },
  {
    id: 'politoed',
    name: 'Politoed',
    stats: {
      atk: 174,
      def: 179,
      sta: 207,
    },
    family: {
      id: 'poliwag',
      stage: 4,
    },
  },
  {
    id: 'poliwag',
    name: 'Poliwag',
    stats: {
      atk: 101,
      def: 82,
      sta: 120,
    },
    family: {
      id: 'poliwag',
      stage: 1,
    },
  },
  {
    id: 'poliwhirl',
    name: 'Poliwhirl',
    stats: {
      atk: 130,
      def: 123,
      sta: 163,
    },
    family: {
      id: 'poliwag',
      stage: 2,
    },
  },
  {
    id: 'poliwrath',
    name: 'Poliwrath',
    stats: {
      atk: 182,
      def: 184,
      sta: 207,
    },
    family: {
      id: 'poliwag',
      stage: 3,
    },
  },
  {
    id: 'ponyta',
    name: 'Ponyta',
    stats: {
      atk: 170,
      def: 127,
      sta: 137,
    },
    family: {
      id: 'ponyta',
      stage: 1,
    },
  },
  {
    id: 'ponyta_galarian',
    name: 'Ponyta (Galarian)',
    stats: {
      atk: 170,
      def: 127,
      sta: 137,
    },
    family: {
      id: 'ponyta_galarian',
      stage: 1,
    },
  },
  {
    id: 'poochyena',
    name: 'Poochyena',
    stats: {
      atk: 96,
      def: 61,
      sta: 111,
    },
    family: {
      id: 'poochyena',
      stage: 1,
    },
  },
  {
    id: 'porygon',
    name: 'Porygon',
    stats: {
      atk: 153,
      def: 136,
      sta: 163,
    },
    family: {
      id: 'porygon',
      stage: 1,
    },
  },
  {
    id: 'porygon_z',
    name: 'Porygon-Z',
    stats: {
      atk: 264,
      def: 150,
      sta: 198,
    },
    family: {
      id: 'porygon',
      stage: 3,
    },
  },
  {
    id: 'porygon2',
    name: 'Porygon2',
    stats: {
      atk: 198,
      def: 180,
      sta: 198,
    },
    family: {
      id: 'porygon',
      stage: 2,
    },
  },
  {
    id: 'primeape',
    name: 'Primeape',
    stats: {
      atk: 207,
      def: 138,
      sta: 163,
    },
    family: {
      id: 'mankey',
      stage: 2,
    },
  },
  {
    id: 'prinplup',
    name: 'Prinplup',
    stats: {
      atk: 150,
      def: 139,
      sta: 162,
    },
    family: {
      id: 'piplup',
      stage: 2,
    },
  },
  {
    id: 'probopass',
    name: 'Probopass',
    stats: {
      atk: 135,
      def: 275,
      sta: 155,
    },
    family: {
      id: 'nosepass',
      stage: 2,
    },
  },
  {
    id: 'psyduck',
    name: 'Psyduck',
    stats: {
      atk: 122,
      def: 95,
      sta: 137,
    },
    family: {
      id: 'psyduck',
      stage: 1,
    },
  },
  {
    id: 'pupitar',
    name: 'Pupitar',
    stats: {
      atk: 155,
      def: 133,
      sta: 172,
    },
    family: {
      id: 'larvitar',
      stage: 2,
    },
  },
  {
    id: 'purrloin',
    name: 'Purrloin',
    stats: {
      atk: 98,
      def: 73,
      sta: 121,
    },
    family: {
      id: 'purrloin',
      stage: 1,
    },
  },
  {
    id: 'purugly',
    name: 'Purugly',
    stats: {
      atk: 172,
      def: 133,
      sta: 174,
    },
    family: {
      id: 'glameow',
      stage: 2,
    },
  },
  {
    id: 'pyroar',
    name: 'Pyroar',
    stats: {
      atk: 221,
      def: 149,
      sta: 200,
    },
    family: {
      id: 'litleo',
      stage: 2,
    },
  },
  {
    id: 'quagsire',
    name: 'Quagsire',
    stats: {
      atk: 152,
      def: 143,
      sta: 216,
    },
    family: {
      id: 'wooper',
      stage: 2,
    },
  },
  {
    id: 'quilava',
    name: 'Quilava',
    stats: {
      atk: 158,
      def: 126,
      sta: 151,
    },
    family: {
      id: 'cyndaquil',
      stage: 2,
    },
  },
  {
    id: 'quilladin',
    name: 'Quilladin',
    stats: {
      atk: 146,
      def: 156,
      sta: 156,
    },
    family: {
      id: 'chespin',
      stage: 2,
    },
  },
  {
    id: 'qwilfish',
    name: 'Qwilfish',
    stats: {
      atk: 184,
      def: 138,
      sta: 163,
    },
    family: {
      id: 'qwilfish',
      stage: 1,
    },
  },
  {
    id: 'raichu',
    name: 'Raichu',
    stats: {
      atk: 193,
      def: 151,
      sta: 155,
    },
    family: {
      id: 'pichu',
      stage: 2,
    },
  },
  {
    id: 'raichu_alolan',
    name: 'Raichu (Alolan)',
    stats: {
      atk: 201,
      def: 154,
      sta: 155,
    },
    family: {
      id: 'raichu_alolan',
      stage: 1,
    },
  },
  {
    id: 'raikou',
    name: 'Raikou',
    stats: {
      atk: 241,
      def: 195,
      sta: 207,
    },
    floor: 1,
    family: {
      id: 'raikou',
      stage: 1,
    },
  },
  {
    id: 'ralts',
    name: 'Ralts',
    stats: {
      atk: 79,
      def: 59,
      sta: 99,
    },
    family: {
      id: 'ralts',
      stage: 1,
    },
  },
  {
    id: 'rampardos',
    name: 'Rampardos',
    stats: {
      atk: 295,
      def: 109,
      sta: 219,
    },
    family: {
      id: 'cranidos',
      stage: 2,
    },
  },
  {
    id: 'rapidash',
    name: 'Rapidash',
    stats: {
      atk: 207,
      def: 162,
      sta: 163,
    },
    family: {
      id: 'ponyta',
      stage: 2,
    },
  },
  {
    id: 'rapidash_galarian',
    name: 'Rapidash (Galarian)',
    stats: {
      atk: 207,
      def: 162,
      sta: 163,
    },
    family: {
      id: 'ponyta_galarian',
      stage: 2,
    },
  },
  {
    id: 'raticate',
    name: 'Raticate',
    stats: {
      atk: 161,
      def: 139,
      sta: 146,
    },
    family: {
      id: 'rattata',
      stage: 2,
    },
  },
  {
    id: 'raticate_alolan',
    name: 'Raticate (Alolan)',
    stats: {
      atk: 135,
      def: 154,
      sta: 181,
    },
    family: {
      id: 'rattata_alolan',
      stage: 2,
    },
  },
  {
    id: 'rattata',
    name: 'Rattata',
    stats: {
      atk: 103,
      def: 70,
      sta: 102,
    },
    family: {
      id: 'rattata',
      stage: 1,
    },
  },
  {
    id: 'rattata_alolan',
    name: 'Rattata (Alolan)',
    stats: {
      atk: 103,
      def: 70,
      sta: 102,
    },
    family: {
      id: 'rattata_alolan',
      stage: 1,
    },
  },
  {
    id: 'rayquaza',
    name: 'Rayquaza',
    stats: {
      atk: 284,
      def: 170,
      sta: 213,
    },
    floor: 1,
    family: {
      id: 'rayquaza',
      stage: 1,
    },
  },
  {
    id: 'rayquaza_mega',
    name: 'Rayquaza (Mega)',
    stats: {
      atk: 354,
      def: 197,
      sta: 212,
    },
    floor: 1,
    family: {
      id: 'rayquaza',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'regice',
    name: 'Regice',
    stats: {
      atk: 179,
      def: 309,
      sta: 190,
    },
    floor: 1,
    family: {
      id: 'regice',
      stage: 1,
    },
  },
  {
    id: 'regigigas',
    name: 'Regigigas',
    stats: {
      atk: 287,
      def: 210,
      sta: 221,
    },
    floor: 1,
    family: {
      id: 'regigigas',
      stage: 1,
    },
  },
  {
    id: 'regirock',
    name: 'Regirock',
    stats: {
      atk: 179,
      def: 309,
      sta: 190,
    },
    floor: 1,
    family: {
      id: 'regirock',
      stage: 1,
    },
  },
  {
    id: 'registeel',
    name: 'Registeel',
    stats: {
      atk: 143,
      def: 285,
      sta: 190,
    },
    floor: 1,
    family: {
      id: 'registeel',
      stage: 1,
    },
  },
  {
    id: 'relicanth',
    name: 'Relicanth',
    stats: {
      atk: 162,
      def: 203,
      sta: 225,
    },
    family: {
      id: 'relicanth',
      stage: 1,
    },
  },
  {
    id: 'remoraid',
    name: 'Remoraid',
    stats: {
      atk: 127,
      def: 69,
      sta: 111,
    },
    family: {
      id: 'remoraid',
      stage: 1,
    },
  },
  {
    id: 'reshiram',
    name: 'Reshiram',
    stats: {
      atk: 275,
      def: 211,
      sta: 205,
    },
    floor: 1,
    family: {
      id: 'reshiram',
      stage: 1,
    },
  },
  {
    id: 'reuniclus',
    name: 'Reuniclus',
    stats: {
      atk: 214,
      def: 148,
      sta: 242,
    },
    family: {
      id: 'solosis',
      stage: 3,
    },
  },
  {
    id: 'rhydon',
    name: 'Rhydon',
    stats: {
      atk: 222,
      def: 171,
      sta: 233,
    },
    family: {
      id: 'rhyhorn',
      stage: 2,
    },
  },
  {
    id: 'rhyhorn',
    name: 'Rhyhorn',
    stats: {
      atk: 140,
      def: 127,
      sta: 190,
    },
    family: {
      id: 'rhyhorn',
      stage: 1,
    },
  },
  {
    id: 'rhyperior',
    name: 'Rhyperior',
    stats: {
      atk: 241,
      def: 190,
      sta: 251,
    },
    family: {
      id: 'rhyhorn',
      stage: 3,
    },
  },
  {
    id: 'riolu',
    name: 'Riolu',
    stats: {
      atk: 127,
      def: 78,
      sta: 120,
    },
    family: {
      id: 'riolu',
      stage: 1,
    },
  },
  {
    id: 'roggenrola',
    name: 'Roggenrola',
    stats: {
      atk: 121,
      def: 110,
      sta: 146,
    },
    family: {
      id: 'roggenrola',
      stage: 1,
    },
  },
  {
    id: 'roselia',
    name: 'Roselia',
    stats: {
      atk: 186,
      def: 131,
      sta: 137,
    },
    family: {
      id: 'budew',
      stage: 2,
    },
  },
  {
    id: 'roserade',
    name: 'Roserade',
    stats: {
      atk: 243,
      def: 185,
      sta: 155,
    },
    family: {
      id: 'budew',
      stage: 3,
    },
  },
  {
    id: 'rotom',
    name: 'Rotom',
    stats: {
      atk: 185,
      def: 159,
      sta: 137,
    },
    family: {
      id: 'rotom',
      stage: 1,
    },
  },
  {
    id: 'rufflet',
    name: 'Rufflet',
    stats: {
      atk: 150,
      def: 97,
      sta: 172,
    },
    family: {
      id: 'rufflet',
      stage: 1,
    },
  },
  {
    id: 'runerigus',
    name: 'Runerigus',
    stats: {
      atk: 163,
      def: 237,
      sta: 151,
    },
    family: {
      id: 'yamask_galarian',
      stage: 2,
    },
  },
  {
    id: 'sableye',
    name: 'Sableye',
    stats: {
      atk: 141,
      def: 136,
      sta: 137,
    },
    family: {
      id: 'sableye',
      stage: 1,
    },
  },
  {
    id: 'sableye_mega',
    name: 'Sableye (Mega)',
    stats: {
      atk: 151,
      def: 216,
      sta: 137,
    },
    family: {
      id: 'sableye',
      stage: 2,
    },
    speculative: true,
  },
  {
    id: 'salamence',
    name: 'Salamence',
    stats: {
      atk: 277,
      def: 168,
      sta: 216,
    },
    family: {
      id: 'bagon',
      stage: 3,
    },
  },
  {
    id: 'salamence_mega',
    name: 'Salamence (Mega)',
    stats: {
      atk: 310,
      def: 251,
      sta: 216,
    },
    family: {
      id: 'bagon',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'samurott',
    name: 'Samurott',
    stats: {
      atk: 212,
      def: 157,
      sta: 216,
    },
    family: {
      id: 'oshawott',
      stage: 3,
    },
  },
  {
    id: 'sandile',
    name: 'Sandile',
    stats: {
      atk: 132,
      def: 69,
      sta: 137,
    },
    family: {
      id: 'sandile',
      stage: 1,
    },
  },
  {
    id: 'sandshrew',
    name: 'Sandshrew',
    stats: {
      atk: 126,
      def: 120,
      sta: 137,
    },
    family: {
      id: 'sandshrew',
      stage: 1,
    },
  },
  {
    id: 'sandshrew_alolan',
    name: 'Sandshrew (Alolan)',
    stats: {
      atk: 125,
      def: 129,
      sta: 137,
    },
    family: {
      id: 'sandshrew_alolan',
      stage: 1,
    },
  },
  {
    id: 'sandslash',
    name: 'Sandslash',
    stats: {
      atk: 182,
      def: 175,
      sta: 181,
    },
    family: {
      id: 'sandshrew',
      stage: 2,
    },
  },
  {
    id: 'sandslash_alolan',
    name: 'Sandslash (Alolan)',
    stats: {
      atk: 177,
      def: 195,
      sta: 181,
    },
    family: {
      id: 'sandshrew_alolan',
      stage: 2,
    },
  },
  {
    id: 'sawk',
    name: 'Sawk',
    stats: {
      atk: 231,
      def: 153,
      sta: 181,
    },
    family: {
      id: 'sawk',
      stage: 1,
    },
  },
  {
    id: 'sawsbuck',
    name: 'Sawsbuck',
    stats: {
      atk: 198,
      def: 146,
      sta: 190,
    },
    family: {
      id: 'deerling',
      stage: 2,
    },
  },
  {
    id: 'scatterbug',
    name: 'Scatterbug',
    stats: {
      atk: 63,
      def: 63,
      sta: 116,
    },
    family: {
      id: 'scatterbug',
      stage: 1,
    },
  },
  {
    id: 'sceptile',
    name: 'Sceptile',
    stats: {
      atk: 223,
      def: 169,
      sta: 172,
    },
    family: {
      id: 'treecko',
      stage: 3,
    },
  },
  {
    id: 'sceptile_mega',
    name: 'Sceptile (Mega)',
    stats: {
      atk: 320,
      def: 186,
      sta: 172,
    },
    family: {
      id: 'treecko',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'scizor',
    name: 'Scizor',
    stats: {
      atk: 236,
      def: 181,
      sta: 172,
    },
    family: {
      id: 'scyther',
      stage: 2,
    },
  },
  {
    id: 'scizor_mega',
    name: 'Scizor (Mega)',
    stats: {
      atk: 279,
      def: 250,
      sta: 172,
    },
    family: {
      id: 'scyther',
      stage: 3,
    },
    speculative: true,
  },
  {
    id: 'scolipede',
    name: 'Scolipede',
    stats: {
      atk: 203,
      def: 175,
      sta: 155,
    },
    family: {
      id: 'venipede',
      stage: 3,
    },
  },
  {
    id: 'scrafty',
    name: 'Scrafty',
    stats: {
      atk: 163,
      def: 222,
      sta: 163,
    },
    family: {
      id: 'scraggy',
      stage: 2,
    },
  },
  {
    id: 'scraggy',
    name: 'Scraggy',
    stats: {
      atk: 132,
      def: 132,
      sta: 137,
    },
    family: {
      id: 'scraggy',
      stage: 1,
    },
  },
  {
    id: 'scyther',
    name: 'Scyther',
    stats: {
      atk: 218,
      def: 170,
      sta: 172,
    },
    family: {
      id: 'scyther',
      stage: 1,
    },
  },
  {
    id: 'seadra',
    name: 'Seadra',
    stats: {
      atk: 187,
      def: 156,
      sta: 146,
    },
    family: {
      id: 'horsea',
      stage: 2,
    },
  },
  {
    id: 'seaking',
    name: 'Seaking',
    stats: {
      atk: 175,
      def: 147,
      sta: 190,
    },
    family: {
      id: 'goldeen',
      stage: 2,
    },
  },
  {
    id: 'sealeo',
    name: 'Sealeo',
    stats: {
      atk: 137,
      def: 132,
      sta: 207,
    },
    family: {
      id: 'spheal',
      stage: 2,
    },
  },
  {
    id: 'seedot',
    name: 'Seedot',
    stats: {
      atk: 71,
      def: 77,
      sta: 120,
    },
    family: {
      id: 'seedot',
      stage: 1,
    },
  },
  {
    id: 'seel',
    name: 'Seel',
    stats: {
      atk: 85,
      def: 121,
      sta: 163,
    },
    family: {
      id: 'seel',
      stage: 1,
    },
  },
  {
    id: 'seismitoad',
    name: 'Seismitoad',
    stats: {
      atk: 188,
      def: 150,
      sta: 233,
    },
    family: {
      id: 'tympole',
      stage: 3,
    },
  },
  {
    id: 'sentret',
    name: 'Sentret',
    stats: {
      atk: 79,
      def: 73,
      sta: 111,
    },
    family: {
      id: 'sentret',
      stage: 1,
    },
  },
  {
    id: 'serperior',
    name: 'Serperior',
    stats: {
      atk: 161,
      def: 204,
      sta: 181,
    },
    family: {
      id: 'snivy',
      stage: 3,
    },
  },
  {
    id: 'servine',
    name: 'Servine',
    stats: {
      atk: 122,
      def: 152,
      sta: 155,
    },
    family: {
      id: 'snivy',
      stage: 2,
    },
  },
  {
    id: 'seviper',
    name: 'Seviper',
    stats: {
      atk: 196,
      def: 118,
      sta: 177,
    },
    family: {
      id: 'seviper',
      stage: 1,
    },
  },
  {
    id: 'sewaddle',
    name: 'Sewaddle',
    stats: {
      atk: 96,
      def: 124,
      sta: 128,
    },
    family: {
      id: 'sewaddle',
      stage: 1,
    },
  },
  {
    id: 'sharpedo',
    name: 'Sharpedo',
    stats: {
      atk: 243,
      def: 83,
      sta: 172,
    },
    family: {
      id: 'carvanha',
      stage: 2,
    },
  },
  {
    id: 'sharpedo_mega',
    name: 'Sharpedo (Mega)',
    stats: {
      atk: 289,
      def: 144,
      sta: 172,
    },
    family: {
      id: 'carvanha',
      stage: 3,
    },
    speculative: true,
  },
  {
    id: 'shaymin_land',
    name: 'Shaymin (Land)',
    stats: {
      atk: 210,
      def: 210,
      sta: 225,
    },
    floor: 10,
    family: {
      id: 'shaymin_land',
      stage: 1,
    },
  },
  {
    id: 'shaymin_sky',
    name: 'Shaymin (Sky)',
    stats: {
      atk: 261,
      def: 166,
      sta: 225,
    },
    floor: 10,
    family: {
      id: 'shaymin_sky',
      stage: 1,
    },
  },
  {
    id: 'shedinja',
    name: 'Shedinja',
    stats: {
      atk: 153,
      def: 73,
      sta: 1,
    },
    family: {
      id: 'shedinja',
      stage: 1,
    },
  },
  {
    id: 'shelgon',
    name: 'Shelgon',
    stats: {
      atk: 172,
      def: 155,
      sta: 163,
    },
    family: {
      id: 'bagon',
      stage: 2,
    },
  },
  {
    id: 'shellder',
    name: 'Shellder',
    stats: {
      atk: 116,
      def: 134,
      sta: 102,
    },
    family: {
      id: 'shellder',
      stage: 1,
    },
  },
  {
    id: 'shellos',
    name: 'Shellos',
    stats: {
      atk: 103,
      def: 105,
      sta: 183,
    },
    family: {
      id: 'shellos',
      stage: 1,
    },
  },
  {
    id: 'shelmet',
    name: 'Shelmet',
    stats: {
      atk: 72,
      def: 140,
      sta: 137,
    },
    family: {
      id: 'shelmet',
      stage: 1,
    },
  },
  {
    id: 'shieldon',
    name: 'Shieldon',
    stats: {
      atk: 76,
      def: 195,
      sta: 102,
    },
    family: {
      id: 'shieldon',
      stage: 1,
    },
  },
  {
    id: 'shiftry',
    name: 'Shiftry',
    stats: {
      atk: 200,
      def: 121,
      sta: 207,
    },
    family: {
      id: 'seedot',
      stage: 3,
    },
  },
  {
    id: 'shinx',
    name: 'Shinx',
    stats: {
      atk: 117,
      def: 64,
      sta: 128,
    },
    family: {
      id: 'shinx',
      stage: 1,
    },
  },
  {
    id: 'shroomish',
    name: 'Shroomish',
    stats: {
      atk: 74,
      def: 110,
      sta: 155,
    },
    family: {
      id: 'shroomish',
      stage: 1,
    },
  },
  {
    id: 'shuckle',
    name: 'Shuckle',
    stats: {
      atk: 17,
      def: 396,
      sta: 85,
    },
    family: {
      id: 'shuckle',
      stage: 1,
    },
  },
  {
    id: 'shuppet',
    name: 'Shuppet',
    stats: {
      atk: 138,
      def: 65,
      sta: 127,
    },
    family: {
      id: 'shuppet',
      stage: 1,
    },
  },
  {
    id: 'sigilyph',
    name: 'Sigilyph',
    stats: {
      atk: 204,
      def: 167,
      sta: 176,
    },
    family: {
      id: 'sigilyph',
      stage: 1,
    },
  },
  {
    id: 'silcoon',
    name: 'Silcoon',
    stats: {
      atk: 60,
      def: 77,
      sta: 137,
    },
    family: {
      id: 'wurmple',
      stage: 2,
    },
  },
  {
    id: 'simipour',
    name: 'Simipour',
    stats: {
      atk: 206,
      def: 133,
      sta: 181,
    },
    family: {
      id: 'panpour',
      stage: 2,
    },
  },
  {
    id: 'simisage',
    name: 'Simisage',
    stats: {
      atk: 206,
      def: 133,
      sta: 181,
    },
    family: {
      id: 'pansage',
      stage: 2,
    },
  },
  {
    id: 'simisear',
    name: 'Simisear',
    stats: {
      atk: 206,
      def: 133,
      sta: 181,
    },
    family: {
      id: 'pansear',
      stage: 2,
    },
  },
  {
    id: 'sirfetchd',
    name: 'Sirfetchd',
    stats: {
      atk: 248,
      def: 176,
      sta: 158,
    },
    family: {
      id: 'farfetchd_galarian',
      stage: 2,
    },
  },
  {
    id: 'skarmory',
    name: 'Skarmory',
    stats: {
      atk: 148,
      def: 226,
      sta: 163,
    },
    family: {
      id: 'skarmory',
      stage: 1,
    },
  },
  {
    id: 'skiddo',
    name: 'Skiddo',
    stats: {
      atk: 123,
      def: 102,
      sta: 165,
    },
    family: {
      id: 'skiddo',
      stage: 1,
    },
  },
  {
    id: 'skiploom',
    name: 'Skiploom',
    stats: {
      atk: 91,
      def: 120,
      sta: 146,
    },
    family: {
      id: 'hoppip',
      stage: 2,
    },
  },
  {
    id: 'skitty',
    name: 'Skitty',
    stats: {
      atk: 84,
      def: 79,
      sta: 137,
    },
    family: {
      id: 'skitty',
      stage: 1,
    },
  },
  {
    id: 'skorupi',
    name: 'Skorupi',
    stats: {
      atk: 93,
      def: 151,
      sta: 120,
    },
    family: {
      id: 'skorupi',
      stage: 1,
    },
  },
  {
    id: 'skrelp',
    name: 'Skrelp',
    stats: {
      atk: 109,
      def: 109,
      sta: 137,
    },
    family: {
      id: 'skrelp',
      stage: 1,
    },
  },
  {
    id: 'skuntank',
    name: 'Skuntank',
    stats: {
      atk: 184,
      def: 132,
      sta: 230,
    },
    family: {
      id: 'stunky',
      stage: 2,
    },
  },
  {
    id: 'slaking',
    name: 'Slaking',
    stats: {
      atk: 290,
      def: 166,
      sta: 284,
    },
    family: {
      id: 'slakoth',
      stage: 3,
    },
  },
  {
    id: 'slakoth',
    name: 'Slakoth',
    stats: {
      atk: 104,
      def: 92,
      sta: 155,
    },
    family: {
      id: 'slakoth',
      stage: 1,
    },
  },
  {
    id: 'sliggoo',
    name: 'Sliggoo',
    stats: {
      atk: 159,
      def: 176,
      sta: 169,
    },
    family: {
      id: 'goomy',
      stage: 2,
    },
  },
  {
    id: 'slowbro',
    name: 'Slowbro',
    stats: {
      atk: 177,
      def: 180,
      sta: 216,
    },
    family: {
      id: 'slowpoke',
      stage: 2,
    },
  },
  {
    id: 'slowbro_mega',
    name: 'Slowbro (Mega)',
    stats: {
      atk: 224,
      def: 259,
      sta: 216,
    },
    family: {
      id: 'slowpoke',
      stage: 3,
    },
    speculative: true,
  },
  {
    id: 'slowking',
    name: 'Slowking',
    stats: {
      atk: 177,
      def: 180,
      sta: 216,
    },
    family: {
      id: 'slowpoke',
      stage: 2,
    },
  },
  {
    id: 'slowpoke',
    name: 'Slowpoke',
    stats: {
      atk: 109,
      def: 98,
      sta: 207,
    },
    family: {
      id: 'slowpoke',
      stage: 1,
    },
  },
  {
    id: 'slugma',
    name: 'Slugma',
    stats: {
      atk: 118,
      def: 71,
      sta: 120,
    },
    family: {
      id: 'slugma',
      stage: 1,
    },
  },
  {
    id: 'slurpuff',
    name: 'Slurpuff',
    stats: {
      atk: 168,
      def: 163,
      sta: 193,
    },
    family: {
      id: 'swirlix',
      stage: 2,
    },
  },
  {
    id: 'smeargle',
    name: 'Smeargle',
    stats: {
      atk: 40,
      def: 83,
      sta: 146,
    },
    family: {
      id: 'smeargle',
      stage: 1,
    },
  },
  {
    id: 'smoochum',
    name: 'Smoochum',
    stats: {
      atk: 153,
      def: 91,
      sta: 128,
    },
    family: {
      id: 'smoochum',
      stage: 1,
    },
  },
  {
    id: 'sneasel',
    name: 'Sneasel',
    stats: {
      atk: 189,
      def: 146,
      sta: 146,
    },
    family: {
      id: 'sneasel',
      stage: 1,
    },
  },
  {
    id: 'snivy',
    name: 'Snivy',
    stats: {
      atk: 88,
      def: 107,
      sta: 128,
    },
    family: {
      id: 'snivy',
      stage: 1,
    },
  },
  {
    id: 'snorlax',
    name: 'Snorlax',
    stats: {
      atk: 190,
      def: 169,
      sta: 330,
    },
    family: {
      id: 'munchlax',
      stage: 2,
    },
  },
  {
    id: 'snorunt',
    name: 'Snorunt',
    stats: {
      atk: 95,
      def: 95,
      sta: 137,
    },
    family: {
      id: 'snorunt',
      stage: 1,
    },
  },
  {
    id: 'snover',
    name: 'Snover',
    stats: {
      atk: 115,
      def: 105,
      sta: 155,
    },
    family: {
      id: 'snover',
      stage: 1,
    },
  },
  {
    id: 'snubbull',
    name: 'Snubbull',
    stats: {
      atk: 137,
      def: 85,
      sta: 155,
    },
    family: {
      id: 'snubbull',
      stage: 1,
    },
  },
  {
    id: 'solosis',
    name: 'Solosis',
    stats: {
      atk: 170,
      def: 83,
      sta: 128,
    },
    family: {
      id: 'solosis',
      stage: 1,
    },
  },
  {
    id: 'solrock',
    name: 'Solrock',
    stats: {
      atk: 178,
      def: 153,
      sta: 207,
    },
    family: {
      id: 'solrock',
      stage: 1,
    },
  },
  {
    id: 'spearow',
    name: 'Spearow',
    stats: {
      atk: 112,
      def: 60,
      sta: 120,
    },
    family: {
      id: 'spearow',
      stage: 1,
    },
  },
  {
    id: 'spewpa',
    name: 'Spewpa',
    stats: {
      atk: 48,
      def: 89,
      sta: 128,
    },
    family: {
      id: 'scatterbug',
      stage: 2,
    },
  },
  {
    id: 'spheal',
    name: 'Spheal',
    stats: {
      atk: 95,
      def: 90,
      sta: 172,
    },
    family: {
      id: 'spheal',
      stage: 1,
    },
  },
  {
    id: 'spinarak',
    name: 'Spinarak',
    stats: {
      atk: 105,
      def: 73,
      sta: 120,
    },
    family: {
      id: 'spinarak',
      stage: 1,
    },
  },
  {
    id: 'spinda',
    name: 'Spinda',
    stats: {
      atk: 116,
      def: 116,
      sta: 155,
    },
    family: {
      id: 'spinda',
      stage: 1,
    },
  },
  {
    id: 'spiritomb',
    name: 'Spiritomb',
    stats: {
      atk: 169,
      def: 199,
      sta: 137,
    },
    floor: 1,
    family: {
      id: 'spiritomb',
      stage: 1,
    },
  },
  {
    id: 'spoink',
    name: 'Spoink',
    stats: {
      atk: 125,
      def: 122,
      sta: 155,
    },
    family: {
      id: 'spoink',
      stage: 1,
    },
  },
  {
    id: 'spritzee',
    name: 'Spritzee',
    stats: {
      atk: 110,
      def: 113,
      sta: 186,
    },
    family: {
      id: 'spritzee',
      stage: 1,
    },
  },
  {
    id: 'squirtle',
    name: 'Squirtle',
    stats: {
      atk: 94,
      def: 121,
      sta: 127,
    },
    family: {
      id: 'squirtle',
      stage: 1,
    },
  },
  {
    id: 'stantler',
    name: 'Stantler',
    stats: {
      atk: 192,
      def: 131,
      sta: 177,
    },
    family: {
      id: 'stantler',
      stage: 1,
    },
  },
  {
    id: 'staraptor',
    name: 'Staraptor',
    stats: {
      atk: 234,
      def: 140,
      sta: 198,
    },
    family: {
      id: 'starly',
      stage: 3,
    },
  },
  {
    id: 'staravia',
    name: 'Staravia',
    stats: {
      atk: 142,
      def: 94,
      sta: 146,
    },
    family: {
      id: 'starly',
      stage: 2,
    },
  },
  {
    id: 'starly',
    name: 'Starly',
    stats: {
      atk: 101,
      def: 58,
      sta: 120,
    },
    family: {
      id: 'starly',
      stage: 1,
    },
  },
  {
    id: 'starmie',
    name: 'Starmie',
    stats: {
      atk: 210,
      def: 184,
      sta: 155,
    },
    family: {
      id: 'staryu',
      stage: 2,
    },
  },
  {
    id: 'staryu',
    name: 'Staryu',
    stats: {
      atk: 137,
      def: 112,
      sta: 102,
    },
    family: {
      id: 'staryu',
      stage: 1,
    },
  },
  {
    id: 'steelix',
    name: 'Steelix',
    stats: {
      atk: 148,
      def: 272,
      sta: 181,
    },
    family: {
      id: 'onix',
      stage: 2,
    },
  },
  {
    id: 'steelix_mega',
    name: 'Steelix (Mega)',
    stats: {
      atk: 212,
      def: 327,
      sta: 181,
    },
    family: {
      id: 'onix',
      stage: 3,
    },
    speculative: true,
  },
  {
    id: 'stoutland',
    name: 'Stoutland',
    stats: {
      atk: 206,
      def: 182,
      sta: 198,
    },
    family: {
      id: 'lillipup',
      stage: 3,
    },
  },
  {
    id: 'stunfisk',
    name: 'Stunfisk',
    stats: {
      atk: 144,
      def: 171,
      sta: 240,
    },
    family: {
      id: 'stunfisk',
      stage: 1,
    },
  },
  {
    id: 'stunfisk_galarian',
    name: 'Stunfisk (Galarian)',
    stats: {
      atk: 144,
      def: 171,
      sta: 240,
    },
    family: {
      id: 'stunfisk_galarian',
      stage: 1,
    },
  },
  {
    id: 'stunky',
    name: 'Stunky',
    stats: {
      atk: 121,
      def: 90,
      sta: 160,
    },
    family: {
      id: 'stunky',
      stage: 1,
    },
  },
  {
    id: 'sudowoodo',
    name: 'Sudowoodo',
    stats: {
      atk: 167,
      def: 176,
      sta: 172,
    },
    family: {
      id: 'bonsly',
      stage: 2,
    },
  },
  {
    id: 'suicune',
    name: 'Suicune',
    stats: {
      atk: 180,
      def: 235,
      sta: 225,
    },
    floor: 1,
    family: {
      id: 'suicune',
      stage: 1,
    },
  },
  {
    id: 'sunflora',
    name: 'Sunflora',
    stats: {
      atk: 185,
      def: 135,
      sta: 181,
    },
    family: {
      id: 'sunkern',
      stage: 2,
    },
  },
  {
    id: 'sunkern',
    name: 'Sunkern',
    stats: {
      atk: 55,
      def: 55,
      sta: 102,
    },
    family: {
      id: 'sunkern',
      stage: 1,
    },
  },
  {
    id: 'surskit',
    name: 'Surskit',
    stats: {
      atk: 93,
      def: 87,
      sta: 120,
    },
    family: {
      id: 'surskit',
      stage: 1,
    },
  },
  {
    id: 'swablu',
    name: 'Swablu',
    stats: {
      atk: 76,
      def: 132,
      sta: 128,
    },
    family: {
      id: 'swablu',
      stage: 1,
    },
  },
  {
    id: 'swadloon',
    name: 'Swadloon',
    stats: {
      atk: 115,
      def: 162,
      sta: 146,
    },
    family: {
      id: 'sewaddle',
      stage: 2,
    },
  },
  {
    id: 'swalot',
    name: 'Swalot',
    stats: {
      atk: 140,
      def: 159,
      sta: 225,
    },
    family: {
      id: 'gulpin',
      stage: 2,
    },
  },
  {
    id: 'swampert',
    name: 'Swampert',
    stats: {
      atk: 208,
      def: 175,
      sta: 225,
    },
    family: {
      id: 'mudkip',
      stage: 3,
    },
  },
  {
    id: 'swampert_mega',
    name: 'Swampert (Mega)',
    stats: {
      atk: 283,
      def: 218,
      sta: 225,
    },
    family: {
      id: 'mudkip',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'swanna',
    name: 'Swanna',
    stats: {
      atk: 182,
      def: 132,
      sta: 181,
    },
    family: {
      id: 'ducklett',
      stage: 2,
    },
  },
  {
    id: 'swellow',
    name: 'Swellow',
    stats: {
      atk: 185,
      def: 124,
      sta: 155,
    },
    family: {
      id: 'taillow',
      stage: 2,
    },
  },
  {
    id: 'swinub',
    name: 'Swinub',
    stats: {
      atk: 90,
      def: 69,
      sta: 137,
    },
    family: {
      id: 'swinub',
      stage: 1,
    },
  },
  {
    id: 'swirlix',
    name: 'Swirlix',
    stats: {
      atk: 109,
      def: 119,
      sta: 158,
    },
    family: {
      id: 'swirlix',
      stage: 1,
    },
  },
  {
    id: 'swoobat',
    name: 'Swoobat',
    stats: {
      atk: 161,
      def: 119,
      sta: 167,
    },
    family: {
      id: 'woobat',
      stage: 2,
    },
  },
  {
    id: 'sylveon',
    name: 'Sylveon',
    stats: {
      atk: 203,
      def: 205,
      sta: 216,
    },
    family: {
      id: 'eevee',
      stage: 2,
    },
  },
  {
    id: 'taillow',
    name: 'Taillow',
    stats: {
      atk: 106,
      def: 61,
      sta: 120,
    },
    family: {
      id: 'taillow',
      stage: 1,
    },
  },
  {
    id: 'talonflame',
    name: 'Talonflame',
    stats: {
      atk: 176,
      def: 155,
      sta: 186,
    },
    family: {
      id: 'fletchling',
      stage: 3,
    },
  },
  {
    id: 'tangela',
    name: 'Tangela',
    stats: {
      atk: 183,
      def: 169,
      sta: 163,
    },
    family: {
      id: 'tangela',
      stage: 1,
    },
  },
  {
    id: 'tangrowth',
    name: 'Tangrowth',
    stats: {
      atk: 207,
      def: 184,
      sta: 225,
    },
    family: {
      id: 'tangela',
      stage: 2,
    },
  },
  {
    id: 'tauros',
    name: 'Tauros',
    stats: {
      atk: 198,
      def: 183,
      sta: 181,
    },
    family: {
      id: 'tauros',
      stage: 1,
    },
  },
  {
    id: 'teddiursa',
    name: 'Teddiursa',
    stats: {
      atk: 142,
      def: 93,
      sta: 155,
    },
    family: {
      id: 'teddiursa',
      stage: 1,
    },
  },
  {
    id: 'tentacool',
    name: 'Tentacool',
    stats: {
      atk: 97,
      def: 149,
      sta: 120,
    },
    family: {
      id: 'tentacool',
      stage: 1,
    },
  },
  {
    id: 'tentacruel',
    name: 'Tentacruel',
    stats: {
      atk: 166,
      def: 209,
      sta: 190,
    },
    family: {
      id: 'tentacool',
      stage: 2,
    },
  },
  {
    id: 'tepig',
    name: 'Tepig',
    stats: {
      atk: 115,
      def: 85,
      sta: 163,
    },
    family: {
      id: 'tepig',
      stage: 1,
    },
  },
  {
    id: 'terrakion',
    name: 'Terrakion',
    stats: {
      atk: 260,
      def: 192,
      sta: 209,
    },
    floor: 1,
    family: {
      id: 'terrakion',
      stage: 1,
    },
  },
  {
    id: 'throh',
    name: 'Throh',
    stats: {
      atk: 172,
      def: 160,
      sta: 260,
    },
    family: {
      id: 'throh',
      stage: 1,
    },
  },
  {
    id: 'thundurus_incarnate',
    name: 'Thundurus (Incarnate)',
    stats: {
      atk: 266,
      def: 164,
      sta: 188,
    },
    floor: 1,
    family: {
      id: 'thundurus_incarnate',
      stage: 1,
    },
  },
  {
    id: 'thundurus_therian',
    name: 'Thundurus (Therian)',
    stats: {
      atk: 295,
      def: 161,
      sta: 188,
    },
    floor: 1,
    family: {
      id: 'thundurus_therian',
      stage: 1,
    },
  },
  {
    id: 'timburr',
    name: 'Timburr',
    stats: {
      atk: 134,
      def: 87,
      sta: 181,
    },
    family: {
      id: 'timburr',
      stage: 1,
    },
  },
  {
    id: 'tirtouga',
    name: 'Tirtouga',
    stats: {
      atk: 134,
      def: 146,
      sta: 144,
    },
    family: {
      id: 'tirtouga',
      stage: 1,
    },
  },
  {
    id: 'togekiss',
    name: 'Togekiss',
    stats: {
      atk: 225,
      def: 217,
      sta: 198,
    },
    family: {
      id: 'togepi',
      stage: 3,
    },
  },
  {
    id: 'togepi',
    name: 'Togepi',
    stats: {
      atk: 67,
      def: 116,
      sta: 111,
    },
    family: {
      id: 'togepi',
      stage: 1,
    },
  },
  {
    id: 'togetic',
    name: 'Togetic',
    stats: {
      atk: 139,
      def: 181,
      sta: 146,
    },
    family: {
      id: 'togepi',
      stage: 2,
    },
  },
  {
    id: 'torchic',
    name: 'Torchic',
    stats: {
      atk: 130,
      def: 87,
      sta: 128,
    },
    family: {
      id: 'torchic',
      stage: 1,
    },
  },
  {
    id: 'torkoal',
    name: 'Torkoal',
    stats: {
      atk: 151,
      def: 203,
      sta: 172,
    },
    family: {
      id: 'torkoal',
      stage: 1,
    },
  },
  {
    id: 'tornadus_incarnate',
    name: 'Tornadus (Incarnate)',
    stats: {
      atk: 266,
      def: 164,
      sta: 188,
    },
    floor: 1,
    family: {
      id: 'tornadus_incarnate',
      stage: 1,
    },
  },
  {
    id: 'tornadus_therian',
    name: 'Tornadus (Therian)',
    stats: {
      atk: 238,
      def: 189,
      sta: 188,
    },
    floor: 1,
    family: {
      id: 'tornadus_therian',
      stage: 1,
    },
  },
  {
    id: 'torterra',
    name: 'Torterra',
    stats: {
      atk: 202,
      def: 188,
      sta: 216,
    },
    family: {
      id: 'turtwig',
      stage: 3,
    },
  },
  {
    id: 'totodile',
    name: 'Totodile',
    stats: {
      atk: 117,
      def: 109,
      sta: 137,
    },
    family: {
      id: 'totodile',
      stage: 1,
    },
  },
  {
    id: 'toxicroak',
    name: 'Toxicroak',
    stats: {
      atk: 211,
      def: 133,
      sta: 195,
    },
    family: {
      id: 'croagunk',
      stage: 2,
    },
  },
  {
    id: 'tranquill',
    name: 'Tranquill',
    stats: {
      atk: 144,
      def: 107,
      sta: 158,
    },
    family: {
      id: 'pidove',
      stage: 2,
    },
  },
  {
    id: 'trapinch',
    name: 'Trapinch',
    stats: {
      atk: 162,
      def: 78,
      sta: 128,
    },
    family: {
      id: 'trapinch',
      stage: 1,
    },
  },
  {
    id: 'treecko',
    name: 'Treecko',
    stats: {
      atk: 124,
      def: 94,
      sta: 120,
    },
    family: {
      id: 'treecko',
      stage: 1,
    },
  },
  {
    id: 'trevenant',
    name: 'Trevenant',
    stats: {
      atk: 201,
      def: 154,
      sta: 198,
    },
    family: {
      id: 'phantump',
      stage: 2,
    },
  },
  {
    id: 'tropius',
    name: 'Tropius',
    stats: {
      atk: 136,
      def: 163,
      sta: 223,
    },
    family: {
      id: 'tropius',
      stage: 1,
    },
  },
  {
    id: 'trubbish',
    name: 'Trubbish',
    stats: {
      atk: 96,
      def: 122,
      sta: 137,
    },
    family: {
      id: 'trubbish',
      stage: 1,
    },
  },
  {
    id: 'turtwig',
    name: 'Turtwig',
    stats: {
      atk: 119,
      def: 110,
      sta: 146,
    },
    family: {
      id: 'turtwig',
      stage: 1,
    },
  },
  {
    id: 'tympole',
    name: 'Tympole',
    stats: {
      atk: 98,
      def: 78,
      sta: 137,
    },
    family: {
      id: 'tympole',
      stage: 1,
    },
  },
  {
    id: 'tynamo',
    name: 'Tynamo',
    stats: {
      atk: 105,
      def: 78,
      sta: 111,
    },
    family: {
      id: 'tynamo',
      stage: 1,
    },
  },
  {
    id: 'typhlosion',
    name: 'Typhlosion',
    stats: {
      atk: 223,
      def: 173,
      sta: 186,
    },
    family: {
      id: 'cyndaquil',
      stage: 3,
    },
  },
  {
    id: 'tyranitar',
    name: 'Tyranitar',
    stats: {
      atk: 251,
      def: 207,
      sta: 225,
    },
    family: {
      id: 'larvitar',
      stage: 3,
    },
  },
  {
    id: 'tyranitar_mega',
    name: 'Tyranitar (Mega)',
    stats: {
      atk: 309,
      def: 276,
      sta: 225,
    },
    family: {
      id: 'larvitar',
      stage: 4,
    },
    speculative: true,
  },
  {
    id: 'tyrantrum',
    name: 'Tyrantrum',
    stats: {
      atk: 227,
      def: 191,
      sta: 193,
    },
    family: {
      id: 'tyrunt',
      stage: 2,
    },
  },
  {
    id: 'tyrogue',
    name: 'Tyrogue',
    stats: {
      atk: 64,
      def: 64,
      sta: 111,
    },
    family: {
      id: 'tyrogue',
      stage: 1,
    },
  },
  {
    id: 'tyrunt',
    name: 'Tyrunt',
    stats: {
      atk: 158,
      def: 123,
      sta: 151,
    },
    family: {
      id: 'tyrunt',
      stage: 1,
    },
  },
  {
    id: 'umbreon',
    name: 'Umbreon',
    stats: {
      atk: 126,
      def: 240,
      sta: 216,
    },
    family: {
      id: 'eevee',
      stage: 2,
    },
  },
  {
    id: 'unfezant',
    name: 'Unfezant',
    stats: {
      atk: 226,
      def: 146,
      sta: 190,
    },
    family: {
      id: 'pidove',
      stage: 3,
    },
  },
  {
    id: 'unown',
    name: 'Unown',
    stats: {
      atk: 136,
      def: 91,
      sta: 134,
    },
    family: {
      id: 'unown',
      stage: 1,
    },
  },
  {
    id: 'ursaring',
    name: 'Ursaring',
    stats: {
      atk: 236,
      def: 144,
      sta: 207,
    },
    family: {
      id: 'teddiursa',
      stage: 2,
    },
  },
  {
    id: 'uxie',
    name: 'Uxie',
    stats: {
      atk: 156,
      def: 270,
      sta: 181,
    },
    family: {
      id: 'uxie',
      stage: 1,
    },
  },
  {
    id: 'vanillish',
    name: 'Vanillish',
    stats: {
      atk: 151,
      def: 138,
      sta: 139,
    },
    family: {
      id: 'vanillite',
      stage: 2,
    },
  },
  {
    id: 'vanillite',
    name: 'Vanillite',
    stats: {
      atk: 118,
      def: 106,
      sta: 113,
    },
    family: {
      id: 'vanillite',
      stage: 1,
    },
  },
  {
    id: 'vanilluxe',
    name: 'Vanilluxe',
    stats: {
      atk: 218,
      def: 184,
      sta: 174,
    },
    family: {
      id: 'vanillite',
      stage: 3,
    },
  },
  {
    id: 'vaporeon',
    name: 'Vaporeon',
    stats: {
      atk: 205,
      def: 161,
      sta: 277,
    },
    family: {
      id: 'eevee',
      stage: 2,
    },
  },
  {
    id: 'venipede',
    name: 'Venipede',
    stats: {
      atk: 83,
      def: 99,
      sta: 102,
    },
    family: {
      id: 'venipede',
      stage: 1,
    },
  },
  {
    id: 'venomoth',
    name: 'Venomoth',
    stats: {
      atk: 179,
      def: 143,
      sta: 172,
    },
    family: {
      id: 'venonat',
      stage: 2,
    },
  },
  {
    id: 'venonat',
    name: 'Venonat',
    stats: {
      atk: 100,
      def: 100,
      sta: 155,
    },
    family: {
      id: 'venonat',
      stage: 1,
    },
  },
  {
    id: 'venusaur',
    name: 'Venusaur',
    stats: {
      atk: 198,
      def: 189,
      sta: 190,
    },
    family: {
      id: 'bulbasaur',
      stage: 3,
    },
  },
  {
    id: 'venusaur_mega',
    name: 'Venusaur (Mega)',
    stats: {
      atk: 241,
      def: 246,
      sta: 190,
    },
    family: {
      id: 'bulbasaur',
      stage: 4,
    },
  },
  {
    id: 'vespiquen',
    name: 'Vespiquen',
    stats: {
      atk: 149,
      def: 190,
      sta: 172,
    },
    family: {
      id: 'combee',
      stage: 2,
    },
  },
  {
    id: 'vibrava',
    name: 'Vibrava',
    stats: {
      atk: 134,
      def: 99,
      sta: 137,
    },
    family: {
      id: 'trapinch',
      stage: 2,
    },
  },
  {
    id: 'victini',
    name: 'Victini',
    stats: {
      atk: 210,
      def: 210,
      sta: 225,
    },
    floor: 10,
    family: {
      id: 'victini',
      stage: 1,
    },
  },
  {
    id: 'victreebel',
    name: 'Victreebel',
    stats: {
      atk: 207,
      def: 135,
      sta: 190,
    },
    family: {
      id: 'bellsprout',
      stage: 3,
    },
  },
  {
    id: 'vigoroth',
    name: 'Vigoroth',
    stats: {
      atk: 159,
      def: 145,
      sta: 190,
    },
    family: {
      id: 'slakoth',
      stage: 2,
    },
  },
  {
    id: 'vileplume',
    name: 'Vileplume',
    stats: {
      atk: 202,
      def: 167,
      sta: 181,
    },
    family: {
      id: 'oddish',
      stage: 3,
    },
  },
  {
    id: 'virizion',
    name: 'Virizion',
    stats: {
      atk: 192,
      def: 229,
      sta: 209,
    },
    floor: 1,
    family: {
      id: 'virizion',
      stage: 1,
    },
  },
  {
    id: 'vivillon',
    name: 'Vivillon',
    stats: {
      atk: 176,
      def: 103,
      sta: 190,
    },
    family: {
      id: 'scatterbug',
      stage: 3,
    },
  },
  {
    id: 'volbeat',
    name: 'Volbeat',
    stats: {
      atk: 143,
      def: 166,
      sta: 163,
    },
    family: {
      id: 'volbeat',
      stage: 1,
    },
  },
  {
    id: 'volcarona',
    name: 'Volcarona',
    stats: {
      atk: 264,
      def: 189,
      sta: 198,
    },
    family: {
      id: 'larvesta',
      stage: 2,
    },
  },
  {
    id: 'voltorb',
    name: 'Voltorb',
    stats: {
      atk: 109,
      def: 111,
      sta: 120,
    },
    family: {
      id: 'voltorb',
      stage: 1,
    },
  },
  {
    id: 'vullaby',
    name: 'Vullaby',
    stats: {
      atk: 105,
      def: 139,
      sta: 172,
    },
    family: {
      id: 'vullaby',
      stage: 1,
    },
  },
  {
    id: 'vulpix',
    name: 'Vulpix',
    stats: {
      atk: 96,
      def: 109,
      sta: 116,
    },
    family: {
      id: 'vulpix',
      stage: 1,
    },
  },
  {
    id: 'vulpix_alolan',
    name: 'Vulpix (Alolan)',
    stats: {
      atk: 96,
      def: 109,
      sta: 116,
    },
    family: {
      id: 'vulpix_alolan',
      stage: 1,
    },
  },
  {
    id: 'wailmer',
    name: 'Wailmer',
    stats: {
      atk: 136,
      def: 68,
      sta: 277,
    },
    family: {
      id: 'wailmer',
      stage: 1,
    },
  },
  {
    id: 'wailord',
    name: 'Wailord',
    stats: {
      atk: 175,
      def: 87,
      sta: 347,
    },
    family: {
      id: 'wailmer',
      stage: 2,
    },
  },
  {
    id: 'walrein',
    name: 'Walrein',
    stats: {
      atk: 182,
      def: 176,
      sta: 242,
    },
    family: {
      id: 'spheal',
      stage: 3,
    },
  },
  {
    id: 'wartortle',
    name: 'Wartortle',
    stats: {
      atk: 126,
      def: 155,
      sta: 153,
    },
    family: {
      id: 'squirtle',
      stage: 2,
    },
  },
  {
    id: 'watchog',
    name: 'Watchog',
    stats: {
      atk: 165,
      def: 139,
      sta: 155,
    },
    family: {
      id: 'patrat',
      stage: 2,
    },
  },
  {
    id: 'weavile',
    name: 'Weavile',
    stats: {
      atk: 243,
      def: 171,
      sta: 172,
    },
    family: {
      id: 'sneasel',
      stage: 2,
    },
  },
  {
    id: 'weedle',
    name: 'Weedle',
    stats: {
      atk: 63,
      def: 50,
      sta: 120,
    },
    family: {
      id: 'weedle',
      stage: 1,
    },
  },
  {
    id: 'weepinbell',
    name: 'Weepinbell',
    stats: {
      atk: 172,
      def: 92,
      sta: 163,
    },
    family: {
      id: 'bellsprout',
      stage: 2,
    },
  },
  {
    id: 'weezing',
    name: 'Weezing',
    stats: {
      atk: 174,
      def: 197,
      sta: 163,
    },
    family: {
      id: 'koffing',
      stage: 2,
    },
  },
  {
    id: 'weezing_galarian',
    name: 'Weezing (Galarian)',
    stats: {
      atk: 174,
      def: 197,
      sta: 163,
    },
    family: {
      id: 'weezing_galarian',
      stage: 1,
    },
  },
  {
    id: 'whimsicott',
    name: 'Whimsicott',
    stats: {
      atk: 164,
      def: 176,
      sta: 155,
    },
    family: {
      id: 'cottonee',
      stage: 2,
    },
  },
  {
    id: 'whirlipede',
    name: 'Whirlipede',
    stats: {
      atk: 100,
      def: 173,
      sta: 120,
    },
    family: {
      id: 'venipede',
      stage: 2,
    },
  },
  {
    id: 'whiscash',
    name: 'Whiscash',
    stats: {
      atk: 151,
      def: 141,
      sta: 242,
    },
    family: {
      id: 'barboach',
      stage: 2,
    },
  },
  {
    id: 'whismur',
    name: 'Whismur',
    stats: {
      atk: 92,
      def: 42,
      sta: 162,
    },
    family: {
      id: 'whismur',
      stage: 1,
    },
  },
  {
    id: 'wigglytuff',
    name: 'Wigglytuff',
    stats: {
      atk: 156,
      def: 90,
      sta: 295,
    },
    family: {
      id: 'igglybuff',
      stage: 3,
    },
  },
  {
    id: 'wingull',
    name: 'Wingull',
    stats: {
      atk: 106,
      def: 61,
      sta: 120,
    },
    family: {
      id: 'wingull',
      stage: 1,
    },
  },
  {
    id: 'wobbuffet',
    name: 'Wobbuffet',
    stats: {
      atk: 60,
      def: 106,
      sta: 382,
    },
    family: {
      id: 'wynaut',
      stage: 2,
    },
  },
  {
    id: 'woobat',
    name: 'Woobat',
    stats: {
      atk: 107,
      def: 85,
      sta: 163,
    },
    family: {
      id: 'woobat',
      stage: 1,
    },
  },
  {
    id: 'wooper',
    name: 'Wooper',
    stats: {
      atk: 75,
      def: 66,
      sta: 146,
    },
    family: {
      id: 'wooper',
      stage: 1,
    },
  },
  {
    id: 'wormadam_plant',
    name: 'Wormadam (Plant)',
    stats: {
      atk: 141,
      def: 180,
      sta: 155,
    },
    family: {
      id: 'burmy',
      stage: 2,
    },
  },
  {
    id: 'wormadam_sandy',
    name: 'Wormadam (Sandy)',
    stats: {
      atk: 141,
      def: 180,
      sta: 155,
    },
    family: {
      id: 'burmy',
      stage: 2,
    },
  },
  {
    id: 'wormadam_trash',
    name: 'Wormadam (Trash)',
    stats: {
      atk: 127,
      def: 175,
      sta: 155,
    },
    family: {
      id: 'burmy',
      stage: 2,
    },
  },
  {
    id: 'wurmple',
    name: 'Wurmple',
    stats: {
      atk: 75,
      def: 59,
      sta: 128,
    },
    family: {
      id: 'wurmple',
      stage: 1,
    },
  },
  {
    id: 'wynaut',
    name: 'Wynaut',
    stats: {
      atk: 41,
      def: 86,
      sta: 216,
    },
    family: {
      id: 'wynaut',
      stage: 1,
    },
  },
  {
    id: 'xatu',
    name: 'Xatu',
    stats: {
      atk: 192,
      def: 146,
      sta: 163,
    },
    family: {
      id: 'natu',
      stage: 2,
    },
  },
  {
    id: 'xerneas',
    name: 'Xerneas',
    stats: {
      atk: 250,
      def: 185,
      sta: 246,
    },
    floor: 1,
    family: {
      id: 'xerneas',
      stage: 1,
    },
  },
  {
    id: 'yamask',
    name: 'Yamask',
    stats: {
      atk: 95,
      def: 141,
      sta: 116,
    },
    family: {
      id: 'yamask',
      stage: 1,
    },
  },
  {
    id: 'yamask_galarian',
    name: 'Yamask (Galarian)',
    stats: {
      atk: 95,
      def: 141,
      sta: 116,
    },
    family: {
      id: 'yamask_galarian',
      stage: 1,
    },
  },
  {
    id: 'yanma',
    name: 'Yanma',
    stats: {
      atk: 154,
      def: 94,
      sta: 163,
    },
    family: {
      id: 'yanma',
      stage: 1,
    },
  },
  {
    id: 'yanmega',
    name: 'Yanmega',
    stats: {
      atk: 231,
      def: 156,
      sta: 200,
    },
    family: {
      id: 'yanma',
      stage: 2,
    },
  },
  {
    id: 'yveltal',
    name: 'Yveltal',
    stats: {
      atk: 250,
      def: 185,
      sta: 246,
    },
    floor: 1,
    family: {
      id: 'yveltal',
      stage: 1,
    },
  },
  {
    id: 'zangoose',
    name: 'Zangoose',
    stats: {
      atk: 222,
      def: 124,
      sta: 177,
    },
    family: {
      id: 'zangoose',
      stage: 1,
    },
  },
  {
    id: 'zapdos',
    name: 'Zapdos',
    stats: {
      atk: 253,
      def: 185,
      sta: 207,
    },
    floor: 1,
    family: {
      id: 'zapdos',
      stage: 1,
    },
  },
  {
    id: 'zebstrika',
    name: 'Zebstrika',
    stats: {
      atk: 211,
      def: 136,
      sta: 181,
    },
    family: {
      id: 'blitzle',
      stage: 2,
    },
  },
  {
    id: 'zekrom',
    name: 'Zekrom',
    stats: {
      atk: 275,
      def: 211,
      sta: 205,
    },
    floor: 1,
    family: {
      id: 'zekrom',
      stage: 1,
    },
  },
  {
    id: 'zigzagoon',
    name: 'Zigzagoon',
    stats: {
      atk: 58,
      def: 80,
      sta: 116,
    },
    family: {
      id: 'zigzagoon',
      stage: 1,
    },
  },
  {
    id: 'zigzagoon_galarian',
    name: 'Zigzagoon (Galarian)',
    stats: {
      atk: 58,
      def: 80,
      sta: 116,
    },
    family: {
      id: 'zigzagoon_galarian',
      stage: 1,
    },
  },
  {
    id: 'zoroark',
    name: 'Zoroark',
    stats: {
      atk: 250,
      def: 127,
      sta: 155,
    },
    family: {
      id: 'zorua',
      stage: 2,
    },
  },
  {
    id: 'zorua',
    name: 'Zorua',
    stats: {
      atk: 153,
      def: 78,
      sta: 120,
    },
    family: {
      id: 'zorua',
      stage: 1,
    },
  },
  {
    id: 'zubat',
    name: 'Zubat',
    stats: {
      atk: 83,
      def: 73,
      sta: 120,
    },
    family: {
      id: 'zubat',
      stage: 1,
    },
  },
  {
    id: 'zweilous',
    name: 'Zweilous',
    stats: {
      atk: 159,
      def: 135,
      sta: 176,
    },
    family: {
      id: 'deino',
      stage: 2,
    },
  },
  {
    id: 'zygarde',
    name: 'Zygarde',
    stats: {
      atk: 203,
      def: 232,
      sta: 239,
    },
    family: {
      id: 'zygarde',
      stage: 1,
    },
  },
];

export function getPokemonByName(name: PokemonName, list: Pokemon[] = POKEDEX) {
  if (!name) return null;

  return list.find((pokemon) => pokemon.name === name) ?? null;
}

export function getPokemonByID(id: PokemonID, list: Pokemon[] = POKEDEX) {
  if (!id) return null;

  return list.find((pokemon) => pokemon.id === id) ?? null;
}

export function getPokemonFamilyMembers(
  familyID: PokemonID,
  list: Pokemon[] = POKEDEX,
) {
  return list.filter((pokemon) => pokemon.family.id === familyID);
}
