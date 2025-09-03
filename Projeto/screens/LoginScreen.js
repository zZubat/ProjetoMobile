import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui é onde a lógica de autenticação será implementada.
    // Por enquanto, vamos usar um alerta para testar.
    Alert.alert('Login', `Email: ${email}, Senha: ${password}`);
  };

  return (
    <View style={styles.container}>
      {/* Ícone de relógio ou logo do app */}
      <Text style={styles.logoPlaceholder}>⏰</Text>
      
      <Text style={styles.title}>POINT TIME</Text>

      {/* Componente de Input para o login */}
      <Input
        label="LOGIN:"
        placeholder="Digite seu email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Componente de Input para a senha */}
      <Input
        label="SENHA:"
        placeholder="Digite sua senha"
        isPassword={true}
        value={password}
        onChangeText={setPassword}
      />

      {/* Componente de Botão para o login */}
      <Button title="ENTRAR" onPress={handleLogin} />

      {/* Link para login de administrador */}
      <TouchableOpacity onPress={() => console.log('Entrar como administrador')}>
        <Text style={styles.adminLink}>Entrar como administrador</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoPlaceholder: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00ffff', 
    marginBottom: 50,
  },
  adminLink: {
    color: '#00ffff',
    marginTop: 10,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;