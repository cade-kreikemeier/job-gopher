import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import { supabase } from './client';
import Board from './Board/Board';


interface Customer {
  id: number,
  created_at: string,
  name: string
};

interface Jobs {
  id: number,
  created_at: string,
  customer_id: number,
  customer_po: string,
  part_number: string,
  part_name: string,
  part_rev: string,
  drawing_number: string,
  drawing_rev: string,
  quantity: number,
  material_id: number,
  current_process: number,
  processes: number[],
  due_date: string
};

function App() {
  const [customers, setCustomers] = useState<Customer[] | null>([]);
  const [jobs, setJobs] = useState<Jobs[] | null>([]);

  async function fetchCustomers() {
    const { data } = await supabase
      .from<Customer>('customers')
      .select();
    setCustomers(data);
    console.log('data: ', data);
  };

  async function fetchJobs() {
    const { data } = await supabase
      .from<Jobs>('job_numbers')
      .select('*');
    setJobs(data);
    console.log('jobs: ', data);
  };

  useEffect(() => {
    fetchCustomers();
  }, [])

  useEffect(() => {
    fetchJobs();
  }, [])

  return (
    <div className="App">
      <header className="App-header">jobGopher</header>
      <Board />
    </div>
  );
}

export default App;
