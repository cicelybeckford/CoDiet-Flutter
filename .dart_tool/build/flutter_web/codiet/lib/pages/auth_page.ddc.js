define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/codiet/utils/auth', 'packages/firebase/firebase', 'packages/flutter/material', 'packages/codiet/utils/centered_view', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__codiet__utils__auth, packages__firebase__firebase, packages__flutter__material, packages__codiet__utils__centered_view, packages__flutter__src__painting___network_image_web, packages__flutter__src__gestures__arena, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const form = packages__flutter__src__widgets__actions.src__widgets__form;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const heroes = packages__flutter__src__widgets__actions.src__widgets__heroes;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const auth = packages__codiet__utils__auth.utils__auth;
  const top_level = packages__firebase__firebase.src__top_level;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const colors = packages__flutter__material.src__material__colors;
  const circle_avatar = packages__flutter__material.src__material__circle_avatar;
  const text_form_field = packages__flutter__material.src__material__text_form_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const icons = packages__flutter__material.src__material__icons;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const outline_button = packages__flutter__material.src__material__outline_button;
  const centered_view = packages__codiet__utils__centered_view.utils__centered_view;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const rounded_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const text_input = packages__flutter__src__gestures__arena.src__services__text_input;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const auth_page = Object.create(dart.library);
  const $toString = dartx.toString;
  const $isEmpty = dartx.isEmpty;
  const $trim = dartx.trim;
  let GlobalKeyOfFormState = () => (GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 105,
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
        [_Location_column]: 26,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C10() {
      return C10 = dart.constList([], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 119,
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
        [_Location_column]: 12,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 135,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkWrap",
        [_Location_column]: 13,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 130,
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
        [_Location_column]: 22,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 11,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 9,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 153,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 30,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 167,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 11,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "radius",
        [_Location_column]: 11,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46, C47 || CT.C47], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50, C51 || CT.C51], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 162,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tag",
        [_Location_column]: 7,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 50,
        [EdgeInsets_left]: 0
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 21,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 182,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 9,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 9,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 9,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 9,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 9,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64, C65 || CT.C65, C66 || CT.C66, C67 || CT.C67, C68 || CT.C68], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 176,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 174,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 15,
        [EdgeInsets_left]: 0
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 21,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76, C77 || CT.C77], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 201,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 9,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 9,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 9,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 9,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 9,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80, C81 || CT.C81, C82 || CT.C82, C83 || CT.C83, C84 || CT.C84, C85 || CT.C85], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 195,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88, C89 || CT.C89], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 193,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 44,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 226,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92, C93 || CT.C93], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C91 || CT.C91,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 225,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 15,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 15,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 227,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96, C97 || CT.C97, C98 || CT.C98, C99 || CT.C99, C100 || CT.C100], widget_inspector._Location);
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C95 || CT.C95,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 220,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103, C104 || CT.C104, C105 || CT.C105], widget_inspector._Location);
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C102 || CT.C102,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 217,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 44,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 238,
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
        [_Location_column]: 26,
        [_Location_line]: 237,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 15,
        [_Location_line]: 234,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusColor",
        [_Location_column]: 15,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 239,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112, C113 || CT.C113, C114 || CT.C114, C115 || CT.C115], widget_inspector._Location);
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C111 || CT.C111,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 233,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 233,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.constList([C118 || CT.C118, C119 || CT.C119, C120 || CT.C120], widget_inspector._Location);
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 230,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123, C124 || CT.C124], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 214,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127, C128 || CT.C128], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 212,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/auth_page.dart"
      });
    }
  });
  const auth$ = dart.privateName(auth_page, "AuthPage.auth");
  const loginCallback$ = dart.privateName(auth_page, "AuthPage.loginCallback");
  const signupCallback$ = dart.privateName(auth_page, "AuthPage.signupCallback");
  auth_page.AuthPage = class AuthPage extends framework.StatefulWidget {
    get auth() {
      return this[auth$];
    }
    set auth(value) {
      super.auth = value;
    }
    get loginCallback() {
      return this[loginCallback$];
    }
    set loginCallback(value) {
      super.loginCallback = value;
    }
    get signupCallback() {
      return this[signupCallback$];
    }
    set signupCallback(value) {
      super.signupCallback = value;
    }
    createState() {
      return new auth_page._AuthPage.new();
    }
  };
  (auth_page.AuthPage.new = function(opts) {
    let auth = opts && 'auth' in opts ? opts.auth : null;
    let loginCallback = opts && 'loginCallback' in opts ? opts.loginCallback : null;
    let signupCallback = opts && 'signupCallback' in opts ? opts.signupCallback : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[auth$] = auth;
    this[loginCallback$] = loginCallback;
    this[signupCallback$] = signupCallback;
    auth_page.AuthPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = auth_page.AuthPage.prototype;
  dart.addTypeTests(auth_page.AuthPage);
  dart.setMethodSignature(auth_page.AuthPage, () => ({
    __proto__: dart.getMethods(auth_page.AuthPage.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(auth_page.AuthPage, "package:codiet/pages/auth_page.dart");
  dart.setFieldSignature(auth_page.AuthPage, () => ({
    __proto__: dart.getFields(auth_page.AuthPage.__proto__),
    auth: dart.finalFieldType(auth.BaseAuth),
    loginCallback: dart.finalFieldType(dart.fnType(dart.void, [])),
    signupCallback: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  const _formKey = dart.privateName(auth_page, "_formKey");
  const _email = dart.privateName(auth_page, "_email");
  const _password = dart.privateName(auth_page, "_password");
  const _errorMessage = dart.privateName(auth_page, "_errorMessage");
  const _isLoginForm = dart.privateName(auth_page, "_isLoginForm");
  const _isLoading = dart.privateName(auth_page, "_isLoading");
  const _showForm = dart.privateName(auth_page, "_showForm");
  const _showCircularProgress = dart.privateName(auth_page, "_showCircularProgress");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C4;
  let C3;
  let C8;
  let C7;
  let C6;
  let C10;
  let C9;
  let C13;
  let C12;
  let C11;
  let C16;
  let C17;
  let C15;
  let C14;
  let C20;
  let C19;
  let C18;
  let C23;
  let C24;
  let C22;
  let C21;
  let C27;
  let C28;
  let C26;
  let C25;
  let C31;
  let C32;
  let C30;
  let C29;
  let C35;
  let C36;
  let C34;
  let C33;
  let C39;
  let C38;
  let C37;
  let C42;
  let C41;
  let C40;
  let C45;
  let C46;
  let C47;
  let C44;
  let C43;
  let C50;
  let C51;
  let C49;
  let C48;
  let C54;
  let C55;
  let C53;
  let C52;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C56;
  let C59;
  let C60;
  let C58;
  let C57;
  let C63;
  let C64;
  let C65;
  let C66;
  let C67;
  let C68;
  let C62;
  let C61;
  let C71;
  let C72;
  let C70;
  let C69;
  let C73;
  let C76;
  let C77;
  let C75;
  let C74;
  let C80;
  let C81;
  let C82;
  let C83;
  let C84;
  let C85;
  let C79;
  let C78;
  let C88;
  let C89;
  let C87;
  let C86;
  let C92;
  let C93;
  let C91;
  let C90;
  let C96;
  let C97;
  let C98;
  let C99;
  let C100;
  let C95;
  let C94;
  let C103;
  let C104;
  let C105;
  let C102;
  let C101;
  let C108;
  let C109;
  let C107;
  let C106;
  let C112;
  let C113;
  let C114;
  let C115;
  let C111;
  let C110;
  let C118;
  let C119;
  let C120;
  let C117;
  let C116;
  let C123;
  let C124;
  let C122;
  let C121;
  let C127;
  let C128;
  let C126;
  let C125;
  auth_page._AuthPage = class _AuthPage extends framework.State$(auth_page.AuthPage) {
    validateAndSave() {
      let form = this[_formKey].currentState;
      if (dart.test(form.validate())) {
        form.save();
        return true;
      }
      return false;
    }
    validateAndSubmit() {
      return async.async(dart.void, (function* validateAndSubmit() {
        this.setState(dart.fn(() => {
          this[_errorMessage] = "";
          this[_isLoading] = true;
        }, VoidToNull()));
        if (dart.test(this.validateAndSave())) {
          let userId = "";
          try {
            if (dart.test(this[_isLoginForm])) {
              userId = (yield this.widget.auth.signIn(this[_email], this[_password]));
            } else {
              userId = (yield this.widget.auth.signUp(this[_email], this[_password]));
            }
            this.setState(dart.fn(() => {
              this[_isLoading] = false;
            }, VoidToNull()));
            if (userId.length > 0 && userId != null) {
              if (dart.test(this[_isLoginForm])) {
                this.widget.loginCallback();
              } else {
                let ref = top_level.database().ref("users/" + dart.notNull(userId));
                let map = new (IdentityMapOfString$String()).from(["completeSignUp", "false"]);
                yield ref.set(map);
                this.widget.signupCallback();
              }
            }
          } catch (e$) {
            let e = dart.getThrown(e$);
            core.print("Error: " + dart.str(e));
            this.setState(dart.fn(() => {
              this[_isLoading] = false;
              this[_errorMessage] = dart.toString(dart.dload(e, 'message'));
              this[_formKey].currentState.reset();
            }, VoidToNull()));
          }
        }
      }).bind(this));
    }
    initState() {
      this[_errorMessage] = "";
      this[_isLoading] = false;
      this[_isLoginForm] = true;
      super.initState();
    }
    resetForm() {
      this[_formKey].currentState.reset();
      this[_errorMessage] = "";
    }
    toggleFormMode() {
      this.resetForm();
      this.setState(dart.fn(() => {
        this[_isLoginForm] = !dart.test(this[_isLoginForm]);
      }, VoidToNull()));
    }
    build(context) {
      return new scaffold.Scaffold.new({body: new centered_view.CenteredView.new({child: new basic.Stack.new({children: JSArrayOfWidget().of([this[_showForm](), this[_showCircularProgress]()]), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6});
    }
    [_showCircularProgress]() {
      if (dart.test(this[_isLoading])) {
        return new basic.Center.new({child: new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11});
      }
      return new container.Container.new({height: 0.0, width: 0.0, $creationLocationd_0dea112b090073317d4: C14 || CT.C14});
    }
    [_showForm]() {
      return new container.Container.new({padding: new edge_insets.EdgeInsets.all(10.0), child: new form.Form.new({key: this[_formKey], child: new scroll_view.ListView.new({shrinkWrap: true, children: JSArrayOfWidget().of([this.showLogo(), this.showEmailInput(), this.showPasswordInput(), this.showButtons(), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), this.showErrorMessage()]), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29});
    }
    showErrorMessage() {
      if (this[_errorMessage].length > 0 && this[_errorMessage] != null) {
        return new text.Text.new(this[_errorMessage], {style: new text_style.TextStyle.new({fontSize: 13.0, color: colors.Colors.red, height: 1.0, fontWeight: ui.FontWeight.w300}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33});
      } else {
        return new container.Container.new({height: 0.0, $creationLocationd_0dea112b090073317d4: C37 || CT.C37});
      }
    }
    showLogo() {
      return new heroes.Hero.new({tag: "hero", child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.fromLTRB(0.0, 70.0, 0.0, 0.0), child: new circle_avatar.CircleAvatar.new({backgroundColor: colors.Colors.transparent, radius: 70.0, child: new image.Image.asset("assets/logo2.png", {$creationLocationd_0dea112b090073317d4: C40 || CT.C40}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52});
    }
    showEmailInput() {
      return new basic.Padding.new({padding: C56 || CT.C56, child: new text_form_field.TextFormField.new({maxLines: 1, keyboardType: text_input.TextInputType.emailAddress, autofocus: false, decoration: new input_decorator.InputDecoration.new({hintText: "Email", icon: new icon.Icon.new(icons.Icons.mail, {color: colors.Colors.grey, $creationLocationd_0dea112b090073317d4: C57 || CT.C57})}), validator: dart.fn(value => value[$isEmpty] ? "Email can't be empty" : null, StringToString()), onSaved: dart.fn(value => this[_email] = value[$trim](), StringToString()), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), $creationLocationd_0dea112b090073317d4: C69 || CT.C69});
    }
    showPasswordInput() {
      return new basic.Padding.new({padding: C73 || CT.C73, child: new text_form_field.TextFormField.new({maxLines: 1, obscureText: true, autofocus: false, decoration: new input_decorator.InputDecoration.new({hintText: "Password", icon: new icon.Icon.new(icons.Icons.lock, {color: colors.Colors.grey, $creationLocationd_0dea112b090073317d4: C74 || CT.C74})}), validator: dart.fn(value => value[$isEmpty] ? "Password can't be empty" : null, StringToString()), onSaved: dart.fn(value => this[_password] = value[$trim](), StringToString()), $creationLocationd_0dea112b090073317d4: C78 || CT.C78}), $creationLocationd_0dea112b090073317d4: C86 || CT.C86});
    }
    showButtons() {
      return new basic.Padding.new({padding: new edge_insets.EdgeInsets.fromLTRB(0.0, 40.0, 0.0, 0.0), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 40.0, width: 230.0, child: new raised_button.RaisedButton.new({elevation: 1.0, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(30.0)}), color: colors.Colors.blue, child: new text.Text.new(dart.test(this[_isLoginForm]) ? "Login" : "Create account", {style: new text_style.TextStyle.new({fontSize: 15.0, color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C90 || CT.C90}), onPressed: dart.bind(this, 'validateAndSubmit'), $creationLocationd_0dea112b090073317d4: C94 || CT.C94}), $creationLocationd_0dea112b090073317d4: C101 || CT.C101}), new basic.SizedBox.new({height: 40.0, width: 230.0, child: new outline_button.OutlineButton.new({shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(30.0)}), focusColor: colors.Colors.blue, child: new text.Text.new(dart.test(this[_isLoginForm]) ? "Create an account" : "Have an account? Sign in", {style: new text_style.TextStyle.new({fontSize: 15.0, color: colors.Colors.blue}), $creationLocationd_0dea112b090073317d4: C106 || CT.C106}), onPressed: dart.bind(this, 'toggleFormMode'), $creationLocationd_0dea112b090073317d4: C110 || CT.C110}), $creationLocationd_0dea112b090073317d4: C116 || CT.C116})]), $creationLocationd_0dea112b090073317d4: C121 || CT.C121}), $creationLocationd_0dea112b090073317d4: C125 || CT.C125});
    }
  };
  (auth_page._AuthPage.new = function() {
    this[_formKey] = GlobalKeyOfFormState().new();
    this[_email] = null;
    this[_password] = null;
    this[_errorMessage] = null;
    this[_isLoginForm] = null;
    this[_isLoading] = null;
    auth_page._AuthPage.__proto__.new.call(this);
    ;
  }).prototype = auth_page._AuthPage.prototype;
  dart.addTypeTests(auth_page._AuthPage);
  dart.setMethodSignature(auth_page._AuthPage, () => ({
    __proto__: dart.getMethods(auth_page._AuthPage.__proto__),
    validateAndSave: dart.fnType(core.bool, []),
    validateAndSubmit: dart.fnType(dart.void, []),
    resetForm: dart.fnType(dart.void, []),
    toggleFormMode: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_showCircularProgress]: dart.fnType(framework.Widget, []),
    [_showForm]: dart.fnType(framework.Widget, []),
    showErrorMessage: dart.fnType(framework.Widget, []),
    showLogo: dart.fnType(framework.Widget, []),
    showEmailInput: dart.fnType(framework.Widget, []),
    showPasswordInput: dart.fnType(framework.Widget, []),
    showButtons: dart.fnType(framework.Widget, [])
  }));
  dart.setLibraryUri(auth_page._AuthPage, "package:codiet/pages/auth_page.dart");
  dart.setFieldSignature(auth_page._AuthPage, () => ({
    __proto__: dart.getFields(auth_page._AuthPage.__proto__),
    [_formKey]: dart.finalFieldType(framework.GlobalKey$(form.FormState)),
    [_email]: dart.fieldType(core.String),
    [_password]: dart.fieldType(core.String),
    [_errorMessage]: dart.fieldType(core.String),
    [_isLoginForm]: dart.fieldType(core.bool),
    [_isLoading]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/codiet/pages/auth_page", {
    "package:codiet/pages/auth_page.dart": auth_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auth_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAUiB;;;;;;IACI;;;;;;IACA;;;;;;;AAGoB,YAAI;IAAW;;;QAPvC;QAAW;QAAoB;;IAA/B;IAAW;IAAoB;AAA9C;;EAA8D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwBtD,iBAAO,AAAS;AACtB,oBAAI,AAAK,IAAD;AACK,QAAX,AAAK,IAAD;AACJ,cAAO;;AAET,YAAO;IACT;;AAGsB;AAIlB,QAHF,cAAS;AACW,UAAlB,sBAAgB;AACC,UAAjB,mBAAa;;AAEf,sBAAI;AACK,uBAAS;AAChB;AACE,0BAAI;AACkD,cAApD,UAAS,MAAM,AAAO,AAAK,wBAAO,cAAQ;;AAEU,cAApD,UAAS,MAAM,AAAO,AAAK,wBAAO,cAAQ;;AAI1C,YAFF,cAAS;AACW,cAAlB,mBAAa;;AAGf,gBAAI,AAAO,AAAO,MAAR,UAAU,KAAK,MAAM,IAAI;AACjC,4BAAI;AACoB,gBAAtB,AAAO;;AAEoB,0BAAM,AAAc,yBAAI,AAAS,wBAAE,MAAM;AAChE,0BAAM,yCAAC,kBAAkB;AACX,gBAAlB,MAAM,AAAI,GAAD,KAAK,GAAG;AACM,gBAAvB,AAAO;;;;gBAGJ;AACW,YAAlB,WAAM,AAAW,qBAAF,CAAC;AAKd,YAJF,cAAS;AACW,cAAlB,mBAAa;AACuB,cAApC,sBAA0B,cAAR,WAAF,CAAC;AACY,cAA7B,AAAS,AAAa;;;;MAI9B;;;AAIoB,MAAlB,sBAAgB;AACE,MAAlB,mBAAa;AACM,MAAnB,qBAAe;AACE,MAAX;IACR;;AAG+B,MAA7B,AAAS,AAAa;AACJ,MAAlB,sBAAgB;IAClB;;AAGa,MAAX;AAGE,MAFF,cAAS;AACqB,QAA5B,qBAAe,WAAC;;IAEpB;UAG0B;AACxB,YAAW,kCACD,2CACW,+BACK,sBAChB,mBACA;IAIZ;;AAGE,oBAAI;AACF,cAAO,8BAAc;;AAEvB,YAAO,sCACG,YACD;IAEX;;AAGE,YAAW,uCACa,+BAAI,cACb,wBACJ,uBACM,0CACG,gBACM,sBAChB,iBACA,uBACA,0BACA,oBACA,gCAAiB,+DACjB;IAIZ;;AAGE,UAAI,AAAc,AAAO,6BAAE,KAAK,uBAAiB;AAC/C,cAAW,mBACT,6BACO,wCACO,aACI,2BACN,iBACe;;AAG7B,cAAW,sCACD;;IAGd;;AAGE,YAAW,2BACJ,eACE,gCACe,oCAAS,KAAK,MAAM,KAAK,aACtC,qDACmB,mCAChB,aACK,sBAAM;IAI3B;;AAGE,YAAO,uDAEM,iDACC,iBACkB,kDACjB,mBACK,mDACF,eACA,kBACF,0BACQ,0FAET,QAAC,SAAU,AAAM,KAAD,aAAW,yBAA0B,kCACvD,QAAC,SAAU,eAAS,AAAM,KAAD;IAGxC;;AAGE,YAAO,uDAEM,iDACC,gBACG,iBACF,mBACK,mDACF,kBACA,kBACF,0BACQ,0FAET,QAAC,SAAU,AAAM,KAAD,aAAW,4BAA6B,kCAC1D,QAAC,SAAU,kBAAY,AAAM,KAAD;IAG3C;;AAGE,YAAW,iCACa,oCAAS,KAAK,MAAM,KAAK,aACtC,sCACgC,8CACnB,sBAClB,gCACU,aACD,cACI,+CACE,YACA,uEACW,wCAAsB,gBAC9B,2BACH,4BAAK,sBAAe,UAAU,0BAC1B,wCAAoB,aAAoB,qGAC5C,gJAGf,gCACU,aACD,cACI,6CACE,uEACW,wCAAsB,qBACzB,2BACR,4BAAK,sBAAe,sBAAsB,oCACtC,wCAAoB,aAAoB,sGAC5C;IAMvB;;;IA/NM,iBAAe;IAEd;IACA;IACA;IAEF;IACA;;;EAyNP","file":"auth_page.ddc.js"}');
  // Exports:
  return {
    pages__auth_page: auth_page
  };
});

//# sourceMappingURL=auth_page.ddc.js.map
