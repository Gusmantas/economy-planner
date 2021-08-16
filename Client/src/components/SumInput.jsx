import { useState } from "react";
import {} from "../styles/SumInput.module.scss";

const SumInput = (props) => {
  const [userInput, setUserInput] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      name: props.data.name,
      sum: parseInt(userInput),
    };
    e.target.reset();
    setUserInput(0);

    props.data.setAmount(values);
  };

  const getCategories = () => {
    if (props.data.name === "expense") {
      return (
        <select name="category">
          <option value="7">Groceries</option>
          <option value="8">Restaurant</option>
          <option value="9">Transport</option>
          <option value="10">Household</option>
          <option value="11">Subscription</option>
          <option value="12">Shopping</option>
          <option value="13">Health</option>
          <option value="14">Leisures</option>
          <option value="15">Pets</option>
          <option value="6">Other</option>
        </select>
      );
    } else {
      return (
        <select name="category">
         <option value="1">Salary</option>
         <option value="2">Loan</option>
         <option value="3">Funds</option>
         <option value="4">Sale</option>
         <option value="5">Stock-share</option>
         <option value="6">Other</option>
        </select>
      );
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Name</label>
      <input type="text" placeholder="Name" />
      {getCategories()}
      <label>{props.data.label}</label>
      <input
        type="number"
        placeholder={props.data.name}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SumInput;
