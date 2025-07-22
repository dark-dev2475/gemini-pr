import React, { useContext } from 'react';
import { UserContext } from '../context/user.context';
// import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from '../config/axios'

const Home = () => {
  const { user } = useContext(UserContext);
  // const navigate = useNavigate();
  const [isModal, setisModal] = useState(false)
  const [projectName, setprojectName] = useState(null)
 
    useEffect(() => {
       axios.get('/projects/all').then((res) => {
        console.log(res.data);
    }).catch((err) => {
        console.error("Error fetching projects:", err);
      });
  }, []);



  function createProject(e) {
    e.preventDefault();
    
    console.log({projectName});
    axios.post('/projects/create', { name: projectName })
    .then((res) => {
      console.log(res.data);
      setisModal(false);
      setprojectName(null);
      // Optionally, you can refresh the project list or navigate to another page
      // navigate('/projects');
    })
    .catch((err) => {
      console.error("Error creating project:", err);
    })
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <main>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="w-full max-w-lg bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl p-10 border border-gray-800 flex flex-col items-center">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-blue-600 rounded-full p-4 mb-4 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">Welcome, {user.name || user.email}!</h1>
            <p className="text-gray-400 text-lg">Your email is: <span className="font-semibold text-blue-400">{user.email}</span></p>
          </div>
          <button
            className="mt-8 w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-md transition"
            onClick={() => setisModal(true)}
          >
            Create Project
          </button>
        </div>
        {/* Modal */}
        {isModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-800 relative">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
                onClick={() => setisModal(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold text-white mb-4">Create New Project</h2>
              <form
                onSubmit={
                  createProject
  }
                className="flex flex-col gap-4"
              >
                <label className="text-gray-300 font-medium" htmlFor="projectName">
                  Project Name
                </label>
                <input
                onChange={(e) => setprojectName(e.target.value)}
                value={projectName}
                  id="projectName"
                  name="projectName"
                  type="text"
                  required
                  placeholder="Enter project name"
                  className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  className="mt-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-md transition"
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;