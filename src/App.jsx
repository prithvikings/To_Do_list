import React, { useState } from "react";
import { toast } from "react-toastify";

const App = () => {

  const [task,setTask]=useState("");
  const [Description,setdescription]=useState("");
  const [taskList,setTaskList]=useState([]);
  const submitHandler=()=>{
    return(e)=>{
      e.preventDefault();
      setTaskList([...taskList,{task,Description}]);
      // console.log(task);
      // console.log(Description);
      toast.success("Task Added Successfully");
      setTask("");
      setdescription("");
    }
  }

  const deleteHandler=(i)=>{
    let copyTask=[...taskList];
    copyTask.splice(i,1);
    setTaskList(copyTask);
    toast.error("Task Deleted Successfully");
  }

  let renderwork="No Task Available To do"
  if(taskList.length>0){
    renderwork=taskList.map((t,i)=>{
      return(
        <li key={i} className="flex justify-between mb-5">
          <div className="flex justify-between w-2/3">
            <h5 className="text-2xl font-semibold">{t.task}</h5>
            <h6 className="text-xl font-medium">{t.Description}</h6>
          </div>
          <button
          onClick={(i)=>{
            deleteHandler(i);
          }} 
          className="bg-blue-500 text-white p-2 rounded-md mr-2">
            Delete
          </button>
        </li>
      )
    })
  }
  return (
    <div className="h-screen w-screen bg-red-100">
      <h1 className=" text-slate-700 p-5 text-5xl font-[gilroy] text-center font-semibold">
        To Do list
      </h1>
      <form onSubmit={submitHandler()}  className="flex gap-2">
        <input
          type="text"
          className="w-1/4 py-1 px-4 m-5 border-2 border-slate-700 text-xl focus:outline-none focus:border-blue-500"
          placeholder="Add a task"
          onChange={(e)=>{
            setTask(e.target.value);
            // console.log(e.target.value)
          }}
          
          value={task}
        />

        <input
          type="text"
          className="w-1/4 py-1 px-4 m-5 border-2 text-xl border-slate-700 focus:outline-none focus:border-blue-500"
          placeholder="Add a Description"
          onChange={(e)=>{
            setdescription(e.target.value);
          }}
          value={Description}
        />

        <button className="py-3 px-5 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium transition-all ease-in-out m-5 rounded">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderwork}</ul>
      </div>
    </div>
  );
};

export default App;
