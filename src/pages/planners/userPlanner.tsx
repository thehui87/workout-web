import { HeadingTag } from '../../components/headingTag';
import PlannerLayout from '../../layouts/plannerLayout';

const UserPlanner = () => {
    return (
        <PlannerLayout backPath={'/planner'}>
            <HeadingTag>User Planner</HeadingTag>
        </PlannerLayout>
    );
};

export default UserPlanner;
