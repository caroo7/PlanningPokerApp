import { URLSearchParams } from '@angular/http';
import { Component, NgModule } from '@angular/core';
import { StoriesService } from './stories.service'
import { Story } from './story.data'

@Component({
  selector: 'stories',
  templateUrl: './story.component.html',
  providers: [StoriesService]
})
export class StoriesComponent {

    private actualStory : Story;
    private storiesCounter: number;

    constructor(private storiesService : StoriesService) {
      this.storiesCounter = 0;
    }

    updateActualStory() {
      this.storiesService.retrieveStories(this.storiesCounter).subscribe((data) => {
          console.log(data.difficulty, data.summary);
      });
    }

    clickStoryButton() {
      this.storiesCounter = this.storiesCounter + 1;
    }

}