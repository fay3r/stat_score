import MatchService from '../src/MatchService';

describe('Match Service test suit',()=>{

    const match = {
        sport: 'soccer',
        participant1: 'Chelsea',
        participant2: 'Arsenal',
        score: '2:1',
    };

    const match2 =     {
        sport: 'tennis',
        participant1: 'Maria Sharapova',
        participant2: 'Serena Williams',
        score: '2:1,7:6,6:3,6:7',
    };

    const match3 = {
        sport: 'basketball',
        participant1: 'GKS Tychy',
        participant2: 'GKS Katowice',
        score: [
            ['9:7', '2:1'],
            ['5:3', '9:9']
        ],
    };

    const matchInvalid = {
        sport: 'unknown',
        participant1: 'GKS Tychy',
        participant2: 'GKS Katowice',
        score: [
            ['9:7', '2:1'],
            ['5:3', '9:9']
        ],    };

    it('makeEventName - should return event with -',()=>{
        const rv = MatchService.makeEventName(match);
        expect(rv).toBe( 'Chelsea - Arsenal');
    });

    it('makeEventName - should return event with vs',()=>{
        const rv = MatchService.makeEventName(match2);
        expect(rv).toBe( 'Maria Sharapova vs Serena Williams');
    });

    it('formatScore - should format score from string',()=>{
        const rv = MatchService.formatScore(match);
        expect(rv).toBe( '2:1');
    });

    it('formatScore - should format score from long string',()=>{
        const rv = MatchService.formatScore(match2);
        expect(rv).toBe( 'Main score: 2:1 (set1 7:6, set2 6:3, set3 6:7)');
    });

    it('formatScore - should format score from string[][]',()=>{
        const rv = MatchService.formatScore(match3);
        expect(rv).toBe( '9:7,2:1,5:3,9:9');
    });

    it('filterMatches - should find missing props and return false',()=>{
        const rv = MatchService.filterMissingValues(matchInvalid);
        expect(rv).toBeFalsy();
    });

    it('filterMatches - should pass filtering',()=>{
        const rv = MatchService.filterMissingValues(match);
        expect(rv).toBeTruthy();
    });
});
