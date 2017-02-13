package app.controller;

import app.logic.Story;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EstimationController {

    @GetMapping("/stories")
    public List<Story> retrieveStories() {
        return StoryUtil.fakeStories;
    }

    @GetMapping("story/{storyIndex}")
    public Story getStoryToEstimate(@PathVariable("storyIndex") int storyIndex) {
        Story story = null;
        try {
            story = StoryUtil.fakeStories.get(storyIndex);
        } catch(ArrayIndexOutOfBoundsException e) {
            System.out.println("There is no more stories to estimate");
            e.printStackTrace();
        }
        return story;
    }

}