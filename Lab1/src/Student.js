const evaluateStudentLevel = (score) => {
  if (score < 0 || score > 100) return "Invalid";
  else if (score >= 0 && score < 50) return "Failed";
  else if (score >= 50 && score < 65) return "Passed";
  else if (score >= 65 && score < 75) return "Good";
  else if (score >= 75 && score < 85) return "Very Good";
  else if (score >= 85 && score <= 100) return "Excellent";
};
