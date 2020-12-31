import React, { FunctionComponent, ReactChild } from 'react';
import { League, LEVEL_CAPS } from '../data/reference';

import LeagueRankingLevel from './LeagueRankingLevel';

const THeadCell: FunctionComponent<{ children: ReactChild | string[] }> = ({
  children,
}) => (
  <th className='text-left bg-gray-100 border-b border-gray-200 px-6 py-3 text-gray-500 font-semibold tracking-wider uppercase font-title text-xs'>
    <span>{children}</span>
  </th>
);

const LeagueSubjectRanking: FunctionComponent<{ league: League }> = ({
  league,
}) => {
  return (
    <table className='w-full border-collapse text-sm'>
      <thead>
        <tr>
          <THeadCell>Cap</THeadCell>

          <THeadCell>Rank</THeadCell>

          <THeadCell>CP</THeadCell>

          <THeadCell>Level</THeadCell>

          <THeadCell>Atk / Def / Sta</THeadCell>

          <THeadCell>Product</THeadCell>
        </tr>
      </thead>

      <tbody>
        {LEVEL_CAPS.map((levelCap) => (
          <LeagueRankingLevel
            key={levelCap}
            maxLevel={levelCap}
            maxCP={league.cp}
          />
        ))}
      </tbody>
    </table>
  );
};

export default LeagueSubjectRanking;