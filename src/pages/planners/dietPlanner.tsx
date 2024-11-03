import { HeadingTag } from '../../components/headingTag';
import PlannerLayout from '../../layouts/plannerLayout';

const DietPlanner = () => {
    return (
        <PlannerLayout backPath={'/planner'}>
            <HeadingTag>Diet Planner</HeadingTag>
        </PlannerLayout>
    );
};

export default DietPlanner;
