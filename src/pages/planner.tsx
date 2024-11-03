import { HeadingTag } from '../components/headingTag';
import Card from '../components/card';
import { ReactComponent as WorkoutIcon } from '../assets/images/icons/Workout_planner_ico.svg';
import { ReactComponent as ExerciseIcon } from '../assets/images/icons/Workout_planner_ico.svg';
import { ReactComponent as UserIcon } from '../assets/images/icons/Users_ico.svg';
import { ReactComponent as DietIcon } from '../assets/images/icons/Diet_ico.svg';
import AppLayout from '../layouts/appLayout';

const cardData = [
    {
        title: 'Workout planner',
        icon: WorkoutIcon,
        description: 'Description for Card 1',
        path: '/planner/workouts',
    },
    {
        title: 'Excercise',
        icon: ExerciseIcon,
        description: 'Description for Card 2',
        path: '/planner/exercises',
    },
    {
        title: 'Users',
        icon: UserIcon,
        description: 'Description for Card 3',
        path: '/planner/users',
    },
    {
        title: 'Diet Planner',
        icon: DietIcon,
        description: 'Description for Card 4',
        path: '/planner/diets',
    },
    { title: 'Card 5', description: 'Description for Card 5' },
    { title: 'Card 6', description: 'Description for Card 6' },
];

const Planner = () => {
    return (
        <AppLayout>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            icon={card.icon}
                            description={card.description}
                            path={card?.path}
                        />
                    ))}
                </div>
            </div>
        </AppLayout>
    );
};

export default Planner;
