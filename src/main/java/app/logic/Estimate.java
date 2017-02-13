package app.logic;

public enum Estimate {

    ONE(1), TWO(2), THREE(3), FIVE(5), EIGHT(8), THIRTEEN(13), UNLIMITED(20), NOT_DEFINED(1), COFFEE(-1);

    private int value;

    Estimate(int value) {
        this.value = value;
    }

    public int getValue() {
        return this.value;
    }

}