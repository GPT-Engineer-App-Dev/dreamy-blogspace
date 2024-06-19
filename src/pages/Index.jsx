import { Container, Heading, Text, VStack, Box, Image, Link, Button, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);
  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

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
        <Button as={RouterLink} to="/add-post" colorScheme="teal" size="lg">
          Add New Post
        </Button>
        <VStack spacing={4} align="stretch" width="100%" id="latest-posts">
          {posts.map((post, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" position="relative">
              <IconButton
                icon={<FaTrash />}
                colorScheme="red"
                size="sm"
                position="absolute"
                top="1rem"
                right="1rem"
                onClick={() => handleDelete(index)}
                aria-label="Delete Post"
              />
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.content}</Text>
              <Text mt={4} fontSize="sm" color="gray.500">
                {new Date(post.date).toLocaleString()}
              </Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;