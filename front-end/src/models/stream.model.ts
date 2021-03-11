export enum StreamStatus {
    LOADING,
    ERROR,
    PLAYING,
    PAUSED,
    SEEKING
  }
  
  export interface User{
    username:string,
  }
  export interface Stream {
    src:   string,
    title: string,
    user:User
  }

  export interface StreamList {
    streams: Stream[]
  }