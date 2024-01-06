import { useState } from "react";
import Container from "../../components/container/Container";
import { useNavigate } from "react-router-dom";
import { Card } from "flowbite-react";
import { Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function QuestionForm() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState();

  const questions = [
    // {
    //   id: "feeling_fatigue",
    //   text: "1. Do you feel any fatigue ?",
    //   options: [
    //     { value: "severe", label: "Overwhelming and persistent tiredness" },
    //     {
    //       value: "moderate",
    //       label: "Feeling noticeably tired or drained of energy",
    //     },
    //     { value: "mild", label: "Feeling slightly tired or weary" },
    //   ],
    // },
    // {
    //   id: "muscle_tension",
    //   text: "2. How is your experience with muscle tension ?",
    //   options: [
    //     {
    //       value: "severe",
    //       label: "Intense tightness, pain, or discomfort in muscles",
    //     },
    //     {
    //       value: "moderate",
    //       label: "Noticeable tightness or discomfort in muscles",
    //     },
    //     {
    //       value: "mild",
    //       label:
    //         "Sensation of tightness or slight discomfort in specific muscles",
    //     },
    //   ],
    // },
    // {
    //   id: "hyperhidrosis",
    //   text: "3. What is sweating condition ?",
    //   options: [
    //     {
    //       value: "severe",
    //       label: "Sweating excessively and it interfere my quality of life",
    //     },
    //     {
    //       value: "moderate",
    //       label: "Sweating is noticeable and have an impact on daily life",
    //     },
    //     {
    //       value: "mild",
    //       label: "Sweating is notieable but does not impact on daily life",
    //     },
    //   ],
    // },
    {
      id: "confusion",
      text: "1. Do you feel confused ?",
      options: [
        {
          value: "severe",
          label:
            "Significant cognitive impairment with ongoing difficulty processing information",
        },
        {
          value: "moderate",
          label: "Noticeable difficulty concentrating or maintaining focus",
        },
        {
          value: "mild",
          label:
            "Occasional lapses in concentration or brief moments of disorientation",
        },
      ],
    },
    {
      id: "insomnia",
      text: "2. Do you have any difficulty in sleeping ?",
      options: [
        {
          value: "severe",
          label:
            "Severe difficulty falling asleep or staying asleep, often occurring nightly.",
        },
        {
          value: "moderate",
          label:
            "Regular difficulty falling asleep or staying asleep, occurring several times a week",
        },
        {
          value: "mild",
          label: "Occasional difficulty falling asleep or staying asleep",
        },
      ],
    },
    // {
    //   id: "abdominal_pain",
    //   text: "6. How do you feel when having abdominal pain ?",
    //   options: [
    //     { value: "severe", label: "Intense, sharp, or cramping pain" },
    //     {
    //       value: "moderate",
    //       label:
    //         "Noticeable discomfort or pain that may affect daily activities",
    //     },
    //     {
    //       value: "mild",
    //       label: "Minor discomfort or twinges in the abdominal area",
    //     },
    //   ],
    // },
    {
      id: "nervousness",
      text: "3. Feeling Nervousness  ?",
      options: [
        {
          value: "severe",
          label: "Intense feelings of anxiety, apprehension, or nervousness",
        },
        {
          value: "moderate",
          label: "Noticeable feelings of anxiety or nervousness",
        },
        { value: "mild", label: "A slight sense of unease or anticipation" },
      ],
    },
    {
      id: "fear_of_being_stolen",
      text: "4. Do you feel like you are going to be abducted ?",
      options: [
        { value: true, label: "Yes" },
        { value: false, label: "No" },
      ],
    },
    {
      id: "fear_of_causing_harm",
      text: "5. Do you fear that you will cause harm to others ?",
      options: [
        {
          value: "severe",
          label: "Intense and persistent fear of causing harm to others",
        },
        {
          value: "moderate",
          label: "Increased frequency of thoughts about causing harm",
        },
        {
          value: "mild",
          label: "Occasional, fleeting thoughts of causing harm to others",
        },
      ],
    },
    {
      id: "fear_of_mistakes",
      text: "6. What is your thought on making mistakes ?",
      options: [
        {
          value: "severe",
          label: "Intense and persistent fear of making mistakes",
        },
        {
          value: "moderate",
          label:
            "Increased frequency of worry or fear regarding making mistakes",
        },
        {
          value: "mild",
          label: "Occasional worries or concerns about making mistakes",
        },
      ],
    },
    // {
    //   id: "excessive_need_for_organization",
    //   text: "11. How do you feel when seeing cluters ?",
    //   options: [
    //     { value: "severe", label: "Intense feeling of the need to organize" },
    //     {
    //       value: "moderate",
    //       label: "Moderate feeling of the need to organize",
    //     },
    //     {
    //       value: "mild",
    //       label:
    //         "Occasional feeling of the need to organize, but not overwhelming",
    //     },
    //   ],
    // },
    // {
    //   id: "showers_more_than_once",
    //   text: "12. How many time do you showers a day ?",
    //   options: [
    //     { value: "severe", label: "More" },
    //     { value: "moderate", label: "4 - 5" },
    //     { value: "mild", label: "1 - 3" },
    //   ],
    // },
    // {
    //   id: "hand_washing_frequentlly",
    //   text: "13. Hand washing frequentlly ?",
    //   options: [
    //     { value: "severe", label: "More than normal" },
    //     {
    //       value: "moderate",
    //       label: "I wash hand normally (before/after eating, using toilet...",
    //     },
    //   ],
    // },
    // {
    //   id: "eating_certain_fixed_of_food",
    //   text: "14. Eating a certain fixed of food ?",
    //   options: [
    //     {
    //       value: "severe",
    //       label:
    //         "Significant cognitive impairment with ongoing difficulty processing information",
    //     },
    //     {
    //       value: "moderate",
    //       label: "Noticeable difficulty concentrating or maintaining focus",
    //     },
    //     {
    //       value: "mild",
    //       label:
    //         "Occasional lapses in concentration or brief moments of disorientation",
    //     },
    //   ],
    // },
    {
      id: "total_separation_from_reality",
      text: "7. Have total separtaion from reality ?",
      options: [
        { value: "severe", label: "It has been a normal occurance" },
        { value: "moderate", label: "It happen sometime" },
        { value: "mild", label: "It happen rarely" },
      ],
    },
    {
      id: "temporary_loss_of_memory",
      text: "8. Have temporary loss of memory ?",
      options: [
        { value: "severe", label: "It has been a normal occurance" },
        { value: "moderate", label: "It happen sometime" },
        { value: "mild", label: "It happen rarely" },
      ],
    },
    {
      id: "absence_from_consciousness",
      text: "9. Absence from conciousness ?",
      options: [
        { value: "severe", label: "It has been a normal occurance" },
        { value: "moderate", label: "It happen sometime" },
        { value: "mild", label: "It happen rarely" },
      ],
    },
    // {
    //   id: "feeling_of_hatred",
    //   text: "18. Have feeling of hatred toward a certain person ?",
    //   options: [
    //     {
    //       value: "psycosocial_dynamics",
    //       label: "Psycosocial Dynamics and Interpersoanl Relationships",
    //     },
    //     {
    //       value: "unresolved_conflict",
    //       label: "Unresolved Conflict and Comminication Breakdown",
    //     },
    //     {
    //       value: "emotional",
    //       label: "Emotional well-being and Self-Reflection",
    //     },
    //     {
    //       value: "safety_concerns",
    //       label: "Safety Concerns and Legal Implications",
    //     },
    //   ],
    // },
    // {
    //   id: "sleep_and_food_disruption",
    //   text: "19. Do you have sleep and food disruption ?",
    //   options: [
    //     { value: true, label: "Yes" },
    //     { value: false, label: "No" },
    //   ],
    // },
    // {
    //   id: "inactivity_in_the_movement_of_the_body",
    //   text: "20. Do you some problem with moving some body parts ?",
    //   options: [
    //     { value: true, label: "Yes" },
    //     { value: false, label: "No" },
    //   ],
    // },
    {
      id: "fear_and_inner_horror",
      text: "10. Do you have any fear and inner horror ?",
      options: [
        { value: true, label: "Yes" },
        { value: false, label: "No" },
      ],
    },
    {
      id: "frustation_and_loss_hope",
      text: "11. What do you think of your current self ?",
      options: [
        { value: "severe", label: "Frustrated, despair and hopeless" },
        { value: "moderate", label: "I frequently feel despair" },
        { value: "mild", label: "Sometime I feel discouraged" },
      ],
    },
    {
      id: "lose_enjoyment_life",
      text: "12. Did you not enjoy your life ?",
      options: [
        { value: "severe", label: "Yes, there is no enjoyment in life" },
        {
          value: "moderate",
          label: "I find it very difficult to find enjoyment in any activity",
        },
        { value: "mild", label: "It is hard to enjoy life occasionally" },
      ],
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState(() => {
    const initialState = {};
    questions.forEach((question) => {
      initialState[question.id] = null;
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
                  // Check if any question is unanswered
                  const unansweredQuestions = Object.keys(
                    selectedOptions
                  ).filter(
                    (questionId) => selectedOptions[questionId] === null
                  );

                  if (unansweredQuestions.length > 0) {
                    setOpenModal(true);
                    setData(unansweredQuestions);
                  } else {
                    window.scrollTo(0, 0);
                    navigate("/result", {
                      state: { selectedOptions },
                    });
                  }
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
        ``
        <Modal
          show={openModal}
          size="md"
          onClose={() => setOpenModal(false)}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                {data?.length ?? 0} question(s) are unanswered. Please answer
                all questions before submitting the form.
              </h3>
              {/* <div className="flex justify-center gap-4">
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  No, cancel
                </Button>
              </div> */}
            </div>
          </Modal.Body>
        </Modal>
        ;
      </Container>
    </>
  );
}
