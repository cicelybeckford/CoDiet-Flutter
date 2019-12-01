define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/codiet/models/UserInfo', 'packages/intl/intl', 'packages/flutter/src/painting/_network_image_web', 'packages/firebase/firebase', 'packages/codiet/utils/centered_view', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__codiet__models__UserInfo, packages__intl__intl, packages__flutter__src__painting___network_image_web, packages__firebase__firebase, packages__codiet__utils__centered_view, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const form = packages__flutter__src__widgets__actions.src__widgets__form;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const date_picker = packages__flutter__material.src__material__date_picker;
  const colors = packages__flutter__material.src__material__colors;
  const snack_bar = packages__flutter__material.src__material__snack_bar;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const text_form_field = packages__flutter__material.src__material__text_form_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const dropdown = packages__flutter__material.src__material__dropdown;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const icons = packages__flutter__material.src__material__icons;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const UserInfo = packages__codiet__models__UserInfo.models__UserInfo;
  const intl = packages__intl__intl.intl;
  const colors$ = packages__flutter__src__painting___network_image_web.src__painting__colors;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const rounded_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const top_level = packages__firebase__firebase.src__top_level;
  const centered_view = packages__codiet__utils__centered_view.utils__centered_view;
  const text_formatter = packages__flutter__src__gestures__arena.src__services__text_formatter;
  const text_input = packages__flutter__src__gestures__arena.src__services__text_input;
  const data_page = Object.create(dart.library);
  const $_get = dartx._get;
  const $isEmpty = dartx.isEmpty;
  const $toString = dartx.toString;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let GlobalKeyOfFormState = () => (GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))();
  let GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let JSArrayOfTextInputFormatter = () => (JSArrayOfTextInputFormatter = dart.constFn(_interceptors.JSArray$(text_formatter.TextInputFormatter)))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let DropdownButtonOfString = () => (DropdownButtonOfString = dart.constFn(dropdown.DropdownButton$(core.String)))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let DropdownMenuItemOfString = () => (DropdownMenuItemOfString = dart.constFn(dropdown.DropdownMenuItem$(core.String)))();
  let StringToDropdownMenuItemOfString = () => (StringToDropdownMenuItemOfString = dart.constFn(dart.fnType(DropdownMenuItemOfString(), [core.String])))();
  let FormFieldStateToInputDecorator = () => (FormFieldStateToInputDecorator = dart.constFn(dart.fnType(input_decorator.InputDecorator, [form.FormFieldState])))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  let StringToDateTime = () => (StringToDateTime = dart.constFn(dart.fnType(core.DateTime, [core.String])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let StringTodouble = () => (StringTodouble = dart.constFn(dart.fnType(core.double, [core.String])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294962158.0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294954450.0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293892762.0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293227379.0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293874512.0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294198070.0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293212469.0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292030255.0
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4291176488.0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290190364.0
      });
    },
    get C1() {
      return C1 = dart.constMap(core.int, ui.Color, [50, C2 || CT.C2, 100, C3 || CT.C3, 200, C4 || CT.C4, 300, C5 || CT.C5, 400, C6 || CT.C6, 500, C7 || CT.C7, 600, C8 || CT.C8, 700, C9 || CT.C9, 800, C10 || CT.C10, 900, C11 || CT.C11]);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: colors.MaterialColor.prototype,
        [Color_value]: 4294198070.0,
        [ColorSwatch__swatch]: C1 || CT.C1
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 76,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 71,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 34,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 58,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 9,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 16
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59391
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C29 || CT.C29
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: null,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: null,
        [InputDecoration_counterStyle]: null,
        [InputDecoration_counter]: null,
        [InputDecoration_counterText]: null,
        [InputDecoration_suffixStyle]: null,
        [InputDecoration_suffixText]: null,
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: null,
        [InputDecoration_prefix]: null,
        [InputDecoration_prefixIcon]: null,
        [InputDecoration_isCollapsed]: false,
        [InputDecoration_contentPadding]: null,
        [InputDecoration_isDense]: null,
        [InputDecoration_hasFloatingPlaceholder]: true,
        [InputDecoration_errorMaxLines]: null,
        [InputDecoration_errorStyle]: null,
        [InputDecoration_errorText]: null,
        [InputDecoration_hintMaxLines]: null,
        [InputDecoration_hintStyle]: null,
        [InputDecoration_hintText]: "Enter your first name",
        [InputDecoration_helperMaxLines]: null,
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "Name",
        [InputDecoration_icon]: C28 || CT.C28
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "inputFormatters",
        [_Location_column]: 19,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 19,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 60227
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C36 || CT.C36
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 160,
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
        [_Location_column]: 42,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 158,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 27,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isDense",
        [_Location_column]: 27,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 27,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 27,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47, C48 || CT.C48, C49 || CT.C49], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 147,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isEmpty",
        [_Location_column]: 23,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 19,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 19,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59389
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C63 || CT.C63
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 193,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 31,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C68 || CT.C68,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 191,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 27,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isDense",
        [_Location_column]: 27,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 27,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 27,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73, C74 || CT.C74, C75 || CT.C75, C76 || CT.C76], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 180,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 179,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isEmpty",
        [_Location_column]: 23,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 19,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 19,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87, C88 || CT.C88], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59701
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C90 || CT.C90
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 25,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 25,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 25,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 25,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 25,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93, C94 || CT.C94, C95 || CT.C95, C96 || CT.C96, C97 || CT.C97], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 206,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100], widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 205,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 42,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103], widget_inspector._Location);
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C102 || CT.C102,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 219,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 21,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 21,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.constList([C106 || CT.C106, C107 || CT.C107, C108 || CT.C108], widget_inspector._Location);
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C105 || CT.C105,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 218,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.constList([C111 || CT.C111], widget_inspector._Location);
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C110 || CT.C110,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 204,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: null,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: null,
        [InputDecoration_counterStyle]: null,
        [InputDecoration_counter]: null,
        [InputDecoration_counterText]: null,
        [InputDecoration_suffixStyle]: null,
        [InputDecoration_suffixText]: null,
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: null,
        [InputDecoration_prefix]: null,
        [InputDecoration_prefixIcon]: null,
        [InputDecoration_isCollapsed]: false,
        [InputDecoration_contentPadding]: null,
        [InputDecoration_isDense]: null,
        [InputDecoration_hasFloatingPlaceholder]: true,
        [InputDecoration_errorMaxLines]: null,
        [InputDecoration_errorStyle]: null,
        [InputDecoration_errorText]: null,
        [InputDecoration_hintMaxLines]: null,
        [InputDecoration_hintStyle]: null,
        [InputDecoration_hintText]: "Enter your height (cm)",
        [InputDecoration_helperMaxLines]: null,
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "Height",
        [InputDecoration_icon]: C28 || CT.C28
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 227,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "inputFormatters",
        [_Location_column]: 19,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 19,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 19,
        [_Location_line]: 239,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.constList([C115 || CT.C115, C116 || CT.C116, C117 || CT.C117, C118 || CT.C118], widget_inspector._Location);
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C114 || CT.C114,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 226,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: null,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: null,
        [InputDecoration_counterStyle]: null,
        [InputDecoration_counter]: null,
        [InputDecoration_counterText]: null,
        [InputDecoration_suffixStyle]: null,
        [InputDecoration_suffixText]: null,
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: null,
        [InputDecoration_prefix]: null,
        [InputDecoration_prefixIcon]: null,
        [InputDecoration_isCollapsed]: false,
        [InputDecoration_contentPadding]: null,
        [InputDecoration_isDense]: null,
        [InputDecoration_hasFloatingPlaceholder]: true,
        [InputDecoration_errorMaxLines]: null,
        [InputDecoration_errorStyle]: null,
        [InputDecoration_errorText]: null,
        [InputDecoration_hintMaxLines]: null,
        [InputDecoration_hintStyle]: null,
        [InputDecoration_hintText]: "Enter your current weight (kg)",
        [InputDecoration_helperMaxLines]: null,
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "Current Weight",
        [InputDecoration_icon]: C28 || CT.C28
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 242,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "inputFormatters",
        [_Location_column]: 19,
        [_Location_line]: 247,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 19,
        [_Location_line]: 251,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 19,
        [_Location_line]: 254,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.constList([C122 || CT.C122, C123 || CT.C123, C124 || CT.C124, C125 || CT.C125], widget_inspector._Location);
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C121 || CT.C121,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 241,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58730
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C128 || CT.C128
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: null,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: null,
        [InputDecoration_counterStyle]: null,
        [InputDecoration_counter]: null,
        [InputDecoration_counterText]: null,
        [InputDecoration_suffixStyle]: null,
        [InputDecoration_suffixText]: null,
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: null,
        [InputDecoration_prefix]: null,
        [InputDecoration_prefixIcon]: null,
        [InputDecoration_isCollapsed]: false,
        [InputDecoration_contentPadding]: null,
        [InputDecoration_isDense]: null,
        [InputDecoration_hasFloatingPlaceholder]: true,
        [InputDecoration_errorMaxLines]: null,
        [InputDecoration_errorStyle]: null,
        [InputDecoration_errorText]: null,
        [InputDecoration_hintMaxLines]: null,
        [InputDecoration_hintStyle]: null,
        [InputDecoration_hintText]: "Enter your goal weight (kg)",
        [InputDecoration_helperMaxLines]: null,
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "Goal Weight",
        [InputDecoration_icon]: C127 || CT.C127
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "inputFormatters",
        [_Location_column]: 19,
        [_Location_line]: 262,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 19,
        [_Location_line]: 266,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 19,
        [_Location_line]: 269,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.constList([C131 || CT.C131, C132 || CT.C132, C133 || CT.C133, C134 || CT.C134], widget_inspector._Location);
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C130 || CT.C130,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 256,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 40
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 15,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C138 || CT.C138,
        [TextStyle_inherit]: true
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: C137 || CT.C137,
        [Text_textSpan]: null,
        [Text_data]: "Submit"
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 21,
        [_Location_line]: 274,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 21,
        [_Location_line]: 275,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 21,
        [_Location_line]: 277,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 278,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 279,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.constList([C141 || CT.C141, C142 || CT.C142, C143 || CT.C143, C144 || CT.C144, C145 || CT.C145], widget_inspector._Location);
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C140 || CT.C140,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 273,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 272,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 273,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.constList([C148 || CT.C148, C149 || CT.C149], widget_inspector._Location);
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C147 || CT.C147,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 271,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.constList([C152 || CT.C152, C153 || CT.C153], widget_inspector._Location);
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C151 || CT.C151,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 13,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autovalidate",
        [_Location_column]: 13,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.constList([C156 || CT.C156, C157 || CT.C157, C158 || CT.C158], widget_inspector._Location);
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C155 || CT.C155,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 11,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 11,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.constList([C161 || CT.C161, C162 || CT.C162, C163 || CT.C163], widget_inspector._Location);
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C160 || CT.C160,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.constList([C166 || CT.C166], widget_inspector._Location);
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C165 || CT.C165,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.constList([C169 || CT.C169, C170 || CT.C170, C171 || CT.C171], widget_inspector._Location);
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C168 || CT.C168,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/codiet/pages/data_page.dart"
      });
    }
  });
  const loginCallback$ = dart.privateName(data_page, "UserData.loginCallback");
  const userId$ = dart.privateName(data_page, "UserData.userId");
  data_page.UserData = class UserData extends framework.StatefulWidget {
    get loginCallback() {
      return this[loginCallback$];
    }
    set loginCallback(value) {
      super.loginCallback = value;
    }
    get userId() {
      return this[userId$];
    }
    set userId(value) {
      super.userId = value;
    }
    createState() {
      return new data_page._UserDataState.new();
    }
  };
  (data_page.UserData.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let userId = opts && 'userId' in opts ? opts.userId : null;
    let loginCallback = opts && 'loginCallback' in opts ? opts.loginCallback : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[userId$] = userId;
    this[loginCallback$] = loginCallback;
    data_page.UserData.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = data_page.UserData.prototype;
  dart.addTypeTests(data_page.UserData);
  dart.setMethodSignature(data_page.UserData, () => ({
    __proto__: dart.getMethods(data_page.UserData.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(data_page.UserData, "package:codiet/pages/data_page.dart");
  dart.setFieldSignature(data_page.UserData, () => ({
    __proto__: dart.getFields(data_page.UserData.__proto__),
    loginCallback: dart.finalFieldType(dart.fnType(dart.void, [])),
    userId: dart.finalFieldType(core.String)
  }));
  const _formKey = dart.privateName(data_page, "_formKey");
  const _scaffoldKey = dart.privateName(data_page, "_scaffoldKey");
  const _controller = dart.privateName(data_page, "_controller");
  const _levels = dart.privateName(data_page, "_levels");
  const _sexes = dart.privateName(data_page, "_sexes");
  const _activityLevel = dart.privateName(data_page, "_activityLevel");
  const _sex = dart.privateName(data_page, "_sex");
  const _chooseDate = dart.privateName(data_page, "_chooseDate");
  const Color_value = dart.privateName(ui, "Color.value");
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  let C1;
  const ColorSwatch__swatch = dart.privateName(colors$, "ColorSwatch._swatch");
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C14;
  let C13;
  let C12;
  let C17;
  let C18;
  let C16;
  let C15;
  let C21;
  let C20;
  let C19;
  let C24;
  let C25;
  let C23;
  let C22;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C26;
  const InputDecoration_alignLabelWithHint = dart.privateName(input_decorator, "InputDecoration.alignLabelWithHint");
  const InputDecoration_semanticCounterText = dart.privateName(input_decorator, "InputDecoration.semanticCounterText");
  const InputDecoration_enabled = dart.privateName(input_decorator, "InputDecoration.enabled");
  const InputDecoration_border = dart.privateName(input_decorator, "InputDecoration.border");
  const InputDecoration_enabledBorder = dart.privateName(input_decorator, "InputDecoration.enabledBorder");
  const InputDecoration_disabledBorder = dart.privateName(input_decorator, "InputDecoration.disabledBorder");
  const InputDecoration_focusedErrorBorder = dart.privateName(input_decorator, "InputDecoration.focusedErrorBorder");
  const InputDecoration_focusedBorder = dart.privateName(input_decorator, "InputDecoration.focusedBorder");
  const InputDecoration_errorBorder = dart.privateName(input_decorator, "InputDecoration.errorBorder");
  const InputDecoration_hoverColor = dart.privateName(input_decorator, "InputDecoration.hoverColor");
  const InputDecoration_focusColor = dart.privateName(input_decorator, "InputDecoration.focusColor");
  const InputDecoration_fillColor = dart.privateName(input_decorator, "InputDecoration.fillColor");
  const InputDecoration_filled = dart.privateName(input_decorator, "InputDecoration.filled");
  const InputDecoration_counterStyle = dart.privateName(input_decorator, "InputDecoration.counterStyle");
  const InputDecoration_counter = dart.privateName(input_decorator, "InputDecoration.counter");
  const InputDecoration_counterText = dart.privateName(input_decorator, "InputDecoration.counterText");
  const InputDecoration_suffixStyle = dart.privateName(input_decorator, "InputDecoration.suffixStyle");
  const InputDecoration_suffixText = dart.privateName(input_decorator, "InputDecoration.suffixText");
  const InputDecoration_suffix = dart.privateName(input_decorator, "InputDecoration.suffix");
  const InputDecoration_suffixIcon = dart.privateName(input_decorator, "InputDecoration.suffixIcon");
  const InputDecoration_prefixStyle = dart.privateName(input_decorator, "InputDecoration.prefixStyle");
  const InputDecoration_prefixText = dart.privateName(input_decorator, "InputDecoration.prefixText");
  const InputDecoration_prefix = dart.privateName(input_decorator, "InputDecoration.prefix");
  const InputDecoration_prefixIcon = dart.privateName(input_decorator, "InputDecoration.prefixIcon");
  const InputDecoration_isCollapsed = dart.privateName(input_decorator, "InputDecoration.isCollapsed");
  const InputDecoration_contentPadding = dart.privateName(input_decorator, "InputDecoration.contentPadding");
  const InputDecoration_isDense = dart.privateName(input_decorator, "InputDecoration.isDense");
  const InputDecoration_hasFloatingPlaceholder = dart.privateName(input_decorator, "InputDecoration.hasFloatingPlaceholder");
  const InputDecoration_errorMaxLines = dart.privateName(input_decorator, "InputDecoration.errorMaxLines");
  const InputDecoration_errorStyle = dart.privateName(input_decorator, "InputDecoration.errorStyle");
  const InputDecoration_errorText = dart.privateName(input_decorator, "InputDecoration.errorText");
  const InputDecoration_hintMaxLines = dart.privateName(input_decorator, "InputDecoration.hintMaxLines");
  const InputDecoration_hintStyle = dart.privateName(input_decorator, "InputDecoration.hintStyle");
  const InputDecoration_hintText = dart.privateName(input_decorator, "InputDecoration.hintText");
  const InputDecoration_helperMaxLines = dart.privateName(input_decorator, "InputDecoration.helperMaxLines");
  const InputDecoration_helperStyle = dart.privateName(input_decorator, "InputDecoration.helperStyle");
  const InputDecoration_helperText = dart.privateName(input_decorator, "InputDecoration.helperText");
  const InputDecoration_labelStyle = dart.privateName(input_decorator, "InputDecoration.labelStyle");
  const InputDecoration_labelText = dart.privateName(input_decorator, "InputDecoration.labelText");
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C29;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C28;
  const InputDecoration_icon = dart.privateName(input_decorator, "InputDecoration.icon");
  let C27;
  let C32;
  let C33;
  let C34;
  let C31;
  let C30;
  let C36;
  let C35;
  let C39;
  let C38;
  let C37;
  let C42;
  let C43;
  let C41;
  let C40;
  let C46;
  let C47;
  let C48;
  let C49;
  let C45;
  let C44;
  let C52;
  let C51;
  let C50;
  let C55;
  let C56;
  let C57;
  let C54;
  let C53;
  let C60;
  let C61;
  let C59;
  let C58;
  let C63;
  let C62;
  let C66;
  let C65;
  let C64;
  let C69;
  let C70;
  let C68;
  let C67;
  let C73;
  let C74;
  let C75;
  let C76;
  let C72;
  let C71;
  let C79;
  let C78;
  let C77;
  let C82;
  let C83;
  let C84;
  let C81;
  let C80;
  let C87;
  let C88;
  let C86;
  let C85;
  let C90;
  let C89;
  let C93;
  let C94;
  let C95;
  let C96;
  let C97;
  let C92;
  let C91;
  let C100;
  let C99;
  let C98;
  let C103;
  let C102;
  let C101;
  let C106;
  let C107;
  let C108;
  let C105;
  let C104;
  let C111;
  let C110;
  let C109;
  let C112;
  let C115;
  let C116;
  let C117;
  let C118;
  let C114;
  let C113;
  let C119;
  let C122;
  let C123;
  let C124;
  let C125;
  let C121;
  let C120;
  let C128;
  let C127;
  let C126;
  let C131;
  let C132;
  let C133;
  let C134;
  let C130;
  let C129;
  let C135;
  const Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  const Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  const Text_maxLines = dart.privateName(text, "Text.maxLines");
  const Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  const Text_overflow = dart.privateName(text, "Text.overflow");
  const Text_softWrap = dart.privateName(text, "Text.softWrap");
  const Text_locale = dart.privateName(text, "Text.locale");
  const Text_textDirection = dart.privateName(text, "Text.textDirection");
  const Text_textAlign = dart.privateName(text, "Text.textAlign");
  const Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  const TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  const TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  const TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  const TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  const TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  const TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  const TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  const TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  const TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  const TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  const TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  const TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  const TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  const TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  const TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  let C138;
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C137;
  const Text_style = dart.privateName(text, "Text.style");
  const Text_textSpan = dart.privateName(text, "Text.textSpan");
  const Text_data = dart.privateName(text, "Text.data");
  let C136;
  let C141;
  let C142;
  let C143;
  let C144;
  let C145;
  let C140;
  let C139;
  let C148;
  let C149;
  let C147;
  let C146;
  let C152;
  let C153;
  let C151;
  let C150;
  let C156;
  let C157;
  let C158;
  let C155;
  let C154;
  let C161;
  let C162;
  let C163;
  let C160;
  let C159;
  let C166;
  let C165;
  let C164;
  let C169;
  let C170;
  let C171;
  let C168;
  let C167;
  data_page._UserDataState = class _UserDataState extends framework.State$(data_page.UserData) {
    [_chooseDate](context, initialDateString) {
      return async.async(dart.dynamic, (function* _chooseDate() {
        let t0;
        let now = new core.DateTime.now();
        let initialDate = (t0 = this.convertToDate(initialDateString), t0 == null ? now : t0);
        initialDate = dart.notNull(initialDate.year) >= 1900 && dart.test(initialDate.isBefore(now)) ? initialDate : now;
        let result = (yield date_picker.showDatePicker({context: context, initialDate: initialDate, firstDate: new core.DateTime.new(1900), lastDate: new core.DateTime.now()}));
        if (result == null) return;
        this.setState(dart.fn(() => {
          this[_controller].text = new intl.DateFormat.new("yMd").format(result);
        }, VoidToNull()));
      }).bind(this));
    }
    convertToDate(input) {
      try {
        let d = new intl.DateFormat.new("yMd").parseStrict(input);
        return d;
      } catch (e$) {
        let e = dart.getThrown(e$);
        return null;
      }
    }
    isValidHeightWeight(input) {
      let dots = false;
      for (let i = 0; i < input.length; i = i + 1) {
        if (input[$_get](i) === ".") {
          if (dots) {
            return false;
          }
          dots = true;
        }
      }
      return true;
    }
    isValidDob(dob) {
      if (dob[$isEmpty]) return true;
      let d = this.convertToDate(dob);
      return d != null && dart.test(d.isBefore(new core.DateTime.now()));
    }
    showMessage(message, color) {
      if (color === void 0) color = C0 || CT.C0;
      this[_scaffoldKey].currentState.showSnackBar(new snack_bar.SnackBar.new({backgroundColor: color, content: new text.Text.new(message, {$creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}));
    }
    submitForm() {
      return async.async(dart.void, (function* submitForm() {
        let form = this[_formKey].currentState;
        if (!dart.test(form.validate())) {
          this.showMessage("Some form entries are not valid!");
        } else {
          form.save();
          let ref = top_level.database().ref("users/" + dart.notNull(this.widget.userId));
          this.newUser.calculateAge();
          this.newUser.calculateCalories();
          let map = new (IdentityMapOfString$String()).from(["completeSignUp", "true", "name", this.newUser.name, "activityLevel", this.newUser.activityLevel, "sex", this.newUser.sex, "dob", dart.toString(this.newUser.dob), "height", dart.toString(this.newUser.height), "initialWeight", dart.toString(this.newUser.initialWeight), "goalWeight", dart.toString(this.newUser.goalWeight), "caloriesPerDay", dart.toString(this.newUser.calories)]);
          yield ref.set(map);
          this.widget.loginCallback();
        }
      }).bind(this));
    }
    build(context) {
      return new scaffold.Scaffold.new({key: this[_scaffoldKey], appBar: new app_bar.AppBar.new({title: new text.Text.new("Get Started", {$creationLocationd_0dea112b090073317d4: C19 || CT.C19}), elevation: 1.0, $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), body: new centered_view.CenteredView.new({child: new safe_area.SafeArea.new({top: false, bottom: false, child: new form.Form.new({key: this[_formKey], autovalidate: true, child: new scroll_view.ListView.new({padding: C26 || CT.C26, children: JSArrayOfWidget().of([new text_form_field.TextFormField.new({decoration: C27 || CT.C27, inputFormatters: JSArrayOfTextInputFormatter().of([new text_formatter.WhitelistingTextInputFormatter.new(core.RegExp.new("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄ" + "ĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]")), new text_formatter.LengthLimitingTextInputFormatter.new(30)]), onSaved: dart.fn(val => this.newUser.name = val, StringToString()), $creationLocationd_0dea112b090073317d4: C30 || CT.C30}), new form.FormField.new({builder: dart.fn(state => new input_decorator.InputDecorator.new({decoration: new input_decorator.InputDecoration.new({icon: C35 || CT.C35, labelText: "Activity Level"}), isEmpty: this[_activityLevel] === "", child: new dropdown.DropdownButtonHideUnderline.new({child: new (DropdownButtonOfString()).new({value: this[_activityLevel], isDense: true, onChanged: dart.fn(newValue => {
                            this.setState(dart.fn(() => {
                              this.newUser.activityLevel = newValue;
                              this[_activityLevel] = newValue;
                              state.didChange(newValue);
                            }, VoidToNull()));
                          }, StringToNull()), items: this[_levels][$map](DropdownMenuItemOfString(), dart.fn(value => new (DropdownMenuItemOfString()).new({value: value, child: new text.Text.new(value, {$creationLocationd_0dea112b090073317d4: C37 || CT.C37}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), StringToDropdownMenuItemOfString()))[$toList](), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C50 || CT.C50}), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), FormFieldStateToInputDecorator()), validator: dart.fn(val => !dart.equals(val, "") ? null : "Please select an option", dynamicToString()), $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), new form.FormField.new({builder: dart.fn(state => new input_decorator.InputDecorator.new({decoration: new input_decorator.InputDecoration.new({icon: C62 || CT.C62, labelText: "Sex"}), isEmpty: this[_sex] === "", child: new dropdown.DropdownButtonHideUnderline.new({child: new (DropdownButtonOfString()).new({value: this[_sex], isDense: true, onChanged: dart.fn(newValue => {
                            this.setState(dart.fn(() => {
                              this.newUser.sex = newValue;
                              this[_sex] = newValue;
                              state.didChange(newValue);
                            }, VoidToNull()));
                          }, StringToNull()), items: this[_sexes][$map](DropdownMenuItemOfString(), dart.fn(value => new (DropdownMenuItemOfString()).new({value: value, child: new text.Text.new(value, {$creationLocationd_0dea112b090073317d4: C64 || CT.C64}), $creationLocationd_0dea112b090073317d4: C67 || CT.C67}), StringToDropdownMenuItemOfString()))[$toList](), $creationLocationd_0dea112b090073317d4: C71 || CT.C71}), $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80}), FormFieldStateToInputDecorator()), validator: dart.fn(val => !dart.equals(val, "") ? null : "Please select an option", dynamicToString()), $creationLocationd_0dea112b090073317d4: C85 || CT.C85}), new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new text_form_field.TextFormField.new({decoration: new input_decorator.InputDecoration.new({icon: C89 || CT.C89, hintText: "Enter your date of birth", labelText: "Dob"}), controller: this[_controller], keyboardType: text_input.TextInputType.datetime, validator: dart.fn(val => dart.test(this.isValidDob(val)) ? null : "Not a valid date", StringToString()), onSaved: dart.fn(val => this.newUser.dob = this.convertToDate(val), StringToDateTime()), $creationLocationd_0dea112b090073317d4: C91 || CT.C91}), $creationLocationd_0dea112b090073317d4: C98 || CT.C98}), new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.more_horiz, {$creationLocationd_0dea112b090073317d4: C101 || CT.C101}), tooltip: "Choose date", onPressed: dart.fn(() => {
                          this[_chooseDate](context, this[_controller].text);
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C104 || CT.C104})]), $creationLocationd_0dea112b090073317d4: C109 || CT.C109}), new text_form_field.TextFormField.new({decoration: C112 || CT.C112, inputFormatters: JSArrayOfTextInputFormatter().of([new text_formatter.WhitelistingTextInputFormatter.new(core.RegExp.new("\\d*\\.?\\d*")), new text_formatter.LengthLimitingTextInputFormatter.new(6)]), validator: dart.fn(value => dart.test(this.isValidHeightWeight(value)) ? null : "Enter a valid height.", StringToString()), onSaved: dart.fn(val => this.newUser.height = core.double.parse(val), StringTodouble()), $creationLocationd_0dea112b090073317d4: C113 || CT.C113}), new text_form_field.TextFormField.new({decoration: C119 || CT.C119, inputFormatters: JSArrayOfTextInputFormatter().of([new text_formatter.WhitelistingTextInputFormatter.new(core.RegExp.new("\\d*\\.?\\d*")), new text_formatter.LengthLimitingTextInputFormatter.new(6)]), validator: dart.fn(value => dart.test(this.isValidHeightWeight(value)) ? null : "Enter a valid weight.", StringToString()), onSaved: dart.fn(val => this.newUser.initialWeight = core.double.parse(val), StringTodouble()), $creationLocationd_0dea112b090073317d4: C120 || CT.C120}), new text_form_field.TextFormField.new({decoration: C126 || CT.C126, inputFormatters: JSArrayOfTextInputFormatter().of([new text_formatter.WhitelistingTextInputFormatter.new(core.RegExp.new("\\d*\\.?\\d*")), new text_formatter.LengthLimitingTextInputFormatter.new(6)]), validator: dart.fn(value => dart.test(this.isValidHeightWeight(value)) ? null : "Enter a valid weight.", StringToString()), onSaved: dart.fn(val => this.newUser.goalWeight = core.double.parse(val), StringTodouble()), $creationLocationd_0dea112b090073317d4: C129 || CT.C129}), new container.Container.new({padding: C135 || CT.C135, child: new raised_button.RaisedButton.new({elevation: 1.0, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(30.0)}), color: colors.Colors.blue, child: C136 || CT.C136, onPressed: dart.bind(this, 'submitForm'), $creationLocationd_0dea112b090073317d4: C139 || CT.C139}), $creationLocationd_0dea112b090073317d4: C146 || CT.C146})]), $creationLocationd_0dea112b090073317d4: C150 || CT.C150}), $creationLocationd_0dea112b090073317d4: C154 || CT.C154}), $creationLocationd_0dea112b090073317d4: C159 || CT.C159}), $creationLocationd_0dea112b090073317d4: C164 || CT.C164}), $creationLocationd_0dea112b090073317d4: C167 || CT.C167});
    }
  };
  (data_page._UserDataState.new = function() {
    this[_formKey] = GlobalKeyOfFormState().new();
    this[_scaffoldKey] = GlobalKeyOfScaffoldState().new();
    this[_controller] = new editable_text.TextEditingController.new();
    this.newUser = new UserInfo.UserInfo.new();
    this[_levels] = JSArrayOfString().of(["", "Sedentary", "Lightly active", "Moderately active", "Highly active", "Super athletic"]);
    this[_sexes] = JSArrayOfString().of(["", "Female", "Male"]);
    this[_activityLevel] = "";
    this[_sex] = "";
    data_page._UserDataState.__proto__.new.call(this);
    ;
  }).prototype = data_page._UserDataState.prototype;
  dart.addTypeTests(data_page._UserDataState);
  dart.setMethodSignature(data_page._UserDataState, () => ({
    __proto__: dart.getMethods(data_page._UserDataState.__proto__),
    [_chooseDate]: dart.fnType(async.Future, [framework.BuildContext, core.String]),
    convertToDate: dart.fnType(core.DateTime, [core.String]),
    isValidHeightWeight: dart.fnType(core.bool, [core.String]),
    isValidDob: dart.fnType(core.bool, [core.String]),
    showMessage: dart.fnType(dart.void, [core.String], [colors.MaterialColor]),
    submitForm: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(data_page._UserDataState, "package:codiet/pages/data_page.dart");
  dart.setFieldSignature(data_page._UserDataState, () => ({
    __proto__: dart.getFields(data_page._UserDataState.__proto__),
    [_formKey]: dart.finalFieldType(framework.GlobalKey$(form.FormState)),
    [_scaffoldKey]: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState)),
    [_controller]: dart.finalFieldType(editable_text.TextEditingController),
    newUser: dart.fieldType(UserInfo.UserInfo),
    [_levels]: dart.fieldType(core.List$(core.String)),
    [_sexes]: dart.fieldType(core.List$(core.String)),
    [_activityLevel]: dart.fieldType(core.String),
    [_sex]: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/codiet/pages/data_page", {
    "package:codiet/pages/data_page.dart": data_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["data_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"data_page.ddc.js"}');
  // Exports:
  return {
    pages__data_page: data_page
  };
});

//# sourceMappingURL=data_page.ddc.js.map
