import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PlannerLayout from '../layouts/plannerLayout';

const ViewWorkoutPlan = () => {
    const [workoutId, setWorkoutId] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const lastSegment = location.pathname.split('/').pop();
        if (lastSegment) {
            setWorkoutId(lastSegment);
        }
    }, []);
    return (
        <PlannerLayout backPath={'/planner/workouts'}>
            <div>Workout plan - {workoutId}</div>
        </PlannerLayout>
    );
};

export default ViewWorkoutPlan;
