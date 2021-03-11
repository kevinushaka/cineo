import { Component, OnInit } from '@angular/core';
import {Stream} from './../../models/stream.model'
import {StreamService} from './../../services/stream.service'
@Component({
  selector: 'app-streamslist',
  templateUrl: './streamslist.component.html',
  styleUrls: ['./streamslist.component.css']
})
export class StreamsListComponent implements OnInit {

  public streams: Stream[];
  constructor(private streamService:StreamService) {

    this.streamService.streams$.subscribe((streams)=>{
      this.streams=streams;
    })
   }

  ngOnInit(): void {
    
  }

}
