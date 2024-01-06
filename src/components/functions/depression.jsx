function checkDepression(answers) {
  var disease = {
    status: "",
    desc: "",
    rule: "",
  };

  //confirm depression
  if (
    answers.frustation_and_loss_hope == "severe" &&
    answers.lose_enjoyment_life == "severe" &&
    answers.fear_and_inner_horror
  ) {
    disease.status = "depression";
    disease.desc =
      "Based on your answers, you may have Depression. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the severe symptoms of frustration and lossing hope, lose enjoyment in life, and fear and inner horror, which are indicative of Depression.";
  } else if (
    answers.frustation_and_loss_hope == "severe" &&
    answers.lose_enjoyment_life == "severe"
  ) {
    disease.status = "depression";
    disease.desc =
      "You have a high chance of having Depression. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the severe symptoms of frustration and lossing hope, and lose enjoyment in life, which are indicative of Depression.";
  } else if (
    answers.frustation_and_loss_hope == "severe" &&
    answers.fear_and_inner_horror
  ) {
    disease.status = "depression";
    disease.desc =
      "You have a high chance of having Depression. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the severe symptoms of frustration and lossing hope, and inner horror, which are indicative of Depression.";
  } else if (
    answers.lose_enjoyment_life == "severe" &&
    answers.fear_and_inner_horror
  ) {
    disease.status = "depression";
    disease.desc =
      "You have a high chance of having Depression. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the severe symptoms of lose enjoyment in life and inner horror, which are indicative of Depression.";
  }

  //high_chance_depression
  else if (
    answers.frustation_and_loss_hope == "moderate" &&
    answers.lose_enjoyment_life == "moderate" &&
    answers.fear_and_inner_horror
  ) {
    disease.status = "half_depression";
    disease.desc =
      "You may have Depression. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the moderate symptoms of frustration and lossing hope, lose enjoyment in life, and fear and inner horror, which may be indicative of Depression.";
  } else if (
    answers.lose_enjoyment_life == "moderate" &&
    answers.fear_and_inner_horror
  ) {
    disease.status = "half_depression";
    disease.desc =
      "You may have Depression. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the moderate symptoms of lose enjoyment in life, and fear and inner horror, which may be indicative of Depression.";
  } else if (
    answers.frustation_and_loss_hope == "moderate" &&
    answers.fear_and_inner_horror
  ) {
    disease.status = "half_depression";
    disease.desc =
      "You may have Depression. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the moderate symptoms of frustration and lossing hope, and inner horror, which may be indicative of Depression.";
  } else if (
    answers.frustation_and_loss_hope == "moderate" &&
    answers.lose_enjoyment_life == "moderate"
  ) {
    disease.status = "half_depression";
    disease.desc =
      "You may have Depression. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the moderate symptoms of frustration and lossing hope, and lose enjoyment in life, which may be indicative of Depression.";
  }

  //no depression
  else if (
    answers.frustation_and_loss_hope == "mild" &&
    answers.lose_enjoyment_life == "mild" &&
    answers.fear_and_inner_horror
  ) {
    disease.status = "no_depression";
    disease.desc = "You may not have Depression.";
    disease.rule =
      "This rule is fired because you are only experiencing the mild symptoms of frustration and lossing hope, lose enjoyment in life, and fear and inner horror, suggesting a lower likelihood of Depression.";
  } else if (
    answers.frustation_and_loss_hope == "mild" &&
    answers.lose_enjoyment_life == "mild"
  ) {
    disease.status = "no_depression";
    disease.desc = "You may not have Depression.";
    disease.rule =
      "This rule is fired because you are only experiencing the mild symptoms of frustration and lossing hope, and lose enjoyment in life, which may be indicative of Depression.";
  } else if (
    answers.lose_enjoyment_life == "mild" &&
    answers.fear_and_inner_horror
  ) {
    disease.status = "no_depression";
    disease.desc = "You may not have Depression.";
    disease.rule =
      "This rule is fired because you are only experiencing the mild symptoms of lose enjoyment in life, and fear and inner horror, which may be indicative of Depression.";
  } else if (
    answers.frustation_and_loss_hope == "mild" &&
    answers.fear_and_inner_horror
  ) {
    disease.status = "no_depression";
    disease.desc = "You may not have Depression.";
    disease.rule =
      "This rule is fired because you are only experiencing the mild symptoms of frustration and lossing hope, and fear and inner horror, which may be indicative of Depression.";
  }

  //condition not met
  else {
    disease.status = "no_depression";
    disease.desc = "You may not have Depression.";
    disease.rule =
      "This rule is fired because none of the specific conditions for Depression are met, suggesting a lower likelihood of Depression.";
  }

  return disease;
}

export default checkDepression;
