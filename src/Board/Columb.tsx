import React from "react";
import './Columb.css';
import { Job, Process } from "../models/interfaces";
import JobCard from "./JobCard";


interface ColumbProps {
  jobs: Job[],
  process: Process | undefined
}

function Columb({ jobs, process }: ColumbProps) {
  return (
    <>
      {jobs && process
        ? <div className="Columb">
          <div className="ColumbTitle">{process.process_name}</div>
          {jobs.map((job) => <JobCard key={job.id} job={job} />)}
        </div>
        : null
      }
    </>
  );
};

export default Columb;