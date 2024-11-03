import React, { useState } from 'react';
import { HeadingTag } from './headingTag';
import { IoTrashBin } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';

interface AddNewWorkoutProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Exercise {
    name: string;
    repetitions: string;
    weights: string;
    sets: number;
    description: string;
    repUnit: string; // To store the selected repetition unit
    weightUnit: string; // To store the selected weight unit
}

interface ExistingExercise {
    name: string;
    id: number;
}

const existingExercises: ExistingExercise[] = [
    { name: 'Push Up', id: 1 },
    { name: 'Squat', id: 2 },
    { name: 'Deadlift', id: 3 },
    { name: 'Bench Press', id: 4 },
    { name: 'Pull Up', id: 5 },
    // Add more existing exercises here
];

const existingTemplates = [
    'Workout 1',
    'Workout weights',
    'Warm up',
    'Cool down',
    // Add more existing exercises here
];

const AddNewWorkout: React.FC<AddNewWorkoutProps> = ({ isOpen, onClose }) => {
    const [templateName, setTemplateName] = useState<string>('');
    const [exercises, setExercises] = useState<Exercise[]>([
        {
            name: '',
            repetitions: '',
            weights: '',
            sets: 0,
            description: '',
            repUnit: 'reps',
            weightUnit: 'kg',
        },
    ]);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [inputValue, setInputValue] = useState<string>('');
    const [filteredExercises, setFilteredExercises] = useState<
        ExistingExercise[]
    >([]);
    const [filteredWorkouts, setFilteredWorkouts] = useState<string[]>([]);

    const handleAddExercise = () => {
        setExercises((prev) => [
            ...prev,
            {
                name: '',
                repetitions: '',
                weights: '',
                sets: 0,
                description: '',
                repUnit: 'reps',
                weightUnit: 'kg',
            },
        ]);
        toggleAccordion(exercises.length);
    };

    const handleExerciseChange = (
        index: number,
        field: keyof Exercise,
        value: string | number
    ) => {
        setExercises((prev) => {
            const updatedExercises = [...prev];
            updatedExercises[index] = {
                ...updatedExercises[index],
                [field]: value,
            };
            return updatedExercises;
        });
    };

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Workout template
    // const handleWorkoutTemplateChange = (
    //     index: number,
    //     field: keyof Exercise,
    //     value: string | number
    // ) => {
    //     setExercises((prev) => {
    //         const updatedExercises = [...prev];
    //         updatedExercises[index] = {
    //             ...updatedExercises[index],
    //             [field]: value,
    //         };
    //         return updatedExercises;
    //     });
    // };

    // const handleInputChangeWorkoutTemplate = (value: string) => {
    //     setTemplateName(value);
    //     if (value.trim() === '') {
    //         setFilteredWorkouts([]);
    //         // handleWorkoutTemplateChange(index, 'name', '');
    //     } else {
    //         const filtered = existingTemplates.filter((workoutTemplate) =>
    //             workoutTemplate.toLowerCase().includes(value.toLowerCase())
    //         );
    //         setFilteredWorkouts(filtered);
    //         // handleWorkoutTemplateChange(index, 'name', value);
    //     }
    // };

    // const handleSelectWorkoutTemplate = (
    //     // index: number,
    //     workoutTemplate: string
    // ) => {
    //     setTemplateName(''); // Clear the input value
    //     setFilteredWorkouts([]); // Clear the filtered exercises
    //     // workoutTemplate
    //     const filtered = existingTemplates.filter((workoutTemplateItem) =>
    //         workoutTemplateItem
    //             .toLowerCase()
    //             .includes(workoutTemplate.toLowerCase())
    //     );

    //     handleWorkoutTemplateChange(index, 'name', filtered); // Set the selected exercise
    // };

    // const handleAddNewWorkoutTemplate = (index: number) => {
    //     const newWorkoutTemplate = inputValue.trim();
    //     if (
    //         newWorkoutTemplate &&
    //         !existingTemplates.includes(newWorkoutTemplate)
    //     ) {
    //         existingTemplates.push(newWorkoutTemplate); // Add new exercise to the list
    //         // handleWorkoutTemplateChange(index, 'name', newWorkoutTemplate);
    //     }
    //     setTemplateName(''); // Clear input after adding
    //     setFilteredWorkouts([]); // Clear the filtered exercises
    // };

    // Exercise
    const handleInputChange = (index: number, value: string) => {
        setInputValue(value);
        if (value.trim() === '') {
            setFilteredExercises([]);
            handleExerciseChange(index, 'name', '');
        } else {
            const filtered = existingExercises.filter((exercise) =>
                exercise.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredExercises(filtered);
            handleExerciseChange(index, 'name', value);
        }
    };

    const handleSelectExercise = (
        index: number,
        exercise: ExistingExercise
    ) => {
        setInputValue(''); // Clear the input value
        setFilteredExercises([]); // Clear the filtered exercises
        handleExerciseChange(index, 'name', exercise.name); // Set the selected exercise
    };

    const handleAddNewExercise = (index: number) => {
        const newExercise = inputValue.trim();
        if (
            newExercise &&
            !existingExercises.some((ex) => ex.name === newExercise)
        ) {
            const newId = existingExercises.length + 1; // Assign a new ID
            existingExercises.push({ name: newExercise, id: newId }); // Add new exercise to the list
            handleExerciseChange(index, 'name', newExercise);
        }
        setInputValue(''); // Clear input after adding
        setFilteredExercises([]); // Clear the filtered exercises
    };

    const handleDeleteExercise = (index: number) => {
        setExercises((prev) => prev.filter((_, i) => i !== index));
    };
    const handleSubmit = () => {
        console.log(existingExercises);
        console.log({ templateName, exercises });
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            {/* <h1 className="text-2xl font-bold mb-4">Workout Planner</h1> */}
            <HeadingTag>Workout Planner</HeadingTag>
            <div className="mb-4">
                <label className="block mb-1">Workout Template Name</label>
                <input
                    type="text"
                    value={templateName}
                    onChange={
                        (e) => setTemplateName(e.target.value)
                        // handleInputChangeWorkoutTemplate(e.target.value) //index,
                    }
                    placeholder="Search or add new template"
                    className="border border-gray-300 p-2 w-full rounded"
                />
                {/* {templateName.trim() && (
                    <ul className="border border-gray-300 mt-1 rounded bg-white shadow-lg">
                        {filteredWorkouts.length > 0 ? (
                            filteredWorkouts.map((workoutTemplateName, i) => (
                                <li
                                    key={i}
                                    onClick={() =>
                                        handleSelectWorkoutTemplate(
                                            // i,
                                            workoutTemplateName
                                        )
                                    }
                                    className="cursor-pointer hover:bg-gray-100 p-2"
                                >
                                    {workoutTemplateName}
                                </li>
                            ))
                        ) : (
                            <li
                                onClick={() => handleAddNewWorkoutTemplate(0)}
                                className="cursor-pointer hover:bg-gray-100 p-2 text-blue-600"
                            >
                                Add "{templateName}" as new exercise
                            </li>
                        )}
                    </ul>
                )} */}
            </div>

            {exercises.map((exercise, index) => (
                <div key={index} className="relative mb-2 ">
                    <div className="flex items-center gap-2 border border-gray-300">
                        <div
                            onClick={() => toggleAccordion(index)}
                            className="w-full cursor-pointer bg-gray-200 p-4 shadow hover:bg-gray-300"
                        >
                            <div className="flex">
                                <span
                                    className={`flex justify-center items-center mr-2 transform transition-transform ${openIndex === index ? 'rotate-90' : ''}`}
                                >
                                    {/* ➤ */}
                                    <IoIosArrowForward className="origin-center" />
                                </span>
                                <h2 className="text-lg font-semibold">
                                    Exercise {index + 1}:{' '}
                                    {exercise.name || 'New Exercise'}
                                </h2>
                            </div>
                        </div>
                        <div
                            className="cursor-pointer"
                            onClick={() => handleDeleteExercise(index)}
                        >
                            <IoTrashBin className="text-red-600" size={30} />
                        </div>
                    </div>
                    {openIndex === index && (
                        <div className="bg-gray-300 border border-gray-300 rounded p-4 ">
                            <div className="relative mb-2">
                                <label className="block mb-1">
                                    Exercise Name
                                </label>
                                <input
                                    type="text"
                                    value={inputValue || exercise.name}
                                    // onChange={(e) =>
                                    //     handleExerciseChange(
                                    //         index,
                                    //         'name',
                                    //         e.target.value
                                    //     )
                                    // }
                                    onChange={(e) =>
                                        handleInputChange(index, e.target.value)
                                    }
                                    placeholder="Search or add new exercise"
                                    className="border border-gray-300 p-2 w-full rounded"
                                />
                                {inputValue.trim() && (
                                    <ul className="border border-gray-300 mt-1 rounded bg-white shadow-lg">
                                        {filteredExercises.length > 0 ? (
                                            filteredExercises.map(
                                                (exercise, i) => (
                                                    <li
                                                        key={i}
                                                        onClick={() =>
                                                            handleSelectExercise(
                                                                index,
                                                                exercise
                                                            )
                                                        }
                                                        className="cursor-pointer hover:bg-gray-100 p-2"
                                                    >
                                                        {exercise.name}
                                                    </li>
                                                )
                                            )
                                        ) : (
                                            <li
                                                onClick={() =>
                                                    handleAddNewExercise(index)
                                                }
                                                className="cursor-pointer hover:bg-gray-100 p-2 text-blue-600"
                                            >
                                                Add "{inputValue}" as new
                                                exercise
                                            </li>
                                        )}
                                    </ul>
                                )}
                            </div>
                            <div className="mb-2">
                                <label className="block mb-1">
                                    Repetitions
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={exercise.repetitions}
                                        onChange={(e) =>
                                            handleExerciseChange(
                                                index,
                                                'repetitions',
                                                e.target.value
                                            )
                                        }
                                        placeholder="Enter repetitions (comma separated)"
                                        className="border border-gray-300 p-2 w-full rounded"
                                    />
                                    <select
                                        value={exercise.repUnit}
                                        onChange={(e) =>
                                            handleExerciseChange(
                                                index,
                                                'repUnit',
                                                e.target.value
                                            )
                                        }
                                        className="border border-gray-300 p-2 rounded"
                                    >
                                        <option value="reps">Reps</option>
                                        <option value="km">KM</option>
                                        <option value="time">Time</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="block mb-1">Weights</label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={exercise.weights}
                                        onChange={(e) =>
                                            handleExerciseChange(
                                                index,
                                                'weights',
                                                e.target.value
                                            )
                                        }
                                        placeholder="Enter weights (comma separated)"
                                        className="border border-gray-300 p-2 w-full rounded"
                                    />
                                    <select
                                        value={exercise.weightUnit}
                                        onChange={(e) =>
                                            handleExerciseChange(
                                                index,
                                                'weightUnit',
                                                e.target.value
                                            )
                                        }
                                        className="border border-gray-300 p-2 rounded"
                                    >
                                        <option value="kg">KG</option>
                                        <option value="lbs">Pounds</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="block mb-1">Sets</label>
                                <input
                                    type="number"
                                    value={exercise.sets}
                                    onChange={(e) =>
                                        handleExerciseChange(
                                            index,
                                            'sets',
                                            Number(e.target.value)
                                        )
                                    }
                                    placeholder="Enter number of sets"
                                    className="border border-gray-300 p-2 w-full rounded"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block mb-1">
                                    Description
                                </label>
                                <textarea
                                    value={exercise.description}
                                    onChange={(e) =>
                                        handleExerciseChange(
                                            index,
                                            'description',
                                            e.target.value
                                        )
                                    }
                                    placeholder="Enter description"
                                    className="border border-gray-300 p-2 w-full rounded"
                                />
                            </div>
                        </div>
                    )}
                </div>
            ))}

            <div
                onClick={handleAddExercise}
                className="border-dashed border-2 border-teal-600 cursor-pointer bg-gray-200 bg-opacity-40 p-4 rounded-lg shadow mb-4 hover:bg-gray-300 hover:bg-opacity-60"
            >
                <h2 className="text-lg font-semibold">Add New Exercise</h2>
            </div>
            <div className="flex gap-3">
                <button
                    onClick={handleSubmit}
                    className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600"
                >
                    Save Workout Plan
                </button>
                <button
                    onClick={onClose}
                    className="bg-slate-400 text-white rounded px-4 py-2 hover:bg-green-600"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default AddNewWorkout;
