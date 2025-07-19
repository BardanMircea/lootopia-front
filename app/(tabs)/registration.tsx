import ParallaxScrollView from "@/components/ParallaxScrollView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import PasswordChecklist from "react-password-checklist";

export default function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [motDePasseRepeat, setMotDePasseRepeat] = useState("");
  const [rgpdConsent, setRgpdConsent] = useState(false);

  const [passwordValid, setPasswordValid] = useState(false);

  const isFormValid = email.trim() !== "" &&
    pseudo.trim() !== "" &&
    passwordValid &&
    rgpdConsent;

  const handleSubmit = () => {
    if (!email || !pseudo || !motDePasse || !rgpdConsent) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs et accepter le RGPD.");
      return;
    }
    // Traitement de l'inscription ici
    Alert.alert("Succès", "Inscription réussie !");
  };

  return (
    <ParallaxScrollView
          headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
          headerImage={
            <IconSymbol
              size={0}
              color="#808080"
              name="chevron.left.forwardslash.chevron.right"
              style={styles.headerImage}
            />
          }>
        <View style={styles.container}>
        <Text style={styles.label}>Email</Text>
        <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Votre email"
        />

        <Text style={styles.label}>Pseudo</Text>
        <TextInput
            style={styles.input}
            value={pseudo}
            onChangeText={setPseudo}
            autoCapitalize="none"
            placeholder="Votre pseudo"
        />

        <Text style={styles.label}>Mot de passe</Text>
        <TextInput
            style={styles.input}
            value={motDePasse}
            onChangeText={setMotDePasse}
            secureTextEntry
            placeholder="Votre mot de passe"
        />

        <Text style={styles.label}>Répéter le mot de passe</Text>
        <TextInput
            style={styles.input}
            value={motDePasseRepeat}
            onChangeText={setMotDePasseRepeat}
            secureTextEntry
            placeholder="Répéter le mot de passe"
        />

        <PasswordChecklist
                    rules={["minLength","specialChar","number","capital","match"]}
                    minLength={5}
                    value={motDePasse}
                    valueAgain={motDePasseRepeat}
                    onChange={(isValid) => {setPasswordValid(isValid);}}
                />

        <View style={styles.rgpdContainer}>
            <Switch
            value={rgpdConsent}
            onValueChange={setRgpdConsent}
            />
            <Text style={styles.rgpdText}>J'accepte la politique de confidentialité (RGPD)</Text>
        </View>

        <Button title="S'inscrire" onPress={handleSubmit} disabled={isFormValid}/>
        </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  label: {
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 8,
    marginBottom: 8,
  },
  rgpdContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  rgpdText: {
    marginLeft: 8,
    flex: 1,
    flexWrap: "wrap",
  },
    headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
});