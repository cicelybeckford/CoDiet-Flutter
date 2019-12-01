import 'package:codiet/utils/custom_dialog.dart';
import 'package:flutter/material.dart';
import 'package:codiet/utils/responsive_widget.dart';
import 'package:intl/intl.dart';
import 'package:percent_indicator/percent_indicator.dart';

class ProfilePage extends StatefulWidget {

  ProfilePage({Key key, this.userId});
  
  final String userId;

  @override
  State<StatefulWidget> createState() => new _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  final GlobalKey<FormState> formKey = GlobalKey<FormState>();
  // final Firestore dc = firestore();
  // final FirebaseDatabase db = FirebaseDatabase.instance;

  // Database db = database();
  // DatabaseReference ref = db.ref("messages");
  //TODO: handle populating the page with actual info from the db

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
                  ProfileInfo(),
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

  openPopupWindow(BuildContext context, String text) {
    TextEditingController controller = new TextEditingController();
    return showDialog(context: context, builder: (context) {
        return new CustomDialog(title: text, controller: controller, buttonText: 'Submit',);
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
                percent: 0.7,
                center: new Text(
                  "70.0%",
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

  profileData(context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: <Widget>[
      SizedBox(
            height: 100,
      ),
      Text(
        "Hi Cicely!",
        textScaleFactor: 4,
        style: TextStyle(color: Colors.blue),
      ),
      SizedBox(
        height: 10,
      ),
      Text(
        "Congrats! You've consumed\n"
        "1000 out of your required 2000\n"
        "calories.",
        softWrap: true,
        textScaleFactor: 2,
        style: TextStyle(color: Colors.black),
      ),
      SizedBox(
        height: 100,
      ),
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          RaisedButton(
            shape: StadiumBorder(),
            child: Text("Update weight", style: TextStyle(color: Colors.white), ),
            color: Colors.blue,
            onPressed: () {
              openPopupWindow(context, "Weight");
            },
            padding: EdgeInsets.all(15),
          ),
          SizedBox(
            width: 150,
          ),
          RaisedButton(
            shape: StadiumBorder(),
            child: Text("Add Calories", style: TextStyle(color: Colors.white),),
            color: Colors.blue,
            onPressed: () {
              openPopupWindow(context, "Calories");
            },
            padding: EdgeInsets.all(15),
          ),
        ],
      )
    ],
  );

  @override
  Widget build(BuildContext context) {
    return ResponsiveWidget(
      largeScreen: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[profileImage(context), profileData (context)],
      ),
      smallScreen: Column(
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          profileImage(context),
          SizedBox(
            height: MediaQuery.of(context).size.height * 0.1,
          ),
          profileData(context)
        ],
      ),
    );
  }
}