import 'package:codiet/models/WeightSeries.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:codiet/models/UserInfo.dart';
import 'package:firebase/firebase.dart' as fb;
import 'dart:async';
import 'package:codiet/utils/weight_chart.dart';
import 'package:charts_flutter/flutter.dart' as charts;
import 'package:intl/intl.dart';

class UserJourney extends StatefulWidget {
   UserJourney({Key key, this.userId}) : super(key: key);

   final String userId;

  @override
  State<StatefulWidget> createState() => _UserJourneyState();
}
class _UserJourneyState extends State<UserJourney> {
  final GlobalKey<FormState> _formKey = new GlobalKey<FormState>();
  final GlobalKey<ScaffoldState> _scaffoldKey = new GlobalKey<ScaffoldState>();
  final TextEditingController _startcontroller = new TextEditingController();
  final TextEditingController _endcontroller = new TextEditingController();

  UserInfo newUser = new UserInfo();
  DateTime end, start, initial;
  int count = 0;
  List<WeightSeries> data = [
    new WeightSeries(
    date: (new DateTime(2019, 11, 24)),
    weight: 50,
    barColor: charts.ColorUtil.fromDartColor(Colors.blue)),
    new WeightSeries(
    date: (new DateTime(2019, 11, 25)),
    weight: 70,
    barColor: charts.ColorUtil.fromDartColor(Colors.blue)),
    new WeightSeries(
    date: (new DateTime(2019, 11, 26)),
    weight: 100,
    barColor: charts.ColorUtil.fromDartColor(Colors.blue)),
  ];

  Future _chooseDate(BuildContext context, TextEditingController controller, bool start) async {
    if (initial == null) {
      await _getInitialDate();
    }
    var now = new DateTime.now();
    var initialDate = start ? initial : now;
    // initialDate = ((initialDate.isAtSameMomentAs(other)) && initialDate.isBefore(now) ? initialDate : now);
    var result = await showDatePicker(
        context: context,
        initialDate: initialDate,
        firstDate: initial,
        lastDate: new DateTime.now());

    if (result == null) return;

    setState(() {
      controller.text = new DateFormat.yMd().format(result);
    });
  }

  DateTime convertToDate(String input) {
    try 
    {
      var d = new DateFormat.yMd().parseStrict(input);
      return d;
    } catch (e) {
      return null;
    }    
  }

  Future _getInitialDate() async {
    final fb.DatabaseReference ref = fb.database().ref("users/" + widget.userId + "/dates");
    var snap;
    await ref.limitToFirst(1).once('value').then((e){
      e.snapshot.forEach((snapshot) {
        snap = snapshot.key;
        initial = convertToDate(snap.substring(5, 7) + '/' 
        + snap.substring(8) + '/' + snap.substring(0, 4));
      });
    });
  }

  bool isValidDate(String date) {
    if (date.isEmpty) return true;
    var d = convertToDate(date);
    return d != null && d.isBefore(new DateTime.now());
  }

  Future<bool> isValid() async {
    if (initial == null) {
      await _getInitialDate();
    }
    DateTime startDate = convertToDate(_startcontroller.text);
    DateTime endDate = convertToDate(_endcontroller.text);
    return (startDate != null && endDate != null) && 
    (startDate.isAfter(initial) || startDate.isAtSameMomentAs(initial)) && 
    endDate.isAfter(startDate);
  }

  void showMessage(String message, [MaterialColor color = Colors.red]) {
    _scaffoldKey.currentState
      .showSnackBar(new SnackBar(backgroundColor: color, content: new Text(message))); 
  }

  void submitForm() async {
    final FormState form = _formKey.currentState;
    if (!form.validate() || !(await isValid())) {
      showMessage('Some form entries are not valid!');
    } else {
      form.save(); 
      setState(() {
        count = 1;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    List<Widget> child = new List.generate(count, (int i) => 
    new Row(children: <Widget>[new SizedBox(width: MediaQuery.of(context).size.width * 0.07),  new WeightJourney(data: data,)],));
    return new Scaffold(
      key: _scaffoldKey,
      backgroundColor: Colors.white,
      body: 
        new SafeArea(
          top: false,
          bottom: false,
          child: new Form(
            key: _formKey,
            autovalidate: true,
            child: new ListView(
              padding: const EdgeInsets.symmetric(horizontal: 16.0),
              children: <Widget>[
                new SizedBox(
                    height: 40,
                ),
                new Row(children: <Widget>[
                  new SizedBox(
                    width: MediaQuery.of(context).size.width * 0.05,
                  ),
                  new Expanded(
                      child: new TextFormField(
                        decoration: new InputDecoration(
                          icon: const Icon(Icons.calendar_today),
                          hintText: 'Choose a start date',
                          labelText: 'Start (inclusive)',
                        ),
                        controller: _startcontroller,
                        keyboardType: TextInputType.datetime,
                        validator: (val) => isValidDate(val) ? null : 'Not a valid date',
                        onSaved: (val) => start = convertToDate(val),
                      )
                  ),
                  new IconButton(
                    icon: new Icon(Icons.more_horiz),
                    tooltip: 'Choose date',
                    onPressed: (() {
                      _chooseDate(context, _startcontroller, true);
                    }),
                  ),
                  new SizedBox(
                    width: MediaQuery.of(context).size.width * 0.05,
                  ),
                  new Expanded(
                      child: new TextFormField(
                        decoration: new InputDecoration(
                          icon: const Icon(Icons.calendar_today),
                          hintText: 'Choose an end date',
                          labelText: 'End (exclusive)',
                        ),
                        controller: _endcontroller,
                        keyboardType: TextInputType.datetime,
                        validator: (val) => isValidDate(val) ? null : 'Not a valid date',
                        onSaved: (val) => end = convertToDate(val),
                      )
                  ),
                  new IconButton(
                    icon: new Icon(Icons.more_horiz),
                    tooltip: 'Choose date',
                    onPressed: (() {
                      _chooseDate(context, _endcontroller, false);
                    }),
                  ),
                  new Container(
                  padding: const EdgeInsets.only(left: 40.0, top: 20.0),
                  child: new RaisedButton(
                    elevation: 1.0,
                    shape: new RoundedRectangleBorder(
                        borderRadius: new BorderRadius.circular(30.0)),
                    color: Colors.blue,
                    child: const Text('Go', style: const TextStyle(fontSize: 15.0, color: Colors.white)),
                    onPressed: submitForm,
                  ),
                ),
                new SizedBox(
                  width: MediaQuery.of(context).size.width * 0.05,
                  height: MediaQuery.of(context).size.width * 0.05,

                )
              ]),
              new Row(
                  children: child,
              ),
            ],
           )
        )
      ),
    );
  }
}