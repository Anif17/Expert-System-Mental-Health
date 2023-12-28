function checkAnxiety(answers) {
  var status = "";
  if (
    answers.feeling_fatigue &&
    answers.muscle_tension &&
    answers.hyperhidrosis
  ) {
    status = "Confirm_anxiety";
  } else if (answers.feeling_fatigue && answers.muscle_tension) {
    status = "half_anxiety";
  } else if (answers.feeling_fatigue && answers.hyperhidrosis) {
    status = "half_anxiety";
  } else if (answers.muscle_tension && answers.hyperhidrosis) {
    status = "half_anxiety";
  } else if (
    !answers.feeling_fatigue &&
    !answers.muscle_tension &&
    !answers.hyperhidrosis
  ) {
    status = "no_Confirm_anxiety";
  } else {
    status = "no_Confirm_anxiety";
  }
  return status;
}

export default checkAnxiety;
