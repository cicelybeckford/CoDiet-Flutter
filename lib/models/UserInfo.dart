class UserInfo {
  String activityLevel;
  String sex;
  String name;
  DateTime dob;
  double height;
  double initialWeight;
  double goalWeight;
  double bmr;
  int calories;
  int age;

  void calculateAge() {
    final currentDate = DateTime.now();
    age = (currentDate.difference(dob).inDays / 365).floor();
  }

  void calculateBmr() {
    calculateAge();
    if (sex == "Male") {
        bmr = (10 * initialWeight) + (6.25 * height ) - (5 * age) + 5;
    } else {
        bmr = (10 * initialWeight) + (6.25 * height) - (5 * age) - 161;
    }
  }

  void calculateCalories() {
    double temp = 0;
    calculateBmr();
    switch(activityLevel) {
        case "Sedentary":
            temp = bmr * 1.2;
            break;
        case "Lightly active":
            temp = bmr * 1.375;
            break;
        case "Moderately active":
            temp = bmr * 1.55;
            break;
        case "Highly active":
            temp = bmr * 1.725;
            break;
        case "Super athletic":
            temp = bmr * 1.9;
            break;
    }
    if (goalWeight > initialWeight) {
      calories = (temp + 500).round(); // Gain weight
    } else if (goalWeight < initialWeight) {
      calories = (temp - 500).round(); // Lose weight
    }
    else {
      calories = temp.round(); // Maintain weight
    }
  }
}