import React from 'react';
// import { ReactComponent as Logo } from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { NavbarApp } from './components/navbarApp';
import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile';
import MyFooter from './components/footer';
// import Test from './pages/test';
// import SpeedTyping from './pages/SpeedTyping';
// import SpeedTypingDouble from './pages/Doubly';
import Dashboard from './pages/dashboard';
import Calendar from './pages/calendar';
import Feed from './pages/feed';
import Planner from './pages/planner';
import Settings from './pages/settings';
import DietPlanner from './pages/planners/dietPlanner';
import ExercisePlanner from './pages/planners/excercisePlanner';
import UserPlanner from './pages/planners/userPlanner';
import WorkoutPlanner from './pages/planners/workoutPlanner';
import ViewWorkoutPlan from './pages/viewWorkoutPlan';
import { AuthProvider } from './context/authContext';
import SideNav from './components/sideNav';
import ProtectedRoute from './components/ProtectedRoute';
import {
    LoginForm,
    RegisterForm,
    ForgotPasswordForm,
    ResetForm,
} from './pages/auth';
import { RootState } from './redux/store';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { RootState, AppDispatch } from './redux/store';

function App() {
    const { userLoggedIn } = useSelector((state: RootState) => state.auth);

    // if()

    // const [authPage, setAuthPage] = useState<'login' | 'register' | 'reset'>(
    //     'login'
    // );

    return (
        <div className="App">
            {/* <header className="App-header">
                <Logo className="App-logo w-48 h-48" />
            </header> */}

            <div className="bg-color h-dvh overflow-hidden">
                <AuthProvider>
                    <BrowserRouter>
                        <div className="flex flex-row">
                            <div className={`absolute md:relative`}>
                                {/* <ProtectedRoute> */}
                                <SideNav />
                                {/* </ProtectedRoute> */}
                            </div>
                            <div className="w-full">
                                {userLoggedIn ? <NavbarApp /> : <Navbar />}
                                <Routes>
                                    {/* <Route
                                        path="/"
                                        element={
                                            userLoggedIn ? (
                                                <Navigate to="/dashboard" />
                                            ) : (
                                                <Home />
                                            )
                                        }
                                    /> */}
                                    <Route path="/" element={<Home />} />
                                    <Route path="/about" element={<About />} />
                                    <Route
                                        path="/profile"
                                        element={
                                            <ProtectedRoute>
                                                <Profile />
                                            </ProtectedRoute>
                                        }
                                    />
                                    {/* <Route path="/test" element={<Test />} /> */}
                                    {/* <Route path="/type" element={<SpeedTyping />} />
                            <Route
                                path="/type2"
                                element={<SpeedTypingDouble />}
                            /> */}
                                    <Route
                                        path="/login"
                                        element={
                                            userLoggedIn ? (
                                                <Navigate to="/dashboard" />
                                            ) : (
                                                <LoginForm />
                                            )
                                        }
                                    />
                                    {/* <Route
                                        path="/login"
                                        element={<LoginForm />}
                                    /> */}
                                    <Route
                                        path="/register"
                                        element={<RegisterForm />}
                                    />

                                    <Route
                                        path="/dashboard"
                                        element={
                                            <ProtectedRoute>
                                                <Dashboard />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route
                                        path="/planner"
                                        element={
                                            <ProtectedRoute>
                                                <Planner />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route
                                        path="/planner/workouts"
                                        element={
                                            <ProtectedRoute>
                                                <WorkoutPlanner />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route
                                        path="/planner/exercises"
                                        element={
                                            <ProtectedRoute>
                                                <ExercisePlanner />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route
                                        path="/planner/users"
                                        element={
                                            <ProtectedRoute>
                                                <UserPlanner />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route
                                        path="/planner/diets"
                                        element={
                                            <ProtectedRoute>
                                                <DietPlanner />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route
                                        path="/feed"
                                        element={
                                            <ProtectedRoute>
                                                <Feed />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route
                                        path="/calendar"
                                        element={
                                            <ProtectedRoute>
                                                <Calendar />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route
                                        path="/settings"
                                        element={
                                            <ProtectedRoute>
                                                <Settings />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route
                                        path="/planner/workouts/:id"
                                        element={
                                            <ProtectedRoute>
                                                <ViewWorkoutPlan />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route
                                        path="/forgot-password"
                                        element={<ForgotPasswordForm />}
                                    />
                                    <Route
                                        path="/reset-password/:token"
                                        element={<ResetForm />}
                                    />
                                </Routes>
                                {/* <MyFooter /> */}
                            </div>
                        </div>
                    </BrowserRouter>
                </AuthProvider>
            </div>
            {/* */}
        </div>
    );
}

export default App;
