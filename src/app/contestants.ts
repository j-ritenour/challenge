export class Contestants {
    name: string;
    age: number;
    seasons: string[];
    challengeWins: number;
    finalsAppearances: number;
    eliminationWins: number;
    eliminationAppearances: number;


    constructor(name: string, age: number, seasons: number[], challengeWins: number, finalsAppearances: number, eliminationWins: number, eliminationAppearances: number){
        this.name = name;
        this.age = age;
        this.seasons = seasons;
        this.challengeWins = challengeWins;
        this.finalsAppearances = finalsAppearances;
        this.eliminationWins = eliminationWins;
        this.eliminationAppearances = eliminationAppearances;
    }
}

