function checkObsessive(answers) {
  var disease = {
    status: "",
    desc: "",
    rule: "",
  };

  if (
    answers.fear_of_being_stolen &&
    answers.fear_of_causing_harm &&
    answers.fear_of_mistakes
  ) {
    disease.status = "OCD";
    disease.desc =
      "Based on your answers, you may have Obsessive-Compulsive Disorder (OCD). Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the symptoms of fear of being stolen, fear of causing harm, and fear of mistakes, which are indicative of OCD.";
  } else if (answers.fear_of_being_stolen && answers.fear_of_causing_harm) {
    disease.status = "half_OCD";
    disease.desc =
      "You may have Obsessive-Compulsive Disorder (OCD). Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the symptoms of fear of being stolen and fear of causing harm, which may be indicative of OCD.";
  } else if (answers.fear_of_being_stolen && answers.fear_of_mistakes) {
    disease.status = "half_OCD";
    disease.desc =
      "You may have Obsessive-Compulsive Disorder (OCD). Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the symptoms of fear of being stolen and fear of mistakes, which may be indicative of OCD.";
  } else if (answers.fear_of_causing_harm && answers.fear_of_mistakes) {
    disease.status = "half_OCD";
    disease.desc =
      "You may have Obsessive-Compulsive Disorder (OCD). Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the symptoms of fear of causing harm and fear of mistakes, which may be indicative of OCD.";
  } else if (
    !answers.fear_of_being_stolen &&
    !answers.fear_of_causing_harm &&
    !answers.fear_of_mistakes
  ) {
    disease.status = "no_OCD";
    disease.desc = "You may not have Obsessive-Compulsive Disorder (OCD).";
    disease.rule =
      "This rule is fired because you are not experiencing the symptoms of fear of being stolen, fear of causing harm, or fear of mistakes, suggesting a lower likelihood of OCD.";
  } else {
    disease.status = "no_OCD";
    disease.desc = "You may not have Obsessive-Compulsive Disorder (OCD).";
    disease.rule =
      "This rule is fired because none of the specific conditions for OCD are met, suggesting a lower likelihood of OCD.";
  }

  return disease;
}

export default checkObsessive;
