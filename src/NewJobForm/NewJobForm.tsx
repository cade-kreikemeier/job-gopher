import React, { useEffect, useState } from "react";
import { supabase } from "../client";
import { Customer, Material, Process } from "../models/interfaces";
import './NewJobForm.css';

interface NewJobFormProps {
  toggleForm: React.MouseEventHandler<HTMLButtonElement>
};

function NewJobForm({ toggleForm }: NewJobFormProps) {
  const [customers, setCustomers] = useState<Customer[] | null>([]);
  const [materials, setMaterials] = useState<Material[] | null>([]);
  const [processes, setProcesses] = useState<Process[] | null>([]);

  async function fetchCustomers() {
    const { data } = await supabase
      .from<Customer>('customers')
      .select();
    setCustomers(data);
    console.log('customers: ', data);
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
    fetchMaterials();
    fetchProcesses();
  }, [])

  return <div className="modalBackground">
    <div className="NewJobForm">
      <button onClick={toggleForm}>Close</button>
      <div>
        <label htmlFor="customer">Customer: </label>
        <select name="customer" id="customer-select">
          <option value="">--Please choose an customer--</option>
          {customers && customers.map((customer) => {
            return <option value={customer.id}>{customer.name}</option>
          })}
        </select>
      </div>
      <div>
        <label htmlFor="customerPO">Customer PO: </label>
        <input type="text" id="customerPO" name="customerPO" required
          minLength={1} maxLength={100} size={20} />
      </div>
      <div>
        <label htmlFor="partNumber">Part Number: </label>
        <input type="text" id="partNumber" name="partNumber" required
          minLength={1} maxLength={100} size={10} />
      </div>
      <div>
        <label htmlFor="partName">Part Name: </label>
        <input type="text" id="partName" name="partName" required
          minLength={3} maxLength={100} size={20} />
      </div>
      <div>
        <label htmlFor="partRev">Part Rev: </label>
        <input type="text" id="partRev" name="partRev" required
          minLength={1} maxLength={100} size={5} />
      </div>
      <div>
        <label htmlFor="quantity">Quantity: </label>
        <input type="number" id="quantity" name="quantity" required
          min={1} max={20} size={5} />
      </div>
      <div>
        <label htmlFor="material">Material: </label>
        <select name="material" id="material-select">
          <option value="">--Please choose an material--</option>
          {materials && materials.map((material) => {
            return <option value={material.id}>{material.material_name}</option>
          })}
        </select>
      </div>
      <div>
        <label htmlFor="materprocessesial">Processes: </label>
        <select name="processes" id="processes-select" multiple>
          {processes && processes.map((process) => {
            return <option value={process.id}>{process.process_name}</option>
          })}
        </select>
      </div>
      <div>
        <label htmlFor="dueDate">Due date: </label>
        <input type="date" id="dueDate" name="dueDate" />
      </div>
    </div>
  </div>
};

export default NewJobForm;