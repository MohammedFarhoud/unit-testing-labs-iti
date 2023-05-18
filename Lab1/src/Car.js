const evaluateCarSpeed = (speed) => {
  if (speed < 0 || speed >= 220) return "Invalid";
  else if (speed >= 0 && speed < 40) return "Low";
  else if (speed >= 40 && speed < 120) return "Normal";
  else if (speed >= 120 && speed < 200) return "High";
  else if (speed >= 200 && speed < 220) return "Very High";
  else if (speed >= 200 && speed < 220) return "Very High";
};