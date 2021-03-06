import { Dispatch as ReactDispatch } from 'react';

import { IV } from '../../data/iv';
import { IVFloor } from '../../data/ivFloor';
import { StatKey, RankableMetric } from '../../data/stat';
import { Pokemon } from '../../data/pokedex';
import { ActionMap } from '../../utils/actionMap';

import { Candidate } from '.';

export enum CandidateActionTypes {
  Species,
  IV,
  Floor,
  RankingMetric,
  Shadow,
}

type PayloadTypes = {
  [CandidateActionTypes.Species]: Pokemon;
  [CandidateActionTypes.IV]: { stat: StatKey; value: IV };
  [CandidateActionTypes.Floor]: IVFloor;
  [CandidateActionTypes.RankingMetric]: RankableMetric;
  [CandidateActionTypes.Shadow]: boolean;
};

type Action = ActionMap<PayloadTypes>[keyof ActionMap<PayloadTypes>];
export type Dispatch = ReactDispatch<Action>;

export function candidateReducer(state: Candidate, action: Action): Candidate {
  switch (action.type) {
    case CandidateActionTypes.Species: {
      // state floor cannot be lower than the floor of the new species
      if (action.payload.floor > state.floor) {
        return {
          ...state,
          species: action.payload,
          floor: action.payload.floor,
          ivs: {
            atk: Math.max(state.ivs.atk, action.payload.floor) as IV,
            def: Math.max(state.ivs.def, action.payload.floor) as IV,
            sta: Math.max(state.ivs.sta, action.payload.floor) as IV,
          },
        };
      }

      return {
        ...state,
        species: action.payload,
      };
    }
    case CandidateActionTypes.IV: {
      const ivKey = action.payload.stat;

      return {
        ...state,
        ivs: {
          ...state.ivs,
          [ivKey]: action.payload.value,
        },
      };
    }
    case CandidateActionTypes.Floor: {
      return {
        ...state,
        ivs: {
          // iv cannot be lower than the floor
          atk: Math.max(state.ivs.atk, action.payload) as IV,
          def: Math.max(state.ivs.def, action.payload) as IV,
          sta: Math.max(state.ivs.sta, action.payload) as IV,
        },
        floor: action.payload,
      };
    }
    case CandidateActionTypes.RankingMetric: {
      return {
        ...state,
        rankingMetric: action.payload,
      };
    }
    case CandidateActionTypes.Shadow: {
      return {
        ...state,
        shadow: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
