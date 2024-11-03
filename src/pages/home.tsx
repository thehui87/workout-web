import { useEffect } from 'react';
import { HeadingTag } from '../components/headingTag';

const Home = () => {
    useEffect(() => {
        console.log('Home');
    }, []);
    return (
        <div>
            <HeadingTag>Home</HeadingTag>
        </div>
    );
};

export default Home;

// TODO: on backspace go back to previous word
// TODO: Clock change to timer
// TODO: dynamic word addition on reset
// TODO: toolbar each button functionality
// TODO: Dynamic color themes
// TODO: Make timer work with
// TODO: add word speed ( end time - start time)
