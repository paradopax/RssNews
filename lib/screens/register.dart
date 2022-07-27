import 'package:flutter/material.dart';
import 'package:rssnews/screens/login.dart';

class RegistrationPage extends StatefulWidget {
  const RegistrationPage({Key? key}) : super(key: key);

  @override
  State<RegistrationPage> createState() => _RegistrationPageState();
}

class _RegistrationPageState extends State<RegistrationPage> {

  bool _acceptCondition = false;

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
                    decoration: const InputDecoration(
                      prefixIcon: Icon(Icons.email),
                      border: OutlineInputBorder(),
                      labelText: 'Email'
                    ),
                  ),
                ),
                // password field
                Padding(
                  padding: const EdgeInsets.only(
                    bottom: 15
                  ),
                  child: TextFormField(
                    obscureText: true,
                    decoration: const InputDecoration(
                      prefixIcon: Icon(Icons.password),
                      border: OutlineInputBorder(),
                      labelText: 'Password',
                    ),
                  ),
                ),
                // repeat password
                TextFormField(
                  obscureText: true,
                  decoration: const InputDecoration(
                    prefixIcon: Icon(Icons.password),
                    border: OutlineInputBorder(),
                    labelText: 'Repeat password',
                  ),
                ),

                // terms & conds
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Expanded(
                      child: CheckboxListTile(
                        title: const Text('Accetto i termini e le condizioni'),
                        value: _acceptCondition,
                        controlAffinity: ListTileControlAffinity.leading,
                        onChanged: _changeAccept,
                      )
                    )
                  ],
                ),
                SizedBox(
                  width: 200,
                  height: 50,
                  child: ElevatedButton(
                    onPressed: _doRegistration,
                    style: ButtonStyle(
                      shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                        RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(18.0)
                        )
                      ) 
                    ),
                    child: const Text("Registrati",
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
                        onPressed: _goToLogin,
                        child: const Text("Hai già un account? Accedi subito")
                      ), 
                      const Text("oppure registrati con")
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
                          onPressed: _doGoogleRegistration,
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
                          onPressed: _doGuestRegistration,
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

  void _changeAccept(bool? value) {
    setState(() {
      _acceptCondition = value!;
    });
  }

  void _doRegistration() {
    throw UnimplementedError("Registration");                
  }

  void _doGoogleRegistration() {
    throw UnimplementedError("Google Registration");
  }

  void _doGuestRegistration() {
    throw UnimplementedError("Guest registration");
  }

  void _goToLogin() {
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(
        builder: (context) => 
          const LoginPage()
      )
    );
  }
}
