import { useState } from "react";
import Container from "../../components/container/Container";

export default function Service() {
  const questions = [
    {
      id: "q1",
      text: "1. Are you feeling upset?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "q2",
      text: "2. Are you fear persistant?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "q3",
      text: "3. Are you always expect something to happen?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "q4",
      text: "4. Do you have muscle spasms?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "q5",
      text: "5. Do you sometimes have increase in adrenaline secretion?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "q6",
      text: "6. Do you afraid of the unknown?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "q7",
      text: "7. Do you have hypertension?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "q8",
      text: "8. Do you have fear of accumulation of dirt?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "q9",
      text: "9. Do you often shut the doors continuosly?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "q10",
      text: "10. Do you frequent in making decisions?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "q11",
      text: "11. Do you often quiestioning and inspire ideas?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "q12",
      text: "12. Do you bathing more than ten times?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "q13",
      text: "13. Do you often repeat washing hands?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "q14",
      text: "14. Do you always absence on your consciousness?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "q15",
      text: "15. Do you have temporary loss of memory?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "q16",
      text: "16. Do you have any misaslignment of limbs?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "q17",
      text: "17. Do you have any feeling of hatred?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "q18",
      text: "18. Do you have proper food balance?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "q19",
      text: "19. Do you often losing hope?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "q20",
      text: "20. Do you have inactivity of the body?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "q21",
      text: "21. Do you have any life pressures?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    // Add more questions as needed
  ];

  const [selectedOptions, setSelectedOptions] = useState(() => {
    const initialState = {};
    questions.forEach((question) => {
      initialState[question.id] = question.options[0].value;
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
        <h1 className="mb-4 text-3xl font-bold text-gray-800">
          Choose the Answer
        </h1>
        {questions.map((question) => (
          <div key={question.id} className="mb-6">
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
        ))}
      </Container>
    </>
  );
}
