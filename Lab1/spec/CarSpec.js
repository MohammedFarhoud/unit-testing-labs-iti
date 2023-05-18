describe("CarSpeed", () => {
  it('should return "Invalid" for less than zero speed', () => {
    const speed = -1;
    const expectedLevel = "Invalid";
    const actualLevel = evaluateCarSpeed(speed);
    expect(actualLevel).toEqual(expectedLevel);
  });

  it('should return "Low" for low car speed', () => {
    const speed = 0;
    const expectedLevel = "Low";
    const actualLevel = evaluateCarSpeed(speed);
    expect(actualLevel).toEqual(expectedLevel);
  });

  it('should return "Low" for low car speed', () => {
    const speed = 39;
    const expectedLevel = "Low";
    const actualLevel = evaluateCarSpeed(speed);
    expect(actualLevel).toEqual(expectedLevel);
  });

  it('should return "Normal" for normal car speed', () => {
    const speed = 40;
    const expectedLevel = "Normal";
    const actualLevel = evaluateCarSpeed(speed);
    expect(actualLevel).toEqual(expectedLevel);
  });

  it('should return "Normal" for normal car speed', () => {
    const speed = 119;
    const expectedLevel = "Normal";
    const actualLevel = evaluateCarSpeed(speed);
    expect(actualLevel).toEqual(expectedLevel);
  });

  it('should return "High" for high car speed', () => {
    const speed = 120;
    const expectedLevel = "High";
    const actualLevel = evaluateCarSpeed(speed);
    expect(actualLevel).toEqual(expectedLevel);
  });

  it('should return "High" for high car speed', () => {
    const speed = 199;
    const expectedLevel = "High";
    const actualLevel = evaluateCarSpeed(speed);
    expect(actualLevel).toEqual(expectedLevel);
  });

  it('should return "Very High" for very high car speed', () => {
    const speed = 200;
    const expectedLevel = "Very High";
    const actualLevel = evaluateCarSpeed(speed);
    expect(actualLevel).toEqual(expectedLevel);
  });

  it('should return "Very High" for very high car speed', () => {
    const speed = 219;
    const expectedLevel = "Very High";
    const actualLevel = evaluateCarSpeed(speed);
    expect(actualLevel).toEqual(expectedLevel);
  });

  it('should return "Invalid" for car speed greater than or equal 220', () => {
    const speed = 220;
    const expectedLevel = "Invalid";
    const actualLevel = evaluateCarSpeed(speed);
    expect(actualLevel).toEqual(expectedLevel);
  });
});
