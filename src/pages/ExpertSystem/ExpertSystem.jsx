import { useState, useEffect } from "react";
import Container from "../../components/container/Container";
import { useLocation } from "react-router-dom";
import checkAnxiety from "../../components/functions/sychological_anxiety";
import checkObsessive from "../../components/functions/obsessive_compulsive";
import checkHysteria from "../../components/functions/hysteria";
import checkDepression from "../../components/functions/depression";
import { Card } from "flowbite-react";

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

  const [anxiety, setAnxiety] = useState();
  const [obsessive, setObsessive] = useState();
  const [hysteria, setHysteria] = useState();
  const [depression, setDepression] = useState();

  useEffect(() => {
    if (location.state) {
      setAnswer(location.state.selectedOptions);
      setAnxiety(checkAnxiety(answers));
      setObsessive(checkObsessive(answers));
      setHysteria(checkHysteria(answers));
      setDepression(checkDepression(answers));
    }
  }, [answers]);

  console.log(answers);

  return (
    <>
      <div className="bg-gray-100">
        <Container>
          <Card className="sm:mx-20 mx-10 my-10">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Anxiety Assessment Results
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
              Based on your responses, here is an overview of the anxiety
              assessment results.
            </p>
            <span
              className={
                (() => {
                  switch (anxiety) {
                    case "no_Confirm_anxiety":
                      return "bg-green-100 text-green-800";
                    case "half_anxiety":
                      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
                    case "Confirm_anxiety":
                      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
                    default:
                      return anxiety;
                  }
                })() +
                " text-lg font-medium me-2 px-2.5 rounded text-center py-2 my-4"
              }
            >
              {(() => {
                switch (anxiety) {
                  case "no_Confirm_anxiety":
                    return "No Anxiety";
                  case "half_anxiety":
                    return "High chance of anxiety";
                  case "Confirm_anxiety":
                    return "Confirmed anxiety";
                  default:
                    return anxiety;
                }
              })()}
            </span>
          </Card>

          <Card className="sm:mx-20 mx-10 my-10">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Obsessive Compulsive Disorder (OCD) Assessment Results
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
              Based on your responses, here is an overview of the OCD assessment
              results.
            </p>
            <span
              className={
                (() => {
                  switch (obsessive) {
                    case "no_OCD":
                      return "bg-green-100 text-green-800";
                    case "half_OCD":
                      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
                    case "OCD":
                      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
                    default:
                      return "";
                  }
                })() +
                " text-lg font-medium me-2 px-2.5 rounded text-center py-2 my-4"
              }
            >
              {(() => {
                switch (obsessive) {
                  case "no_OCD":
                    return "No OCD";
                  case "half_OCD":
                    return "High chance of OCD";
                  case "OCD":
                    return "Confirmed OCD";
                  default:
                    return obsessive;
                }
              })()}
            </span>
          </Card>

          <Card className="sm:mx-20 mx-10 my-10">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Hysteria Assessment Results
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
              Based on your responses, here is an overview of the hysteria
              assessment results.
            </p>
            <span
              className={
                (() => {
                  switch (hysteria) {
                    case "no_Hysteria":
                      return "bg-green-100 text-green-800";
                    case "half_Hysteria":
                      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
                    case "Hysteria":
                      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
                    default:
                      return "";
                  }
                })() +
                " text-lg font-medium me-2 px-2.5 rounded text-center py-2 my-4"
              }
            >
              {(() => {
                switch (hysteria) {
                  case "no_Hysteria":
                    return "No Hysteria";
                  case "half_Hysteria":
                    return "High chance of Hysteria";
                  case "Hysteria":
                    return "Confirmed Hysteria";
                  default:
                    return hysteria;
                }
              })()}
            </span>
          </Card>

          <Card className="sm:mx-20 mx-10 my-10">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Depression Assessment Results
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
              Based on your responses, here is an overview of the depression
              assessment results.
            </p>
            <span
              className={
                (() => {
                  switch (depression) {
                    case "no_depression":
                      return "bg-green-100 text-green-800";
                    case "half_depression":
                      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
                    case "depression":
                      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
                    default:
                      return "";
                  }
                })() +
                " text-lg font-medium me-2 px-2.5 rounded text-center py-2 my-4"
              }
            >
              {(() => {
                switch (depression) {
                  case "no_depression":
                    return "No Depression";
                  case "half_depression":
                    return "Half Depression";
                  case "depression":
                    return "Confirmed Depression";
                  default:
                    return depression;
                }
              })()}
            </span>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default ExpertSystem;
