import { MatchType } from './@types/MatchType';
import { getSportConfig } from './@types/SportConfig';

const filterMissingValues = (match: Partial<MatchType>): match is MatchType => {
    if(!match.sport
        || !match.score || !match.participant1
        || !match.participant2){
        return false;
    }
    else if(match.sport && !getSportConfig(match.sport)){
        console.warn(`Missing config for sport: ${match.sport}`);
        return false;
    }
    return true;
};

const makeEventName = (match: MatchType): string => {
    const config = getSportConfig(match.sport);
    return `${match.participant1} ${config.teamConnector} ${match.participant2}`;
};

const formatScore = (match: MatchType): string => {
    const config = getSportConfig(match.sport);
    return config.scoreParser(match.score);
};


export default {filterMissingValues, formatScore, makeEventName};
