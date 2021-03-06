import { LeagueCPCap } from '../../data/league';
import { LevelCapNumber } from '../../data/levelCap';
import { IVFloor } from '../../data/ivFloor';
import { Pokemon, PokemonIVs, PokemonStats } from '../../data/pokedex';

import { getMaximizedStats } from './getMaximizedStats';
import { getIVSpreads } from './getIVSpreads';
import { RankableMetric } from '../../data/stat';

export type ComparableToMax = {
  value: number;
  percentOfMax: number;
};
export type SpreadWithMaximizedStats = {
  ivs: PokemonIVs;
  cp: number;
  level: number;
  product: number;
  stats: PokemonStats;
};
export type RankedSpread = {
  ivs: PokemonIVs;
  cp: number;
  level: number;
  rank: number;
  product: ComparableToMax;
  stats: {
    atk: ComparableToMax;
    def: ComparableToMax;
    sta: ComparableToMax;
  };
};

const compareToMax = (value: number, max: number): ComparableToMax => ({
  value,
  percentOfMax: value / max,
});

export function generateRankedSpreads(
  pokemon: Pokemon,
  floor: IVFloor,
  maxCP: LeagueCPCap,
  maxLevel: LevelCapNumber,
  rankingMetric: RankableMetric,
) {
  const getRankingMetricValue = (spread: SpreadWithMaximizedStats) => {
    if (spread === undefined) {
      return null;
    } else if (rankingMetric === 'product') {
      return spread.product;
    } else {
      return spread.stats[rankingMetric];
    }
  };

  const ivSpreads = getIVSpreads(floor);
  const spreadsWithStats = ivSpreads
    .map((ivs) => getMaximizedStats(pokemon, ivs, maxCP, maxLevel))
    .sort((a, b) => {
      // in instances where two spreads have the same rankable metric value we
      // require a tiebreaker to determine order. this is "CP" if the ranking
      // metric is product, or "Stat Product" if the ranking metric is anything
      // else. this tiebreaker only affects the order that results show up in
      // since rank numbers can be shared by identical ranking metric values.
      if (getRankingMetricValue(b) === getRankingMetricValue(a)) {
        if (rankingMetric === 'product') {
          return b.cp - a.cp;
        } else {
          return b.product - a.product;
        }
      }

      return getRankingMetricValue(b) - getRankingMetricValue(a);
    });

  const rankOneSpread = spreadsWithStats[0];

  const output: RankedSpread[] = [];
  for (let i = 0; i < spreadsWithStats.length; i++) {
    const currentSpread = spreadsWithStats[i];
    const previousSpread = spreadsWithStats[i - 1];

    // if the currentSpread has the same ranking metric value as the
    // previousSpread then their rank number should be the same
    const rank =
      getRankingMetricValue(currentSpread) ===
      getRankingMetricValue(previousSpread)
        ? output[i - 1].rank
        : i + 1;

    output.push({
      rank,
      ivs: currentSpread.ivs,
      cp: currentSpread.cp,
      level: currentSpread.level,
      stats: {
        atk: compareToMax(currentSpread.stats.atk, rankOneSpread.stats.atk),
        def: compareToMax(currentSpread.stats.def, rankOneSpread.stats.def),
        sta: compareToMax(currentSpread.stats.sta, rankOneSpread.stats.sta),
      },
      product: compareToMax(currentSpread.product, rankOneSpread.product),
    });
  }

  return output;
}
