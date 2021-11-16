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
    "your_clicks": number | null;
    "team_clicks": number | null;
}