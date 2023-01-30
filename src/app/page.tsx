"use client";
import React from "react";
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import {
  Heading,
  VStack,
  IconButton,
  extendTheme,
  useColorMode,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Page() {
  const initialTodos = [
    {
      id: 1,
      body: "get Books",
    },
    {
      id: 2,
      body: "get lectures",
    },
  ];

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos") as string) || []
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id: any) {
    const newTodos = todos.filter((todo:any) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }
  function addTodo(todo: any) {
    setTodos([...todos, todo]);
  }
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound
        size="lg"
        alignSelf="Flex-start"
        onClick={toggleColorMode}
        aria-label={""}
      />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="4xl"
        bgGradient="Linear(to-r, pink.800, pink.500, pink.200 )"
        bgClip="text"
        p="4"
      >
        Todo Application by Humera
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}
