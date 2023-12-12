/* eslint-disable no-unused-vars */
import { Card } from "flowbite-react";
import Container from "../../components/container/Container";
import {
  bmiCategoryRules,
  exerciseTimeRules,
  recommendedCaloriesRules,
} from "../../data/Knowledgebase";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Result() {
  const location = useLocation();
  console.log(location);

  const [testInput, setTestInput] = useState({
    bmi: "",
    exerciseType: "",
    mealType: "",
  });

  const [bmiCategory, setBmiCategory] = useState("");
  const [exerciseTime, setExerciseTime] = useState("");
  const [recommendedCalories, setRecommendedCalories] = useState("");

  useEffect(() => {
    if (location.state) {
      setTestInput(location.state.selectedOptions);
    }
  }, [location.state]);

  // ----------------- BMI Category -----------------
  const findMatchingRuleBMIType = (input, rules) => {
    return rules.find((rule) => rule.conditions.bmi === input.bmi);
  };

  const testBMI = () => {
    const matchedRule = findMatchingRuleBMIType(testInput, bmiCategoryRules);

    if (matchedRule) {
      console.log(`BMI Category: ${matchedRule.action}`);
      setBmiCategory(matchedRule.action);
    } else {
      console.log("No matching BMI category rule found.");
    }
  };

  // ----------------- BMI Category -----------------

  // ----------------- Exercise Time -----------------
  const findMatchingRuleExerciseTime = (input, rules) => {
    return rules.find(
      (rule) =>
        rule.conditions.bmiCategory === bmiCategory &&
        rule.conditions.exerciseType === testInput.exerciseType
    );
  };

  const testExerciseTime = () => {
    const matchedRule = findMatchingRuleExerciseTime(
      testInput,
      exerciseTimeRules
    );

    if (matchedRule) {
      console.log(`Exercise Time: ${matchedRule.action}`);
      setExerciseTime(matchedRule.action);
    } else {
      console.log("No matching exercise time rule found.");
    }
  };

  // ----------------- Exercise Time -----------------

  // ----------------- Recommended Calories -----------------
  const findMatchingRuleRecommendedCalories = (input, rules) => {
    return rules.find(
      (rule) =>
        rule.conditions.bmiCategory === bmiCategory &&
        rule.conditions.mealType === testInput.mealType
    );
  };

  const testRecommendedCalories = () => {
    const matchedRule = findMatchingRuleRecommendedCalories(
      testInput,
      recommendedCaloriesRules
    );

    if (matchedRule) {
      console.log(`Recommended Calories: ${matchedRule.action}`);
      setRecommendedCalories(matchedRule.action);
    } else {
      console.log("No matching recommended calories rule found.");
    }
  };

  // ----------------- Recommended Calories -----------------

  useEffect(() => {
    testBMI(); // Run testBMI first to get the BMI category
  }, [testInput]);

  useEffect(() => {
    if (bmiCategory !== "") {
      // Only run testExerciseTime if bmiCategory is not empty
      testExerciseTime();
      testRecommendedCalories();
    }
  }, [bmiCategory, testInput]);

  console.log("BMI Category " + bmiCategory);
  console.log("Exercise Time " + exerciseTime);
  console.log("Recommended Calories " + recommendedCalories);

  return (
    <div>
      <Container>
        <div className="bg-gray-100">
          <div className=" py-10 mx-8 lg:mx-52">
            <Card className="px-10">
              <h1 className="mb-4 text-3xl font-bold text-gray-800">RESULT:</h1>
              <p className="mb-4 text-lg font-medium text-gray-800">
                BMI Category: {bmiCategory}
              </p>
              <p className="mb-4 text-lg font-medium text-gray-800">
                Exercise Time: {exerciseTime}
              </p>
              <p className="mb-4 text-lg font-medium text-gray-800">
                Recommended Calories: {recommendedCalories}
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Result;
