  
import 'package:flutter/material.dart';
import 'package:codiet/pages/root_page.dart';
import 'package:codiet/utils/auth.dart';

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
    );
  }
}