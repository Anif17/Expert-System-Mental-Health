function checkObsessive(answers) {
  var disease = {
    status: "",
    desc: "",
    rule: "",
  };

  //OCD
  if (
    answers.fear_of_being_stolen &&
    answers.fear_of_causing_harm == "severe" &&
    answers.fear_of_mistakes == "severe"
  ) {
    disease.status = "OCD";
    disease.desc =
      "Based on your answers, you have a high chance of having Obsessive-Compulsive Disorder (OCD). Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the severe symptoms of fear of being stolen, fear of causing harm, and fear of mistakes, which are indicative of OCD.";
  } else if (
    answers.fear_of_being_stolen &&
    answers.fear_of_causing_harm == "severe"
  ) {
    disease.status = "OCD";
    disease.desc =
      "you have a high chance of having Obsessive-Compulsive Disorder (OCD). Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the severe symptoms of fear of being stolen, and fear of causing harm, which may be indicative of OCD.";
  } else if (
    answers.fear_of_being_stolen &&
    answers.fear_of_mistakes == "severe"
  ) {
    disease.status = "OCD";
    disease.desc =
      "you have a high chance of having Obsessive-Compulsive Disorder (OCD). Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the severe symptoms of fear of being stolen and fear of mistakes, which may be indicative of OCD.";
  } else if (
    answers.fear_of_causing_harm == "severe" &&
    answers.fear_of_mistakes == "severe"
  ) {
    disease.status = "OCD";
    disease.desc =
      "you have a high chance of having Obsessive-Compulsive Disorder (OCD). Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the severe symptoms of fear of causing harm and fear of mistakes, which may be indicative of OCD.";
  }

  //half OCD
  else if (
    answers.fear_of_being_stolen &&
    answers.fear_of_causing_harm == "moderate" &&
    answers.fear_of_mistakes == "moderate"
  ) {
    disease.status = "half_OCD";
    disease.desc =
      "Based on your answers, you have a high chance of having Obsessive-Compulsive Disorder (OCD). Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the moderate symptoms of fear of being stolen, fear of causing harm, and fear of mistakes, which are indicative of OCD.";
  } else if (
    answers.fear_of_being_stolen &&
    answers.fear_of_causing_harm == "moderate"
  ) {
    disease.status = "half_OCD";
    disease.desc =
      "you have a high chance of having Obsessive-Compulsive Disorder (OCD). Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the moderate symptoms of fear of being stolen, and fear of causing harm, which may be indicative of OCD.";
  } else if (
    answers.fear_of_being_stolen &&
    answers.fear_of_mistakes == "moderate"
  ) {
    disease.status = "half_OCD";
    disease.desc =
      "You may have Obsessive-Compulsive Disorder (OCD). Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the moderate symptoms of fear of being stolen and fear of mistakes, which may be indicative of OCD.";
  } else if (
    answers.fear_of_causing_harm == "moderate" &&
    answers.fear_of_mistakes == "moderate"
  ) {
    disease.status = "half_OCD";
    disease.desc =
      "You may have Obsessive-Compulsive Disorder (OCD). Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the moderate symptoms of fear of causing harm and fear of mistakes, which may be indicative of OCD.";
  }

  //no OCD
  else if (
    answers.fear_of_being_stolen &&
    answers.fear_of_causing_harm == "mild" &&
    answers.fear_of_mistakes == "mild"
  ) {
    disease.status = "no_OCD";
    disease.desc = "You may not have Obsessive-Compulsive Disorder (OCD).";
    disease.rule =
      "This rule is fired because you are experiencing the mild symptoms of fear of being stolen, fear of causing harm, and fear of mistakes, which are indicative of OCD.";
  } else if (
    answers.fear_of_being_stolen &&
    answers.fear_of_causing_harm == "mild"
  ) {
    disease.status = "no_OCD";
    disease.desc = "You may not have Obsessive-Compulsive Disorder (OCD).";
    disease.rule =
      "This rule is fired because you are experiencing the mild symptoms of fear of being stolen, and fear of causing harm, which may be indicative of OCD.";
  } else if (
    answers.fear_of_being_stolen &&
    answers.fear_of_mistakes == "mild"
  ) {
    disease.status = "no_OCD";
    disease.desc = "You may not have Obsessive-Compulsive Disorder (OCD).";
    disease.rule =
      "This rule is fired because you are experiencing the mild symptoms of fear of being stolen and fear of mistakes, which may be indicative of OCD.";
  } else if (
    answers.fear_of_causing_harm == "mild" &&
    answers.fear_of_mistakes == "mild"
  ) {
    disease.status = "no_OCD";
    disease.desc = "You may not have Obsessive-Compulsive Disorder (OCD).";
    disease.rule =
      "This rule is fired because you are experiencing the mild symptoms of fear of causing harm and fear of mistakes, which may be indicative of OCD.";
  }

  //not met condition
  else {
    disease.status = "no_OCD";
    disease.desc = "You may not have Obsessive-Compulsive Disorder (OCD).";
    disease.rule =
      "This rule is fired because none of the specific conditions for OCD are met, suggesting a lower likelihood of OCD.";
  }

  return disease;
}

export default checkObsessive;
