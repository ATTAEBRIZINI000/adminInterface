import { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import { Box, Button } from "@chakra-ui/react";
import "react-quill/dist/quill.snow.css";
import { Mockdata } from "../mockdata/Mockdata";

export const TextEditor = ({ setPosts }) => {
  const [value, setValue] = useState("");
  const editorRef = useRef(null);
  // Ref to access Quill instance

  const handleText = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(value, "text/html");
    const h1Text = doc.querySelector("h1")?.textContent || "";
    const h2Text = doc.querySelector("h2")?.textContent || "";
    const pText = doc.querySelector("p")?.textContent || "";
    const newPost = {
      id: Mockdata.length + 1,
      title: h1Text,
      author: h2Text,
      excerpt: pText,
    };
    Mockdata.push(newPost);
    console.log(Mockdata);
    setPosts(Mockdata);
    setValue("");
  };

  return (
    <Box px={16} pt={10}>
      <ReactQuill theme="snow" value={value} onChange={setValue} />

      <Button onClick={handleText} mt={4}>
        Save
      </Button>
    </Box>
  );
};
