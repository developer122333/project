"use client"
import React, { useEffect, useState } from 'react';
import Preloader from './preloader';
 
const SplashScreen = ({ } ) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    },1000); 
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Preloader  />
    );
  }

  return null;
};

export default SplashScreen;