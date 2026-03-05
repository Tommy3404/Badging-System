import { ThemedText, ThemedView } from '@joe111/neo-ui'
import { Show, useSession, useUser } from '@clerk/expo'
import { Href, Link } from 'expo-router'
import { StyleSheet } from 'react-native'

export default function Page() {
  const { user } = useUser()

  // If your user isn't appearing as signed in,
  // it's possible they have session tasks to complete.
  // Learn more: https://clerk.com/docs/guides/configure/session-tasks
  const { session } = useSession()
  console.log(session?.currentTask)

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Welcome!</ThemedText>
      <Show when="signed-out">
        <Link href={"/(auth)/sign-in" as Href}>
          <ThemedText>Sign in</ThemedText>
        </Link>
        <Link href="/(auth)/sign-up">
          <ThemedText>Sign up</ThemedText>
        </Link>
      </Show>
      <Show when="signed-in">
        <ThemedText>Hello {user?.emailAddresses[0].emailAddress}</ThemedText>
        {/* <SignOutButton /> */}
      </Show>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
})