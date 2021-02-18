export enum StreamStatus {
    LOADING,
    ERROR,
    PLAYING,
    PAUSED,
    SEEKING
  }
  
  export interface Stream {
    src:   string,
    title: string
  }

  export interface StreamList {
    streams: Stream[]
  }