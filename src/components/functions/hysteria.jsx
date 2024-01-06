function checkHysteria(answers) {
  var disease = {
    status: "",
    desc: "",
    rule: "",
  };

  //confirmed hysteria
  if (
    answers.total_separation_from_reality == "severe" &&
    answers.temporary_loss_of_memory == "severe" &&
    answers.absence_from_consciousness == "severe"
  ) {
    disease.status = "Hysteria";
    disease.desc =
      "Based on your answers, You have a high chance of having Hysteria. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the severe symptoms of total separation from reality, temporary loss of memory, and absence from consciousness, which are indicative of Hysteria.";
  } else if (
    answers.total_separation_from_reality == "severe" &&
    answers.temporary_loss_of_memory == "severe"
  ) {
    disease.status = "half_Hysteria";
    disease.desc =
      "You have a high chance of having Hysteria. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the severe symptoms of total separation from reality and temporary loss of memory, which may be indicative of Hysteria.";
  } else if (
    answers.temporary_loss_of_memory == "severe" &&
    answers.absence_from_consciousness == "severe"
  ) {
    disease.status = "half_Hysteria";
    disease.desc =
      "You have a high chance of having Hysteria. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the severe symptoms of  temporary loss of memory and absence from consciousness, which may be indicative of Hysteria.";
  } else if (
    answers.total_separation_from_reality == "severe" &&
    answers.absence_from_consciousness == "severe"
  ) {
    disease.status = "half_Hysteria";
    disease.desc =
      "You have a high chance of having Hysteria. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the severe symptoms of total separation from reality and absence from consciousness, which may be indicative of Hysteria.";
  } 
  
  //high_chance_hysteria
  else if (
    answers.total_separation_from_reality == "moderate" &&
    answers.temporary_loss_of_memory == "moderate" &&
    answers.absence_from_consciousness == "moderate"
  ) {
    disease.status = "half_Hysteria";
    disease.desc =
      "You may have Hysteria. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the moderate symptoms of total separation from reality, temporary loss of memory, and absence from consciousness, which may be indicative of Hysteria.";
  } else if (
    answers.total_separation_from_reality == "moderate" &&
    answers.temporary_loss_of_memory == "moderate"
  ) {
    disease.status = "half_Hysteria";
    disease.desc =
      "You may have Hysteria. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the moderate symptoms of total separation from reality, and temporary loss of memory, which may be indicative of Hysteria.";
  } else if (
    answers.temporary_loss_of_memory == "moderate" &&
    answers.absence_from_consciousness == "moderate"
  ) {
    disease.status = "half_Hysteria";
    disease.desc =
      "You may have Hysteria. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the moderate symptoms of temporary loss of memory,and absence from consciousness, which may be indicative of Hysteria.";
  } else if (
    answers.total_separation_from_reality == "moderate" &&
    answers.absence_from_consciousness == "moderate"
  ) {
    disease.status = "half_Hysteria";
    disease.desc =
      "You may have Hysteria. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the moderate symptoms of total separation from reality,and absence from consciousness, which may be indicative of Hysteria.";
  } 
  
  
  //no hysteria
  else if (
    answers.total_separation_from_reality == "mild" &&
    answers.temporary_loss_of_memory == "mild" &&
    answers.absence_from_consciousness == "mild"
  ) {
    disease.status = "no_Hysteria";
    disease.desc = "You may not have Hysteria.";
    disease.rule =
      "This rule is fired because you are only experiencing the mild symptoms of total separation from reality, temporary loss of memory, and absence from consciousness, suggesting a lower likelihood of Hysteria.";
  } else if (
    answers.total_separation_from_reality == "mild" &&
    answers.temporary_loss_of_memory == "mild" 
  ) {
    disease.status = "no_Hysteria";
    disease.desc = "You may not have Hysteria.";
    disease.rule =
      "This rule is fired because you are only experiencing the mild symptoms of total separation from reality, and temporary loss of memory, suggesting a lower likelihood of Hysteria.";
  }else if (
    answers.total_separation_from_reality == "mild" &&
    answers.absence_from_consciousness == "mild" 
  ) {
    disease.status = "no_Hysteria";
    disease.desc = "You may not have Hysteria.";
    disease.rule =
      "This rule is fired because you are only experiencing the mild symptoms of total separation from reality, and absence from consciousness, suggesting a lower likelihood of Hysteria.";
  }else if (
    answers.absence_from_consciousness == "mild" &&
    answers.temporary_loss_of_memory == "mild" 
  ) {
    disease.status = "no_Hysteria";
    disease.desc = "You may not have Hysteria.";
    disease.rule =
      "This rule is fired because you are only experiencing the mild symptoms of absence from consciousness, and temporary loss of memory, suggesting a lower likelihood of Hysteria.";
  }
  
  else {
    disease.status = "no_Hysteria";
    disease.desc = "You may not have Hysteria.";
    disease.rule =
      "This rule is fired because none of the specific conditions for Hysteria are met, suggesting a lower likelihood of Hysteria.";
  }

  return disease;
}

export default checkHysteria;
