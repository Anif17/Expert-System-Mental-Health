function checkDepression(answers) {
  var status = "";

  if (
    answers.sleep_and_food_disruption &&
    answers.inactivity_in_the_movement_of_the_body &&
    answers.fear_and_inner_horror
  ) {
    status = "depression";
  } else if (
    answers.sleep_and_food_disruption &&
    answers.inactivity_in_the_movement_of_the_body
  ) {
    status = "half_depression";
  } else if (
    answers.sleep_and_food_disruption &&
    answers.fear_and_inner_horror
  ) {
    status = "half_depression";
  } else if (
    answers.inactivity_in_the_movement_of_the_body &&
    answers.fear_and_inner_horror
  ) {
    status = "half_depression";
  } else if (
    !answers.sleep_and_food_disruption &&
    !answers.inactivity_in_the_movement_of_the_body &&
    !answers.fear_and_inner_horror
  ) {
    status = "no_depression";
  } else {
    status = "no_depression";
  }
  return status;
}

export default checkDepression;
