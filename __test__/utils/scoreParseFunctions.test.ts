import {parseFromMatrix, parseFromString} from '../../src/utils/scoreParseFunctions';

describe('App.ts tests',()=>{
    it('returns string score as 2:1 ',()=>{
        const rv = parseFromString('2:1');
        expect(rv).toEqual('2:1');
    });

    it('returns string score as Main score (sets) ',()=>{
        const rv = parseFromString('2:1,7:6,6:3,6:7');
        expect(rv).toEqual('Main score: 2:1 (set1 7:6, set2 6:3, set3 6:7)');
    });

    it('returns string score from matrix as 5:2,1:5,12:5,7:8 ',()=>{
        const rv = parseFromMatrix([['5:2','1:5'],['12:5','7:8']]);
        expect(rv).toEqual('5:2,1:5,12:5,7:8');
    });
});
