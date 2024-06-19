import { Container, Heading, Text, VStack, Box, Image, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to My Personal Blog
        </Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-banner.jpg" alt="Blog Banner" borderRadius="md" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Hi there! I'm a passionate writer and this is my personal blog where I share my thoughts, experiences, and stories. Stay tuned for more updates!
        </Text>
        <Link href="#latest-posts" color="teal.500" fontSize="lg">
          Check out my latest posts
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;