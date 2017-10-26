import {
    YouTubeSearchService,
    YOU_TUBE_API_KEY,
    YOU_TUBE_API_URL
} from './you-tube-search.service';

export const youTubeServiceInjectables: Array<any> = [
    { provide: YouTubeSearchService, useClass: YouTubeSearchService },
    { provide: YOU_TUBE_API_KEY, useValue: YOU_TUBE_API_KEY },
    { provide: YOU_TUBE_API_URL, useValue: YOU_TUBE_API_URL }
];