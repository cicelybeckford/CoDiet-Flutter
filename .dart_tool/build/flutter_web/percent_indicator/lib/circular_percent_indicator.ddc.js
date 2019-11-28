define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/animation/animation', 'packages/flutter/src/rendering/animated_size', 'packages/vector_math/vector_math_64'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__src__animation__animation, packages__flutter__src__rendering__animated_size, packages__vector_math__vector_math_64) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const colors = packages__flutter__material.src__material__colors;
  const material = packages__flutter__material.src__material__material;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const automatic_keep_alive = packages__flutter__src__widgets__actions.src__widgets__automatic_keep_alive;
  const gradient = packages__flutter__src__painting___network_image_web.src__painting__gradient;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const custom_paint = packages__flutter__src__rendering__animated_size.src__rendering__custom_paint;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const circular_percent_indicator = Object.create(dart.library);
  const $add = dartx.add;
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: circular_percent_indicator.CircularStrokeCap.prototype,
        [_name$]: "CircularStrokeCap.butt",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: circular_percent_indicator.CircularStrokeCap.prototype,
        [_name$]: "CircularStrokeCap.round",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: circular_percent_indicator.CircularStrokeCap.prototype,
        [_name$]: "CircularStrokeCap.square",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], circular_percent_indicator.CircularStrokeCap);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: circular_percent_indicator.ArcType.prototype,
        [_name$]: "ArcType.HALF",
        index: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: circular_percent_indicator.ArcType.prototype,
        [_name$]: "ArcType.FULL",
        index: 1
      });
    },
    get C6() {
      return C6 = dart.constList([C4 || CT.C4, C5 || CT.C5], circular_percent_indicator.ArcType);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290299851.0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 24,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 200,
        [_Location_file]: "org-dartlang-app:///packages/percent_indicator/circular_percent_indicator.dart"
      });
    },
    get C13() {
      return C13 = dart.constList([], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 201,
        [_Location_file]: "org-dartlang-app:///packages/percent_indicator/circular_percent_indicator.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 11,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 185,
        [_Location_file]: "org-dartlang-app:///packages/percent_indicator/circular_percent_indicator.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 182,
        [_Location_file]: "org-dartlang-app:///packages/percent_indicator/circular_percent_indicator.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 211,
        [_Location_file]: "org-dartlang-app:///packages/percent_indicator/circular_percent_indicator.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 210,
        [_Location_file]: "org-dartlang-app:///packages/percent_indicator/circular_percent_indicator.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 208,
        [_Location_file]: "org-dartlang-app:///packages/percent_indicator/circular_percent_indicator.dart"
      });
    }
  });
  const _name$ = dart.privateName(circular_percent_indicator, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  circular_percent_indicator.CircularStrokeCap = class CircularStrokeCap extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (circular_percent_indicator.CircularStrokeCap.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = circular_percent_indicator.CircularStrokeCap.prototype;
  dart.addTypeTests(circular_percent_indicator.CircularStrokeCap);
  dart.setLibraryUri(circular_percent_indicator.CircularStrokeCap, "package:percent_indicator/circular_percent_indicator.dart");
  dart.setFieldSignature(circular_percent_indicator.CircularStrokeCap, () => ({
    __proto__: dart.getFields(circular_percent_indicator.CircularStrokeCap.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(circular_percent_indicator.CircularStrokeCap, ['toString']);
  circular_percent_indicator.CircularStrokeCap.butt = C0 || CT.C0;
  circular_percent_indicator.CircularStrokeCap.round = C1 || CT.C1;
  circular_percent_indicator.CircularStrokeCap.square = C2 || CT.C2;
  circular_percent_indicator.CircularStrokeCap.values = C3 || CT.C3;
  let C4;
  let C5;
  let C6;
  circular_percent_indicator.ArcType = class ArcType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (circular_percent_indicator.ArcType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = circular_percent_indicator.ArcType.prototype;
  dart.addTypeTests(circular_percent_indicator.ArcType);
  dart.setLibraryUri(circular_percent_indicator.ArcType, "package:percent_indicator/circular_percent_indicator.dart");
  dart.setFieldSignature(circular_percent_indicator.ArcType, () => ({
    __proto__: dart.getFields(circular_percent_indicator.ArcType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(circular_percent_indicator.ArcType, ['toString']);
  circular_percent_indicator.ArcType.HALF = C4 || CT.C4;
  circular_percent_indicator.ArcType.FULL = C5 || CT.C5;
  circular_percent_indicator.ArcType.values = C6 || CT.C6;
  const Color_value = dart.privateName(ui, "Color.value");
  let C7;
  let C8;
  const _progressColor = dart.privateName(circular_percent_indicator, "_progressColor");
  const percent$ = dart.privateName(circular_percent_indicator, "CircularPercentIndicator.percent");
  const radius$ = dart.privateName(circular_percent_indicator, "CircularPercentIndicator.radius");
  const lineWidth$ = dart.privateName(circular_percent_indicator, "CircularPercentIndicator.lineWidth");
  const fillColor$ = dart.privateName(circular_percent_indicator, "CircularPercentIndicator.fillColor");
  const backgroundColor$ = dart.privateName(circular_percent_indicator, "CircularPercentIndicator.backgroundColor");
  const animation$ = dart.privateName(circular_percent_indicator, "CircularPercentIndicator.animation");
  const animationDuration$ = dart.privateName(circular_percent_indicator, "CircularPercentIndicator.animationDuration");
  const header$ = dart.privateName(circular_percent_indicator, "CircularPercentIndicator.header");
  const footer$ = dart.privateName(circular_percent_indicator, "CircularPercentIndicator.footer");
  const center$ = dart.privateName(circular_percent_indicator, "CircularPercentIndicator.center");
  const linearGradient$ = dart.privateName(circular_percent_indicator, "CircularPercentIndicator.linearGradient");
  const circularStrokeCap$ = dart.privateName(circular_percent_indicator, "CircularPercentIndicator.circularStrokeCap");
  const startAngle$ = dart.privateName(circular_percent_indicator, "CircularPercentIndicator.startAngle");
  const animateFromLastPercent$ = dart.privateName(circular_percent_indicator, "CircularPercentIndicator.animateFromLastPercent");
  const addAutomaticKeepAlive$ = dart.privateName(circular_percent_indicator, "CircularPercentIndicator.addAutomaticKeepAlive");
  const arcType$ = dart.privateName(circular_percent_indicator, "CircularPercentIndicator.arcType");
  const arcBackgroundColor$ = dart.privateName(circular_percent_indicator, "CircularPercentIndicator.arcBackgroundColor");
  const reverse$ = dart.privateName(circular_percent_indicator, "CircularPercentIndicator.reverse");
  const maskFilter$ = dart.privateName(circular_percent_indicator, "CircularPercentIndicator.maskFilter");
  circular_percent_indicator.CircularPercentIndicator = class CircularPercentIndicator extends framework.StatefulWidget {
    get percent() {
      return this[percent$];
    }
    set percent(value) {
      super.percent = value;
    }
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      super.radius = value;
    }
    get lineWidth() {
      return this[lineWidth$];
    }
    set lineWidth(value) {
      super.lineWidth = value;
    }
    get fillColor() {
      return this[fillColor$];
    }
    set fillColor(value) {
      super.fillColor = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get animation() {
      return this[animation$];
    }
    set animation(value) {
      super.animation = value;
    }
    get animationDuration() {
      return this[animationDuration$];
    }
    set animationDuration(value) {
      super.animationDuration = value;
    }
    get header() {
      return this[header$];
    }
    set header(value) {
      super.header = value;
    }
    get footer() {
      return this[footer$];
    }
    set footer(value) {
      super.footer = value;
    }
    get center() {
      return this[center$];
    }
    set center(value) {
      super.center = value;
    }
    get linearGradient() {
      return this[linearGradient$];
    }
    set linearGradient(value) {
      super.linearGradient = value;
    }
    get circularStrokeCap() {
      return this[circularStrokeCap$];
    }
    set circularStrokeCap(value) {
      super.circularStrokeCap = value;
    }
    get startAngle() {
      return this[startAngle$];
    }
    set startAngle(value) {
      super.startAngle = value;
    }
    get animateFromLastPercent() {
      return this[animateFromLastPercent$];
    }
    set animateFromLastPercent(value) {
      super.animateFromLastPercent = value;
    }
    get addAutomaticKeepAlive() {
      return this[addAutomaticKeepAlive$];
    }
    set addAutomaticKeepAlive(value) {
      super.addAutomaticKeepAlive = value;
    }
    get arcType() {
      return this[arcType$];
    }
    set arcType(value) {
      super.arcType = value;
    }
    get arcBackgroundColor() {
      return this[arcBackgroundColor$];
    }
    set arcBackgroundColor(value) {
      super.arcBackgroundColor = value;
    }
    get reverse() {
      return this[reverse$];
    }
    set reverse(value) {
      super.reverse = value;
    }
    get maskFilter() {
      return this[maskFilter$];
    }
    set maskFilter(value) {
      super.maskFilter = value;
    }
    get progressColor() {
      return this[_progressColor];
    }
    createState() {
      return new circular_percent_indicator._CircularPercentIndicatorState.new();
    }
  };
  (circular_percent_indicator.CircularPercentIndicator.new = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let percent = opts && 'percent' in opts ? opts.percent : 0;
    let lineWidth = opts && 'lineWidth' in opts ? opts.lineWidth : 5;
    let startAngle = opts && 'startAngle' in opts ? opts.startAngle : 0;
    let radius = opts && 'radius' in opts ? opts.radius : null;
    let fillColor = opts && 'fillColor' in opts ? opts.fillColor : C7 || CT.C7;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : C8 || CT.C8;
    let progressColor = opts && 'progressColor' in opts ? opts.progressColor : null;
    let linearGradient = opts && 'linearGradient' in opts ? opts.linearGradient : null;
    let animation = opts && 'animation' in opts ? opts.animation : false;
    let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : 500;
    let header = opts && 'header' in opts ? opts.header : null;
    let footer = opts && 'footer' in opts ? opts.footer : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let addAutomaticKeepAlive = opts && 'addAutomaticKeepAlive' in opts ? opts.addAutomaticKeepAlive : true;
    let circularStrokeCap = opts && 'circularStrokeCap' in opts ? opts.circularStrokeCap : null;
    let arcBackgroundColor = opts && 'arcBackgroundColor' in opts ? opts.arcBackgroundColor : null;
    let arcType = opts && 'arcType' in opts ? opts.arcType : null;
    let animateFromLastPercent = opts && 'animateFromLastPercent' in opts ? opts.animateFromLastPercent : false;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let maskFilter = opts && 'maskFilter' in opts ? opts.maskFilter : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_progressColor] = null;
    this[percent$] = percent;
    this[lineWidth$] = lineWidth;
    this[startAngle$] = startAngle;
    this[radius$] = radius;
    this[fillColor$] = fillColor;
    this[backgroundColor$] = backgroundColor;
    this[linearGradient$] = linearGradient;
    this[animation$] = animation;
    this[animationDuration$] = animationDuration;
    this[header$] = header;
    this[footer$] = footer;
    this[center$] = center;
    this[addAutomaticKeepAlive$] = addAutomaticKeepAlive;
    this[circularStrokeCap$] = circularStrokeCap;
    this[arcBackgroundColor$] = arcBackgroundColor;
    this[arcType$] = arcType;
    this[animateFromLastPercent$] = animateFromLastPercent;
    this[reverse$] = reverse;
    this[maskFilter$] = maskFilter;
    circular_percent_indicator.CircularPercentIndicator.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    if (this.linearGradient != null && progressColor != null) {
      dart.throw(new core.ArgumentError.new("Cannot provide both linearGradient and progressColor"));
    }
    this[_progressColor] = (t0 = progressColor, t0 == null ? colors.Colors.red : t0);
    if (!(dart.notNull(this.startAngle) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/percent_indicator/circular_percent_indicator.dart", 101, 12, "startAngle >= 0.0");
    if (dart.notNull(this.percent) < 0.0 || dart.notNull(this.percent) > 1.0) {
      dart.throw(core.Exception.new("Percent value must be a double between 0.0 and 1.0"));
    }
    if (this.arcType == null && this.arcBackgroundColor != null) {
      dart.throw(new core.ArgumentError.new("arcType is required when you arcBackgroundColor"));
    }
  }).prototype = circular_percent_indicator.CircularPercentIndicator.prototype;
  dart.addTypeTests(circular_percent_indicator.CircularPercentIndicator);
  dart.setMethodSignature(circular_percent_indicator.CircularPercentIndicator, () => ({
    __proto__: dart.getMethods(circular_percent_indicator.CircularPercentIndicator.__proto__),
    createState: dart.fnType(circular_percent_indicator._CircularPercentIndicatorState, [])
  }));
  dart.setGetterSignature(circular_percent_indicator.CircularPercentIndicator, () => ({
    __proto__: dart.getGetters(circular_percent_indicator.CircularPercentIndicator.__proto__),
    progressColor: ui.Color
  }));
  dart.setLibraryUri(circular_percent_indicator.CircularPercentIndicator, "package:percent_indicator/circular_percent_indicator.dart");
  dart.setFieldSignature(circular_percent_indicator.CircularPercentIndicator, () => ({
    __proto__: dart.getFields(circular_percent_indicator.CircularPercentIndicator.__proto__),
    percent: dart.finalFieldType(core.double),
    radius: dart.finalFieldType(core.double),
    lineWidth: dart.finalFieldType(core.double),
    fillColor: dart.finalFieldType(ui.Color),
    backgroundColor: dart.finalFieldType(ui.Color),
    [_progressColor]: dart.fieldType(ui.Color),
    animation: dart.finalFieldType(core.bool),
    animationDuration: dart.finalFieldType(core.int),
    header: dart.finalFieldType(framework.Widget),
    footer: dart.finalFieldType(framework.Widget),
    center: dart.finalFieldType(framework.Widget),
    linearGradient: dart.finalFieldType(gradient.LinearGradient),
    circularStrokeCap: dart.finalFieldType(circular_percent_indicator.CircularStrokeCap),
    startAngle: dart.finalFieldType(core.double),
    animateFromLastPercent: dart.finalFieldType(core.bool),
    addAutomaticKeepAlive: dart.finalFieldType(core.bool),
    arcType: dart.finalFieldType(circular_percent_indicator.ArcType),
    arcBackgroundColor: dart.finalFieldType(ui.Color),
    reverse: dart.finalFieldType(core.bool),
    maskFilter: dart.finalFieldType(ui.MaskFilter)
  }));
  const _animationController = dart.privateName(circular_percent_indicator, "_animationController");
  const _animation = dart.privateName(circular_percent_indicator, "_animation");
  const _percent = dart.privateName(circular_percent_indicator, "_percent");
  const _updateProgress = dart.privateName(circular_percent_indicator, "_updateProgress");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C11;
  let C10;
  let C9;
  let C13;
  let C12;
  let C16;
  let C17;
  let C15;
  let C14;
  let C20;
  let C21;
  let C22;
  let C19;
  let C18;
  let C25;
  let C26;
  let C27;
  let C24;
  let C23;
  let C30;
  let C29;
  let C28;
  let C33;
  let C34;
  let C32;
  let C31;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(circular_percent_indicator.CircularPercentIndicator) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(circular_percent_indicator.CircularPercentIndicator)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(circular_percent_indicator.CircularPercentIndicator));
  const State_AutomaticKeepAliveClientMixin$36 = class State_AutomaticKeepAliveClientMixin extends State_SingleTickerProviderStateMixin$36 {};
  (State_AutomaticKeepAliveClientMixin$36.new = function() {
    automatic_keep_alive.AutomaticKeepAliveClientMixin$(circular_percent_indicator.CircularPercentIndicator)[dart.mixinNew].call(this);
    State_AutomaticKeepAliveClientMixin$36.__proto__.new.call(this);
  }).prototype = State_AutomaticKeepAliveClientMixin$36.prototype;
  dart.applyMixin(State_AutomaticKeepAliveClientMixin$36, automatic_keep_alive.AutomaticKeepAliveClientMixin$(circular_percent_indicator.CircularPercentIndicator));
  circular_percent_indicator._CircularPercentIndicatorState = class _CircularPercentIndicatorState extends State_AutomaticKeepAliveClientMixin$36 {
    dispose() {
      if (this[_animationController] != null) {
        this[_animationController].dispose();
      }
      super.dispose();
    }
    initState() {
      let t0;
      if (dart.test(this.widget.animation)) {
        this[_animationController] = new animation_controller.AnimationController.new({vsync: this, duration: new core.Duration.new({milliseconds: this.widget.animationDuration})});
        this[_animation] = (t0 = new (TweenOfdouble()).new({begin: 0.0, end: this.widget.percent}).animate(this[_animationController]), t0.addListener(dart.fn(() => {
          this.setState(dart.fn(() => {
            this[_percent] = core.double._check(this[_animation].value);
          }, VoidToNull()));
        }, VoidToNull())), t0);
        this[_animationController].forward();
      } else {
        this[_updateProgress]();
      }
      super.initState();
    }
    didUpdateWidget(oldWidget) {
      circular_percent_indicator.CircularPercentIndicator._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (oldWidget.percent != this.widget.percent || oldWidget.startAngle != this.widget.startAngle) {
        if (this[_animationController] != null) {
          this[_animationController].duration = new core.Duration.new({milliseconds: this.widget.animationDuration});
          this[_animation] = new (TweenOfdouble()).new({begin: dart.test(this.widget.animateFromLastPercent) ? oldWidget.percent : 0.0, end: this.widget.percent}).animate(this[_animationController]);
          this[_animationController].forward({from: 0.0});
        } else {
          this[_updateProgress]();
        }
      }
    }
    [_updateProgress]() {
      this.setState(dart.fn(() => {
        this[_percent] = this.widget.percent;
      }, VoidToNull()));
    }
    build(context) {
      super.build(context);
      let items = JSArrayOfWidget().of([]);
      if (this.widget.header != null) {
        items[$add](this.widget.header);
      }
      items[$add](new container.Container.new({height: dart.notNull(this.widget.radius) + dart.notNull(this.widget.lineWidth), width: this.widget.radius, child: new basic.CustomPaint.new({painter: new circular_percent_indicator.CirclePainter.new({progress: dart.notNull(this[_percent]) * 360, progressColor: this.widget.progressColor, backgroundColor: this.widget.backgroundColor, startAngle: this.widget.startAngle, circularStrokeCap: this.widget.circularStrokeCap, radius: dart.notNull(this.widget.radius) / 2 - dart.notNull(this.widget.lineWidth) / 2, lineWidth: this.widget.lineWidth, arcBackgroundColor: this.widget.arcBackgroundColor, arcType: this.widget.arcType, reverse: this.widget.reverse, linearGradient: this.widget.linearGradient, maskFilter: this.widget.maskFilter}), child: this.widget.center != null ? new basic.Center.new({child: this.widget.center, $creationLocationd_0dea112b090073317d4: C9 || CT.C9}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}));
      if (this.widget.footer != null) {
        items[$add](this.widget.footer);
      }
      return new material.Material.new({color: this.widget.fillColor, child: new container.Container.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, mainAxisSize: flex.MainAxisSize.min, children: items, $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31});
    }
    get wantKeepAlive() {
      return this.widget.addAutomaticKeepAlive;
    }
  };
  (circular_percent_indicator._CircularPercentIndicatorState.new = function() {
    this[_animationController] = null;
    this[_animation] = null;
    this[_percent] = 0.0;
    circular_percent_indicator._CircularPercentIndicatorState.__proto__.new.call(this);
    ;
  }).prototype = circular_percent_indicator._CircularPercentIndicatorState.prototype;
  dart.addTypeTests(circular_percent_indicator._CircularPercentIndicatorState);
  dart.setMethodSignature(circular_percent_indicator._CircularPercentIndicatorState, () => ({
    __proto__: dart.getMethods(circular_percent_indicator._CircularPercentIndicatorState.__proto__),
    [_updateProgress]: dart.fnType(dart.dynamic, [])
  }));
  dart.setGetterSignature(circular_percent_indicator._CircularPercentIndicatorState, () => ({
    __proto__: dart.getGetters(circular_percent_indicator._CircularPercentIndicatorState.__proto__),
    wantKeepAlive: core.bool
  }));
  dart.setLibraryUri(circular_percent_indicator._CircularPercentIndicatorState, "package:percent_indicator/circular_percent_indicator.dart");
  dart.setFieldSignature(circular_percent_indicator._CircularPercentIndicatorState, () => ({
    __proto__: dart.getFields(circular_percent_indicator._CircularPercentIndicatorState.__proto__),
    [_animationController]: dart.fieldType(animation_controller.AnimationController),
    [_animation]: dart.fieldType(animation.Animation),
    [_percent]: dart.fieldType(core.double)
  }));
  const _paintBackground = dart.privateName(circular_percent_indicator, "_paintBackground");
  const _paintLine = dart.privateName(circular_percent_indicator, "_paintLine");
  const _paintBackgroundStartAngle = dart.privateName(circular_percent_indicator, "_paintBackgroundStartAngle");
  const lineWidth$0 = dart.privateName(circular_percent_indicator, "CirclePainter.lineWidth");
  const progress$ = dart.privateName(circular_percent_indicator, "CirclePainter.progress");
  const radius$0 = dart.privateName(circular_percent_indicator, "CirclePainter.radius");
  const progressColor$ = dart.privateName(circular_percent_indicator, "CirclePainter.progressColor");
  const backgroundColor$0 = dart.privateName(circular_percent_indicator, "CirclePainter.backgroundColor");
  const circularStrokeCap$0 = dart.privateName(circular_percent_indicator, "CirclePainter.circularStrokeCap");
  const startAngle$0 = dart.privateName(circular_percent_indicator, "CirclePainter.startAngle");
  const linearGradient$0 = dart.privateName(circular_percent_indicator, "CirclePainter.linearGradient");
  const arcBackgroundColor$0 = dart.privateName(circular_percent_indicator, "CirclePainter.arcBackgroundColor");
  const arcType$0 = dart.privateName(circular_percent_indicator, "CirclePainter.arcType");
  const reverse$0 = dart.privateName(circular_percent_indicator, "CirclePainter.reverse");
  const maskFilter$0 = dart.privateName(circular_percent_indicator, "CirclePainter.maskFilter");
  circular_percent_indicator.CirclePainter = class CirclePainter extends custom_paint.CustomPainter {
    get lineWidth() {
      return this[lineWidth$0];
    }
    set lineWidth(value) {
      super.lineWidth = value;
    }
    get progress() {
      return this[progress$];
    }
    set progress(value) {
      super.progress = value;
    }
    get radius() {
      return this[radius$0];
    }
    set radius(value) {
      super.radius = value;
    }
    get progressColor() {
      return this[progressColor$];
    }
    set progressColor(value) {
      super.progressColor = value;
    }
    get backgroundColor() {
      return this[backgroundColor$0];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get circularStrokeCap() {
      return this[circularStrokeCap$0];
    }
    set circularStrokeCap(value) {
      super.circularStrokeCap = value;
    }
    get startAngle() {
      return this[startAngle$0];
    }
    set startAngle(value) {
      super.startAngle = value;
    }
    get linearGradient() {
      return this[linearGradient$0];
    }
    set linearGradient(value) {
      super.linearGradient = value;
    }
    get arcBackgroundColor() {
      return this[arcBackgroundColor$0];
    }
    set arcBackgroundColor(value) {
      super.arcBackgroundColor = value;
    }
    get arcType() {
      return this[arcType$0];
    }
    set arcType(value) {
      super.arcType = value;
    }
    get reverse() {
      return this[reverse$0];
    }
    set reverse(value) {
      super.reverse = value;
    }
    get maskFilter() {
      return this[maskFilter$0];
    }
    set maskFilter(value) {
      super.maskFilter = value;
    }
    paint(canvas, size) {
      let center = new ui.Offset.new(dart.notNull(size.width) / 2, dart.notNull(size.height) / 2);
      canvas.drawCircle(center, this.radius, this[_paintBackground]);
      if (this.maskFilter != null) {
        this[_paintLine].maskFilter = this.maskFilter;
      }
      if (this.linearGradient != null) {
        this[_paintLine].shader = this.linearGradient.createShader(new ui.Rect.fromCircle({center: center, radius: this.radius}));
      }
      let fixedStartAngle = this.startAngle;
      let startAngleFixedMargin = 1.0;
      if (this.arcType != null) {
        if (dart.equals(this.arcType, circular_percent_indicator.ArcType.FULL)) {
          fixedStartAngle = 220.0;
          startAngleFixedMargin = 172 / dart.notNull(fixedStartAngle);
        } else {
          fixedStartAngle = 270.0;
          startAngleFixedMargin = 135 / dart.notNull(fixedStartAngle);
        }
      }
      if (this.arcBackgroundColor != null) {
        canvas.drawArc(new ui.Rect.fromCircle({center: center, radius: this.radius}), vector_math_64.radians(-90.0 + dart.notNull(fixedStartAngle)), vector_math_64.radians(360 * startAngleFixedMargin), false, this[_paintBackgroundStartAngle]);
      }
      if (dart.test(this.reverse)) {
        let start = vector_math_64.radians(360 * startAngleFixedMargin - 90.0 + dart.notNull(fixedStartAngle));
        let end = vector_math_64.radians(-dart.notNull(this.progress) * startAngleFixedMargin);
        canvas.drawArc(new ui.Rect.fromCircle({center: center, radius: this.radius}), start, end, false, this[_paintLine]);
      } else {
        let start = vector_math_64.radians(-90.0 + dart.notNull(fixedStartAngle));
        let end = vector_math_64.radians(dart.notNull(this.progress) * startAngleFixedMargin);
        canvas.drawArc(new ui.Rect.fromCircle({center: center, radius: this.radius}), start, end, false, this[_paintLine]);
      }
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter._check(oldDelegate);
      return true;
    }
  };
  (circular_percent_indicator.CirclePainter.new = function(opts) {
    let lineWidth = opts && 'lineWidth' in opts ? opts.lineWidth : null;
    let progress = opts && 'progress' in opts ? opts.progress : null;
    let radius = opts && 'radius' in opts ? opts.radius : null;
    let progressColor = opts && 'progressColor' in opts ? opts.progressColor : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let startAngle = opts && 'startAngle' in opts ? opts.startAngle : 0;
    let circularStrokeCap = opts && 'circularStrokeCap' in opts ? opts.circularStrokeCap : C1 || CT.C1;
    let linearGradient = opts && 'linearGradient' in opts ? opts.linearGradient : null;
    let reverse = opts && 'reverse' in opts ? opts.reverse : null;
    let arcBackgroundColor = opts && 'arcBackgroundColor' in opts ? opts.arcBackgroundColor : null;
    let arcType = opts && 'arcType' in opts ? opts.arcType : null;
    let maskFilter = opts && 'maskFilter' in opts ? opts.maskFilter : null;
    this[_paintBackground] = new ui.Paint.new();
    this[_paintLine] = new ui.Paint.new();
    this[_paintBackgroundStartAngle] = new ui.Paint.new();
    this[lineWidth$0] = lineWidth;
    this[progress$] = progress;
    this[radius$0] = radius;
    this[progressColor$] = progressColor;
    this[backgroundColor$0] = backgroundColor;
    this[startAngle$0] = startAngle;
    this[circularStrokeCap$0] = circularStrokeCap;
    this[linearGradient$0] = linearGradient;
    this[reverse$0] = reverse;
    this[arcBackgroundColor$0] = arcBackgroundColor;
    this[arcType$0] = arcType;
    this[maskFilter$0] = maskFilter;
    circular_percent_indicator.CirclePainter.__proto__.new.call(this);
    this[_paintBackground].color = this.backgroundColor;
    this[_paintBackground].style = ui.PaintingStyle.stroke;
    this[_paintBackground].strokeWidth = this.lineWidth;
    if (this.arcBackgroundColor != null) {
      this[_paintBackgroundStartAngle].color = this.arcBackgroundColor;
      this[_paintBackgroundStartAngle].style = ui.PaintingStyle.stroke;
      this[_paintBackgroundStartAngle].strokeWidth = this.lineWidth;
    }
    this[_paintLine].color = this.progressColor;
    this[_paintLine].style = ui.PaintingStyle.stroke;
    this[_paintLine].strokeWidth = this.lineWidth;
    if (dart.equals(this.circularStrokeCap, circular_percent_indicator.CircularStrokeCap.round)) {
      this[_paintLine].strokeCap = ui.StrokeCap.round;
    } else if (dart.equals(this.circularStrokeCap, circular_percent_indicator.CircularStrokeCap.butt)) {
      this[_paintLine].strokeCap = ui.StrokeCap.butt;
    } else {
      this[_paintLine].strokeCap = ui.StrokeCap.square;
    }
  }).prototype = circular_percent_indicator.CirclePainter.prototype;
  dart.addTypeTests(circular_percent_indicator.CirclePainter);
  dart.setMethodSignature(circular_percent_indicator.CirclePainter, () => ({
    __proto__: dart.getMethods(circular_percent_indicator.CirclePainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(circular_percent_indicator.CirclePainter, "package:percent_indicator/circular_percent_indicator.dart");
  dart.setFieldSignature(circular_percent_indicator.CirclePainter, () => ({
    __proto__: dart.getFields(circular_percent_indicator.CirclePainter.__proto__),
    [_paintBackground]: dart.finalFieldType(ui.Paint),
    [_paintLine]: dart.finalFieldType(ui.Paint),
    [_paintBackgroundStartAngle]: dart.finalFieldType(ui.Paint),
    lineWidth: dart.finalFieldType(core.double),
    progress: dart.finalFieldType(core.double),
    radius: dart.finalFieldType(core.double),
    progressColor: dart.finalFieldType(ui.Color),
    backgroundColor: dart.finalFieldType(ui.Color),
    circularStrokeCap: dart.finalFieldType(circular_percent_indicator.CircularStrokeCap),
    startAngle: dart.finalFieldType(core.double),
    linearGradient: dart.finalFieldType(gradient.LinearGradient),
    arcBackgroundColor: dart.finalFieldType(ui.Color),
    arcType: dart.finalFieldType(circular_percent_indicator.ArcType),
    reverse: dart.finalFieldType(core.bool),
    maskFilter: dart.finalFieldType(ui.MaskFilter)
  }));
  dart.trackLibraries("packages/percent_indicator/circular_percent_indicator", {
    "package:percent_indicator/circular_percent_indicator.dart": circular_percent_indicator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["circular_percent_indicator.dart"],"names":[],"mappings":"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","file":"circular_percent_indicator.ddc.js"}');
  // Exports:
  return {
    circular_percent_indicator: circular_percent_indicator
  };
});

//# sourceMappingURL=circular_percent_indicator.ddc.js.map
