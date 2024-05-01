// PostList.jsx
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  return (
    <Box maxW="800px" mx="auto" p="4">
      {!selectedPost &&
        posts?.map((post) => (
          <Box
            key={post.id}
            borderBottom="1px solid"
            borderColor="gray.200"
            py="4"
          >
            <Heading as="h2" fontSize="xl" mb="2">
              {post.title}
            </Heading>
            <Text fontSize="sm" color="gray.500" mb="2">
              {post.author}
            </Text>
            <Text>{post.excerpt}</Text>
            <Flex justify="flex-end" mt="2">
              <Button
                colorScheme="blue"
                size="sm"
                onClick={() => handleReadMore(post)}
              >
                Read more
              </Button>
            </Flex>
          </Box>
        ))}
      {/* Render selected post in PostItem component */}
      {selectedPost && (
        <PostItem post={selectedPost} setSelectedPost={setSelectedPost} />
      )}
    </Box>
  );
};

export default PostList;
