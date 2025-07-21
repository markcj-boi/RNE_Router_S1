
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const SignupScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSignup = () => {
    if (password !== password) {
      alert('Passwords do not match!');
      return;
    }
    // Add your signup logic here
    console.log('Signing up with:', email, password);
  };

    const handleSubmit = () => {
    if (name && phoneNumber && email && password) {
      setSubmitted(true);
    } else {
      alert('Please fill out all fields.');
    }
  };

    const handleClear = () => {
    setName('');
    setPhoneNumber('');
    setEmail('');
    setPassword('');
    setSubmitted(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        style={styles.input}  
      />

       <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={styles.input}  
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
          <Pressable style={[styles.button2]} onPress={handleClear}>
            <Text style={styles.buttonText2}>Clear</Text>
          </Pressable>

          {submitted && (
          <View style={styles.output}>
            <Text style={styles.outputTitle}>Submitted Information:</Text>
            <Text>Name: {name}</Text>
            <Text>Phone Number: {phoneNumber}</Text>
            <Text>Email: {email}</Text>
            <Text>Password: {password}</Text>
          </View>
        )}
        
    </View>
  );
};

export default SignupScreen;

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
  button2: {
    marginTop: 10,
    backgroundColor: '#2e86de',
    paddingVertical: 14,
    borderRadius: 8,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },

  buttonText2: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 16,
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
