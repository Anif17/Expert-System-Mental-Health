function checkAnxiety(answers) {
  if (
    answers.feeling_fatigue &&
    answers.muscle_tension &&
    answers.hyperhidrosis
  ) {
    return "Confirm_anxiety";
  } else if (answers.feeling_fatigue && answers.muscle_tension) {
    return "half_anxiety";
  } else if (answers.feeling_fatigue && answers.hyperhidrosis) {
    return "half_anxiety";
  } else if (answers.muscle_tension && answers.hyperhidrosis) {
    return "half_anxiety";
  } else if (
    !answers.feeling_fatigue &&
    !answers.muscle_tension &&
    !answers.hyperhidrosis
  ) {
    return "no_Confirm_anxiety";
  } else {
    return "no_Confirm_anxiety";
  }
}

export default checkAnxiety;
