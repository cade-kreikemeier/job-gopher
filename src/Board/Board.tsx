import React, { ReactNode, useEffect, useState } from "react";
import './Board.css';
import { supabase } from "../client";
import Columb from "./Columb";
import { Customer, Job, Material, Process } from '../models/interfaces';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface BoardProps {
  jobs: Job[] | null,
  processes: Process[] | null
}

function Board({ jobs, processes }: BoardProps) {
  const currentProcesses = [];
  if (jobs) {
    for (const job of jobs) {
      if (currentProcesses.indexOf(job.current_process) === -1) {
        currentProcesses.push(job.current_process);
      }
    }
    currentProcesses.sort((a, b) => a - b)
  }

  return (
    <div className='Board'>
      {jobs && processes
        ? currentProcesses.map((processId) => {
          const process = processes.find(process => process.id === processId)
          const processJobs = [];
          for (const job of jobs) {
            if (job.current_process === processId) {
              processJobs.push(job);
            }
          }
          return <Columb key={processId} jobs={processJobs} process={process} />;
        })
        : null
      }
    </div>
  );
};

export default Board;