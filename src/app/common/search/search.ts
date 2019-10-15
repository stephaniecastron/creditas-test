export interface Item {
    name: string;
    stargazers_count: number;
}

export interface Owner {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    received_events_url: string;
    type: string;
}


export interface SearchResponse {
    total_count: number;
    incomplete_results: boolean;
    items: Array<Item>;
}
