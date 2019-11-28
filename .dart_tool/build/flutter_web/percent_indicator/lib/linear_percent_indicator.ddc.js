define(['dart_sdk', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/animation/animation'], function(dart_sdk, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const gradient = packages__flutter__src__painting___network_image_web.src__painting__gradient;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const custom_paint = packages__flutter__src__rendering__animated_size.src__rendering__custom_paint;
  const colors = packages__flutter__material.src__material__colors;
  const material = packages__flutter__material.src__material__material;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const automatic_keep_alive = packages__flutter__src__widgets__actions.src__widgets__automatic_keep_alive;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const linear_percent_indicator = Object.create(dart.library);
  const $add = dartx.add;
  const $toString = dartx.toString;
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: linear_percent_indicator.LinearStrokeCap.prototype,
        [_name$]: "LinearStrokeCap.butt",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: linear_percent_indicator.LinearStrokeCap.prototype,
        [_name$]: "LinearStrokeCap.round",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: linear_percent_indicator.LinearStrokeCap.prototype,
        [_name$]: "LinearStrokeCap.roundAll",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], linear_percent_indicator.LinearStrokeCap);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290299851.0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 10
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: flex.MainAxisAlignment.prototype,
        [_name]: "MainAxisAlignment.start",
        index: 0
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 22,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/percent_indicator/linear_percent_indicator.dart"
      });
    },
    get C12() {
      return C12 = dart.constList([], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 191,
        [_Location_file]: "org-dartlang-app:///packages/percent_indicator/linear_percent_indicator.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 9,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 176,
        [_Location_file]: "org-dartlang-app:///packages/percent_indicator/linear_percent_indicator.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/percent_indicator/linear_percent_indicator.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 198,
        [_Location_file]: "org-dartlang-app:///packages/percent_indicator/linear_percent_indicator.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 210,
        [_Location_file]: "org-dartlang-app:///packages/percent_indicator/linear_percent_indicator.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
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
        [_Location_column]: 18,
        [_Location_line]: 208,
        [_Location_file]: "org-dartlang-app:///packages/percent_indicator/linear_percent_indicator.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 206,
        [_Location_file]: "org-dartlang-app:///packages/percent_indicator/linear_percent_indicator.dart"
      });
    }
  });
  const _name$ = dart.privateName(linear_percent_indicator, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  linear_percent_indicator.LinearStrokeCap = class LinearStrokeCap extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (linear_percent_indicator.LinearStrokeCap.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = linear_percent_indicator.LinearStrokeCap.prototype;
  dart.addTypeTests(linear_percent_indicator.LinearStrokeCap);
  dart.setLibraryUri(linear_percent_indicator.LinearStrokeCap, "package:percent_indicator/linear_percent_indicator.dart");
  dart.setFieldSignature(linear_percent_indicator.LinearStrokeCap, () => ({
    __proto__: dart.getFields(linear_percent_indicator.LinearStrokeCap.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(linear_percent_indicator.LinearStrokeCap, ['toString']);
  linear_percent_indicator.LinearStrokeCap.butt = C0 || CT.C0;
  linear_percent_indicator.LinearStrokeCap.round = C1 || CT.C1;
  linear_percent_indicator.LinearStrokeCap.roundAll = C2 || CT.C2;
  linear_percent_indicator.LinearStrokeCap.values = C3 || CT.C3;
  const Color_value = dart.privateName(ui, "Color.value");
  let C4;
  let C5;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C6;
  const _name = dart.privateName(flex, "_name");
  let C7;
  const _progressColor = dart.privateName(linear_percent_indicator, "_progressColor");
  const percent$ = dart.privateName(linear_percent_indicator, "LinearPercentIndicator.percent");
  const width$ = dart.privateName(linear_percent_indicator, "LinearPercentIndicator.width");
  const lineHeight$ = dart.privateName(linear_percent_indicator, "LinearPercentIndicator.lineHeight");
  const fillColor$ = dart.privateName(linear_percent_indicator, "LinearPercentIndicator.fillColor");
  const backgroundColor$ = dart.privateName(linear_percent_indicator, "LinearPercentIndicator.backgroundColor");
  const animation$ = dart.privateName(linear_percent_indicator, "LinearPercentIndicator.animation");
  const animationDuration$ = dart.privateName(linear_percent_indicator, "LinearPercentIndicator.animationDuration");
  const leading$ = dart.privateName(linear_percent_indicator, "LinearPercentIndicator.leading");
  const trailing$ = dart.privateName(linear_percent_indicator, "LinearPercentIndicator.trailing");
  const center$ = dart.privateName(linear_percent_indicator, "LinearPercentIndicator.center");
  const linearStrokeCap$ = dart.privateName(linear_percent_indicator, "LinearPercentIndicator.linearStrokeCap");
  const alignment$ = dart.privateName(linear_percent_indicator, "LinearPercentIndicator.alignment");
  const padding$ = dart.privateName(linear_percent_indicator, "LinearPercentIndicator.padding");
  const animateFromLastPercent$ = dart.privateName(linear_percent_indicator, "LinearPercentIndicator.animateFromLastPercent");
  const linearGradient$ = dart.privateName(linear_percent_indicator, "LinearPercentIndicator.linearGradient");
  const addAutomaticKeepAlive$ = dart.privateName(linear_percent_indicator, "LinearPercentIndicator.addAutomaticKeepAlive");
  const isRTL$ = dart.privateName(linear_percent_indicator, "LinearPercentIndicator.isRTL");
  const maskFilter$ = dart.privateName(linear_percent_indicator, "LinearPercentIndicator.maskFilter");
  const clipLinearGradient$ = dart.privateName(linear_percent_indicator, "LinearPercentIndicator.clipLinearGradient");
  linear_percent_indicator.LinearPercentIndicator = class LinearPercentIndicator extends framework.StatefulWidget {
    get percent() {
      return this[percent$];
    }
    set percent(value) {
      super.percent = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get lineHeight() {
      return this[lineHeight$];
    }
    set lineHeight(value) {
      super.lineHeight = value;
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
    get leading() {
      return this[leading$];
    }
    set leading(value) {
      super.leading = value;
    }
    get trailing() {
      return this[trailing$];
    }
    set trailing(value) {
      super.trailing = value;
    }
    get center() {
      return this[center$];
    }
    set center(value) {
      super.center = value;
    }
    get linearStrokeCap() {
      return this[linearStrokeCap$];
    }
    set linearStrokeCap(value) {
      super.linearStrokeCap = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get animateFromLastPercent() {
      return this[animateFromLastPercent$];
    }
    set animateFromLastPercent(value) {
      super.animateFromLastPercent = value;
    }
    get linearGradient() {
      return this[linearGradient$];
    }
    set linearGradient(value) {
      super.linearGradient = value;
    }
    get addAutomaticKeepAlive() {
      return this[addAutomaticKeepAlive$];
    }
    set addAutomaticKeepAlive(value) {
      super.addAutomaticKeepAlive = value;
    }
    get isRTL() {
      return this[isRTL$];
    }
    set isRTL(value) {
      super.isRTL = value;
    }
    get maskFilter() {
      return this[maskFilter$];
    }
    set maskFilter(value) {
      super.maskFilter = value;
    }
    get clipLinearGradient() {
      return this[clipLinearGradient$];
    }
    set clipLinearGradient(value) {
      super.clipLinearGradient = value;
    }
    get progressColor() {
      return this[_progressColor];
    }
    createState() {
      return new linear_percent_indicator._LinearPercentIndicatorState.new();
    }
  };
  (linear_percent_indicator.LinearPercentIndicator.new = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let fillColor = opts && 'fillColor' in opts ? opts.fillColor : C4 || CT.C4;
    let percent = opts && 'percent' in opts ? opts.percent : 0;
    let lineHeight = opts && 'lineHeight' in opts ? opts.lineHeight : 5;
    let width = opts && 'width' in opts ? opts.width : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : C5 || CT.C5;
    let linearGradient = opts && 'linearGradient' in opts ? opts.linearGradient : null;
    let progressColor = opts && 'progressColor' in opts ? opts.progressColor : null;
    let animation = opts && 'animation' in opts ? opts.animation : false;
    let animationDuration = opts && 'animationDuration' in opts ? opts.animationDuration : 500;
    let animateFromLastPercent = opts && 'animateFromLastPercent' in opts ? opts.animateFromLastPercent : false;
    let isRTL = opts && 'isRTL' in opts ? opts.isRTL : false;
    let leading = opts && 'leading' in opts ? opts.leading : null;
    let trailing = opts && 'trailing' in opts ? opts.trailing : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let addAutomaticKeepAlive = opts && 'addAutomaticKeepAlive' in opts ? opts.addAutomaticKeepAlive : true;
    let linearStrokeCap = opts && 'linearStrokeCap' in opts ? opts.linearStrokeCap : null;
    let padding = opts && 'padding' in opts ? opts.padding : C6 || CT.C6;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C7 || CT.C7;
    let maskFilter = opts && 'maskFilter' in opts ? opts.maskFilter : null;
    let clipLinearGradient = opts && 'clipLinearGradient' in opts ? opts.clipLinearGradient : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_progressColor] = null;
    this[fillColor$] = fillColor;
    this[percent$] = percent;
    this[lineHeight$] = lineHeight;
    this[width$] = width;
    this[backgroundColor$] = backgroundColor;
    this[linearGradient$] = linearGradient;
    this[animation$] = animation;
    this[animationDuration$] = animationDuration;
    this[animateFromLastPercent$] = animateFromLastPercent;
    this[isRTL$] = isRTL;
    this[leading$] = leading;
    this[trailing$] = trailing;
    this[center$] = center;
    this[addAutomaticKeepAlive$] = addAutomaticKeepAlive;
    this[linearStrokeCap$] = linearStrokeCap;
    this[padding$] = padding;
    this[alignment$] = alignment;
    this[maskFilter$] = maskFilter;
    this[clipLinearGradient$] = clipLinearGradient;
    linear_percent_indicator.LinearPercentIndicator.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    if (this.linearGradient != null && progressColor != null) {
      dart.throw(new core.ArgumentError.new("Cannot provide both linearGradient and progressColor"));
    }
    this[_progressColor] = (t0 = progressColor, t0 == null ? colors.Colors.red : t0);
    if (dart.notNull(this.percent) < 0.0 || dart.notNull(this.percent) > 1.0) {
      dart.throw(core.Exception.new("Percent value must be a double between 0.0 and 1.0"));
    }
  }).prototype = linear_percent_indicator.LinearPercentIndicator.prototype;
  dart.addTypeTests(linear_percent_indicator.LinearPercentIndicator);
  dart.setMethodSignature(linear_percent_indicator.LinearPercentIndicator, () => ({
    __proto__: dart.getMethods(linear_percent_indicator.LinearPercentIndicator.__proto__),
    createState: dart.fnType(linear_percent_indicator._LinearPercentIndicatorState, [])
  }));
  dart.setGetterSignature(linear_percent_indicator.LinearPercentIndicator, () => ({
    __proto__: dart.getGetters(linear_percent_indicator.LinearPercentIndicator.__proto__),
    progressColor: ui.Color
  }));
  dart.setLibraryUri(linear_percent_indicator.LinearPercentIndicator, "package:percent_indicator/linear_percent_indicator.dart");
  dart.setFieldSignature(linear_percent_indicator.LinearPercentIndicator, () => ({
    __proto__: dart.getFields(linear_percent_indicator.LinearPercentIndicator.__proto__),
    percent: dart.finalFieldType(core.double),
    width: dart.finalFieldType(core.double),
    lineHeight: dart.finalFieldType(core.double),
    fillColor: dart.finalFieldType(ui.Color),
    backgroundColor: dart.finalFieldType(ui.Color),
    [_progressColor]: dart.fieldType(ui.Color),
    animation: dart.finalFieldType(core.bool),
    animationDuration: dart.finalFieldType(core.int),
    leading: dart.finalFieldType(framework.Widget),
    trailing: dart.finalFieldType(framework.Widget),
    center: dart.finalFieldType(framework.Widget),
    linearStrokeCap: dart.finalFieldType(linear_percent_indicator.LinearStrokeCap),
    alignment: dart.finalFieldType(flex.MainAxisAlignment),
    padding: dart.finalFieldType(edge_insets.EdgeInsets),
    animateFromLastPercent: dart.finalFieldType(core.bool),
    linearGradient: dart.finalFieldType(gradient.LinearGradient),
    addAutomaticKeepAlive: dart.finalFieldType(core.bool),
    isRTL: dart.finalFieldType(core.bool),
    maskFilter: dart.finalFieldType(ui.MaskFilter),
    clipLinearGradient: dart.finalFieldType(core.bool)
  }));
  const _animationController = dart.privateName(linear_percent_indicator, "_animationController");
  const _animation = dart.privateName(linear_percent_indicator, "_animation");
  const _percent = dart.privateName(linear_percent_indicator, "_percent");
  const _updateProgress = dart.privateName(linear_percent_indicator, "_updateProgress");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C10;
  let C9;
  let C8;
  let C12;
  let C11;
  let C15;
  let C16;
  let C14;
  let C13;
  let C19;
  let C20;
  let C21;
  let C22;
  let C18;
  let C17;
  let C25;
  let C24;
  let C23;
  let C28;
  let C29;
  let C30;
  let C27;
  let C26;
  let C33;
  let C34;
  let C32;
  let C31;
  let C37;
  let C38;
  let C36;
  let C35;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(linear_percent_indicator.LinearPercentIndicator) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(linear_percent_indicator.LinearPercentIndicator)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(linear_percent_indicator.LinearPercentIndicator));
  const State_AutomaticKeepAliveClientMixin$36 = class State_AutomaticKeepAliveClientMixin extends State_SingleTickerProviderStateMixin$36 {};
  (State_AutomaticKeepAliveClientMixin$36.new = function() {
    automatic_keep_alive.AutomaticKeepAliveClientMixin$(linear_percent_indicator.LinearPercentIndicator)[dart.mixinNew].call(this);
    State_AutomaticKeepAliveClientMixin$36.__proto__.new.call(this);
  }).prototype = State_AutomaticKeepAliveClientMixin$36.prototype;
  dart.applyMixin(State_AutomaticKeepAliveClientMixin$36, automatic_keep_alive.AutomaticKeepAliveClientMixin$(linear_percent_indicator.LinearPercentIndicator));
  linear_percent_indicator._LinearPercentIndicatorState = class _LinearPercentIndicatorState extends State_AutomaticKeepAliveClientMixin$36 {
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
      linear_percent_indicator.LinearPercentIndicator._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (oldWidget.percent != this.widget.percent) {
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
      if (this.widget.leading != null) {
        items[$add](this.widget.leading);
      }
      let hasSetWidth = this.widget.width != null;
      let containerWidget = new container.Container.new({width: hasSetWidth ? this.widget.width : 1 / 0, height: this.widget.lineHeight, padding: this.widget.padding, child: new basic.CustomPaint.new({painter: new linear_percent_indicator.LinearPainter.new({isRTL: this.widget.isRTL, progress: this[_percent], center: this.widget.center, progressColor: this.widget.progressColor, linearGradient: this.widget.linearGradient, backgroundColor: this.widget.backgroundColor, linearStrokeCap: this.widget.linearStrokeCap, lineWidth: this.widget.lineHeight, maskFilter: this.widget.maskFilter, clipLinearGradient: this.widget.clipLinearGradient}), child: this.widget.center != null ? new basic.Center.new({child: this.widget.center, $creationLocationd_0dea112b090073317d4: C8 || CT.C8}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17});
      if (hasSetWidth) {
        items[$add](containerWidget);
      } else {
        items[$add](new basic.Expanded.new({child: containerWidget, $creationLocationd_0dea112b090073317d4: C23 || CT.C23}));
      }
      if (this.widget.trailing != null) {
        items[$add](this.widget.trailing);
      }
      return new material.Material.new({color: colors.Colors.transparent, child: new container.Container.new({color: this.widget.fillColor, child: new basic.Row.new({mainAxisAlignment: this.widget.alignment, crossAxisAlignment: flex.CrossAxisAlignment.center, children: items, $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35});
    }
    get wantKeepAlive() {
      return this.widget.addAutomaticKeepAlive;
    }
  };
  (linear_percent_indicator._LinearPercentIndicatorState.new = function() {
    this[_animationController] = null;
    this[_animation] = null;
    this[_percent] = 0.0;
    linear_percent_indicator._LinearPercentIndicatorState.__proto__.new.call(this);
    ;
  }).prototype = linear_percent_indicator._LinearPercentIndicatorState.prototype;
  dart.addTypeTests(linear_percent_indicator._LinearPercentIndicatorState);
  dart.setMethodSignature(linear_percent_indicator._LinearPercentIndicatorState, () => ({
    __proto__: dart.getMethods(linear_percent_indicator._LinearPercentIndicatorState.__proto__),
    [_updateProgress]: dart.fnType(dart.dynamic, [])
  }));
  dart.setGetterSignature(linear_percent_indicator._LinearPercentIndicatorState, () => ({
    __proto__: dart.getGetters(linear_percent_indicator._LinearPercentIndicatorState.__proto__),
    wantKeepAlive: core.bool
  }));
  dart.setLibraryUri(linear_percent_indicator._LinearPercentIndicatorState, "package:percent_indicator/linear_percent_indicator.dart");
  dart.setFieldSignature(linear_percent_indicator._LinearPercentIndicatorState, () => ({
    __proto__: dart.getFields(linear_percent_indicator._LinearPercentIndicatorState.__proto__),
    [_animationController]: dart.fieldType(animation_controller.AnimationController),
    [_animation]: dart.fieldType(animation.Animation),
    [_percent]: dart.fieldType(core.double)
  }));
  const _paintBackground = dart.privateName(linear_percent_indicator, "_paintBackground");
  const _paintLine = dart.privateName(linear_percent_indicator, "_paintLine");
  const _createGradientShaderRightToLeft = dart.privateName(linear_percent_indicator, "_createGradientShaderRightToLeft");
  const _createGradientShaderLeftToRight = dart.privateName(linear_percent_indicator, "_createGradientShaderLeftToRight");
  const lineWidth$ = dart.privateName(linear_percent_indicator, "LinearPainter.lineWidth");
  const progress$ = dart.privateName(linear_percent_indicator, "LinearPainter.progress");
  const center$0 = dart.privateName(linear_percent_indicator, "LinearPainter.center");
  const isRTL$0 = dart.privateName(linear_percent_indicator, "LinearPainter.isRTL");
  const progressColor$ = dart.privateName(linear_percent_indicator, "LinearPainter.progressColor");
  const backgroundColor$0 = dart.privateName(linear_percent_indicator, "LinearPainter.backgroundColor");
  const linearStrokeCap$0 = dart.privateName(linear_percent_indicator, "LinearPainter.linearStrokeCap");
  const linearGradient$0 = dart.privateName(linear_percent_indicator, "LinearPainter.linearGradient");
  const maskFilter$0 = dart.privateName(linear_percent_indicator, "LinearPainter.maskFilter");
  const clipLinearGradient$0 = dart.privateName(linear_percent_indicator, "LinearPainter.clipLinearGradient");
  linear_percent_indicator.LinearPainter = class LinearPainter extends custom_paint.CustomPainter {
    get lineWidth() {
      return this[lineWidth$];
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
    get center() {
      return this[center$0];
    }
    set center(value) {
      super.center = value;
    }
    get isRTL() {
      return this[isRTL$0];
    }
    set isRTL(value) {
      super.isRTL = value;
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
    get linearStrokeCap() {
      return this[linearStrokeCap$0];
    }
    set linearStrokeCap(value) {
      super.linearStrokeCap = value;
    }
    get linearGradient() {
      return this[linearGradient$0];
    }
    set linearGradient(value) {
      super.linearGradient = value;
    }
    get maskFilter() {
      return this[maskFilter$0];
    }
    set maskFilter(value) {
      super.maskFilter = value;
    }
    get clipLinearGradient() {
      return this[clipLinearGradient$0];
    }
    set clipLinearGradient(value) {
      super.clipLinearGradient = value;
    }
    paint(canvas, size) {
      let start = new ui.Offset.new(0.0, dart.notNull(size.height) / 2);
      let end = new ui.Offset.new(size.width, dart.notNull(size.height) / 2);
      canvas.drawLine(start, end, this[_paintBackground]);
      if (this.maskFilter != null) {
        this[_paintLine].maskFilter = this.maskFilter;
      }
      if (dart.dtest(this.isRTL)) {
        let xProgress = dart.notNull(size.width) - dart.notNull(size.width) * dart.notNull(core.num._check(this.progress));
        if (this.linearGradient != null) {
          this[_paintLine].shader = this[_createGradientShaderRightToLeft](size, xProgress);
        }
        canvas.drawLine(end, new ui.Offset.new(xProgress, dart.notNull(size.height) / 2), this[_paintLine]);
      } else {
        let xProgress = dart.notNull(size.width) * dart.notNull(core.num._check(this.progress));
        if (this.linearGradient != null) {
          this[_paintLine].shader = this[_createGradientShaderLeftToRight](size, xProgress);
        }
        canvas.drawLine(start, new ui.Offset.new(xProgress, dart.notNull(size.height) / 2), this[_paintLine]);
      }
    }
    [_createGradientShaderRightToLeft](size, xProgress) {
      let shaderEndPoint = dart.test(this.clipLinearGradient) ? ui.Offset.zero : new ui.Offset.new(xProgress, size.height);
      return this.linearGradient.createShader(new ui.Rect.fromPoints(new ui.Offset.new(size.width, size.height), shaderEndPoint));
    }
    [_createGradientShaderLeftToRight](size, xProgress) {
      let shaderEndPoint = dart.test(this.clipLinearGradient) ? new ui.Offset.new(size.width, size.height) : new ui.Offset.new(xProgress, size.height);
      return this.linearGradient.createShader(new ui.Rect.fromPoints(ui.Offset.zero, shaderEndPoint));
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter._check(oldDelegate);
      return true;
    }
  };
  (linear_percent_indicator.LinearPainter.new = function(opts) {
    let lineWidth = opts && 'lineWidth' in opts ? opts.lineWidth : null;
    let progress = opts && 'progress' in opts ? opts.progress : null;
    let center = opts && 'center' in opts ? opts.center : null;
    let isRTL = opts && 'isRTL' in opts ? opts.isRTL : null;
    let progressColor = opts && 'progressColor' in opts ? opts.progressColor : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let linearStrokeCap = opts && 'linearStrokeCap' in opts ? opts.linearStrokeCap : C0 || CT.C0;
    let linearGradient = opts && 'linearGradient' in opts ? opts.linearGradient : null;
    let maskFilter = opts && 'maskFilter' in opts ? opts.maskFilter : null;
    let clipLinearGradient = opts && 'clipLinearGradient' in opts ? opts.clipLinearGradient : null;
    this[_paintBackground] = new ui.Paint.new();
    this[_paintLine] = new ui.Paint.new();
    this[lineWidth$] = lineWidth;
    this[progress$] = progress;
    this[center$0] = center;
    this[isRTL$0] = isRTL;
    this[progressColor$] = progressColor;
    this[backgroundColor$0] = backgroundColor;
    this[linearStrokeCap$0] = linearStrokeCap;
    this[linearGradient$0] = linearGradient;
    this[maskFilter$0] = maskFilter;
    this[clipLinearGradient$0] = clipLinearGradient;
    linear_percent_indicator.LinearPainter.__proto__.new.call(this);
    this[_paintBackground].color = this.backgroundColor;
    this[_paintBackground].style = ui.PaintingStyle.stroke;
    this[_paintBackground].strokeWidth = core.double._check(this.lineWidth);
    this[_paintLine].color = dart.toString(this.progress) === "0.0" ? this.progressColor.withOpacity(0.0) : this.progressColor;
    this[_paintLine].style = ui.PaintingStyle.stroke;
    this[_paintLine].strokeWidth = core.double._check(this.lineWidth);
    if (dart.equals(this.linearStrokeCap, linear_percent_indicator.LinearStrokeCap.round)) {
      this[_paintLine].strokeCap = ui.StrokeCap.round;
    } else if (dart.equals(this.linearStrokeCap, linear_percent_indicator.LinearStrokeCap.butt)) {
      this[_paintLine].strokeCap = ui.StrokeCap.butt;
    } else {
      this[_paintLine].strokeCap = ui.StrokeCap.round;
      this[_paintBackground].strokeCap = ui.StrokeCap.round;
    }
  }).prototype = linear_percent_indicator.LinearPainter.prototype;
  dart.addTypeTests(linear_percent_indicator.LinearPainter);
  dart.setMethodSignature(linear_percent_indicator.LinearPainter, () => ({
    __proto__: dart.getMethods(linear_percent_indicator.LinearPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    [_createGradientShaderRightToLeft]: dart.fnType(ui.Shader, [ui.Size, core.double]),
    [_createGradientShaderLeftToRight]: dart.fnType(ui.Shader, [ui.Size, core.double]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(linear_percent_indicator.LinearPainter, "package:percent_indicator/linear_percent_indicator.dart");
  dart.setFieldSignature(linear_percent_indicator.LinearPainter, () => ({
    __proto__: dart.getFields(linear_percent_indicator.LinearPainter.__proto__),
    [_paintBackground]: dart.finalFieldType(ui.Paint),
    [_paintLine]: dart.finalFieldType(ui.Paint),
    lineWidth: dart.finalFieldType(dart.dynamic),
    progress: dart.finalFieldType(dart.dynamic),
    center: dart.finalFieldType(dart.dynamic),
    isRTL: dart.finalFieldType(dart.dynamic),
    progressColor: dart.finalFieldType(ui.Color),
    backgroundColor: dart.finalFieldType(ui.Color),
    linearStrokeCap: dart.finalFieldType(linear_percent_indicator.LinearStrokeCap),
    linearGradient: dart.finalFieldType(gradient.LinearGradient),
    maskFilter: dart.finalFieldType(ui.MaskFilter),
    clipLinearGradient: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/percent_indicator/linear_percent_indicator", {
    "package:percent_indicator/linear_percent_indicator.dart": linear_percent_indicator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["linear_percent_indicator.dart"],"names":[],"mappings":"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","file":"linear_percent_indicator.ddc.js"}');
  // Exports:
  return {
    linear_percent_indicator: linear_percent_indicator
  };
});

//# sourceMappingURL=linear_percent_indicator.ddc.js.map
