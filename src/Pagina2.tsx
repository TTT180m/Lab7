import React, { useState, useEffect } from 'react';

export function Pagina2() {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [showInfo, setShowInfo] = useState(false);

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  useEffect(() => {
    setShowInfo(true);
  }, []);

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1
        style={{
          fontSize: '24px',
          marginBottom: '20px',
          animation: showInfo ? 'fade-in 1s ease-in' : 'none',
          opacity: showInfo ? 1 : 0,
        }}
      >
        Informații personale
      </h1>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: showInfo ? 'slide-in 0.5s ease-in' : 'none',
          transform: showInfo ? 'translateX(0)' : 'translateX(-100px)',
        }}
      >
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }} htmlFor="firstName">
            Prenume:
          </label>
          <input
            style={{ padding: '7px' }}
            type="text"
            id="firstName"
            name="firstName"
            value={userInfo.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }} htmlFor="lastName">
            Nume de familie:
          </label>
          <input
            style={{ padding: '5px' }}
            type="text"
            id="lastName"
            name="lastName"
            value={userInfo.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }} htmlFor="email">
            Email:
          </label>
          <input
            style={{ padding: '5px' }}
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}
