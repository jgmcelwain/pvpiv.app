import { useMemo } from 'react';

import { LevelCapNumber } from '../../data/levelCap';

import { useLeague } from '../useLeague';
import { useCandidate } from '../useCandidate';
import { useSettings } from '../useSettings';

import {
  generateRankedSpreads,
  RankedSpread,
} from '../../lib/generateRankedSpreads';

export function useMemoRankedSpreads(levelCapNumber: LevelCapNumber) {
  const { league } = useLeague();
  const { candidate } = useCandidate();
  const { settings } = useSettings();

  const value = useMemo<RankedSpread[]>(() => {
    if (settings.levelCaps[levelCapNumber] === false) return [];

    return generateRankedSpreads(
      candidate.species,
      candidate.floor,
      league.cp,
      levelCapNumber,
      candidate.rankingMetric,
    );
  }, [
    settings.levelCaps[levelCapNumber],
    candidate.species.stats.atk,
    candidate.species.stats.def,
    candidate.species.stats.sta,
    candidate.floor,
    candidate.rankingMetric,
  ]);

  return value;
}
