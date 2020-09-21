import React from "react";
import "./styles.css";
import Navigation from "./components/navigation/script";
import Calendar from "./components/calendar/script";
import { Provider } from 'react-redux';
import { store } from "./redux/index";

export default function App() {
  const navItems = ["calendar", "todo", "ranking"];
  return (
    <div className="App">
      <Provider store={store}>
        <Navigation items={navItems}></Navigation>
        <Calendar></Calendar>  
      </Provider>
    </div>
  );
}