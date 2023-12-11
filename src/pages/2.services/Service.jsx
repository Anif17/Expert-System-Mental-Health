import { useState } from "react";
import Container from "../../components/container/Container";

export default function Service() {
  const questions = [
    {
      id: "q1",
      text: "1. Please insert your BMI?",
      options: [
        { value: "Normal", label: "18-22.9" },
        { value: "Overweight", label: " 23-24.9" },
        { value: "Obese", label: "25-29.9" },
        { value: "Super Obese", label: "30-34.9" },
        { value: "Hyper Obese", label: "40 and above" }
      ],
    },
    {
      id: "q2",
      text: "2. What kind of way do you walk everyday?",
      options: [
        { value: "Walk Slow", label: "Walk Slowly" },
        { value: "Walk Quick", label: "Walk Quickly" },
        { value: "Run Slow", label: "Run Slowly" },
        { value: "Run Quick", label: "Run Quickly" }
      ],
    },
    {
      id: "q3",
      text: "3. Do you always have breakfast?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "q4",
      text: "4. Do you always have lunch?",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: "q5",
      text: "5. Do you always have dinner?",
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
     <div   style={{
      backgroundImage: "linear-gradient(lightblue,lightgreen)",
      color: "darkred",
    }}>
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

      <div class="flex items-center justify-center">
  <div class="m-3">
    <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
      <span class="mr-2">Submit Form</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
      </svg>
    </button>
  </div>
  
  <div class="m-3">
    <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-yellow-500 hover:border-yellow-600 hover:bg-yellow-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
      <span class="mr-2">Clear All</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentcolor" d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path>
      </svg>
    </button>
  </div>
 </div>

      </div>
    </>
  );
}
