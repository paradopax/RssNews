import 'package:flutter/material.dart';
import 'package:rssnews/screens/forgot_password.dart';
import 'register.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({Key? key}) : super(key: key);

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {

  bool _rememberMe = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Form(
          child: Padding(
            padding: const EdgeInsets.all(20.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                // logo
                const Image(
                  width: 200,
                  height: 200,
                  image: NetworkImage('https://flutter.github.io/assets-for-api-docs/assets/widgets/owl.jpg'),
                ),
                // email field
                Padding(
                  padding: const EdgeInsets.only(
                    top: 15,
                    bottom: 15
                  ),
                  child: TextFormField(
                    keyboardType: TextInputType.emailAddress,
                    decoration: const InputDecoration(
                      prefixIcon: Icon(Icons.email),
                      border: OutlineInputBorder(),
                      labelText: 'Email'
                    ),
                  ),
                ),
                // password field
                TextFormField(
                  obscureText: true,
                  decoration: const InputDecoration(
                    prefixIcon: Icon(Icons.password),
                    border: OutlineInputBorder(),
                    labelText: 'Password',
                  ),
                ),

                // forgot password
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Expanded(
                      child: CheckboxListTile(
                        title: const Text('Ricordami'),
                        value: _rememberMe,
                        controlAffinity: ListTileControlAffinity.leading,
                        onChanged: _changeRememberMe,
                      )
                    ),
                    Expanded(child: TextButton(
                      onPressed: _goToRecoverEmail,
                      child: const Text("Password dimenticata?")
                    ))
                  ],
                ),
                SizedBox(
                  width: 200,
                  height: 50,
                  child: ElevatedButton(
                    onPressed: _doLogin,
                    style: ButtonStyle(
                      shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                        RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(18.0)
                        )
                      ) 
                    ),
                    child: const Text("Login",
                      style: TextStyle(
                        fontSize: 25
                      )
                    )
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(16),
                  child: Column(
                    children: [
                      TextButton(
                        onPressed: _goToRegistration,
                        child: const Text("Non hai un account? Registrati subito")
                      ), 
                      const Text("oppure accedi con")
                    ],
                  )
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Column(
                      children: [
                        IconButton(
                          tooltip: "Google",
                          iconSize: 56,
                          onPressed: _doGoogleLogin,
                          icon: const Icon(Icons.g_mobiledata_sharp)
                        ),
                        const Text("Account Google")
                      ]
                    ),
                    Column(
                      children: [
                        IconButton(
                          tooltip: "Guest",
                          iconSize: 56,
                          onPressed: _doGuestLogin,
                          icon: const Icon(Icons.account_circle_rounded)
                        ),
                        const Text("Ospite")
                      ]
                    )
                  ],
                )
              ] 
            )
          )
        )
      )
    );
  }

  void _changeRememberMe(bool? value) {
    setState(() {
      _rememberMe = value!;
    });
  }

  void _doLogin() {
    throw UnimplementedError("Login");                
  }

  void _doGoogleLogin() {
    throw UnimplementedError("Google login");
  }

  void _doGuestLogin() {
    throw UnimplementedError("Guest login");
  }

  void _goToRegistration() {
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(
        builder: (context) => const RegistrationPage()
      )
    );
  }

  void _goToRecoverEmail() {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => const ForgotPasswordPage()
      )
    );
  }
}
