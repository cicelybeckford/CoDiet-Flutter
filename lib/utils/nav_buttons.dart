import 'package:flutter/material.dart';
import 'dart:html' as html;

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