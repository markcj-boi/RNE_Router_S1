import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', email, password);
  };
  const handleSubmit = () => {
    if (email && password) {
      setSubmitted(true);
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Text style={styles.or}>Or</Text>

      <Pressable style={styles.button1} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login With Facebook</Text>
      </Pressable>

      {submitted && (
        <View style={styles.output}>
          <Text style={styles.outputTitle}>Submitted Information</Text>
          <Text>Email: {email}</Text>
          <Text>Password: {password}</Text>
          </View>
      )}
       </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: '#2e86de',
    paddingVertical: 14,
    borderRadius: 8,
  },
  button1: {
    backgroundColor: '#2e86de',
    paddingVertical: 14,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  or: {
    fontSize: 20,
    marginBottom: 24,
    marginTop: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  output: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 8,
  },
  outputTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});