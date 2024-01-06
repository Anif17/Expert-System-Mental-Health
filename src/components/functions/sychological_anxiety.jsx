function checkAnxiety(answers) {
  var disease = {
    status: "",
    desc: "",
    rule: "",
  };

  //confirm anxiety
  if (
    answers.confusion == "severe" &&
    answers.insomnia == "severe" &&
    answers.nervousness == "severe"
  ) {
    disease.status = "Confirm_anxiety";
    disease.desc =
      "Based on your answers, you may have anxiety. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the severe symptoms of confusion, insomnia, and nervousness, which are indicative of anxiety.";
  } else if (answers.confusion == "severe" && answers.insomnia == "severe") {
    disease.status = "Confirm_anxiety";
    disease.desc =
      "You have a high chance of having anxiety. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the severe symptoms of confusion, and insomnia, which may be indicative of anxiety.";
  } else if (answers.confusion == "severe" && answers.nervousness == "severe") {
    disease.status = "Confirm_anxiety";
    disease.desc =
      "You have a high chance of having anxiety. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the severe symptoms of confusion, and nervousness, which may be indicative of anxiety.";
  } else if (answers.nervousness == "severe" && answers.insomnia == "severe") {
    disease.status = "Confirm_anxiety";
    disease.desc =
      "You have a high chance of having anxiety. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the severe symptoms of insomnia, and nervousness, which may be indicative of anxiety.";
  } 
  
  //half anxiety
  else if (
    answers.confusion == "moderate" &&
    answers.insomnia == "moderate" &&
    answers.nervousness == "moderate"
  ) {
    disease.status = "half_anxiety";
    disease.desc =
      "Based on your answers, you may have anxiety. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the moderate symptoms of confusion, insomnia, and nervousness, which are indicative of anxiety.";
  }
  else if (answers.confusion == "moderate" && answers.insomnia == "moderate") {
    disease.status = "half_anxiety";
    disease.desc =
      "You may have anxiety. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the moderate symptoms of confusion, and insomnia, which may be indicative of anxiety.";
  } else if (answers.confusion == "moderate" && answers.nervousness == "moderate") {
    disease.status = "half_anxiety";
    disease.desc =
      "You may have anxiety. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the moderate symptoms of confusion, and nervousness, which may be indicative of anxiety.";
  } else if (answers.nervousness == "moderate" && answers.insomnia == "moderate") {
    disease.status = "half_anxiety";
    disease.desc =
      "You may have anxiety. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the moderate symptoms of nervousness, and insomnia, which may be indicative of anxiety.";
  } 
  
  //no anxiety
  else if (
    answers.confusion == "mild" &&
    answers.insomnia == "mild" &&
    answers.nervousness == "mild"
  ) {
    disease.status = "no_Confirm_anxiety";
    disease.desc = "You may not have anxiety.";
    disease.rule =
      "This rule is fired because you are only experiencing the mild symptoms of confusion, insomnia, and nervousness, suggesting a lower likelihood of anxiety.";
  } else if (answers.nervousness == "mild" && answers.insomnia == "mild") {
    disease.status = "no_Confirm_anxiety";
    disease.desc =
      "You may have anxiety. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are only experiencing the mild symptoms of nervousness, and insomnia, suggesting a lower likelihood of anxiety.";
  } else if (answers.nervousness == "mild" && answers.confusion == "mild") {
    disease.status = "no_Confirm_anxiety";
    disease.desc =
      "You may have anxiety. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are only experiencing the mild symptoms of nervousness and confusion, suggesting a lower likelihood of anxiety.";
  } else if (answers.confusion == "mild" && answers.insomnia == "mild") {
    disease.status = "no_Confirm_anxiety";
    disease.desc =
      "You may have anxiety. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are only experiencing the mild symptoms of confusion,and insomnia, suggesting a lower likelihood of anxiety.";
  } 
  
  //not met condition
  else {
    disease.status = "no_Confirm_anxiety";
    disease.desc = "You may not have anxiety.";
    disease.rule =
      "This rule is fired because none of the specific conditions for anxiety are met, suggesting a lower likelihood of anxiety.";
  }

  return disease;
}

export default checkAnxiety;
