import {parseFromMatrix, parseFromString} from '../utils/scoreParseFunctions';

enum TeamsConnector {
    DASH = '-',
    VERSUS = 'vs',
}

export const simpleScoreRegex = new RegExp(/^\d+:\d+$/g);
export const multipleScoreRegex = new RegExp(/^(\d+:\d+,*){2,}$/g);

export type SportConfig = {
    teamConnector: TeamsConnector;
    scoreParser: (param:any)=>string;
}

const SportsConfigs: { [sport :string]: SportConfig } = {
    basketball: {
        scoreParser: parseFromMatrix,
        teamConnector: TeamsConnector.DASH
    },
    handball: {
        scoreParser: parseFromString,
        teamConnector: TeamsConnector.VERSUS
    },
    soccer: {
        scoreParser: parseFromString,
        teamConnector: TeamsConnector.DASH
    },
    volleyball: {
        scoreParser: parseFromString,
        teamConnector: TeamsConnector.DASH
    },
    tennis: {
        scoreParser: parseFromString,
        teamConnector: TeamsConnector.VERSUS
    },
};

export const getSportConfig = (sport:string) => SportsConfigs[sport];
