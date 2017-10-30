export class SearchResult {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;

    constructor(obj?: any){
        console.log("SearchResult:constructor");
        this.id = obj               && obj.id || null;
        this.title = obj            && obj.title || null;
        this.description = obj      && obj.description || null;
        this.thumbnailUrl = obj        && obj.thumbnailUrl || null;
        this.videoUrl = obj         && obj.videoUrl || `https://www.youtube.com/watch?v=${this.id}`;

    }

    toString(){
        `
        id: ${this.id}
        title: ${this.title}
        description: ${this.description}
        thumbnailUrl: ${this.thumbnailUrl}
        videoUrl: ${this.videoUrl}
        `
    }
}