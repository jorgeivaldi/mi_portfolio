import { ActionIcon, BackgroundImage, Box, Button, Center, Container, createStyles, Group, Header, Text, Title, useMantineColorScheme } from '@mantine/core'
import { useState } from 'react'
import { UserCardImage } from './Stats'
import yo from "./assets/img/yo2.jpeg"
import { MoonStars, Sun } from 'tabler-icons-react'

//import './App.css'

const useStyles = createStyles((theme) => ({
  app: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[1],
    height: "100vh",
    width: "100%",
  },
  header: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[1],
    padding: theme.spacing.md,
    border: 0,
  }
}))

function App() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const [count, setCount] = useState(0)
  const { classes } = useStyles()
  return (
    <div className={["App",classes.app].join(" ")}>
        <Header className={classes.header} height={70}>
          <Group style={{justifyContent:"space-between", width: "100%"}}>
            <Group>
              <Button variant="subtle">
                Inicio
              </Button>
              <Button variant="subtle">
                My Skills
              </Button>
            </Group>
            <Group>
            <ActionIcon
              variant="outline"
              color={dark ? 'yellow' : 'blue'}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <Sun size={18} /> : <MoonStars size={18} />}
            </ActionIcon>
            </Group>
          </Group>
        </Header>
      <Center sx={{height:"calc(100% - 70px)"}}>
        <UserCardImage
          avatar={yo}
          image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&h=146&q=80"
          name="Jorge Cristian Ivaldi"
          email="jorge.ivaldi@gmail.com"
          phone="+54 341 3477022"
          job="Desarrollador"
        />
      </Center>
    </div>
  )
}

export default App
