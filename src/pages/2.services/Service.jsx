import { useState } from "react";
import Container from "../../components/container/Container";
import { useNavigate } from "react-router-dom";

export default function Service() {
  const navigate = useNavigate();

  const questions = [
    {
      id: "bmi",
      text: "1. Please insert your BMI?",
      options: [
        { value: "18-22.9", label: "18-22.9" },
        { value: "23-24.9", label: "23-24.9" },
        { value: "25-29.9", label: "25-29.9" },
        { value: "30-34.9", label: "30-34.9" },
        { value: "40 and above", label: "40 and above" },
      ],
    },
    {
      id: "exerciseType",
      text: "2. What kind of way do you walk everyday?",
      options: [
        { value: "WALK_SLOW", label: "Walk Slowly" },
        { value: "WALK_QUICK", label: "Walk Quickly" },
        { value: "RUN_SLOWLY", label: "Run Slowly" },
        { value: "RUN_QUICKLY", label: "Run Quickly" },
      ],
    },
    {
      id: "mealType",
      text: "3. What did you always have breakfast or lunch or dinner?",
      options: [
        { value: "BREAKFAST", label: "Breakfast" },
        { value: "LUNCH", label: "Lunch" },
        { value: "DINNER", label: "Dinner" },
      ],
    },
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
        <div
          style={{
            backgroundImage: "linear-gradient(lightblue,lightgreen)",
            color: "darkred",
          }}
        >
          <div className="lg:mx-28 py-10 mx-8">
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

            <div className="flex items-center justify-center">
              <div className="m-3">
                <button
                  className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                  onClick={() => {
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

              <div className="m-3">
                <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-yellow-500 hover:border-yellow-600 hover:bg-yellow-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                  <span className="mr-2">Clear All</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentcolor"
                      d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
