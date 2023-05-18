// First test suite
describe("Invalid Degree Input", () => {
  it('should return "Invalid" for score greater than 100', () => {
    const score = 101;
    const expectedLevel = "Invalid";
    const actualLevel = evaluateStudentLevel(score);
    expect(actualLevel).toEqual(expectedLevel);
  });

  it('should return "Invalid" for score less than zero', () => {
    const score = -1;
    const expectedLevel = "Invalid";
    const actualLevel = evaluateStudentLevel(score);
    expect(actualLevel).toEqual(expectedLevel);
  });
});

// Second test suite
describe("Student Grade", () => {
  beforeAll(() => {
    score = null;
  });

  afterAll(() => {
    score = null;
  });

  it('should return "Failed" for score from 0 and 49', () => {
    const score = 0;
    const expectedLevel = "Failed";
    const actualLevel = evaluateStudentLevel(score);
    expect(actualLevel).toEqual(expectedLevel);
  });

  it('should return "Failed" for score from 0 and 49', () => {
    const score = 49;
    const expectedLevel = "Failed";
    const actualLevel = evaluateStudentLevel(score);
    expect(actualLevel).toEqual(expectedLevel);
  });

  it('should return "Passed" for score from 50 and 64', () => {
    const score = 50;
    const expectedLevel = "Passed";
    const actualLevel = evaluateStudentLevel(score);
    expect(actualLevel).toEqual(expectedLevel);
  });

  it('should return "Passed" for score from 50 and 64', () => {
    const score = 64;
    const expectedLevel = "Passed";
    const actualLevel = evaluateStudentLevel(score);
    expect(actualLevel).toEqual(expectedLevel);
  });

  it('should return "Good" for score from 65 and 74', () => {
    const score = 65;
    const expectedLevel = "Good";
    const actualLevel = evaluateStudentLevel(score);
    expect(actualLevel).toEqual(expectedLevel);
  });

  it('should return "Good" for score from 65 and 74', () => {
    const score = 74;
    const expectedLevel = "Good";
    const actualLevel = evaluateStudentLevel(score);
    expect(actualLevel).toEqual(expectedLevel);
  });

  it('should return "Very Good" for score from 75 and 84', () => {
    const score = 75;
    const expectedLevel = "Very Good";
    const actualLevel = evaluateStudentLevel(score);
    expect(actualLevel).toEqual(expectedLevel);
  });

  it('should return "Very Good" for score from 75 and 84', () => {
    const score = 84;
    const expectedLevel = "Very Good";
    const actualLevel = evaluateStudentLevel(score);
    expect(actualLevel).toEqual(expectedLevel);
  });

  it('should return "Excellent" for score between 85 and 100', () => {
    const score = 85;
    const expectedLevel = "Excellent";
    const actualLevel = evaluateStudentLevel(score);
    expect(actualLevel).toEqual(expectedLevel);
  });

  it('should return "Excellent" for score between 85 and 100', () => {
    const score = 100;
    const expectedLevel = "Excellent";
    const actualLevel = evaluateStudentLevel(score);
    expect(actualLevel).toEqual(expectedLevel);
  });
});
