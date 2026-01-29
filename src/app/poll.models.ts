export interface OptionVote{
    optionText: string;
    voteCount: number;
}

export interface Polly {
    id: number;
    question: string;
    options: OptionVote[];
}
