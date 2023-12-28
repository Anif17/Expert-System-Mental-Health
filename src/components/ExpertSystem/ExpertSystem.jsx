/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Container from "../../components/container/Container";
import { useLocation } from "react-router-dom";
import checkAnxiety from "../../components/functions/sychological_anxiety";
import checkObsessive from "../../components/functions/obsessive_compulsive";
import checkHysteria from "../../components/functions/hysteria";
import checkDepression from "../../components/functions/depression";
import { Card } from "flowbite-react";
import { FaCircleInfo } from "react-icons/fa6";
import { Tabs } from "flowbite-react";
import { AiOutlineFileDone } from "react-icons/ai";

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

  const [anxiety, setAnxiety] = useState({
    status: "",
    desc: "",
    rule: "",
  });
  const [obsessive, setObsessive] = useState({
    status: "",
    desc: "",
    rule: "",
  });
  const [hysteria, setHysteria] = useState({
    status: "",
    desc: "",
    rule: "",
  });
  const [depression, setDepression] = useState({
    status: "",
    desc: "",
    rule: "",
  });

  useEffect(() => {
    if (location.state) {
      setAnswer(location.state.selectedOptions);
      setAnxiety(checkAnxiety(answers));
      setObsessive(checkObsessive(answers));
      setHysteria(checkHysteria(answers));
      setDepression(checkDepression(answers));
    }
  }, [answers]);

  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  console.log(anxiety.status);

  return (
    <>
      <Container>
        <Tabs aria-label="Default tabs" style="default" className="px-10">
          <Tabs.Item active title="Result" icon={AiOutlineFileDone}>
            {isVisible && (
              <div
                id="success-message"
                className="flex items-center p-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800"
                role="alert"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div className="ms-3 text-sm font-medium">
                  Result Successfully Displayed!
                </div>
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                >
                  <span className="sr-only">Dismiss</span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
            )}

            <div className="bg-gray-100 py-10">
              <Card className="sm:mx-20 mx-10">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Anxiety Assessment Results
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                  Based on your responses, here is an overview of the anxiety
                  assessment results.
                </p>
                <p className="text-gray-700 dark:text-gray-400 text-center font-bold">
                  {anxiety.desc}
                </p>
                <span
                  className={
                    (() => {
                      switch (anxiety.status) {
                        case "no_Confirm_anxiety":
                          return "bg-green-100 text-green-800";
                        case "half_anxiety":
                          return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
                        case "Confirm_anxiety":
                          return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
                        default:
                          return anxiety.status;
                      }
                    })() +
                    " text-lg font-medium me-2 px-2.5 rounded text-center py-2 my-4"
                  }
                >
                  {(() => {
                    switch (anxiety.status) {
                      case "no_Confirm_anxiety":
                        return "No Anxiety";
                      case "half_anxiety":
                        return "High chance of anxiety";
                      case "Confirm_anxiety":
                        return "Confirmed anxiety";
                      default:
                        return anxiety.status;
                    }
                  })()}
                </span>
              </Card>

              <Card className="sm:mx-20 mx-10 my-10">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Obsessive Compulsive Disorder (OCD) Assessment Results
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                  Based on your responses, here is an overview of the OCD
                  assessment results.
                </p>
                <p className="text-gray-700 dark:text-gray-400 text-center font-bold">
                  {obsessive.desc}
                </p>
                <span
                  className={
                    (() => {
                      switch (obsessive.status) {
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
                    switch (obsessive.status) {
                      case "no_OCD":
                        return "No OCD";
                      case "half_OCD":
                        return "High chance of OCD";
                      case "OCD":
                        return "Confirmed OCD";
                      default:
                        return obsessive.status;
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
                <p className="text-gray-700 dark:text-gray-400 text-center font-bold">
                  {hysteria.desc}
                </p>
                <span
                  className={
                    (() => {
                      switch (hysteria.status) {
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
                    switch (hysteria.status) {
                      case "no_Hysteria":
                        return "No Hysteria";
                      case "half_Hysteria":
                        return "High chance of Hysteria";
                      case "Hysteria":
                        return "Confirmed Hysteria";
                      default:
                        return hysteria.status;
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
                <p className="text-gray-700 dark:text-gray-400 text-center font-bold">
                  {depression.desc}
                </p>
                <span
                  className={
                    (() => {
                      switch (depression.status) {
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
                    switch (depression.status) {
                      case "no_depression":
                        return "No Depression";
                      case "half_depression":
                        return "High chance of Depression";
                      case "depression":
                        return "Confirmed Depression";
                      default:
                        return depression.status;
                    }
                  })()}
                </span>
              </Card>
            </div>
          </Tabs.Item>
          <Tabs.Item title="More" icon={FaCircleInfo}>
            <div className="bg-gray-100 py-10">
              <Card className="sm:mx-20 mx-10">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Anxiety Assessment Results
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                  Based on your responses, here is an overview of the anxiety
                  assessment results.
                </p>
                <p className="text-gray-700 dark:text-gray-400 text-center font-bold">
                  {anxiety.desc}
                </p>
                <span
                  className={
                    (() => {
                      switch (anxiety.status) {
                        case "no_Confirm_anxiety":
                          return "bg-green-100 text-green-800";
                        case "half_anxiety":
                          return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
                        case "Confirm_anxiety":
                          return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
                        default:
                          return anxiety.status;
                      }
                    })() +
                    " text-lg font-medium me-2 px-2.5 rounded text-center py-2"
                  }
                >
                  {(() => {
                    switch (anxiety.status) {
                      case "no_Confirm_anxiety":
                        return "No Anxiety";
                      case "half_anxiety":
                        return "High chance of anxiety";
                      case "Confirm_anxiety":
                        return "Confirmed anxiety";
                      default:
                        return anxiety.status;
                    }
                  })()}
                </span>
                <p className="text-center font-bold underline">
                  {anxiety.rule}
                </p>
              </Card>

              <Card className="sm:mx-20 mx-10 my-10">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Obsessive Compulsive Disorder (OCD) Assessment Results
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                  Based on your responses, here is an overview of the OCD
                  assessment results.
                </p>
                <p className="text-gray-700 dark:text-gray-400 text-center font-bold">
                  {obsessive.desc}
                </p>
                <span
                  className={
                    (() => {
                      switch (obsessive.status) {
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
                    " text-lg font-medium me-2 px-2.5 rounded text-center py-2"
                  }
                >
                  {(() => {
                    switch (obsessive.status) {
                      case "no_OCD":
                        return "No OCD";
                      case "half_OCD":
                        return "High chance of OCD";
                      case "OCD":
                        return "Confirmed OCD";
                      default:
                        return obsessive.status;
                    }
                  })()}
                </span>
                <p className="text-center font-bold underline">
                  {obsessive.rule}
                </p>
              </Card>

              <Card className="sm:mx-20 mx-10 my-10">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Hysteria Assessment Results
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                  Based on your responses, here is an overview of the hysteria
                  assessment results.
                </p>
                <p className="text-gray-700 dark:text-gray-400 text-center font-bold">
                  {hysteria.desc}
                </p>
                <span
                  className={
                    (() => {
                      switch (hysteria.status) {
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
                    " text-lg font-medium me-2 px-2.5 rounded text-center py-2"
                  }
                >
                  {(() => {
                    switch (hysteria.status) {
                      case "no_Hysteria":
                        return "No Hysteria";
                      case "half_Hysteria":
                        return "High chance of Hysteria";
                      case "Hysteria":
                        return "Confirmed Hysteria";
                      default:
                        return hysteria.status;
                    }
                  })()}
                </span>
                <p className="text-center font-bold underline">
                  {hysteria.rule}
                </p>
              </Card>

              <Card className="sm:mx-20 mx-10 my-10">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Depression Assessment Results
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                  Based on your responses, here is an overview of the depression
                  assessment results.
                </p>
                <p className="text-gray-700 dark:text-gray-400 text-center font-bold">
                  {depression.desc}
                </p>
                <span
                  className={
                    (() => {
                      switch (depression.status) {
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
                    " text-lg font-medium me-2 px-2.5 rounded text-center py-2 "
                  }
                >
                  {(() => {
                    switch (depression.status) {
                      case "no_depression":
                        return "No Depression";
                      case "half_depression":
                        return "High chance of Depression";
                      case "depression":
                        return "Confirmed Depression";
                      default:
                        return depression.status;
                    }
                  })()}
                </span>
                <p className="text-center font-bold underline">
                  {depression.rule}
                </p>
              </Card>
            </div>
          </Tabs.Item>
        </Tabs>
      </Container>
    </>
  );
};

export default ExpertSystem;
