import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../../SCSS/AdminStyles/AdminDashboard/AdminDashboard.scss"

const MyComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <Calendar 
        onChange={setDate} 
        value={date} 
      />
      <p>Selected date: {date.toDateString()}</p>
    </div>
  );
}
export default MyComponent;