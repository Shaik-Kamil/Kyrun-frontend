// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchProtectedInfo, onLogout } from '../api/auth';
// import NavBar from '../Components/NavBar';
// import { unauthenticateUser } from '../redux/authSlice';

// const Dashboard = () => {
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(true);
//   const [protectedData, setProtectedData] = useState(null);

//   const logout = async () => {
//     try {
//       await onLogout();

//       dispatch(unauthenticateUser());
//       localStorage.removeItem('isAuth');
//     } catch (error) {
//       console.log(error.response);
//     }
//   };

//   useEffect(() => {
//     const protectedInfo = async () => {
//       try {
//         const { data } = await fetchProtectedInfo();

//         setProtectedData(data.info);

//         setLoading(false);
//       } catch (error) {
//         logout();
//       }
//     };

//     protectedInfo();
//   }, [logout]);

//   return loading ? (
//     <NavBar>
//       <h1>Loading...</h1>
//     </NavBar>
//   ) : (
//     <div>
//       <NavBar>
//         <h1>Dashboard</h1>
//         <h2>{protectedData}</h2>

//         <button onClick={() => logout()} className='btn btn-primary'>
//           Logout
//         </button>
//       </NavBar>
//     </div>
//   );
// };

// export default Dashboard;
