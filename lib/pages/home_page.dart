import 'dart:html' as html;
import 'package:codiet/pages/journey_page.dart';
import 'package:flutter/material.dart';
import 'package:codiet/utils/auth.dart';
import 'package:codiet/utils/responsive_widget.dart';
import 'package:codiet/utils/nav_buttons.dart';
import 'package:codiet/utils/nav_header.dart';
import 'package:codiet/utils/profile_info.dart';

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

  List<NavButton> navButtons() => [
    NavButton(
      text: "Home",
      onPressed: () {
        // html.window.open("https://google.com", "CoDiet");
      },
    ),
    NavButton(
      text: "Journey",
      onPressed: () {
        Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => UserJourney(userId: widget.userId),
            ),
          );
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