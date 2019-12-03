import 'package:codiet/utils/auth.dart';
import 'package:flutter/material.dart';
import 'package:codiet/pages/profile_page.dart';
import 'package:codiet/pages/journey_page.dart';

class HomePage extends StatefulWidget {
  HomePage({Key key, this.auth, this.userId, this.logoutCallback});
  
  final BaseAuth auth;
  final VoidCallback logoutCallback;
  final String userId;

  @override
  HomePageState createState() => new HomePageState();
}

class HomePageState extends State<HomePage> with SingleTickerProviderStateMixin {
  TabController controller;

  @override
  void initState() {
    super.initState();
    controller = new TabController(vsync: this, length: 2);
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  signOut() async {
    try {
      await widget.auth.signOut();
      widget.logoutCallback();
    } catch (e) {
      print(e);
    }
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        elevation: 1,
        backgroundColor: Colors.blue,
        flexibleSpace: new TabBar(
          controller: controller,
          tabs: <Tab>[
            new Tab(text: "Home", icon: new Icon(Icons.home),),
            new Tab(text: "Progress", icon: new Icon(Icons.multiline_chart),),
          ]
        )
      ),
      body: new TabBarView(
        controller: controller,
        children: <Widget>[
          ProfilePage(
            userId: widget.userId,
          ),
          UserJourney(
            userId: widget.userId,
          ),
        ]
      ),
       floatingActionButton: Padding(
         padding: const EdgeInsets.only(bottom: 10, right: 10),
         child: FloatingActionButton(
          backgroundColor: Colors.blue,
          elevation: 9,
          child: Icon(Icons.exit_to_app, color: Colors.white,),
          onPressed: () { signOut(); },
        ),
      ),
    );
  }
}
