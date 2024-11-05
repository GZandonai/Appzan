import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{ headerTitle: 'Your List' }}
      />

<Stack.Screen
        name="index"
        options={{ headerTitle: 'Appzan' }}
      />

      
    </Stack>
  );
}
