import { Jockey } from "./components/Jockey/Jockey";

export default interface JockeyProps {
    avatar_url: string;
    login: string;
}

export default interface JockeyListState {
    state: Jockey[];
}

export interface PersonInterface {
    login: string;
    id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}