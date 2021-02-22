import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Stream } from '../models/stream.model'
import { BehaviorSubject, Subject } from 'rxjs';
import { serverUrl, httpOptionsBase } from '../configs/server.config';
@Injectable({
  providedIn: 'root'
})
export class VideoLoaderService {

  private streams: Stream[];

  public streamSelected$: Subject<Stream> = new Subject();

  private streamsUrl = serverUrl + '/streams';

  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient) { }

  setSelectedStream(streamId){
    const urlWithId = this.streamsUrl + '/' + streamId;
    this.http.get<Stream>(urlWithId).subscribe((stream) => {
      this.streamSelected$.next(stream);
    });
  }
}
