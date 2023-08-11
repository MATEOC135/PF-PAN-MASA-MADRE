import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css';
import { useHistory } from 'react-router-dom';

const AdminDashboard = ({ onClose }) => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.get('https://pan-4dg1.onrender.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAdminToggle = (userId) => {
    if (window.confirm("¿Are you sure to change the admin status of this user?")) {
      const user = users.find(u => u.id === userId);
      axios.put(`https://pan-4dg1.onrender.com/users/${userId}`, { ...user, admin: !user.admin })
        .then(response => {
          setUsers(prevUsers => prevUsers.map(u => u.id === userId ? response.data : u));
        })
        .catch(error => console.error(error));
    }
  };

  const handleClose = () => {
    history.push('/'); 
  };

  return (
    <div className="admin-dashboard-overlay">
      <div className="admin-dashboard-content">
        {/* Aquí reemplacé el botón con la "X" por uno que dice "SALIR" */}
        <button className="exit-button" onClick={handleClose}>GO OUT</button>
        
        <h2 className="title">Dashboard of administrator</h2>
        <table className="admin-dashboard-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.admin ? 'Sí' : 'No'}</td>
                <td>
                  <button className="admin-dashboard-button toggle-admin" onClick={() => handleAdminToggle(user.id)}>
                    SWITCH
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
