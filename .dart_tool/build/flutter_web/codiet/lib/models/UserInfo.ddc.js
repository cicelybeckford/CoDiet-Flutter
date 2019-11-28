define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const UserInfo = Object.create(dart.library);
  const $floor = dartx.floor;
  const $round = dartx.round;
  const CT = Object.create(null);
  const activityLevel = dart.privateName(UserInfo, "UserInfo.activityLevel");
  const sex = dart.privateName(UserInfo, "UserInfo.sex");
  const name = dart.privateName(UserInfo, "UserInfo.name");
  const dob = dart.privateName(UserInfo, "UserInfo.dob");
  const height = dart.privateName(UserInfo, "UserInfo.height");
  const initialWeight = dart.privateName(UserInfo, "UserInfo.initialWeight");
  const goalWeight = dart.privateName(UserInfo, "UserInfo.goalWeight");
  const bmr = dart.privateName(UserInfo, "UserInfo.bmr");
  const calories = dart.privateName(UserInfo, "UserInfo.calories");
  const age = dart.privateName(UserInfo, "UserInfo.age");
  UserInfo.UserInfo = class UserInfo extends core.Object {
    get activityLevel() {
      return this[activityLevel];
    }
    set activityLevel(value) {
      this[activityLevel] = value;
    }
    get sex() {
      return this[sex];
    }
    set sex(value) {
      this[sex] = value;
    }
    get name() {
      return this[name];
    }
    set name(value) {
      this[name] = value;
    }
    get dob() {
      return this[dob];
    }
    set dob(value) {
      this[dob] = value;
    }
    get height() {
      return this[height];
    }
    set height(value) {
      this[height] = value;
    }
    get initialWeight() {
      return this[initialWeight];
    }
    set initialWeight(value) {
      this[initialWeight] = value;
    }
    get goalWeight() {
      return this[goalWeight];
    }
    set goalWeight(value) {
      this[goalWeight] = value;
    }
    get bmr() {
      return this[bmr];
    }
    set bmr(value) {
      this[bmr] = value;
    }
    get calories() {
      return this[calories];
    }
    set calories(value) {
      this[calories] = value;
    }
    get age() {
      return this[age];
    }
    set age(value) {
      this[age] = value;
    }
    calculateAge() {
      let currentDate = new core.DateTime.now();
      this.age = (dart.notNull(currentDate.difference(this.dob).inDays) / 365)[$floor]();
    }
    calculateBmr() {
      this.calculateAge();
      if (this.sex === "Male") {
        this.bmr = 10 * dart.notNull(this.initialWeight) + 6.25 * dart.notNull(this.height) - 5 * dart.notNull(this.age) + 5;
      } else {
        this.bmr = 10 * dart.notNull(this.initialWeight) + 6.25 * dart.notNull(this.height) - 5 * dart.notNull(this.age) - 161;
      }
    }
    calculateCalories() {
      let temp = 0.0;
      this.calculateBmr();
      switch (this.activityLevel) {
        case "Sedentary":
        {
          temp = dart.notNull(this.bmr) * 1.2;
          break;
        }
        case "Lightly active":
        {
          temp = dart.notNull(this.bmr) * 1.375;
          break;
        }
        case "Moderately active":
        {
          temp = dart.notNull(this.bmr) * 1.55;
          break;
        }
        case "Highly active":
        {
          temp = dart.notNull(this.bmr) * 1.725;
          break;
        }
        case "Super athletic":
        {
          temp = dart.notNull(this.bmr) * 1.9;
          break;
        }
      }
      if (dart.notNull(this.goalWeight) > dart.notNull(this.initialWeight)) {
        this.calories = (temp + 500)[$round]();
      } else if (dart.notNull(this.goalWeight) < dart.notNull(this.initialWeight)) {
        this.calories = (temp - 500)[$round]();
      } else {
        this.calories = temp[$round]();
      }
    }
  };
  (UserInfo.UserInfo.new = function() {
    this[activityLevel] = null;
    this[sex] = null;
    this[name] = null;
    this[dob] = null;
    this[height] = null;
    this[initialWeight] = null;
    this[goalWeight] = null;
    this[bmr] = null;
    this[calories] = null;
    this[age] = null;
    ;
  }).prototype = UserInfo.UserInfo.prototype;
  dart.addTypeTests(UserInfo.UserInfo);
  dart.setMethodSignature(UserInfo.UserInfo, () => ({
    __proto__: dart.getMethods(UserInfo.UserInfo.__proto__),
    calculateAge: dart.fnType(dart.void, []),
    calculateBmr: dart.fnType(dart.void, []),
    calculateCalories: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(UserInfo.UserInfo, "package:codiet/models/UserInfo.dart");
  dart.setFieldSignature(UserInfo.UserInfo, () => ({
    __proto__: dart.getFields(UserInfo.UserInfo.__proto__),
    activityLevel: dart.fieldType(core.String),
    sex: dart.fieldType(core.String),
    name: dart.fieldType(core.String),
    dob: dart.fieldType(core.DateTime),
    height: dart.fieldType(core.double),
    initialWeight: dart.fieldType(core.double),
    goalWeight: dart.fieldType(core.double),
    bmr: dart.fieldType(core.double),
    calories: dart.fieldType(core.int),
    age: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/codiet/models/UserInfo", {
    "package:codiet/models/UserInfo.dart": UserInfo
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["UserInfo.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;IACS;;;;;;IACA;;;;;;IACA;;;;;;IACE;;;;;;IACF;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACH;;;;;;IACA;;;;;;;AAGI,wBAAuB;AAC2B,MAAxD,WAAiD,CAAP,aAAnC,AAAY,AAAgB,WAAjB,YAAY,oBAAc;IAC9C;;AAGgB,MAAd;AACA,UAAI,AAAI,aAAG;AACsD,QAA7D,WAAO,AAAG,AAAiB,AAAmB,AAAY,kBAA9C,sBAAkB,AAAK,oBAAE,eAAY,AAAE,iBAAE,YAAO;;AAEE,QAA9D,WAAO,AAAG,AAAiB,AAAkB,AAAY,kBAA7C,sBAAkB,AAAK,oBAAE,eAAW,AAAE,iBAAE,YAAO;;IAEjE;;AAGS,iBAAO;AACA,MAAd;AACA,cAAO;;;AAEiB,UAAhB,OAAW,aAAJ,YAAM;AACb;;;;AAEkB,UAAlB,OAAW,aAAJ,YAAM;AACb;;;;AAEiB,UAAjB,OAAW,aAAJ,YAAM;AACb;;;;AAEkB,UAAlB,OAAW,aAAJ,YAAM;AACb;;;;AAEgB,UAAhB,OAAW,aAAJ,YAAM;AACb;;;AAER,UAAe,aAAX,gCAAa;AACgB,QAA/B,gBAAwB,CAAZ,AAAK,IAAD,GAAG;YACd,KAAe,aAAX,gCAAa;AACS,QAA/B,gBAAwB,CAAZ,AAAK,IAAD,GAAG;;AAGI,QAAvB,gBAAW,AAAK,IAAD;;IAEnB;;;IArDO;IACA;IACA;IACE;IACF;IACA;IACA;IACA;IACH;IACA;;EA6CN","file":"UserInfo.ddc.js"}');
  // Exports:
  return {
    models__UserInfo: UserInfo
  };
});

//# sourceMappingURL=UserInfo.ddc.js.map
