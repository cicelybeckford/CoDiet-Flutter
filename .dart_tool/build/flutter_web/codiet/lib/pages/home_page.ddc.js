define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/codiet/utils/auth', 'packages/firebase/firebase', 'packages/firebase/src/app', 'packages/codiet/utils/responsive_widget', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web', 'packages/intl/intl', 'packages/percent_indicator/circular_percent_indicator'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__codiet__utils__auth, packages__firebase__firebase, packages__firebase__src__app, packages__codiet__utils__responsive_widget, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web, packages__intl__intl, packages__percent_indicator__circular_percent_indicator) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const form = packages__flutter__src__widgets__actions.src__widgets__form;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const implicit_animations = packages__flutter__src__widgets__actions.src__widgets__implicit_animations;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const auth = packages__codiet__utils__auth.utils__auth;
  const top_level = packages__firebase__firebase.src__top_level;
  const database = packages__firebase__src__app.src__database;
  const responsive_widget = packages__codiet__utils__responsive_widget.utils__responsive_widget;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const colors = packages__flutter__material.src__material__colors;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const drawer = packages__flutter__material.src__material__drawer;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const outline_button = packages__flutter__material.src__material__outline_button;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const stadium_border = packages__flutter__src__painting___network_image_web.src__painting__stadium_border;
  const intl = packages__intl__intl.intl;
  const circular_percent_indicator = packages__percent_indicator__circular_percent_indicator.circular_percent_indicator;
  const home_page = Object.create(dart.library);
  const $open = dartx.open;
  const $add = dartx.add;
  const $toString = dartx.toString;
  let GlobalKeyOfFormState = () => (GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))();
  let DataSnapshotToNull = () => (DataSnapshotToNull = dart.constFn(dart.fnType(core.Null, [database.DataSnapshot])))();
  let QueryEventToNull = () => (QueryEventToNull = dart.constFn(dart.fnType(core.Null, [database.QueryEvent])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 11,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 11,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 11,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 11,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 17,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "navButtons",
        [_Location_column]: 23,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 11,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 11,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 20
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 124,
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
        [_Location_column]: 24,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C43() {
      return C43 = dart.constList([], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 21,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 133,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "largeScreen",
        [_Location_column]: 15,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 13,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56, C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "drawer",
        [_Location_column]: 9,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65, C66 || CT.C66, C67 || CT.C67], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "largeScreen",
        [_Location_column]: 7,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76, C77 || CT.C77, C78 || CT.C78], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "largeScreen",
        [_Location_column]: 7,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 156,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 0
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textScaleFactor",
        [_Location_column]: 27,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 49,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85, C86 || CT.C86, C87 || CT.C87], widget_inspector._Location);
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C84 || CT.C84,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90, C91 || CT.C91, C92 || CT.C92], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C89 || CT.C89,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 189,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textScaleFactor",
        [_Location_column]: 25,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95, C96 || CT.C96], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 198,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderSide",
        [_Location_column]: 7,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 7,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99, C100 || CT.C100, C101 || CT.C101], widget_inspector._Location);
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C98 || CT.C98,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 197,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 77,
        [_Location_line]: 235,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 234,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 240,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 241,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.constList([C108 || CT.C108, C109 || CT.C109], widget_inspector._Location);
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C107 || CT.C107,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 239,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "radius",
        [_Location_column]: 17,
        [_Location_line]: 228,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "lineWidth",
        [_Location_column]: 17,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 17,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "percent",
        [_Location_column]: 17,
        [_Location_line]: 233,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "center",
        [_Location_column]: 17,
        [_Location_line]: 234,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "footer",
        [_Location_column]: 17,
        [_Location_line]: 239,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "circularStrokeCap",
        [_Location_column]: 17,
        [_Location_line]: 244,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "progressColor",
        [_Location_column]: 17,
        [_Location_line]: 245,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112, C113 || CT.C113, C114 || CT.C114, C115 || CT.C115, C116 || CT.C116, C117 || CT.C117, C118 || CT.C118, C119 || CT.C119], widget_inspector._Location);
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C111 || CT.C111,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 227,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 227,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.constList([C122 || CT.C122, C123 || CT.C123, C124 || CT.C124], widget_inspector._Location);
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C121 || CT.C121,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 220,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 253,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 252,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 22,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textScaleFactor",
        [_Location_column]: 9,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 258,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.constList([C130 || CT.C130, C131 || CT.C131, C132 || CT.C132], widget_inspector._Location);
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 255,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 261,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.constList([C135 || CT.C135], widget_inspector._Location);
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C134 || CT.C134,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 260,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 63,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "softWrap",
        [_Location_column]: 9,
        [_Location_line]: 267,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textScaleFactor",
        [_Location_column]: 9,
        [_Location_line]: 268,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 269,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.constList([C138 || CT.C138, C139 || CT.C139, C140 || CT.C140, C141 || CT.C141], widget_inspector._Location);
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C137 || CT.C137,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 263,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 272,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.constList([C144 || CT.C144], widget_inspector._Location);
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C143 || CT.C143,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 271,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 279,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 42,
        [_Location_line]: 279,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.constList([C147 || CT.C147, C148 || CT.C148], widget_inspector._Location);
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C146 || CT.C146,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 279,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 13,
        [_Location_line]: 278,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 279,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 280,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 281,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 284,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.constList([C151 || CT.C151, C152 || CT.C152, C153 || CT.C153, C154 || CT.C154, C155 || CT.C155], widget_inspector._Location);
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C150 || CT.C150,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 277,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 287,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.constList([C158 || CT.C158], widget_inspector._Location);
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C157 || CT.C157,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 286,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 291,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 41,
        [_Location_line]: 291,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.constList([C161 || CT.C161, C162 || CT.C162], widget_inspector._Location);
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C160 || CT.C160,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 291,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 13,
        [_Location_line]: 290,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 291,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 292,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 293,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 296,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.constList([C165 || CT.C165, C166 || CT.C166, C167 || CT.C167, C168 || CT.C168, C169 || CT.C169], widget_inspector._Location);
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C164 || CT.C164,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 289,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 275,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 276,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.constList([C172 || CT.C172, C173 || CT.C173], widget_inspector._Location);
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C171 || CT.C171,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 274,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 5,
        [_Location_line]: 250,
        [_Location_file]: null
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 5,
        [_Location_line]: 251,
        [_Location_file]: null
      });
    },
    get C175() {
      return C175 = dart.constList([C176 || CT.C176, C177 || CT.C177], widget_inspector._Location);
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C175 || CT.C175,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 249,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 307,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 308,
        [_Location_file]: null
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 309,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.constList([C180 || CT.C180, C181 || CT.C181, C182 || CT.C182], widget_inspector._Location);
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C179 || CT.C179,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 306,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 317,
        [_Location_file]: null
      });
    },
    get C184() {
      return C184 = dart.constList([C185 || CT.C185], widget_inspector._Location);
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C184 || CT.C184,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 316,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 312,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 313,
        [_Location_file]: null
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 314,
        [_Location_file]: null
      });
    },
    get C187() {
      return C187 = dart.constList([C188 || CT.C188, C189 || CT.C189, C190 || CT.C190], widget_inspector._Location);
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C187 || CT.C187,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 311,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "largeScreen",
        [_Location_column]: 7,
        [_Location_line]: 306,
        [_Location_file]: null
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "smallScreen",
        [_Location_column]: 7,
        [_Location_line]: 311,
        [_Location_file]: null
      });
    },
    get C192() {
      return C192 = dart.constList([C193 || CT.C193, C194 || CT.C194], widget_inspector._Location);
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C192 || CT.C192,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 305,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/home_page.dart"
      });
    }
  });
  const auth$ = dart.privateName(home_page, "HomePage.auth");
  const logoutCallback$ = dart.privateName(home_page, "HomePage.logoutCallback");
  const userId$ = dart.privateName(home_page, "HomePage.userId");
  home_page.HomePage = class HomePage extends framework.StatefulWidget {
    get auth() {
      return this[auth$];
    }
    set auth(value) {
      super.auth = value;
    }
    get logoutCallback() {
      return this[logoutCallback$];
    }
    set logoutCallback(value) {
      super.logoutCallback = value;
    }
    get userId() {
      return this[userId$];
    }
    set userId(value) {
      super.userId = value;
    }
    createState() {
      return new home_page._HomePageState.new();
    }
  };
  (home_page.HomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let auth = opts && 'auth' in opts ? opts.auth : null;
    let userId = opts && 'userId' in opts ? opts.userId : null;
    let logoutCallback = opts && 'logoutCallback' in opts ? opts.logoutCallback : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[auth$] = auth;
    this[userId$] = userId;
    this[logoutCallback$] = logoutCallback;
    home_page.HomePage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home_page.HomePage.prototype;
  dart.addTypeTests(home_page.HomePage);
  dart.setMethodSignature(home_page.HomePage, () => ({
    __proto__: dart.getMethods(home_page.HomePage.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(home_page.HomePage, "package:codiet/pages/home_page.dart");
  dart.setFieldSignature(home_page.HomePage, () => ({
    __proto__: dart.getFields(home_page.HomePage.__proto__),
    auth: dart.finalFieldType(auth.BaseAuth),
    logoutCallback: dart.finalFieldType(dart.fnType(dart.void, [])),
    userId: dart.finalFieldType(core.String)
  }));
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C7;
  let C5;
  let C4;
  let C10;
  let C11;
  let C9;
  let C8;
  let C14;
  let C15;
  let C13;
  let C12;
  let C18;
  let C19;
  let C20;
  let C17;
  let C16;
  let C23;
  let C24;
  let C22;
  let C21;
  let C27;
  let C26;
  let C25;
  let C30;
  let C31;
  let C32;
  let C33;
  let C29;
  let C28;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C34;
  let C37;
  let C38;
  let C36;
  let C35;
  let C41;
  let C40;
  let C39;
  let C43;
  let C42;
  let C46;
  let C45;
  let C44;
  let C49;
  let C50;
  let C48;
  let C47;
  let C53;
  let C52;
  let C51;
  let C56;
  let C57;
  let C58;
  let C55;
  let C54;
  let C61;
  let C60;
  let C59;
  let C64;
  let C65;
  let C66;
  let C67;
  let C63;
  let C62;
  let C70;
  let C69;
  let C68;
  home_page._HomePageState = class _HomePageState extends framework.State$(home_page.HomePage) {
    initState() {
      super.initState();
      let ref = top_level.database().ref("users/" + dart.notNull(this.widget.userId));
      let snap = null;
      ref.limitToFirst(1).once("value").then(core.Null, dart.fn(e => {
        e.snapshot.forEach(dart.fn(snapshot => {
          snap = snapshot.val();
          core.print(snap);
          core.print(snap);
        }, DataSnapshotToNull()));
      }, QueryEventToNull()));
    }
    doSumn() {
      return async.async(dart.void, (function* doSumn() {
        let ref = top_level.database().ref("users/" + dart.notNull(this.widget.userId));
        let snap = null;
        yield ref.limitToFirst(1).once("value").then(core.Null, dart.fn(e => {
          e.snapshot.forEach(dart.fn(snapshot => {
            snap = snapshot.val();
            core.print(snap);
          }, DataSnapshotToNull()));
        }, QueryEventToNull()));
      }).bind(this));
    }
    signOut() {
      return async.async(dart.dynamic, (function* signOut() {
        try {
          yield this.widget.auth.signOut();
          this.widget.logoutCallback();
          this.widget.userId;
        } catch (e$) {
          let e = dart.getThrown(e$);
          core.print(e);
        }
      }).bind(this));
    }
    navButtons() {
      return JSArrayOfWidget().of([new home_page.NavButton.new({text: "Home", onPressed: dart.fn(() => {
            html.window[$open]("https://google.com", "CoDiet");
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new home_page.NavButton.new({text: "Journey", onPressed: dart.fn(() => {
            html.window[$open]("https://google.com", "CoDiet");
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new home_page.NavButton.new({text: "Summaries", onPressed: dart.fn(() => {
            html.window[$open]("https://google.com", "CoDiet");
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), new home_page.NavButton.new({text: "Logout", onPressed: dart.fn(() => {
            this.signOut();
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C12 || CT.C12})]);
    }
    build(context) {
      return new responsive_widget.ResponsiveWidget.new({largeScreen: new scaffold.Scaffold.new({backgroundColor: colors.Colors.white, appBar: new app_bar.AppBar.new({elevation: 1.5, backgroundColor: colors.Colors.blue._get(50), title: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new image.Image.asset("assets/logo.png", {width: 120.0, height: 150.0, $creationLocationd_0dea112b090073317d4: C16 || CT.C16})]), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), actions: JSArrayOfWidget().of([new home_page.NavHeader.new({navButtons: this.navButtons(), $creationLocationd_0dea112b090073317d4: C25 || CT.C25})]), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), drawer: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? new drawer.Drawer.new({child: new scroll_view.ListView.new({padding: C34 || CT.C34, children: this.navButtons(), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}) : null, body: new single_child_scroll_view.SingleChildScrollView.new({child: new implicit_animations.AnimatedPadding.new({duration: new core.Duration.new({seconds: 1}), padding: new edge_insets.EdgeInsets.all(0.0), child: new responsive_widget.ResponsiveWidget.new({largeScreen: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new home_page.ProfileInfo.new({$creationLocationd_0dea112b090073317d4: C42 || CT.C42}), new basic.SizedBox.new({height: dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.2, $creationLocationd_0dea112b090073317d4: C44 || CT.C44})]), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), $creationLocationd_0dea112b090073317d4: C54 || CT.C54}), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68});
    }
  };
  (home_page._HomePageState.new = function() {
    this.formKey = GlobalKeyOfFormState().new();
    this.cals_per_day = null;
    home_page._HomePageState.__proto__.new.call(this);
    ;
  }).prototype = home_page._HomePageState.prototype;
  dart.addTypeTests(home_page._HomePageState);
  dart.setMethodSignature(home_page._HomePageState, () => ({
    __proto__: dart.getMethods(home_page._HomePageState.__proto__),
    doSumn: dart.fnType(dart.void, []),
    signOut: dart.fnType(dart.dynamic, []),
    navButtons: dart.fnType(core.List$(framework.Widget), []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home_page._HomePageState, "package:codiet/pages/home_page.dart");
  dart.setFieldSignature(home_page._HomePageState, () => ({
    __proto__: dart.getFields(home_page._HomePageState.__proto__),
    formKey: dart.finalFieldType(framework.GlobalKey$(form.FormState)),
    cals_per_day: dart.fieldType(core.String)
  }));
  let C73;
  let C72;
  let C71;
  let C76;
  let C77;
  let C78;
  let C75;
  let C74;
  let C81;
  let C80;
  let C79;
  const navButtons$ = dart.privateName(home_page, "NavHeader.navButtons");
  home_page.NavHeader = class NavHeader extends framework.StatelessWidget {
    get navButtons() {
      return this[navButtons$];
    }
    set navButtons(value) {
      super.navButtons = value;
    }
    build(context) {
      return new responsive_widget.ResponsiveWidget.new({largeScreen: new basic.Row.new({mainAxisAlignment: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? flex.MainAxisAlignment.center : flex.MainAxisAlignment.spaceBetween, crossAxisAlignment: flex.CrossAxisAlignment.center, children: (() => {
            let t1 = JSArrayOfWidget().of([]);
            if (!dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context))) t1[$add](new basic.Row.new({children: this.navButtons, $creationLocationd_0dea112b090073317d4: C71 || CT.C71}));
            return t1;
          })(), $creationLocationd_0dea112b090073317d4: C74 || CT.C74}), $creationLocationd_0dea112b090073317d4: C79 || CT.C79});
    }
  };
  (home_page.NavHeader.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let navButtons = opts && 'navButtons' in opts ? opts.navButtons : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[navButtons$] = navButtons;
    home_page.NavHeader.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home_page.NavHeader.prototype;
  dart.addTypeTests(home_page.NavHeader);
  dart.setMethodSignature(home_page.NavHeader, () => ({
    __proto__: dart.getMethods(home_page.NavHeader.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home_page.NavHeader, "package:codiet/pages/home_page.dart");
  dart.setFieldSignature(home_page.NavHeader, () => ({
    __proto__: dart.getFields(home_page.NavHeader.__proto__),
    navButtons: dart.finalFieldType(core.List$(framework.Widget))
  }));
  const Color_value = dart.privateName(ui, "Color.value");
  let C82;
  let C85;
  let C86;
  let C87;
  let C84;
  let C83;
  let C90;
  let C91;
  let C92;
  let C89;
  let C88;
  let C95;
  let C96;
  let C94;
  let C93;
  let C99;
  let C100;
  let C101;
  let C98;
  let C97;
  const text$ = dart.privateName(home_page, "NavButton.text");
  const onPressed$ = dart.privateName(home_page, "NavButton.onPressed");
  const color$ = dart.privateName(home_page, "NavButton.color");
  home_page.NavButton = class NavButton extends framework.StatelessWidget {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    build(context) {
      if (dart.equals(this.text, "Home")) {
        return new flat_button.FlatButton.new({child: new text.Text.new(core.String._check(this.text), {textScaleFactor: 1.3, style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C83 || CT.C83}), color: colors.Colors.blue, onPressed: dart.fn(() => {
            html.window[$open]("https://google.com", "CoDiet");
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C88 || CT.C88});
      } else {
        return new outline_button.OutlineButton.new({child: new text.Text.new(core.String._check(this.text), {textScaleFactor: 1.3, $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), borderSide: new borders.BorderSide.new({color: this.color}), onPressed: VoidTovoid()._check(this.onPressed), $creationLocationd_0dea112b090073317d4: C97 || CT.C97});
      }
    }
  };
  (home_page.NavButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let color = opts && 'color' in opts ? opts.color : C82 || CT.C82;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$] = text;
    this[onPressed$] = onPressed;
    this[color$] = color;
    home_page.NavButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home_page.NavButton.prototype;
  dart.addTypeTests(home_page.NavButton);
  dart.setMethodSignature(home_page.NavButton, () => ({
    __proto__: dart.getMethods(home_page.NavButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home_page.NavButton, "package:codiet/pages/home_page.dart");
  dart.setFieldSignature(home_page.NavButton, () => ({
    __proto__: dart.getFields(home_page.NavButton.__proto__),
    text: dart.finalFieldType(dart.dynamic),
    onPressed: dart.finalFieldType(dart.dynamic),
    color: dart.finalFieldType(ui.Color)
  }));
  let C104;
  let C105;
  let C103;
  let C102;
  let C108;
  let C109;
  let C107;
  let C106;
  let C112;
  let C113;
  let C114;
  let C115;
  let C116;
  let C117;
  let C118;
  let C119;
  let C111;
  let C110;
  let C122;
  let C123;
  let C124;
  let C121;
  let C120;
  let C127;
  let C126;
  let C125;
  let C130;
  let C131;
  let C132;
  let C129;
  let C128;
  let C135;
  let C134;
  let C133;
  let C138;
  let C139;
  let C140;
  let C141;
  let C137;
  let C136;
  let C144;
  let C143;
  let C142;
  let C147;
  let C148;
  let C146;
  let C145;
  let C151;
  let C152;
  let C153;
  let C154;
  let C155;
  let C150;
  let C149;
  let C158;
  let C157;
  let C156;
  let C161;
  let C162;
  let C160;
  let C159;
  let C165;
  let C166;
  let C167;
  let C168;
  let C169;
  let C164;
  let C163;
  let C172;
  let C173;
  let C171;
  let C170;
  let C176;
  let C177;
  let C175;
  let C174;
  let C180;
  let C181;
  let C182;
  let C179;
  let C178;
  let C185;
  let C184;
  let C183;
  let C188;
  let C189;
  let C190;
  let C187;
  let C186;
  let C193;
  let C194;
  let C192;
  let C191;
  const name$ = dart.privateName(home_page, "ProfileInfo.name");
  const cals_per_day$ = dart.privateName(home_page, "ProfileInfo.cals_per_day");
  const cals_today$ = dart.privateName(home_page, "ProfileInfo.cals_today");
  const formattedDate = dart.privateName(home_page, "ProfileInfo.formattedDate");
  home_page.ProfileInfo = class ProfileInfo extends framework.StatelessWidget {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get cals_per_day() {
      return this[cals_per_day$];
    }
    set cals_per_day(value) {
      super.cals_per_day = value;
    }
    get cals_today() {
      return this[cals_today$];
    }
    set cals_today(value) {
      super.cals_today = value;
    }
    get formattedDate() {
      return this[formattedDate];
    }
    set formattedDate(value) {
      super.formattedDate = value;
    }
    profileImage(context) {
      return new container.Container.new({height: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(framework.BuildContext._check(context))) ? dart.notNull(media_query.MediaQuery.of(framework.BuildContext._check(context)).size.height) * 0.3 : dart.notNull(media_query.MediaQuery.of(framework.BuildContext._check(context)).size.width) * 0.3, width: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(framework.BuildContext._check(context))) ? dart.notNull(media_query.MediaQuery.of(framework.BuildContext._check(context)).size.height) * 0.3 : dart.notNull(media_query.MediaQuery.of(framework.BuildContext._check(context)).size.width) * 0.3, child: new circular_percent_indicator.CircularPercentIndicator.new({radius: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(framework.BuildContext._check(context))) ? dart.notNull(media_query.MediaQuery.of(framework.BuildContext._check(context)).size.height) * 0.25 : dart.notNull(media_query.MediaQuery.of(framework.BuildContext._check(context)).size.width) * 0.25, lineWidth: 25.0, animation: true, percent: 0.7, center: new text.Text.new((dart.notNull(core.int.parse(this.cals_today)) / dart.notNull(core.int.parse(this.cals_per_day)) * 100)[$toString](), {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C102 || CT.C102}), footer: new text.Text.new(this.formattedDate, {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: 27.0}), $creationLocationd_0dea112b090073317d4: C106 || CT.C106}), circularStrokeCap: circular_percent_indicator.CircularStrokeCap.round, progressColor: colors.Colors.blue, $creationLocationd_0dea112b090073317d4: C110 || CT.C110}), $creationLocationd_0dea112b090073317d4: C120 || CT.C120});
    }
    profileData(context) {
      return new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 100.0, $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), new text.Text.new("Hi " + dart.notNull(this.name) + " !", {textScaleFactor: 4.0, style: new text_style.TextStyle.new({color: colors.Colors.blue}), $creationLocationd_0dea112b090073317d4: C128 || CT.C128}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C133 || CT.C133}), new text.Text.new("Congrats! You've consumed\n" + dart.notNull(this.cals_today) + " out of your required" + dart.notNull(this.cals_per_day) + ("\n" + "calories."), {softWrap: true, textScaleFactor: 2.0, style: new text_style.TextStyle.new({color: colors.Colors.black}), $creationLocationd_0dea112b090073317d4: C136 || CT.C136}), new basic.SizedBox.new({height: 100.0, $creationLocationd_0dea112b090073317d4: C142 || CT.C142}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new raised_button.RaisedButton.new({shape: new stadium_border.StadiumBorder.new(), child: new text.Text.new("Update weight", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C145 || CT.C145}), color: colors.Colors.blue, onPressed: dart.fn(() => {
                  html.window[$open]("https://google.com", "CoDiet");
                }, VoidToNull()), padding: new edge_insets.EdgeInsets.all(15.0), $creationLocationd_0dea112b090073317d4: C149 || CT.C149}), new basic.SizedBox.new({width: 150.0, $creationLocationd_0dea112b090073317d4: C156 || CT.C156}), new raised_button.RaisedButton.new({shape: new stadium_border.StadiumBorder.new(), child: new text.Text.new("Add Calories", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C159 || CT.C159}), color: colors.Colors.blue, onPressed: dart.fn(() => {
                  html.window[$open]("https://google.com", "CoDiet");
                }, VoidToNull()), padding: new edge_insets.EdgeInsets.all(15.0), $creationLocationd_0dea112b090073317d4: C163 || CT.C163})]), $creationLocationd_0dea112b090073317d4: C170 || CT.C170})]), $creationLocationd_0dea112b090073317d4: C174 || CT.C174});
    }
    build(context) {
      return new responsive_widget.ResponsiveWidget.new({largeScreen: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([framework.Widget._check(this.profileImage(context)), framework.Widget._check(this.profileData(context))]), $creationLocationd_0dea112b090073317d4: C178 || CT.C178}), smallScreen: new basic.Column.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([framework.Widget._check(this.profileImage(context)), new basic.SizedBox.new({height: dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.1, $creationLocationd_0dea112b090073317d4: C183 || CT.C183}), framework.Widget._check(this.profileData(context))]), $creationLocationd_0dea112b090073317d4: C186 || CT.C186}), $creationLocationd_0dea112b090073317d4: C191 || CT.C191});
    }
  };
  (home_page.ProfileInfo.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let cals_per_day = opts && 'cals_per_day' in opts ? opts.cals_per_day : null;
    let cals_today = opts && 'cals_today' in opts ? opts.cals_today : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[formattedDate] = new intl.DateFormat.new("yMMMd").format(new core.DateTime.now());
    this[name$] = name;
    this[cals_per_day$] = cals_per_day;
    this[cals_today$] = cals_today;
    home_page.ProfileInfo.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home_page.ProfileInfo.prototype;
  dart.addTypeTests(home_page.ProfileInfo);
  dart.setMethodSignature(home_page.ProfileInfo, () => ({
    __proto__: dart.getMethods(home_page.ProfileInfo.__proto__),
    profileImage: dart.fnType(dart.dynamic, [dart.dynamic]),
    profileData: dart.fnType(dart.dynamic, [dart.dynamic]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home_page.ProfileInfo, "package:codiet/pages/home_page.dart");
  dart.setFieldSignature(home_page.ProfileInfo, () => ({
    __proto__: dart.getFields(home_page.ProfileInfo.__proto__),
    name: dart.finalFieldType(core.String),
    cals_per_day: dart.finalFieldType(core.String),
    cals_today: dart.finalFieldType(core.String),
    formattedDate: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/codiet/pages/home_page", {
    "package:codiet/pages/home_page.dart": home_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["home_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"home_page.ddc.js"}');
  // Exports:
  return {
    pages__home_page: home_page
  };
});

//# sourceMappingURL=home_page.ddc.js.map
