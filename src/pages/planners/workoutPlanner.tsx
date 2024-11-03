import { useState } from 'react';
import Modal from '../../components/modal';
import PlannerLayout from '../../layouts/plannerLayout';
import AddNewWorkout from '../../components/addNewWorkout';
import Card from '../../components/card';
import { IoAdd } from 'react-icons/io5';

const workoutList = [
    {
        id: 1,
        templateName: 'Workout name 1',
        exercises: [
            {
                id: 2,
                name: 'Deadlift',
                repetitions: '3, 2, 2, 3 ',
                weights: '20kg',
                sets: 0,
                description: '',
            },
        ],
    },
    {
        id: 2,
        templateName: 'Deadlift ',
        exercises: [
            {
                id: 2,
                name: 'Deadlift',
                repetitions: '3, 2, 2, 3 ',
                weights: '20kg',
                sets: 0,
                description: '',
            },
        ],
    },
    {
        id: 3,
        templateName: 'Deadlift ',
        exercises: [
            {
                id: 2,
                name: 'Deadlift',
                repetitions: '3, 2, 2, 3 ',
                weights: '20kg',
                sets: 0,
                description: '',
            },
        ],
    },
    {
        id: 4,
        templateName: 'Deadlift ',
        exercises: [
            {
                id: 2,
                name: 'Deadlift',
                repetitions: '3, 2, 2, 3 ',
                weights: '20kg',
                sets: 0,
                description: '',
            },
        ],
    },
    {
        id: 5,
        templateName: 'Deadlift ',
        exercises: [
            {
                id: 2,
                name: 'Deadlift',
                repetitions: '3, 2, 2, 3 ',
                weights: '20kg',
                sets: 0,
                description: '',
            },
        ],
    },
    {
        id: 6,
        templateName: 'Deadlift ',
        exercises: [
            {
                id: 2,
                name: 'Deadlift',
                repetitions: '3, 2, 2, 3 ',
                weights: '20kg',
                sets: 0,
                description: '',
            },
        ],
    },
    {
        id: 7,
        templateName: 'Deadlift ',
        exercises: [
            {
                id: 2,
                name: 'Deadlift',
                repetitions: '3, 2, 2, 3 ',
                weights: '20kg',
                sets: 0,
                description: '',
            },
        ],
    },
];

const WorkoutPlanner = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <PlannerLayout
            backPath={'/planner'}
            toolbarItems={
                <button onClick={openModal} className="">
                    <IoAdd
                        size={30}
                        className="text-white bg-blue-500 rounded-full origin-center shadow-lg hover:shadow-2xl hover:w-8 hover:h-8 transition-all duration-300 "
                    />
                </button>
            }
        >
            {/* <AddNewWorkout /> */}

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {/* <h2 className="text-xl font-bold mb-4">Workout Planner</h2> */}
                <AddNewWorkout isOpen={isModalOpen} onClose={closeModal} />
            </Modal>
            <div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {/* {workout.templateName} */}
                    {workoutList.map((workout, index) => (
                        <li key={`workout-template-${index}`}>
                            <Card
                                key={index}
                                title={workout.templateName}
                                path={`/planner/workouts/${workout.id}`}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </PlannerLayout>
    );
};

export default WorkoutPlanner;
