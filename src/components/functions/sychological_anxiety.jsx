function checkAnxiety(answers) {
  var disease = {
    status: "",
    desc: "",
    rule: "",
  };

  if (
    answers.feeling_fatigue &&
    answers.muscle_tension &&
    answers.hyperhidrosis
  ) {
    disease.status = "Confirm_anxiety";
    disease.desc =
      "Based on your answers, you may have anxiety. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing feelings of fatigue, muscle tension, and hyperhidrosis, which are indicative of anxiety.";
  } else if (answers.feeling_fatigue && answers.muscle_tension) {
    disease.status = "half_anxiety";
    disease.desc =
      "You may have anxiety. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing feelings of fatigue and muscle tension, which may be indicative of anxiety.";
  } else if (answers.feeling_fatigue && answers.hyperhidrosis) {
    disease.status = "half_anxiety";
    disease.desc =
      "You may have anxiety. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing feelings of fatigue and hyperhidrosis, which may be indicative of anxiety.";
  } else if (answers.muscle_tension && answers.hyperhidrosis) {
    disease.status = "half_anxiety";
    disease.desc =
      "You may have anxiety. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing muscle tension and hyperhidrosis, which may be indicative of anxiety.";
  } else if (
    !answers.feeling_fatigue &&
    !answers.muscle_tension &&
    !answers.hyperhidrosis
  ) {
    disease.status = "no_Confirm_anxiety";
    disease.desc = "You may not have anxiety.";
    disease.rule =
      "This rule is fired because you are not experiencing feelings of fatigue, muscle tension, or hyperhidrosis, suggesting a lower likelihood of anxiety.";
  } else {
    disease.status = "no_Confirm_anxiety";
    disease.desc = "You may not have anxiety.";
    disease.rule =
      "This rule is fired because none of the specific conditions for anxiety are met, suggesting a lower likelihood of anxiety.";
  }

  return disease;
}

export default checkAnxiety;
