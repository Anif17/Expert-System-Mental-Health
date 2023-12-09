import { useState } from "react";
import Container from "../../components/container/Container";

export default function Service() {
  const questions = [
    {
      id: "q1",
      text: "Which color do you prefer?",
      options: [
        { value: "red", label: "Red" },
        { value: "blue", label: "Blue" },
      ],
    },
    {
      id: "q2",
      text: "What is your favorite animal?",
      options: [
        { value: "dog", label: "Dog" },
        { value: "cat", label: "Cat" },
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
