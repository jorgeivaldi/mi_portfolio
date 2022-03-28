import React from 'react'
import { createStyles, ThemeIcon, Progress, Text, Group, Badge, Paper, Image, Avatar, Title, Button, Card } from '@mantine/core'
import { PhoneCall, At } from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },
  avatar: {
    border: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
  },
}));

interface UserCardImageProps {
  image: string;
  avatar: string;
  name: string;
  phone: string;
  email: string;
  job: string;
}


export function UserCardImage({ image, avatar, name, phone, email, job }: UserCardImageProps) {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder p="xl" radius="md" className={classes.card} shadow="md">
      <Card.Section sx={{ backgroundImage: `url(${image})`, height: 96 }} />
      <Avatar src={avatar} size={124} radius={80} mx="auto" mt={-30} className={classes.avatar} />
      <Title align="center" order={3} m="sm" mt="md">
        {name}
      </Title>
      <Text align="center" size="md" mb="md" color="dimmed">
        {email} • {job}
      </Text>
      <Group noWrap spacing={10} my={3}>
        <At size={16} className={classes.icon} />
        <Text size="xs" color="dimmed">
          {email}
        </Text>
      </Group>

      <Group noWrap spacing={10} mt={5}>
        <PhoneCall size={16} className={classes.icon} />
        <Text size="xs" color="dimmed">
          {phone}
        </Text>
      </Group>
    </Card>
  );
}