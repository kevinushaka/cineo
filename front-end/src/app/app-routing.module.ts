import {NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {AddStreamComponent} from './addstream/addstream.component';
import {LogInComponent} from './log-in/log-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {HomeComponent} from './home/home.component';
import { AppComponent } from './app.component';
import {StreamsListComponent} from './streamslist/streamslist.component';
const routes: Routes=[
    { path: '', component:AppComponent, pathMatch: 'full' },
    {path:'home',component:HomeComponent,
    children:[
        {
            path: '', 
            redirectTo: 'streams', 
            pathMatch: 'full'
         },
        {
            path:'streamings',component:StreamsListComponent,
        }
    ]},
    { path: 'login', component: LogInComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'addstream', component: AddStreamComponent }
];

@NgModule({
    imports : [RouterModule.forRoot(routes,{
        anchorScrolling: 'enabled'
      })],
    exports: [RouterModule]
})
export class AppRoutingModule {}