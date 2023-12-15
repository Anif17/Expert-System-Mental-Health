function checkObsessive(answers) {
  var status = "";

  if (
    answers.fear_of_being_stolen &&
    answers.fear_of_causing_harm &&
    answers.fear_of_mistakes
  ) {
    status = "OCD";
  } else if (answers.fear_of_being_stolen && answers.fear_of_causing_harm) {
    status = "half_OCD";
  } else if (answers.fear_of_being_stolen && answers.fear_of_mistakes) {
    status = "half_OCD";
  } else if (answers.fear_of_causing_harm && answers.fear_of_mistakes) {
    status = "half_OCD";
  } else if (
    !answers.fear_of_being_stolen &&
    !answers.fear_of_causing_harm &&
    !answers.fear_of_mistakes
  ) {
    status = "no_OCD";
  } else {
    status = "no_OCD";
  }
  return status;
}

export default checkObsessive;
