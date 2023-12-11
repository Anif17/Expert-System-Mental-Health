// BMI Categories
const bmiCategoryRules = [
  // Rule 1
  {
    conditions: {
      bmi: "18-22.9",
    },
    action: "NORMAL",
  },

  // Rule 2
  {
    conditions: {
      bmi: "23-24.9",
    },
    action: "OVERWEIGHT",
  },

  // Rule 3
  {
    conditions: {
      bmi: "25-29.9",
    },
    action: "OBESE",
  },

  // Rule 4
  {
    conditions: {
      bmi: "30-34.9",
    },
    action: "SUPER_OBESE",
  },

  // Rule 5
  {
    conditions: {
      bmi: "40 and above",
    },
    action: "HYPER_OBESE",
  },
];

// Exercise Time
const exerciseTimeRules = [
  // Rule 6
  {
    conditions: {
      bmiCategory: "NORMAL",
      exerciseType: "WALK_SLOW",
    },
    action: 54,
  },

  // Rule 7
  {
    conditions: {
      bmiCategory: "NORMAL",
      exerciseType: "WALK_QUICK",
    },
    action: 27,
  },

  // Rule 8
  {
    conditions: {
      bmiCategory: "NORMAL",
      exerciseType: "RUN_SLOWLY",
    },
    action: 22,
  },

  // Rule 9
  {
    conditions: {
      bmiCategory: "NORMAL",
      exerciseType: "RUN_QUICKLY",
    },
    action: 17,
  },

  // Rule 10
  {
    conditions: {
      bmiCategory: "OVERWEIGHT",
      exerciseType: "WALK_SLOW",
    },
    action: 60,
  },

  // Rule 11
  {
    conditions: {
      bmiCategory: "OVERWEIGHT",
      exerciseType: "WALK_QUICK",
    },
    action: 30,
  },

  // Rule 12
  {
    conditions: {
      bmiCategory: "OVERWEIGHT",
      exerciseType: "RUN_SLOWLY",
    },
    action: 24,
  },

  // Rule 13
  {
    conditions: {
      bmiCategory: "OVERWEIGHT",
      exerciseType: "RUN_QUICKLY",
    },
    action: 19,
  },

  // Rule 14
  {
    conditions: {
      bmiCategory: "OBESE",
      exerciseType: "WALK_SLOW",
    },
    action: 75,
  },

  // Rule 15
  {
    conditions: {
      bmiCategory: "OBESE",
      exerciseType: "WALK_QUICK",
    },
    action: 37,
  },

  // Rule 16
  {
    conditions: {
      bmiCategory: "OBESE",
      exerciseType: "RUN_SLOWLY",
    },
    action: 30,
  },

  // Rule 17
  {
    conditions: {
      bmiCategory: "OBESE",
      exerciseType: "RUN_QUICKLY",
    },
    action: 24,
  },

  // Rule 18
  {
    conditions: {
      bmiCategory: "SUPER_OBESE",
      exerciseType: "WALK_SLOW",
    },
    action: 75,
  },

  // Rule 19
  {
    conditions: {
      bmiCategory: "SUPER_OBESE",
      exerciseType: "WALK_QUICK",
    },
    action: 37,
  },

  // Rule 20
  {
    conditions: {
      bmiCategory: "SUPER_OBESE",
      exerciseType: "RUN_SLOWLY",
    },
    action: 30,
  },

  // Rule 21
  {
    conditions: {
      bmiCategory: "SUPER_OBESE",
      exerciseType: "RUN_QUICKLY",
    },
    action: 24,
  },

  // Rule 22
  {
    conditions: {
      bmiCategory: "HYPER_OBESE",
      exerciseType: "WALK_SLOW",
    },
    action: 82,
  },

  // Rule 23
  {
    conditions: {
      bmiCategory: "HYPER_OBESE",
      exerciseType: "WALK_QUICK",
    },
    action: 41,
  },

  // Rule 24
  {
    conditions: {
      bmiCategory: "HYPER_OBESE",
      exerciseType: "RUN_SLOWLY",
    },
    action: 33,
  },

  // Rule 25
  {
    conditions: {
      bmiCategory: "HYPER_OBESE",
      exerciseType: "RUN_QUICKLY",
    },
    action: 26,
  },
];

// Recommended Calories
const recommendedCaloriesRules = [
  // Rule 26
  {
    conditions: {
      bmiCategory: "NORMAL",
      mealType: "BREAKFAST",
    },
    action: 458,
  },

  // Rule 27
  {
    conditions: {
      bmiCategory: "NORMAL",
      mealType: "LUNCH",
    },
    action: 621,
  },

  // Rule 28
  {
    conditions: {
      bmiCategory: "NORMAL",
      mealType: "DINNER",
    },
    action: 710,
  },

  // Rule 29
  {
    conditions: {
      bmiCategory: "OVERWEIGHT",
      mealType: "BREAKFAST",
    },
    action: 448,
  },

  // Rule 30
  {
    conditions: {
      bmiCategory: "OVERWEIGHT",
      mealType: "LUNCH",
    },
    action: 523,
  },

  // Rule 31
  {
    conditions: {
      bmiCategory: "OVERWEIGHT",
      mealType: "DINNER",
    },
    action: 617,
  },

  // Rule 32
  {
    conditions: {
      bmiCategory: "OBESE",
      mealType: "BREAKFAST",
    },
    action: 368,
  },

  // Rule 33
  {
    conditions: {
      bmiCategory: "OBESE",
      mealType: "LUNCH",
    },
    action: 518,
  },

  // Rule 34
  {
    conditions: {
      bmiCategory: "OBESE",
      mealType: "DINNER",
    },
    action: 500,
  },

  // Rule 35
  {
    conditions: {
      bmiCategory: "SUPER_OBESE",
      mealType: "BREAKFAST",
    },
    action: 369,
  },

  // Rule 36
  {
    conditions: {
      bmiCategory: "SUPER_OBESE",
      mealType: "LUNCH",
    },
    action: 400,
  },

  // Rule 37
  {
    conditions: {
      bmiCategory: "SUPER_OBESE",
      mealType: "DINNER",
    },
    action: 397,
  },

  // Rule 38
  {
    conditions: {
      bmiCategory: "HYPER_OBESE",
      mealType: "BREAKFAST",
    },
    action: 211,
  },

  // Rule 39
  {
    conditions: {
      bmiCategory: "HYPER_OBESE",
      mealType: "LUNCH",
    },
    action: 426,
  },

  // Rule 40
  {
    conditions: {
      bmiCategory: "HYPER_OBESE",
      mealType: "DINNER",
    },
    action: 391,
  },
];

export { bmiCategoryRules, exerciseTimeRules, recommendedCaloriesRules };
