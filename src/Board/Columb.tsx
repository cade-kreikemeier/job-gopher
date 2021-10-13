import React from "react";
import { Job, Process } from "../models/interfaces";


interface ColumbProps {
  jobs: Job[],
  process: Process | undefined
}

function Columb({ jobs, process }: ColumbProps) {
  return (
    <div className="Columb">
      {jobs && process
        ? <div className="ColumbTitle">{process.process_name}</div>
        : null
      }
    </div>
  );
};

export default Columb;