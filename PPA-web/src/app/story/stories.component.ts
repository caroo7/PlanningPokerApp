import { Component } from '@angular/core';
import { StoriesService } from './stories.service'
import { Story } from './story.data'

@Component({
  selector: 'stories',
  template: '<h1> Stories list </h1> {{storiesArray}}',
  providers: [StoriesService]
})
export class StoriesComponent {

    private storiesArray = [];

    constructor(private storiesService : StoriesService) {
      storiesService.retrieveStories().subscribe((data) => {
          this.storiesArray.push(data);
      });
    }

}