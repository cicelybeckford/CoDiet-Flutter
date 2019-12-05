import 'package:codiet/utils/custom_dialog.dart';
import 'package:flutter/material.dart';
import 'package:codiet/utils/responsive_widget.dart';
import 'package:intl/intl.dart';
import 'package:percent_indicator/percent_indicator.dart';
import 'package:firebase/firebase.dart' as fb;

class ProfilePage extends StatefulWidget {

  ProfilePage({Key key, this.userId});
  
  final String userId;

  @override
  State<StatefulWidget> createState() => new _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  final GlobalKey<FormState> formKey = GlobalKey<FormState>();

  String cals_per_day = "", cals_today = "", name = "";
  Function update_func;
  double percentage = 0.0;

  @override
  void initState() {
    super.initState();
    final fb.DatabaseReference ref = fb.database().ref("users/" + widget.userId);
    ref.orderByKey().once('value').then((e){
      setState(() {
        cals_per_day = e.snapshot.child("caloriesPerDay").val();
        if (e.snapshot.child("dates").child(new DateFormat("yyyy-MM-dd").format(new DateTime.now())).hasChild("calories")) {
          cals_today = e.snapshot.child("dates").child(new DateFormat("yyyy-MM-dd").format(new DateTime.now())).child("calories").val();
        } else {
          cals_today = "0";
        }
        if (double.parse(cals_today) > double.parse(cals_per_day)) {
          percentage = 1;
        }
        else {
          percentage = double.parse(cals_today) / double.parse(cals_per_day);
        }
        name = e.snapshot.child("name").val();
      });
    });
  }

  bool submit(String title, String input) {
    if (input == '') {
      return true;
    }
    double value = double.tryParse(input);
    if (value == null) {
      return false;
    }

    final fb.DatabaseReference ref = fb.database().ref("users/" + widget.userId + "/dates/" + new DateFormat("yyyy-MM-dd").format(new DateTime.now()));
    if (title == "Calories") {
      cals_today = (double.parse(input) + double.parse(cals_today)).toStringAsFixed(0);
      var map = {
        "calories": cals_today,
      };
      ref.update(map);
    } else {
      var map = {
        "weight": input,
      };
      ref.update(map);
    }
    setState(() {
      name = name;
      cals_today = cals_today;
      cals_per_day = cals_per_day;
      if (double.parse(cals_today) > double.parse(cals_per_day)) {
        percentage = 1;
      }
        else {
          percentage = double.parse(cals_today) / double.parse(cals_per_day);
        }
    });
    return true;
  }

  @override
  Widget build(BuildContext context) {
    return ResponsiveWidget(
      largeScreen: Scaffold(
        backgroundColor: Colors.white,
        body: SingleChildScrollView(
          child: AnimatedPadding(
            duration: Duration(seconds: 1),
            padding: EdgeInsets.all(0),
            child: ResponsiveWidget(
              largeScreen: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                children: <Widget>[
                  ProfileInfo(
                    name: name, 
                    cals_per_day: cals_per_day, 
                    cals_today: cals_today,
                    percentage: percentage,
                    update_func: submit,
                  ),
                  SizedBox(
                    height: MediaQuery.of(context).size.height * 0.2,
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class ProfileInfo extends StatelessWidget {
  final String formattedDate = DateFormat('yMMMd').format(DateTime.now());

  final String name;
  final String cals_per_day;
  final String cals_today;
  final double percentage;
  final Function update_func;

  ProfileInfo({Key key,
      @required this.name,
      @required this.cals_per_day,
      @required this.cals_today,
      @required this.percentage,
      @required this.update_func,
      }): super(key: key);


  openPopupWindow(BuildContext context, String text) {
    TextEditingController controller = new TextEditingController();
    return showDialog(context: context, builder: (context) {
        return new CustomDialog(title: text, controller: controller, buttonText: 'Submit', onPressed: update_func);
    });
  }

  profileImage(context) => Container(
        height: ResponsiveWidget.isSmallScreen(context)
            ? MediaQuery.of(context).size.height * 0.3
            : MediaQuery.of(context).size.width * 0.3,
        width: ResponsiveWidget.isSmallScreen(context)
            ? MediaQuery.of(context).size.height * 0.3
            : MediaQuery.of(context).size.width * 0.3,
        child: new CircularPercentIndicator(
                radius: ResponsiveWidget.isSmallScreen(context)
                    ? MediaQuery.of(context).size.height * 0.2
                    : MediaQuery.of(context).size.width * 0.2,
                lineWidth: 25.0,
                animation: true,
                percent: percentage,
                center: new Text(
                  (percentage * 100).toStringAsFixed(0) + "%",
                  style:
                      new TextStyle(fontWeight: FontWeight.bold, fontSize: 20.0),
                ),
                footer: new Text(
                  formattedDate,
                  style:
                      new TextStyle(fontWeight: FontWeight.bold, fontSize: 27.0),
                ),
                circularStrokeCap: CircularStrokeCap.round,
                progressColor: Colors.blue,
              ),
      );

  profileData(context) => SizedBox(
    width: MediaQuery.of(context).size.height * 0.8,
      child: Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Text(
           "Hi " + name + "!",
          textScaleFactor: 4,
          style: TextStyle(color: Colors.blue),
        ),
        SizedBox(
          height: 10,
        ),
        Text(
          "Congrats! You've consumed\n" +
        cals_today + " out of your required " + cals_per_day + "\n"
        "calories.",
          softWrap: true,
          textScaleFactor: 2,
          style: TextStyle(color: Colors.black),
        ),
        SizedBox(
          height: 50,
        ),
        Container(
          width: MediaQuery.of(context).size.height * 0.6,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              SizedBox(
                width: 55,
              ),
              Expanded(
                              child: RaisedButton(
                  shape: StadiumBorder(),
                  child: Text("Update weight", style: TextStyle(color: Colors.white), ),
                  color: Colors.blue,
                  onPressed: () {
                    openPopupWindow(context, "Weight");
                  },
                  padding: EdgeInsets.all(15),
                ),
              ),
              SizedBox(
                width: 40,
              ),
              Expanded(
                              child: RaisedButton(
                  shape: StadiumBorder(),
                  child: Text("Add Calories", style: TextStyle(color: Colors.white),),
                  color: Colors.blue,
                  onPressed: () {
                    openPopupWindow(context, "Calories");
                  },
                  padding: EdgeInsets.all(15),
                ),
              ),
              SizedBox(
                width: 55,
              ),
            ],
          ),
        )
      ],
    ),
  );

  @override
  Widget build(BuildContext context) {
    return ResponsiveWidget(
        largeScreen: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            SizedBox(
              height: 500,
            ),
            profileImage(context),
            profileData(context),
          ],
        ),
        smallScreen: Column(
          mainAxisSize: MainAxisSize.max,
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: <Widget>[
            profileImage(context),
            SizedBox(
              height: 20,
            ), 
            profileData(context),
            SizedBox(
              width: 50,
            ),
          ],
        ),
      );
  }
}