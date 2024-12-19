'use client'
import { Card, Flex, Group, Text, Image } from '@mantine/core'
import { IconFlask, IconStar, IconGitFork } from '@tabler/icons-react'
import { useGetProjectsQuery } from '@/shared/api/hooks/useGetProjectsQuery'
import styles from './page.module.css'

export default function Page() {
	const { data, isLoading } = useGetProjectsQuery()

	if (isLoading) return <Text>Loading...</Text>

	const projects = (data?.data ?? []) as RepositoryInfo[]

	return (
		<Flex mt={50} direction="column">
			<Flex gap={10} align="center" mb={20}>
				<IconFlask size={20} />
				<Text fw={600} size="20px">
					Projects
				</Text>
			</Flex>
			<Flex gap={15} className={styles.cards}>
				{projects.map((item) => (
					<Card key={item.id} withBorder padding="lg" className={styles.card}>
						<Card.Section>
							<Image
								src="https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
								alt="Running challenge"
								height={100}
							/>
						</Card.Section>

						<Group justify="space-between" mt="xl" pl={15} pr={15}>
							<Text component='a' href={item.html_url} fz="md" fw={700} className={styles.title}>
								{item.name}
							</Text>
							<Text mt="sm" mb="md" c="dimmed" fz="sm">
								{item.description}
							</Text>
						</Group>
						<Card.Section className={styles.footer}>
							<Flex align="center" gap={5}>
								<IconStar size={15} />
								<Text>{item.stargazers_count}</Text>
							</Flex>
							<Flex align="center" gap={5}>
								<IconGitFork size={15} />
								<Text>{item.forks_count}</Text>
							</Flex>
						</Card.Section>
					</Card>
				))}
			</Flex>
		</Flex>
	)
}
