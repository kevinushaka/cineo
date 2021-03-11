import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Stream, User } from '../models/stream.model'
import { Subject } from 'rxjs';
import { serverUrl } from '../configs/server.config';
@Injectable({
  providedIn: 'root'
})
export class StreamService {

  public streams$: Subject<Stream[]> = new Subject();
  public streamSelected$: Subject<Stream> = new Subject();

  private streamsUrl = serverUrl + '/streams';

  constructor(private http: HttpClient) { }

  setSelectedStream(streamId){
    const urlWithId = this.streamsUrl + '/' + streamId;
    this.http.get<Stream>(urlWithId).subscribe((stream) => {
      this.streamSelected$.next(stream);
    });
  }
  setStreams(){
    this.http.get<Stream[]>(this.streamsUrl ).subscribe((streams) => {
      this.streams$.next(streams);
    });
  }
}
