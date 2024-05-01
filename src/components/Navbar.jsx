/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Input, Button, Avatar } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Mockdata } from "../mockdata/Mockdata";

function Navbar({ setPosts, posts }) {
  const [searchQuery, setSearchQuery] = useState("");
  if (searchQuery === "") {
    setPosts(Mockdata);
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.trim());
    console.log(searchQuery);
    const filteredPosts = Mockdata?.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (searchQuery === "") {
      setPosts(Mockdata);
    } else {
      setPosts(filteredPosts);
    }
  };

  return (
    <>
      <Box bg="black" color="white" py="4" px="6">
        <Flex justify="space-between" align="center">
          <Text fontSize="xl">Your Logo</Text>
          <Flex align="center">
            <Link to="/">
              <Button colorScheme="black" variant="outline" mr="4">
                Home
              </Button>
            </Link>
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              mr="4"
            />
            <Link to="/addPost">
              <Button colorScheme="black" variant="outline" mr="4">
                Write
              </Button>
            </Link>
            <Avatar size="sm" />
          </Flex>
        </Flex>
      </Box>
      <Outlet />
    </>
  );
}

export default Navbar;
