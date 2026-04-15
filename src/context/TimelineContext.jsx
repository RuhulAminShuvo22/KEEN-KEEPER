import { createContext, useState } from "react";

export const TimelineContext = createContext(); //ignoring error//


export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addEntry = (type, name) => {
    const entry = {
      date: new Date().toLocaleDateString(),
      title: `${type} with ${name}`,
      type,
    };
    setTimeline(prev => [entry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
};