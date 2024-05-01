import { Box, Heading, Text, Button } from "@chakra-ui/react";

const PostItem = ({ setSelectedPost, post }) => {
  const handleBack = () => {
    setSelectedPost(null);
  };

  return (
    <Box py="4">
      <Heading as="h2" fontSize="3xl" mb="2">
        {post.title}
      </Heading>
      <Text fontSize="lg" color="gray.600" mb="4">
        By {post.author}
      </Text>
      <Text fontSize="lg" mb="4">
        {post.excerpt}
      </Text>
      <Button colorScheme="blue" onClick={handleBack}>
        Back
      </Button>
    </Box>
  );
};

export default PostItem;
