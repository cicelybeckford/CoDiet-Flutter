import 'package:flutter/material.dart';

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
    return OutlineButton(
      child: Text(text, textScaleFactor: 1, style: TextStyle(color: Colors.white)),
      borderSide: BorderSide(
        color: color,
      ),
      onPressed: onPressed,
    );
  }
}