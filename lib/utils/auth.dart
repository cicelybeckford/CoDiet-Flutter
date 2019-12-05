import 'dart:async';
import 'package:firebase/firebase.dart';

abstract class BaseAuth {
  Future<String> signIn(String email, String password);

  Future<String> signUp(String email, String password);

  Future<String> googleSignIn();

  Future<String> facebookSignIn();

  Future<User> getCurrentUser();

  Future<void> sendEmailVerification();

  Future<void> signOut();

  Future<bool> isEmailVerified();
}

class FirebaseAuth implements BaseAuth {
  final Auth _firebaseAuth = auth();

  Future<String> signIn(String email, String password) async {
    try {
      var result = await _firebaseAuth.signInWithEmailAndPassword(email, password);
      User user = result.user;
      return user.uid;
    } catch (e) {
      throw Exception(e);
    }
  }

  Future<String> googleSignIn() async {
    try {
      var provider = new GoogleAuthProvider().addScope("email");
      var result = await _firebaseAuth.signInWithPopup(provider);
      User user = result.user;

      assert(!user.isAnonymous);
      assert(await user.getIdToken() != null);

      final User currentUser = _firebaseAuth.currentUser;
      assert(user.uid == currentUser.uid);
      return user.uid;
    } catch (e) {
      throw Exception(e);
    }
  }

  Future<String> facebookSignIn() async {
    try {
      var provider = new FacebookAuthProvider().addScope("email");
      var result = await _firebaseAuth.signInWithPopup(provider);
      User user = result.user;

      assert(!user.isAnonymous);
      assert(await user.getIdToken() != null);

      final User currentUser = _firebaseAuth.currentUser;
      assert(user.uid == currentUser.uid);
      return user.uid;
    } catch (e) {
      throw Exception(e);
    }
  }

  Future<String> signUp(String email, String password) async {
    try {
      var result = await _firebaseAuth.createUserWithEmailAndPassword(email, password);
      User user = result.user;
      return user.uid;
    } catch (e) {
      throw Exception(e);
    }
  }

  Future<User> getCurrentUser() async {
    return _firebaseAuth.currentUser;
  }

  Future<void> signOut() async {
    return _firebaseAuth.signOut();
  }

  Future<void> sendEmailVerification() async {
    User user = _firebaseAuth.currentUser;
    user.sendEmailVerification();
  }

  Future<bool> isEmailVerified() async {
    User user =  _firebaseAuth.currentUser;
    return user.emailVerified;
  }
}