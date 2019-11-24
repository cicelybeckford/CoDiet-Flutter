import 'package:flutter/material.dart';
import 'package:codiet/home_view.dart';

main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        // brightness: Brightness.dark,
        primaryColorDark: Colors.white,
        // fontFamily: "GoogleSansRegular",
      ),
      home: HomeView(),
    );
  }
}