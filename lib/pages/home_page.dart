import 'dart:html' as html;
import 'package:flutter/material.dart';
import 'package:codiet/utils/auth.dart';
import 'package:codiet/utils/responsive_widget.dart';
import 'package:percent_indicator/percent_indicator.dart';
import 'package:firebase/firebase.dart';
import 'package:intl/intl.dart';

class HomePage extends StatefulWidget {

  HomePage({Key key, this.auth, this.userId, this.logoutCallback});
  
  final BaseAuth auth;
  final VoidCallback logoutCallback;
  final String userId;

  @override
  State<StatefulWidget> createState() => new _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final GlobalKey<FormState> formKey = GlobalKey<FormState>();
  // final Firestore dc = firestore();
  // final FirebaseDatabase db = FirebaseDatabase.instance;

  // Database db = database();
  // DatabaseReference ref = db.ref("messages");
  //TODO: handle populating the page with actual info from the db
  signOut() async {
    try {
      await widget.auth.signOut();
      widget.logoutCallback();
    } catch (e) {
      print(e);
    }
  }

  List<Widget> navButtons() => [
        NavButton(
          text: "Home",
          onPressed: () {
            html.window.open("https://google.com", "CoDiet");
          },
        ),
        NavButton(
          text: "Journey",
          onPressed: () {
            html.window.open("https://google.com", "CoDiet");
          },
        ),
        NavButton(
          text: "Summaries",
          onPressed: () {
            html.window.open("https://google.com", "CoDiet");
          },
        ),
        NavButton(
          text: "Logout",
          onPressed: () {
            signOut();
          },
        ),
      ];

  @override
  Widget build(BuildContext context) {
    return ResponsiveWidget(
      largeScreen: Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(
          elevation: 1.5,
          backgroundColor: Colors.blue[50],
          title: Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: <Widget>[
              Image.asset(
                'assets/logo.png',
                width: 120,
                height: 150,
              ),
            ],
          ),
          actions: <Widget> [
            NavHeader(navButtons: navButtons()),
          ]
        ),
        drawer: ResponsiveWidget.isSmallScreen(context)
            ? Drawer(
                child: ListView(
                  padding: const EdgeInsets.all(20),
                  children: navButtons(),
                ),
              )
            : null,
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

class NavHeader extends StatelessWidget {
  final List<Widget> navButtons;

  const NavHeader({Key key, this.navButtons}) : super(key: key);

  Widget build(BuildContext context) {
    return ResponsiveWidget(
      largeScreen: Row(
        mainAxisAlignment: ResponsiveWidget.isSmallScreen(context)
            ? MainAxisAlignment.center
            : MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          if (!ResponsiveWidget.isSmallScreen(context))
            Row(
              children: navButtons,
            )
        ],
      ),
    );
  }
}

class NavButton extends StatelessWidget {
  final text;
  final onPressed;
  final Color color;

  const NavButton(
      {Key key,
      @required this.text,
      @required this.onPressed,
      this.color = Colors.transparent,
      })
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    if (text == "Home") {
      return FlatButton(
        child: Text(text, textScaleFactor: 1.3, style: TextStyle(color: Colors.white)),
        color: Colors.blue,
        onPressed: () {
          html.window.open("https://google.com", "CoDiet");
        },
      );
    } else {
      return OutlineButton(
      child: Text(text, textScaleFactor: 1.3,),
      borderSide: BorderSide(
        color: color,
      ),
      onPressed: onPressed,
      );
    }
  }
}

class ProfileInfo extends StatelessWidget {
  final String formattedDate = DateFormat('yMMMd').format(DateTime.now());
  profileImage(context) => Container(
        height: ResponsiveWidget.isSmallScreen(context)
            ? MediaQuery.of(context).size.height * 0.3
            : MediaQuery.of(context).size.width * 0.3,
        width: ResponsiveWidget.isSmallScreen(context)
            ? MediaQuery.of(context).size.height * 0.3
            : MediaQuery.of(context).size.width * 0.3,
        child: new CircularPercentIndicator(
                radius: ResponsiveWidget.isSmallScreen(context)
                    ? MediaQuery.of(context).size.height * 0.25
                    : MediaQuery.of(context).size.width * 0.25,
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

  final profileData = Column(
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
              html.window.open("https://google.com", "CoDiet");
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
              html.window.open("https://google.com", "CoDiet");
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
        children: <Widget>[profileImage(context), profileData],
      ),
      smallScreen: Column(
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          profileImage(context),
          SizedBox(
            height: MediaQuery.of(context).size.height * 0.1,
          ),
          profileData
        ],
      ),
    );
  }
}
