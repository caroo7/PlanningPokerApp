import { Component, NgModule } from '@angular/core';
import { StoriesComponent } from './story/stories.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  declarations: [StoriesComponent],
  bootstrap: [AppComponent]
})
export class AppComponent {

}
