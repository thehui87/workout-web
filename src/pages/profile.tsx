import Card from '../components/card';
import { HeadingTag } from '../components/headingTag';
import { ReactComponent as UserIcon } from '../assets/images/icons/Users_ico.svg';
import AppLayout from '../layouts/appLayout';
import ProfileImage from '../components/profileImage';
import ColorPicker from '../components/colorPicker';

const Profile = () => {
    return (
        <AppLayout>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-4">
                <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
                    {/* <Link
                to={path}
                className="flex items-center justify-between"
                onClick={() => handleNavigateToWorkouts(path)}
            > */}
                    <div className="flex flex-col items-center justify-start">
                        {/* <UserIcon className="w-25 h-25 mr-5" fill="#345a24" /> */}
                        <ProfileImage />
                        {/* <div className="flex flex-col justify-start"> */}
                        <div className="flex flex-col justify-start">
                            <h2 className="text-lg font-semibold">
                                {'Username'}
                            </h2>
                            <p className="mt-2 text-gray-600">
                                {'user@name.com'}
                            </p>
                        </div>
                        {/* </div> */}
                    </div>
                    <h2 className="ml-2 mt-2 text-gray-600">{32}</h2>
                    {/* </Link> */}
                </div>
                <div className="flex flex-col gap-4 justify-start">
                    <Card
                        // key={index}
                        title={'Change password'}
                        icon={UserIcon}
                        description={''}
                        // path={card?.path}
                    ></Card>
                    <Card
                        // key={index}
                        title={'Change password'}
                        icon={UserIcon}
                        description={''}
                        // path={card?.path}
                    ></Card>
                </div>
                <ColorPicker />
            </div>
        </AppLayout>
    );
};

export default Profile;
