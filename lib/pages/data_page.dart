import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:codiet/models/UserInfo.dart';
import 'package:codiet/utils/centered_view.dart';
import 'package:firebase/firebase.dart' as fb;
import 'dart:async';
import 'package:intl/intl.dart';

class UserData extends StatefulWidget {
   UserData({Key key, this.userId, this.loginCallback}) : super(key: key);

   final VoidCallback loginCallback;
   final String userId;

  @override
  State<StatefulWidget> createState() => _UserDataState();
}
class _UserDataState extends State<UserData> {
  final GlobalKey<FormState> _formKey = new GlobalKey<FormState>();
  final GlobalKey<ScaffoldState> _scaffoldKey = new GlobalKey<ScaffoldState>();
  final TextEditingController _controller = new TextEditingController();

  UserInfo newUser = new UserInfo();
  List<String> _levels = <String>['', 'Sedentary', 'Lightly active', 'Moderately active', 'Highly active', 'Super athletic'];
  List<String> _sexes = <String>['', 'Female', 'Male'];
  String _activityLevel = '';
  String _sex = '';

  Future _chooseDate(BuildContext context, String initialDateString) async {
    var now = new DateTime.now();
    var initialDate = convertToDate(initialDateString) ?? now;
    initialDate = (initialDate.year >= 1900 && initialDate.isBefore(now) ? initialDate : now);

    var result = await showDatePicker(
        context: context,
        initialDate: initialDate,
        firstDate: new DateTime(1900),
        lastDate: new DateTime.now());

    if (result == null) return;

    setState(() {
      _controller.text = new DateFormat('yMd').format(result);
    });
  }

  DateTime convertToDate(String input) {
    try 
    {
      var d = new DateFormat('yMd').parseStrict(input);
      return d;
    } catch (e) {
      return null;
    }    
  }

  bool isValidHeightWeight(String input) {
    var dots = false;
    for (int i = 0; i < input.length; i++) {
      if (input[i] == ".") {
        if (dots) {
          return false;
        }
        dots = true;
      }
    }
    return true;
  }

  bool isValidDob(String dob) {
    if (dob.isEmpty) return true;
    var d = convertToDate(dob);
    return d != null && d.isBefore(new DateTime.now());
  }

  void showMessage(String message, [MaterialColor color = Colors.red]) {
    _scaffoldKey.currentState
      .showSnackBar(new SnackBar(backgroundColor: color, content: new Text(message))); 
  }

  void submitForm() async {
    final FormState form = _formKey.currentState;
    if (!form.validate()) {
      showMessage('Some form entries are not valid!');
    } 
    else { 
      form.save(); //TODO: handle pushing user info to db @ Sean
      final fb.DatabaseReference ref = fb.database().ref("users/" + widget.userId);
      newUser.calculateAge();
      newUser.calculateCalories();
      var map = {
        "completeSignUp": "true",
        'name': newUser.name,
        'activityLevel': newUser.activityLevel,
        'sex': newUser.sex,
        'dob': newUser.dob.toString(),
        'height': newUser.height.toString(),
        'initialWeight': newUser.initialWeight.toString(),
        'goalWeight': newUser.goalWeight.toString(),
        'caloriesPerDay': newUser.calories.toString(),
      };
      await ref.set(map);
      widget.loginCallback();
    }
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      key: _scaffoldKey,
      appBar: new AppBar(
        title: new Text('Get Started'),
        elevation: 1,
      ),
      body: CenteredView(
              child: new SafeArea(
          top: false,
          bottom: false,
          child: new Form(
            key: _formKey,
            autovalidate: true,
            child: new ListView(
              padding: const EdgeInsets.symmetric(horizontal: 16.0),
              children: <Widget>[
                new TextFormField(
                  decoration: const InputDecoration(
                    icon: const Icon(Icons.person_outline),
                    hintText: 'Enter your first name',
                    labelText: 'Name',
                  ),
                  inputFormatters: [
                    WhitelistingTextInputFormatter(RegExp("[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄ" +
                      "ĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]")),
                    LengthLimitingTextInputFormatter(30),
                  ],
                  onSaved: (val) => newUser.name = val,
                ),
                new FormField(
                  builder: (FormFieldState state) {
                    return InputDecorator(
                      decoration: InputDecoration(
                        icon: const Icon(Icons.fitness_center),
                        labelText: 'Activity Level',
                      ),
                      isEmpty: _activityLevel == '',
                      child: new DropdownButtonHideUnderline(
                        child: new DropdownButton(
                          value: _activityLevel,
                          isDense: true,
                          onChanged: (String newValue) {
                            setState(() {
                              newUser.activityLevel = newValue;
                              _activityLevel = newValue;
                              state.didChange(newValue);
                            });
                          },
                          items: _levels.map((String value) {
                            return new DropdownMenuItem(
                              value: value,
                              child: new Text(value),
                            );
                          }).toList(),
                        ),
                      ),
                    );
                  },
                  validator: (val) {
                    return val != '' ? null : 'Please select an option';
                  },
                ),
                new FormField(
                  builder: (FormFieldState state) {
                    return InputDecorator(
                      decoration: InputDecoration(
                        icon: const Icon(Icons.person),
                        labelText: 'Sex',
                      ),
                      isEmpty: _sex == '',
                      child: new DropdownButtonHideUnderline(
                        child: new DropdownButton(
                          value: _sex,
                          isDense: true,
                          onChanged: (String newValue) {
                            setState(() {
                              newUser.sex = newValue;
                              _sex = newValue;
                              state.didChange(newValue);
                            });
                          },
                          items: _sexes.map((String value) {
                            return new DropdownMenuItem(
                              value: value,
                              child: new Text(value),
                            );
                          }).toList(),
                        ),
                      ),
                    );
                  },
                  validator: (val) {
                    return val != '' ? null : 'Please select an option';
                  },
                ),
                new Row(children: <Widget>[
                  new Expanded(
                      child: new TextFormField(
                        decoration: new InputDecoration(
                          icon: const Icon(Icons.calendar_today),
                          hintText: 'Enter your date of birth',
                          labelText: 'Dob',
                        ),
                        controller: _controller,
                        keyboardType: TextInputType.datetime,
                        validator: (val) => isValidDob(val) ? null : 'Not a valid date',
                        onSaved: (val) => newUser.dob = convertToDate(val),
                      )
                  ),
                  new IconButton(
                    icon: new Icon(Icons.more_horiz),
                    tooltip: 'Choose date',
                    onPressed: (() {
                      _chooseDate(context, _controller.text);
                    }),
                  )
                ]),
                new TextFormField(
                  decoration: const InputDecoration(
                    icon: const Icon(Icons.person_outline),
                    hintText: 'Enter your height (cm)',
                    labelText: 'Height',
                  ),
                  inputFormatters: [
                    WhitelistingTextInputFormatter(RegExp(r'\d*\.?\d*')),
                    LengthLimitingTextInputFormatter(6),
                  ],
                  validator: (value) => isValidHeightWeight(value)
                      ? null
                      : 'Enter a valid height.',
                  onSaved: (val) => newUser.height = double.parse(val),
                ),
                new TextFormField(
                  decoration: const InputDecoration(
                    icon: const Icon(Icons.person_outline),
                    hintText: 'Enter your current weight (kg)',
                    labelText: 'Current Weight',
                  ),
                  inputFormatters: [
                    WhitelistingTextInputFormatter(RegExp(r'\d*\.?\d*')),
                    LengthLimitingTextInputFormatter(6),
                  ],
                  validator: (value) => isValidHeightWeight(value)
                      ? null
                      : 'Enter a valid weight.',
                  onSaved: (val) => newUser.initialWeight = double.parse(val),
                ),
                new TextFormField(
                  decoration: const InputDecoration(
                    icon: const Icon(Icons.person_pin_circle),
                    hintText: 'Enter your goal weight (kg)',
                    labelText: 'Goal Weight',
                  ),
                  inputFormatters: [
                    WhitelistingTextInputFormatter(RegExp(r'\d*\.?\d*')),
                    LengthLimitingTextInputFormatter(6),
                  ],
                  validator: (value) => isValidHeightWeight(value)
                      ? null
                      : 'Enter a valid weight.',
                  onSaved: (val) => newUser.goalWeight = double.parse(val),
                ),
                new Container(
                  padding: const EdgeInsets.only(left: 40.0, top: 20.0),
                  child: new RaisedButton(
                    elevation: 1.0,
                    shape: new RoundedRectangleBorder(
                        borderRadius: new BorderRadius.circular(30.0)),
                    color: Colors.blue,
                    child: const Text('Submit', style: const TextStyle(fontSize: 15.0, color: Colors.white)),
                    onPressed: submitForm,
                  ),
                ),
              ],
            )
          )
        ),
      ),
    );
  }
}
