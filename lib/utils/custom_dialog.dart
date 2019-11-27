import 'package:flutter/material.dart';

class CustomDialog extends StatelessWidget {
  final String title, buttonText;
  final TextEditingController controller;

  CustomDialog({
    @required this.title,
    @required this.controller,
    @required this.buttonText,
  });

  dialogContent(BuildContext context) {
    return Stack(
      children: <Widget>[
        Container(
          width: 450,
          height: 300,
          padding: EdgeInsets.only(
            left: 40,
            right: 40,
            top: 50,
            bottom: 20,
          ),
          decoration: new BoxDecoration(
            color: Colors.white,
            shape: BoxShape.rectangle,
            borderRadius: BorderRadius.circular(0),
            boxShadow: [
              BoxShadow(
                color: Colors.black26,
                blurRadius: 10.0,
                offset: const Offset(0.0, 10.0),
              ),
            ],
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min, // To make the card compact
            children: <Widget>[
              Align(
                alignment: Alignment.topLeft,
                child: Text(
                  title,
                  style: TextStyle(
                    fontSize: 24.0,
                    fontWeight: FontWeight.w600,
                    color: Colors.blue,
                  ),
                ),
              ),
              SizedBox(height: 16.0),
              TextField(
                controller: controller,
              ),
              SizedBox(height: 24.0),
              Align(
                alignment: Alignment.bottomRight,
                child: FlatButton(
                  onPressed: () {
                    Navigator.of(context).pop(); // To close the dialog
                  },
                  child: Text(buttonText, style: TextStyle(color: Colors.blue)),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Dialog(  
      elevation: 0.0,
      backgroundColor: Colors.transparent,
      child: dialogContent(context),
    );
  }
}