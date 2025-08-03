import { useState } from "react";
import Counter from "./Counter";
import "./App.css";

// // Store
// interface CounterState {
//   value: number;
// }

// interface UserState {
//   isSignedIn: Boolean;
// }

// // Actions
// const incrementByAmount = { type: "INCREMENT", payload: 10 };
// const decrement = { type: "DECREMENT" };

// // Reducers

function App() {
  return (
    <div>
      <h2>Redux Complete Tutorial</h2>
      <Counter />
    </div>
  );
}

export default App;
