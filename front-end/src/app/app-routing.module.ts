import {NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { VideoPlayerComponent } from './videoplayer/videoplayer.component';
import {AddStreamComponent} from './addstream/addstream.component';
import {HomeComponent} from './home/home.component';
import { AppComponent } from './app.component';

const routes: Routes=[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:'home',component:HomeComponent},
    { path: 'videoplayer', component: VideoPlayerComponent },
    { path: 'addstream', component: AddStreamComponent }
];

@NgModule({
    imports : [RouterModule.forRoot(routes,{
        anchorScrolling: 'enabled'
      })],
    exports: [RouterModule]
})
export class AppRoutingModule {}