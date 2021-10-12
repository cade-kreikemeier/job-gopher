import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import { supabase } from './client';

interface Customer {
  id: number,
  created_at: string,
  name: string
};

function App() {
  const [customers, setCustomers] = useState<Customer[] | null>([]);

  useEffect(() => {
    fetchCustomers();
  }, [])

  async function fetchCustomers() {
    const { data } = await supabase
      .from<Customer>('customers')
      .select();
    setCustomers(data);
    console.log('data: ', data);
  };

  return (
    <div className="App">
      <header className="App-header">jobGopher</header>
    </div>
  );
}

export default App;
