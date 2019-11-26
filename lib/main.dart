import 'package:flutter/material.dart';
import 'package:firebase/firebase.dart';
import 'package:codiet/root_page.dart';
import 'package:codiet/auth.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primaryColorDark: Colors.white,
      ),
      home: new RootPage(auth: new FirebaseAuth()),
      routes: <String, WidgetBuilder>{
        // 'Journey': (context) => 
        // 'Summaries': (context) =>
      },
    );
  }
}