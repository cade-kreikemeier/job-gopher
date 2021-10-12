import React, { useEffect, useState } from "react";
import './Board.css';
import { supabase } from "../client";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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

function Board() {
  const [jobs, setJobs] = useState<Jobs[] | null>([]);

  async function fetchJobs() {
    const { data } = await supabase
      .from<Jobs>('job_numbers')
      .select('*');
    setJobs(data);
    console.log('jobs: ', data);
  };

  useEffect(() => {
    fetchJobs();
  }, [])

  return (
    <div className="board"></div>
  )
}

export default Board