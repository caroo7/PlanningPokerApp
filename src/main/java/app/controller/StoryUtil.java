package app.controller;

import app.logic.Difficulty;
import app.logic.Story;

import java.util.ArrayList;
import java.util.List;

public class StoryUtil {

    public static List<Story> fakeStories = prepareFakeStories();

    private static List<Story> prepareFakeStories() {
        List<Story> stories = new ArrayList<>();
        Story story = new Story(Difficulty.EASY, "Implement tic tac toe application");
        stories.add(story);
        story = new Story(Difficulty.EASY, "Possibility to play with computer");
        stories.add(story);
        story = new Story(Difficulty.MEDIUM, "More advanced computer intelligence");
        stories.add(story);
        story = new Story(Difficulty.MEDIUM, "Increase size of the board");
        stories.add(story);
        story = new Story(Difficulty.HARD, "Implement multiplayer game");
        stories.add(story);
        story = new Story(Difficulty.HARD, "Add editor for board creation");
        stories.add(story);
        return stories;
    }

}