
import React from 'react';
import { Navigate } from 'react-router-dom';

// Redirect to the login page by default
const Index = () => {
  return <Navigate to="/login" replace />;
};

export default Index;
