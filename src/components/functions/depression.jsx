function checkDepression(answers) {
  var disease = {
    status: "",
    desc: "",
    rule: "",
  };

  if (
    answers.sleep_and_food_disruption &&
    answers.inactivity_in_the_movement_of_the_body &&
    answers.fear_and_inner_horror
  ) {
    disease.status = "depression";
    disease.desc =
      "Based on your answers, you may have Depression. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the symptoms of sleep and food disruption, inactivity in the movement of the body, and fear and inner horror, which are indicative of Depression.";
  } else if (
    answers.sleep_and_food_disruption &&
    answers.inactivity_in_the_movement_of_the_body
  ) {
    disease.status = "half_depression";
    disease.desc =
      "You may have Depression. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the symptoms of sleep and food disruption and inactivity in the movement of the body, which may be indicative of Depression.";
  } else if (
    answers.sleep_and_food_disruption &&
    answers.fear_and_inner_horror
  ) {
    disease.status = "half_depression";
    disease.desc =
      "You may have Depression. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the symptoms of sleep and food disruption and fear and inner horror, which may be indicative of Depression.";
  } else if (
    answers.inactivity_in_the_movement_of_the_body &&
    answers.fear_and_inner_horror
  ) {
    disease.status = "half_depression";
    disease.desc =
      "You may have Depression. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the symptoms of inactivity in the movement of the body and fear and inner horror, which may be indicative of Depression.";
  } else if (
    !answers.sleep_and_food_disruption &&
    !answers.inactivity_in_the_movement_of_the_body &&
    !answers.fear_and_inner_horror
  ) {
    disease.status = "no_depression";
    disease.desc = "You may not have Depression.";
    disease.rule =
      "This rule is fired because you are not experiencing the symptoms of sleep and food disruption, inactivity in the movement of the body, or fear and inner horror, suggesting a lower likelihood of Depression.";
  } else {
    disease.status = "no_depression";
    disease.desc = "You may not have Depression.";
    disease.rule =
      "This rule is fired because none of the specific conditions for Depression are met, suggesting a lower likelihood of Depression.";
  }

  return disease;
}

export default checkDepression;
