// src/hooks/useServices.js
import React from "react";
import { services } from "../data/services.js"; // Your service data

export const useServices = () => {
  // Simulate loading state (replace with real API call if needed)
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  // In a real app, you might fetch services here:
  /*
  React.useEffect(() => {
    const fetchServices = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/services');
        const data = await response.json();
        setServices(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchServices();
  }, []);
  */

  return { 
    services, 
    isLoading, 
    error 
  };
};