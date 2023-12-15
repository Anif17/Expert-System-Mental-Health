/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// components/ExpertSystem/ExpertSystem.js

import { useState, useEffect } from "react";
import Container from "../container/Container";
import { useLocation } from "react-router-dom";
import checkAnxiety from "../functions/sychological_anxiety";
import checkObsessive from "../functions/obsessive_compulsive";

const ExpertSystem = () => {
  const location = useLocation();

  const [answers, setAnswer] = useState({
    feeling_fatigue: false,
    muscle_tension: false,
    hyperhidrosis: false,
    confusion: false,
    insomnia: false,
    abdominal_pain: false,
    nervousness: false,
    fear_of_being_stolen: false,
    fear_of_causing_harm: false,
    fear_of_mistakes: false,
    excessive_need_for_organization: false,
    showers_more_than_once: false,
    hand_washing_frequentlly: false,
    eating_certain_fixed_of_food: false,
    total_separation_from_reality: false,
    temporary_loss_of_memory: false,
    absence_from_consciousness: false,
    feeling_of_hatred: false,
    sleep_and_food_disruption: false,
    inactivity_in_the_movement_of_the_body: false,
    fear_and_inner_horror: false,
    frustation_and_loss_hope: false,
    lose_enjoyment_life: false,
  });

  const [anxiety, setAnxiety] = useState(false);
  const [obsessive, setObsessive] = useState(false);

  useEffect(() => {
    if (location.state) {
      setAnswer(location.state.selectedOptions);
      setAnxiety(checkAnxiety(answers));
      setObsessive(checkObsessive(answers));
    }
  }, [answers]);

  console.log(answers);

  return (
    <>
      <Container>
        <h2>{anxiety}</h2>
        <h2>{obsessive}</h2>
      </Container>
    </>
  );
};

export default ExpertSystem;
