export type TeamResponse = {
    "order": number
    "team": string
    "clicks": number
}

export type ClickRequest = {
    "team": string;
    "session": string;
}


export type ClickResponse = {
    "your_clicks": number;
    "team_clicks": number;
}