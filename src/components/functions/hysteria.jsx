function checkHysteria(answers) {
  var status = "";

  if (
    answers.total_separation_from_reality &&
    answers.temporary_loss_of_memory &&
    answers.absence_from_consciousness
  ) {
    status = "Hysteria";
  } else if (
    answers.total_separation_from_reality &&
    answers.temporary_loss_of_memory
  ) {
    status = "half_Hysteria";
  } else if (
    answers.total_separation_from_reality &&
    answers.absence_from_consciousness
  ) {
    status = "half_Hysteria";
  } else if (
    answers.temporary_loss_of_memory &&
    answers.absence_from_consciousness
  ) {
    status = "half_Hysteria";
  } else if (
    !answers.total_separation_from_reality &&
    !answers.temporary_loss_of_memory &&
    !answers.absence_from_consciousness
  ) {
    status = "no_Hysteria";
  } else {
    status = "no_Hysteria";
  }
  return status;
}

export default checkHysteria;
