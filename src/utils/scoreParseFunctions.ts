import {simpleScoreRegex} from '../@types/SportConfig';

export const parseFromString = (score: string) => {
    if(simpleScoreRegex.test(score)){
        return score;
    }
    const scores = score.split(',').map((score, index) => {
        if (index === 0) {
            return `Main score: ${score}`;
        }
        return `set${index} ${score}`;
    });
    const finalScore = scores.shift();
    const sets = `(${scores.reduce((prev, current) => `${prev}, ${current}`)})`;
    return `${finalScore} ${sets}`;
};

export const parseFromMatrix = (score: string[][]) => {
    return score.map((itemArray) =>
        `${itemArray.reduce((prev, current) => `${prev},${current}`)}`)
        .reduce((prev, current) => `${prev},${current}`);
};
