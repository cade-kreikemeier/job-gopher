import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import { supabase } from './client';
import Board from './Board/Board';
import { Customer, Job, Material, Process } from './models/interfaces';

function App() {
  const [customers, setCustomers] = useState<Customer[] | null>([]);
  const [jobs, setJobs] = useState<Job[] | null>([]);
  const [materials, setMaterials] = useState<Material[] | null>([]);
  const [processes, setProcesses] = useState<Process[] | null>([]);

  async function fetchCustomers() {
    const { data } = await supabase
      .from<Customer>('customers')
      .select();
    setCustomers(data);
    console.log('customers: ', data);
  };

  async function fetchJobs() {
    const { data } = await supabase
      .from<Job>('jobs')
      .select(`
        *,
        customers(name),
        materials(material_name)
      `);
    setJobs(data);
    console.log('jobs: ', data);
  };

  async function fetchMaterials() {
    const { data } = await supabase
      .from<Material>('materials')
      .select();
    setMaterials(data);
    console.log('materials: ', data);
  };

  async function fetchProcesses() {
    const { data } = await supabase
      .from<Process>('processes')
      .select();
    setProcesses(data);
    console.log('processes: ', data);
  };

  useEffect(() => {
    fetchCustomers();
    fetchJobs();
    fetchMaterials();
    fetchProcesses();
  }, [])

  return (
    <div className="App">
      <header className="App-header">jobGopher</header>
      <div className="ToolBar"><button className="AddJobBtn">Job+</button></div>
      <Board jobs={jobs} processes={processes} />
    </div>
  );
}

export default App;
