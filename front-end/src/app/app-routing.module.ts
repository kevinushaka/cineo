import {NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { VideoPlayerComponent } from 'src/videoplayer/videoplayer.component';
import { AppComponent } from './app.component';

const routes: Routes=[
    { path: '', component: AppComponent },
    { path: 'videoplayer', component: VideoPlayerComponent }
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}