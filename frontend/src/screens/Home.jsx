import React, { useContext } from 'react';
import { UserContext } from '../context/user.context';

const Home = () => {
  const { user } = useContext(UserContext);

  // Handle the case where the user might not be loaded yet
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Your email is: {user.email}</p>
    </div>
  );
};

export default Home;