import { HeadingTag } from '../components/headingTag';
import AppLayout from '../layouts/appLayout';
import CustomCalendar from '../components/customCalendar';
import CustomFullCalendar from '../components/customFullCalendar';

const Calendar = () => {
    return (
        <AppLayout>
            {/* <CustomCalendar /> */}
            <CustomFullCalendar />
        </AppLayout>
    );
};

export default Calendar;
