import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CustomCalendar: React.FC = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className="p-4">
            <Calendar onChange={onChange} value={value} className="w-full" />
        </div>
    );
};

export default CustomCalendar;
