import { useState } from "react";
import Container from "../../components/container/Container";
import { useNavigate } from "react-router-dom";
import { Card } from "flowbite-react";

export default function QuestionForm() {
  const navigate = useNavigate();

  const questions = [
    {
      id: "feeling_fatigue",
      text: "1. Feeling fatigue ?",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
    {
      id: "muscle_tension",
      text: "2. Feeling muscle tension ?",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
    {
      id: "hyperhidrosis",
      text: "3. Hyperhidrosis (excessive sweating) ?",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
    {
      id: "confusion",
      text: "4. Feeling confusion ?",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
    {
      id: "insomnia",
      text: "5. Insomnia and difficulty sleeping ?",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
    {
      id: "abdominal_pain",
      text: "6. Feeling abdominal pain ?",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
    {
      id: "nervousness",
      text: "7. Feeling Nervousness or stress ?",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
    {
      id: "fear_of_being_stolen",
      text: "8. Fear of being stolen pr polluted",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
    {
      id: "fear_of_causing_harm",
      text: "9. Fear of causing harm to others ?",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
    {
      id: "fear_of_mistakes",
      text: "10. Fear of causing mistakes ?",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
    {
      id: "excessive_need_for_organization",
      text: "11. Any excessive need for organization, integration and accuracy ?",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
    {
      id: "showers_more_than_once",
      text: "12. Do showers more than once ?",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
    {
      id: "hand_washing_frequentlly",
      text: "13. Hand washing frequentlly ?",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
    {
      id: "eating_certain_fixed_of_food",
      text: "14. Eating a certain fixed of food ?",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
    {
      id: "total_separation_from_reality",
      text: "15. Have total separtaion from reality ?",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
    {
      id: "temporary_loss_of_memory",
      text: "16. Have temporary loss of memory ?",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
    {
      id: "absence_from_consciousness",
      text: "17. Absence from conciousness ?",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
    {
      id: "feeling_of_hatred",
      text: "18. Have feeling of hatred toward a certain person ?",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
    {
      id: "sleep_and_food_disruption",
      text: "19. Have sleep and food disruption ?",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
    {
      id: "inactivity_in_the_movement_of_the_body",
      text: "20. Inactivity in the movement of the body ?",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
    {
      id: "fear_and_inner_horror",
      text: "21. have any fear and inner horror ?",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
    {
      id: "frustation_and_loss_hope",
      text: "22. Have constant sense of frustation and loss of hope ?",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
    {
      id: "lose_enjoyment_life",
      text: "23. Feel loss of enjoyment of life and lack of decision-making ?",
      options: [
        { value: true, label: "True" },
        { value: false, label: "False" },
      ],
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState(() => {
    const initialState = {};
    questions.forEach((question) => {
      initialState[question.id] = false;
    });
    return initialState;
  });

  const handleOptionChange = (questionId, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [questionId]: value,
    }));
  };

  console.log(selectedOptions);

  return (
    <>
      <Container>
        <div className=" py-10 mx-8 lg:mx-52">
          <h1 className="mb-4 text-3xl font-bold text-gray-800">
            Choose the Answer
          </h1>
          {questions.map((question) => (
            <Card key={question.id} className="my-10">
              <div className="mb-6">
                <p className="mb-4 text-lg font-medium text-gray-800">
                  {question.text}
                </p>
                <div className="flex flex-col">
                  {question.options.map((option) => (
                    <label
                      key={option.value}
                      className="inline-flex items-center mb-2"
                    >
                      <input
                        type="radio"
                        className="form-radio h-5 w-5 text-blue-600"
                        value={option.value}
                        checked={selectedOptions[question.id] === option.value}
                        onChange={() =>
                          handleOptionChange(question.id, option.value)
                        }
                      />
                      <span className="ml-2">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </Card>
          ))}
          <div className="flex items-center justify-center">
            <div className="m-3">
              <button
                className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center lg:px-36"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/result", {
                    state: { selectedOptions },
                  });
                }}
              >
                <span className="mr-2">Submit Form</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentcolor"
                    d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
