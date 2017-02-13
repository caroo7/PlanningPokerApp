package app.logic;

import java.io.Serializable;

public class Story implements Serializable {

    private Difficulty difficulty;

    private String summary;

    private Estimate averageEstimate;

    public Story() {}

    public Story(Difficulty difficulty, String summary) {
        this.difficulty = difficulty;
        this.summary = summary;
    }

    public Difficulty getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(Difficulty difficulty) {
        this.difficulty = difficulty;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public Estimate getAverageEstimate() {
        return averageEstimate;
    }

    public void setAverageEstimate(Estimate averageEstimate) {
        this.averageEstimate = averageEstimate;
    }

}