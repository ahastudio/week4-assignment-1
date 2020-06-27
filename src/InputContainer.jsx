import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';

import {
  updateTaskTitle,
  addTask,
} from './action';

export default function InputContainer() {
  const { taskTitle } = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));

  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
}
