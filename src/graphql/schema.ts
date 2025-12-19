import { gql } from "apollo-server-lambda";

export const typeDefs = gql `
    scalar JSON 
    type SeasonScoreRecord {
        TeamName: String
        TeamID: String
        Score: String
        Overs: String
        Wickets: String
    }
    type Seasons{
        PK: String
        SK: String
        EntityType: String

        CurrentSeason: String
        SeasonName: String
        Year: Int
        Country: String
        City: String
        StartDate: String
        EndDate: String
        SeasonStatus: String

        NumberOfTeams: Int
        NumberOfMatches: Int
        NumberOfVenues: Int
        NumberOfPlayers: Int
        TotalMatchesPlayed: Int

        Winner: String
        RunnerUp: String
        PlayerOfTheTournament: String
        MostRuns: String
        MostWickets: String

        PreviousSeason: String
        NextSeason: String

        HighestTeamScore: SeasonScoreRecord
        LowestTeamScore: SeasonScoreRecord

        SeasonLogo: String
        CoverImage: String
        SeasonDescription: String

        CreatedAt: String
        UpdatedAt: String
    }

    type Team {
        PK: String
        SK: String
        EntityType: String

        TeamCode: String
        TeamName: String
        HomeCity: String
        HomeGround: String

        Captain: String
        Coach: String

        TeamLogo: String
        TeamColors: [String]

        MatchesPlayed: Int
        Wins: Int
        Losses: Int
        Points: Int
        NetRunRate: String
        FinalPosition: Int

        CreatedAt: String
        UpdatedAt: String
    }
    type Match {
        PK: String
        SK: String
        EntityType: String

        MatchNumber: String
        MatchDate: String
        Venue: String

        TeamA: String
        TeamB: String
        Teams: [String]

        TossWinner: String
        TossDecision: String

        TeamBatFirst: String
        TeamBatSecond: String

        FirstInningsScore: String
        SecondInningsScore: String

        Result: String
    }
    type InningsExtras {
        wides: Int
        noballs: Int
        byes: Int
        legbyes: Int
        penalty: Int
        totalExtras: Int
    }
    type Inning {
        PK: String
        SK: String
        EntityType: String

        BattingTeam: String
        BowlingTeam: String

        Runs: Int
        Wickets: Int
        Overs: Float

        InningsExtras: InningsExtras
    }
        type IPLBattingStats {
    Matches: Int
    Runs: Int
    HighestScore: String
    Average: Float
    StrikeRate: Float
    _100s: Int
    _50s: Int
  }

  type PlayerStats {
    IPL: IPLBattingStats
  }

  type Player {
    PK: String
    SK: String
    EntityType: String

    PlayerID: String
    PlayerName: String

    TeamCode: String
    TeamName: String

    Role: String
    BattingStyle: String
    BowlingStyle: String

    Nationality: String
    DOB: String
    JerseyNumber: String

    IsCaptain: Boolean
    IsWicketKeeper: Boolean
    IsOverseas: Boolean
    IsPlayingXI: Boolean

    AuctionPrice: String
    YearJoined: Int

    ImageURL: String

    Stats: PlayerStats
  }
    type Query {
        getAllSeasons : [Seasons],
        getAllTeams : [Team],
        getAllMatches : [Match],
        getAllPlayers : [Player]
    }
`;