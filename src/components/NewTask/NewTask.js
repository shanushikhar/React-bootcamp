import { useState } from "react";
import useHttp from "../Hooks/use-http";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { isLoading, error, sendRequest } = useHttp();

  const taskData = (bindingTextBody, dataFromHooks) => {
    const generatedId = dataFromHooks.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: bindingTextBody };
    // console.log({ createdTask });

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendRequest(
      {
        url: "https://hackathon-2639b-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: { text: taskText },
      },
      taskData.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
