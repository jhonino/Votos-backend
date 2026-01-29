export interface OptionVote{
    optionText: string;
    votes: number;
}

export interface Polly {
    id: number;
    question: string;
    options: OptionVote[];
}
