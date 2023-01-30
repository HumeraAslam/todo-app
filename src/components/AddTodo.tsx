"use client";
import React from "react";
import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { nanoid } from "nanoid";


export default function AddTodo({ addTodo }:any) {
  const toast = useToast();

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (!content) {
      toast({
        title: "No Content",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const todo = {
      id: nanoid(),
      body: content,
    };
    addTodo(todo);
    setContent("");
  }
  const [content, setContent] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Add something here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}
