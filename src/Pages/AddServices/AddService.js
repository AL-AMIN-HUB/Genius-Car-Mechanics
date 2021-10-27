import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("https://guarded-everglades-47114.herokuapp.com/services", data).then((res) => {
      if (res.data.insertedId) {
        alert("Successfully Added service");
        reset();
      }
    });
  };
  return (
    <div className="addService text-center">
      <h2>Please Add A Service</h2>
      <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Name" />
        <input type="number" {...register("Price")} placeholder="Price" />
        <input {...register("img")} placeholder="Image url" />
        <textarea {...register("description")} placeholder="Description" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
