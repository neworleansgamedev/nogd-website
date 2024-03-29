import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = "AIzaSyAVbN0Kh3cSTsfs62F43uA0K5Bln2gMWgo";
let calendars = [
  { calendarId: "c_817psp5emlgh8vgg432udrtv20@group.calendar.google.com", color: "#613f99" },
];

const ExampleCalendar = () => {
  return (
    <div>
      <Calendar apiKey={API_KEY} calendars={calendars} />
    </div>
  );
};

export default ExampleCalendar;
