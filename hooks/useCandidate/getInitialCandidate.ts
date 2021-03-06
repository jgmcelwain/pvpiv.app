import { getPokemonByID, PokemonID } from '../../data/pokedex';
import { IV, MAX_IV } from '../../data/iv';
import { IVFloor, MIN_IV_FLOOR, MAX_IV_FLOOR } from '../../data/ivFloor';

import { tidyNumericInput } from '../../utils/tidyNumericInput';

import { NextRouter } from 'next/router';
import { Candidate } from '.';
import { RankableMetric, RANKABLE_METRICS } from '../../data/stat';

type DirtyIV = IV | number;
type DirtyIVFloor = IVFloor | number;
type DirtyRankableMetric = RankableMetric | string;
type Query = [
  PokemonID,
  DirtyIV,
  DirtyIV,
  DirtyIV,
  DirtyIVFloor,
  DirtyRankableMetric,
];

const CANDIDATE_DEFAULTS = {
  id: process.env.NEXT_PUBLIC_DEFAULT_POKEMON ?? 'azumarill',
  atk: parseInt(process.env.NEXT_PUBLIC_DEFAULT_ATK ?? '0'),
  def: parseInt(process.env.NEXT_PUBLIC_DEFAULT_DEF ?? '15'),
  sta: parseInt(process.env.NEXT_PUBLIC_DEFAULT_STA ?? '15'),
  floor: parseInt(process.env.NEXT_PUBLIC_DEFAULT_FLOOR ?? '0'),
  rankingMetric: process.env.NEXT_PUBLIC_DEFAULT_RANKING_METRIC ?? 'product',
  shadow: false,
};

function sanitizeCandidate(
  id: PokemonID = null,
  atk?: DirtyIV,
  def?: DirtyIV,
  sta?: DirtyIV,
  floor?: DirtyIVFloor,
  rankingMetric?: DirtyRankableMetric,
  shadow?: boolean,
) {
  const species = getPokemonByID(id) ?? getPokemonByID(CANDIDATE_DEFAULTS.id);

  const outputFloor = tidyNumericInput<IVFloor>(
    floor ?? CANDIDATE_DEFAULTS.floor,
    species.floor ?? MIN_IV_FLOOR,
    MAX_IV_FLOOR,
  );

  const ivs = {
    atk: tidyNumericInput<IV>(
      atk ?? CANDIDATE_DEFAULTS.atk,
      outputFloor,
      MAX_IV,
    ),
    def: tidyNumericInput<IV>(
      def ?? CANDIDATE_DEFAULTS.def,
      outputFloor,
      MAX_IV,
    ),
    sta: tidyNumericInput<IV>(
      sta ?? CANDIDATE_DEFAULTS.sta,
      outputFloor,
      MAX_IV,
    ),
  };

  const outputRankingMetric: RankableMetric =
    RANKABLE_METRICS.find(({ key }) => key === rankingMetric)?.key ?? 'product';

  return {
    species,
    ivs,
    floor: outputFloor,
    rankingMetric: outputRankingMetric,
    shadow: shadow ?? false,
  };
}

export function getInitialCandidate(
  query: NextRouter['query'],
  cachedCandidate: Candidate,
): Candidate {
  if (query?.candidate) {
    const [
      id = CANDIDATE_DEFAULTS.id,
      atk = CANDIDATE_DEFAULTS.atk,
      def = CANDIDATE_DEFAULTS.def,
      sta = CANDIDATE_DEFAULTS.sta,
      floor = CANDIDATE_DEFAULTS.floor,
      rankingMetric = CANDIDATE_DEFAULTS.rankingMetric,
    ]: Query = query.candidate as Query;

    return sanitizeCandidate(id, atk, def, sta, floor, rankingMetric);
  } else if (cachedCandidate !== null) {
    return sanitizeCandidate(
      cachedCandidate.species.id,
      cachedCandidate.ivs.atk,
      cachedCandidate.ivs.def,
      cachedCandidate.ivs.sta,
      cachedCandidate.floor,
      cachedCandidate.rankingMetric,
      cachedCandidate.shadow,
    );
  } else {
    return sanitizeCandidate(null);
  }
}
