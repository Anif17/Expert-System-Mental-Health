function checkHysteria(answers) {
  var disease = {
    status: "",
    desc: "",
    rule: "",
  };

  if (
    answers.total_separation_from_reality &&
    answers.temporary_loss_of_memory &&
    answers.absence_from_consciousness
  ) {
    disease.status = "Hysteria";
    disease.desc =
      "Based on your answers, you may have Hysteria. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the symptoms of total separation from reality, temporary loss of memory, and absence from consciousness, which are indicative of Hysteria.";
  } else if (
    answers.total_separation_from_reality &&
    answers.temporary_loss_of_memory
  ) {
    disease.status = "half_Hysteria";
    disease.desc =
      "You may have Hysteria. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the symptoms of total separation from reality and temporary loss of memory, which may be indicative of Hysteria.";
  } else if (
    answers.total_separation_from_reality &&
    answers.absence_from_consciousness
  ) {
    disease.status = "half_Hysteria";
    disease.desc =
      "You may have Hysteria. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the symptoms of total separation from reality and absence from consciousness, which may be indicative of Hysteria.";
  } else if (
    answers.temporary_loss_of_memory &&
    answers.absence_from_consciousness
  ) {
    disease.status = "half_Hysteria";
    disease.desc =
      "You may have Hysteria. Please consult a doctor for further diagnosis.";
    disease.rule =
      "This rule is fired because you are experiencing the symptoms of temporary loss of memory and absence from consciousness, which may be indicative of Hysteria.";
  } else if (
    !answers.total_separation_from_reality &&
    !answers.temporary_loss_of_memory &&
    !answers.absence_from_consciousness
  ) {
    disease.status = "no_Hysteria";
    disease.desc = "You may not have Hysteria.";
    disease.rule =
      "This rule is fired because you are not experiencing the symptoms of total separation from reality, temporary loss of memory, or absence from consciousness, suggesting a lower likelihood of Hysteria.";
  } else {
    disease.status = "no_Hysteria";
    disease.desc = "You may not have Hysteria.";
    disease.rule =
      "This rule is fired because none of the specific conditions for Hysteria are met, suggesting a lower likelihood of Hysteria.";
  }

  return disease;
}

export default checkHysteria;
