import React, { FunctionComponent, useMemo } from 'react';

import { getRankedSpreadColors } from '../utils/getRankColors';
import { formatPercent } from '../utils/formatPercent';

import { useSettings } from '../hooks/useSettings';
import { useSubject } from '../hooks/useSubject';
import { useLeague } from '../hooks/useLeague';
import { useRankedSpreads } from '../hooks/useRankedSpreads';

import { IV_FLOORS, LevelCap } from '../data/reference';

import * as SubjectLeagueTableCells from './SubjectLeagueTableCells';

const SubjectLeagueRanksAtLevelCap: FunctionComponent<{
  levelCap: LevelCap;
}> = ({ levelCap }) => {
  const { league, setDisplayMode } = useLeague();
  const { subject } = useSubject();
  const { settings } = useSettings();
  const rankedSpreads = useRankedSpreads();

  const subjectAtLevel = useMemo(
    () =>
      rankedSpreads[levelCap.level].find(
        (spread) =>
          spread.ivs.atk === subject.ivs.atk &&
          spread.ivs.def === subject.ivs.def &&
          spread.ivs.sta === subject.ivs.sta,
      ) ?? null,
    [rankedSpreads[levelCap.level], subject.ivs],
  );

  const floor = useMemo(
    () => IV_FLOORS.find((ivFloor) => ivFloor.value === subject.floor),
    [subject.floor],
  );

  const colors = useMemo(() => getRankedSpreadColors(subjectAtLevel), [
    subjectAtLevel,
  ]);

  if (subjectAtLevel === null) return null;

  return (
    <tr className={`${colors.background} ${colors.text}`}>
      {settings.outputData.rank && (
        <SubjectLeagueTableCells.Body>
          {subjectAtLevel.rank}
        </SubjectLeagueTableCells.Body>
      )}

      {settings.outputData.level && (
        <SubjectLeagueTableCells.Body>
          <>
            {subjectAtLevel.level}
            <span className='text-xs'> / {levelCap.level}</span>
          </>
        </SubjectLeagueTableCells.Body>
      )}

      {settings.outputData.cp && (
        <SubjectLeagueTableCells.Body>
          {subjectAtLevel.cp}
        </SubjectLeagueTableCells.Body>
      )}

      {settings.outputData.stats && (
        <>
          <SubjectLeagueTableCells.Body>
            <>
              {subjectAtLevel.stats.atk.value.toFixed(2)}

              {settings.outputData.percent && (
                <span className='block text-xs opacity-70'>
                  {formatPercent(subjectAtLevel.stats.atk.percentOfMax)}
                </span>
              )}
            </>
          </SubjectLeagueTableCells.Body>
          <SubjectLeagueTableCells.Body>
            <>
              {subjectAtLevel.stats.def.value.toFixed(2)}

              {settings.outputData.percent && (
                <span className='block text-xs opacity-70'>
                  {formatPercent(subjectAtLevel.stats.def.percentOfMax)}
                </span>
              )}
            </>
          </SubjectLeagueTableCells.Body>
          <SubjectLeagueTableCells.Body>
            <>
              {subjectAtLevel.stats.sta.value}

              {settings.outputData.percent && (
                <span className='block text-xs opacity-70'>
                  {formatPercent(subjectAtLevel.stats.sta.percentOfMax)}
                </span>
              )}
            </>
          </SubjectLeagueTableCells.Body>
        </>
      )}

      {settings.outputData.statProduct && (
        <SubjectLeagueTableCells.Body>
          <>
            <span title={`${subjectAtLevel.product}`}>
              {(subjectAtLevel.product.value / 1000).toFixed(2)}
            </span>

            {settings.outputData.percent && (
              <span className='block text-xs opacity-70'>
                {formatPercent(subjectAtLevel.product.percentOfMax)}
              </span>
            )}
          </>
        </SubjectLeagueTableCells.Body>
      )}

      <SubjectLeagueTableCells.Body right>
        <button
          onClick={() => setDisplayMode('top', levelCap)}
          className='focus-ring p-0.5 rounded mr-2'
          title={`View top ${league.name} IV spreads for ${subject.species.name}, Level ${levelCap.level}, ${floor.name}`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-4 h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 10h16M4 14h16M4 18h16'
            />
          </svg>
        </button>
      </SubjectLeagueTableCells.Body>
    </tr>
  );
};

export default SubjectLeagueRanksAtLevelCap;