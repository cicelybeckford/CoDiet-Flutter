define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const layout_builder = packages__flutter__src__widgets__actions.src__widgets__layout_builder;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const responsive_widget = Object.create(dart.library);
  let BuildContextAndBoxConstraintsToWidget = () => (BuildContextAndBoxConstraintsToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/codiet/utils/responsive_widget.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  const largeScreen$ = dart.privateName(responsive_widget, "ResponsiveWidget.largeScreen");
  const mediumScreen$ = dart.privateName(responsive_widget, "ResponsiveWidget.mediumScreen");
  const smallScreen$ = dart.privateName(responsive_widget, "ResponsiveWidget.smallScreen");
  responsive_widget.ResponsiveWidget = class ResponsiveWidget extends framework.StatelessWidget {
    get largeScreen() {
      return this[largeScreen$];
    }
    set largeScreen(value) {
      super.largeScreen = value;
    }
    get mediumScreen() {
      return this[mediumScreen$];
    }
    set mediumScreen(value) {
      super.mediumScreen = value;
    }
    get smallScreen() {
      return this[smallScreen$];
    }
    set smallScreen(value) {
      super.smallScreen = value;
    }
    static isSmallScreen(context) {
      return dart.notNull(media_query.MediaQuery.of(context).size.width) < 800;
    }
    static isLargeScreen(context) {
      return dart.notNull(media_query.MediaQuery.of(context).size.width) > 800;
    }
    static isMediumScreen(context) {
      return dart.notNull(media_query.MediaQuery.of(context).size.width) >= 800 && dart.notNull(media_query.MediaQuery.of(context).size.width) <= 1200;
    }
    build(context) {
      return new layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
          let t0, t0$;
          if (dart.notNull(constraints.maxWidth) > 1200) {
            return this.largeScreen;
          } else if (dart.notNull(constraints.maxWidth) <= 1200 && dart.notNull(constraints.maxWidth) >= 800) {
            t0 = this.mediumScreen;
            return t0 == null ? this.largeScreen : t0;
          } else {
            t0$ = this.smallScreen;
            return t0$ == null ? this.largeScreen : t0$;
          }
        }, BuildContextAndBoxConstraintsToWidget()), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (responsive_widget.ResponsiveWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let largeScreen = opts && 'largeScreen' in opts ? opts.largeScreen : null;
    let mediumScreen = opts && 'mediumScreen' in opts ? opts.mediumScreen : null;
    let smallScreen = opts && 'smallScreen' in opts ? opts.smallScreen : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[largeScreen$] = largeScreen;
    this[mediumScreen$] = mediumScreen;
    this[smallScreen$] = smallScreen;
    responsive_widget.ResponsiveWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = responsive_widget.ResponsiveWidget.prototype;
  dart.addTypeTests(responsive_widget.ResponsiveWidget);
  dart.setMethodSignature(responsive_widget.ResponsiveWidget, () => ({
    __proto__: dart.getMethods(responsive_widget.ResponsiveWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(responsive_widget.ResponsiveWidget, "package:codiet/utils/responsive_widget.dart");
  dart.setFieldSignature(responsive_widget.ResponsiveWidget, () => ({
    __proto__: dart.getFields(responsive_widget.ResponsiveWidget.__proto__),
    largeScreen: dart.finalFieldType(framework.Widget),
    mediumScreen: dart.finalFieldType(framework.Widget),
    smallScreen: dart.finalFieldType(framework.Widget)
  }));
  dart.trackLibraries("packages/codiet/utils/responsive_widget", {
    "package:codiet/utils/responsive_widget.dart": responsive_widget
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["responsive_widget.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGe;;;;;;IACA;;;;;;IACA;;;;;;yBAS0B;AACrC,YAAyC,cAAvB,AAAY,AAAK,0BAAd,OAAO,gBAAe;IAC7C;yBAEuC;AACrC,YAAyC,cAAvB,AAAY,AAAK,0BAAd,OAAO,gBAAe;IAC7C;0BAEwC;AACtC,YAAyC,AAAO,cAA9B,AAAY,AAAK,0BAAd,OAAO,iBAAgB,OACF,aAAvB,AAAY,AAAK,0BAAd,OAAO,iBAAgB;IAC/C;UAG0B;AACxB,YAAO,gDACI,SAAC,SAAS;;AACjB,cAAyB,aAArB,AAAY,WAAD,aAAY;AACzB,kBAAO;gBACF,KAAyB,aAArB,AAAY,WAAD,cAAa,QAA6B,aAArB,AAAY,WAAD,cAAa;AACjE,iBAAO;gCAAgB;;AAEvB,kBAAO;iCAAe;;;IAI9B;;;QAhCS;QACU;QACV;QACA;;IAFU;IACV;IACA;AACH,sEAAW,GAAG;;EAAC","file":"responsive_widget.ddc.js"}');
  // Exports:
  return {
    utils__responsive_widget: responsive_widget
  };
});

//# sourceMappingURL=responsive_widget.ddc.js.map
