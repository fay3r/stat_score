import { matches } from './utils/constants';
import MatchService from './MatchService';
import { MatchType } from './@types/MatchType';

export const parseMatches = (matchArray: Partial<MatchType>[]) =>{

    return matchArray.filter(MatchService.filterMissingValues)
        .map((match) => {
            const name = MatchService.makeEventName(match);
            const score = MatchService.formatScore(match);
            return {name, score};
        });
};

console.log(parseMatches(matches));
