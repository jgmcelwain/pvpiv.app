import React, { FunctionComponent } from 'react';

import { LEAGUES } from '../data/reference';

import { Provider as CandidateContextProvider } from '../hooks/useCandidate';
import { useSettings } from '../hooks/useSettings';

import CandidateLeague from '../components/CandidateLeague';
import CandidateBuilder from '../components/CandidateBuilder';

const CandidatePage: FunctionComponent = () => {
  const { settings } = useSettings();

  return (
    <CandidateContextProvider>
      <div className='w-full'>
        <CandidateBuilder />

        <div className='grid items-start w-full grid-cols-1 gap-8 mb-8 xl:grid-cols-2'>
          {LEAGUES.filter(
            (league) => settings.leagues[league.key] === true,
          ).map((league) => (
            <CandidateLeague key={league.key} league={league} />
          ))}
        </div>
      </div>
    </CandidateContextProvider>
  );
};

export default CandidatePage;