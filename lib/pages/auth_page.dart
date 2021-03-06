import 'package:flutter/material.dart';
import 'package:codiet/utils/auth.dart';
import 'package:codiet/utils/centered_view.dart';
import 'package:firebase/firebase.dart' as fb;


class AuthPage extends StatefulWidget {

  AuthPage({this.auth, this.loginCallback, this.signupCallback});

  final BaseAuth auth;
  final VoidCallback loginCallback;
  final VoidCallback signupCallback;

  @override
  State<StatefulWidget> createState() => new _AuthPage();

}

class _AuthPage extends State<AuthPage>{

  final _formKey = new GlobalKey<FormState>();

  String _email;
  String _password;
  String _errorMessage;

  bool _isLoginForm;
  bool _isLoading;

  // Check if form is valid before perform login or signup
  bool validateAndSave() {
    final form = _formKey.currentState;
    if (form.validate()) {
      form.save();
      return true;
    }
    return false;
  }

  // Perform login or signup
  void validateAndSubmit() async {
    setState(() {
      _errorMessage = "";
      _isLoading = true;
    });
    if (validateAndSave()) {
      String userId = "";
      try {
        if (_isLoginForm) {
          userId = await widget.auth.signIn(_email, _password);
        } else {
          userId = await widget.auth.signUp(_email, _password);
        }
        setState(() {
          _isLoading = false;
        });
        final fb.DatabaseReference ref = fb.database().ref("users/" + userId);

        if (userId.length > 0 && userId != null) {
          if (_isLoginForm){
            ref.once("value").then((e) async {
              if (e.snapshot.child("completeSignUp").exists() && 
              (e.snapshot.child("completeSignUp").val() == "true")){
                widget.loginCallback();
              } else {
                widget.signupCallback();
              }
            });
          } else {
            var map = {"completeSignUp": "false"};
            await ref.set(map);
            widget.signupCallback();
          }
        }
      } catch (e) {
        print('Error: $e');
        setState(() {
          _isLoading = false;
          _errorMessage = e.message.toString();
          _formKey.currentState.reset();
        });
      }
    }
  }

  @override
  void initState() {
    _errorMessage = "";
    _isLoading = false;
    _isLoginForm = true;
    super.initState();
  }

  void resetForm() {
    _formKey.currentState.reset();
    _errorMessage = "";
  }

  void toggleFormMode() {
    resetForm();
    setState(() {
      _isLoginForm = !_isLoginForm;
    });
  }

  void signInWithThirdParty(String title) async {
    setState(() {
      _errorMessage = "";
      _isLoading = true;
    });
    try {
      String userId  = "";
      if (title == "Google") {
        userId  = await widget.auth.googleSignIn();
      } else {
        userId = await widget.auth.facebookSignIn();
      }
      setState(() {
        _isLoading = false;
      });
      final fb.DatabaseReference ref = fb.database().ref("users/" + userId);
      ref.once("value").then((e) async {
          if (e.snapshot.child("completeSignUp").exists() && 
          (e.snapshot.child("completeSignUp").val() == "true")){
            widget.loginCallback();
          } else if (e.snapshot.child("completeSignUp").exists() &&
          e.snapshot.child("completeSignUp").val() == "false") {
            widget.signupCallback();
          } else {
            var map = {"completeSignUp": "false"};
            await ref.set(map);
            widget.signupCallback();
          }
      });
    } catch (e) {
      print('Error: $e');
      setState(() {
        _isLoading = false;
        _errorMessage = e.message.toString();
        _formKey.currentState.reset();
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        body: CenteredView(
                  child: Stack(
            children: <Widget>[
              _showForm(),
              _showCircularProgress(),
            ],
          ),
        ));
  }

  Widget _showCircularProgress() {
    if (_isLoading) {
      return Center(child: CircularProgressIndicator());
    }
    return Container(
      height: 0.0,
      width: 0.0,
    );
  }

  Widget _showForm() {
    return new Container(
        padding: EdgeInsets.all(10.0),
        child: new Form(
          key: _formKey,
          child: new ListView(
            shrinkWrap: true,
            children: <Widget>[
              showLogo(),
              showEmailInput(),
              showPasswordInput(),
              showButtons(),
              showSeparator(),
              showThirdPartyButtons(),
              SizedBox(height: 20,),
              showErrorMessage(),
            ],
          ),
        ));
  }

  Widget showErrorMessage() {
    if (_errorMessage.length > 0 && _errorMessage != null) {
      return new Text(
        _errorMessage,
        style: TextStyle(
            fontSize: 13.0,
            color: Colors.red,
            height: 1.0,
            fontWeight: FontWeight.w300),
      );
    } else {
      return new Container(
        height: 0.0,
      );
    }
  }

  Widget showLogo() {
    return new Hero(
      tag: 'hero',
      child: Padding(
        padding: EdgeInsets.fromLTRB(0.0, 50.0, 0.0, 0.0),
        child: CircleAvatar(
          backgroundColor: Colors.transparent,
          radius: 70.0,
          child: Image.asset('assets/logo2.png'),
        ),
      ),
    );
  }

  Widget showEmailInput() {
    return Padding(
      padding: const EdgeInsets.fromLTRB(0.0, 40.0, 0.0, 0.0),
      child: new TextFormField(
        maxLines: 1,
        keyboardType: TextInputType.emailAddress,
        autofocus: false,
        decoration: new InputDecoration(
            hintText: 'Email',
            icon: new Icon(
              Icons.mail,
              color: Colors.grey,
            )),
        validator: (value) => value.isEmpty ? 'Email can\'t be empty' : null,
        onSaved: (value) => _email = value.trim(),
      ),
    );
  }

  Widget showPasswordInput() {
    return Padding(
      padding: const EdgeInsets.fromLTRB(0.0, 15.0, 0.0, 0.0),
      child: new TextFormField(
        maxLines: 1,
        obscureText: true,
        autofocus: false,
        decoration: new InputDecoration(
            hintText: 'Password',
            icon: new Icon(
              Icons.lock,
              color: Colors.grey,
            )),
        validator: (value) => value.isEmpty ? 'Password can\'t be empty' : null,
        onSaved: (value) => _password = value.trim(),
      ),
    );
  }

  Widget showButtons() {
    return new Padding(
        padding: EdgeInsets.fromLTRB(0.0, 40.0, 0.0, 0.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
          Expanded(
            child: new RaisedButton(
              elevation: 1.0,
              shape: new RoundedRectangleBorder(
                  borderRadius: new BorderRadius.circular(30.0)),
              color: Colors.blue,
              child: new Text(_isLoginForm ? 'Login' : 'Create account',
                  style: new TextStyle(fontSize: 15.0, color: Colors.white)),
              onPressed: validateAndSubmit,
            ),
          ),
          SizedBox(
            width: 20,
          ),
          Expanded(
            child: new OutlineButton(
              shape: new RoundedRectangleBorder(
                  borderRadius: new BorderRadius.circular(30.0)),
              focusColor: Colors.blue,
              child: new Text(_isLoginForm ? 'Create an account' : 'Have an account? Sign in',
                  style: new TextStyle(fontSize: 15.0, color: Colors.blue)),
              onPressed: toggleFormMode,
            ),
          ),
        ],
      )
    );
  }

  Widget showThirdPartyButtons() {
        return new Padding(
            padding: EdgeInsets.fromLTRB(0.0, 20.0, 0.0, 0.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
              Expanded(
                child: new FlatButton(
                  shape: new RoundedRectangleBorder(
                      borderRadius: new BorderRadius.circular(30.0)),
                  color: Colors.red,
                  child: new Text("Login with Google",
                      style: new TextStyle(fontSize: 15.0, color: Colors.white)),
                  onPressed: (){
                    signInWithThirdParty("Google");
                  },
                ),
              ),
              SizedBox(
                width: 20,
              ),
              Expanded(
                child: new FlatButton(
                  shape: new RoundedRectangleBorder(
                      borderRadius: new BorderRadius.circular(30.0)),
                  color: Colors.blue[800],
                  child: new Text("Login with Facebook",
                      style: new TextStyle(fontSize: 15.0, color: Colors.white)),
                  onPressed: (){
                    signInWithThirdParty("FB");
                  },
            ),
          ),
        ],
      )
    );
  }

  Widget showSeparator() {
    return new Padding(
        padding: EdgeInsets.fromLTRB(0.0, 20.0, 0.0, 0.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
          Expanded(
            child: new Divider(
              indent: 120,
              thickness: 1,
              color: Colors.black38,
            )
          ),
          SizedBox(
            width: 40,
            child: new Text(
              "OR",
              textAlign: TextAlign.center,
            )
          ),
          Expanded(
            child: new Divider(
              endIndent: 120,
              thickness: 1,
              color: Colors.black38,
            )
          ),
        ],
      )
    );
  }
}