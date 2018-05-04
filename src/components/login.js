import React, { Component } from "react";
import { View, Text, Button, TextInput, Image } from "react-native";
import Images from "../images";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Image source={Images.logo} />
          <Text style={{ padding: 30 }}>Inicia Sesion</Text>
          <TextInput
            style={{
              height: 40,
              width: 300
            }}
            onChangeText={email => this.setState({ email })}
            placeholder="Numero de Documento"
            value={this.state.email}
          />
          <TextInput
            style={{
              height: 40,
              width: 300
            }}
            placeholder="Contraseña"
            secureTextEntry
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <Text style={{ padding: 30 }}>Olvide Mi Contraseña</Text>
          <Button
            title="Inicia Sesion"
            onPress={() => this.props.navigation.navigate("Home")}
          />
        </View>
        <View style={{ justifyContent: "center", alignSelf: "center" }}>
          <Text style={{ textDecorationLine: "underline", padding: 10 }}>
            ¿Todavia no estas registrado?
          </Text>
          <Text style={{ fontWeight: "bold", padding: 30 }}>
            QUIERO SER CHIPER
          </Text>
        </View>
      </View>
    );
  }
}

export default Login;
