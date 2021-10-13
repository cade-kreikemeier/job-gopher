import React from "react";
import './JobCard.css';
import { Job } from '../models/interfaces';

interface JobCardProps {
  job: Job
}

function JobCard({ job }: JobCardProps) {
  const dueDate = (new Date(job.due_date).toLocaleDateString())

  return (
    <div className="JobCard">
      <div className="CardHeader">
        <span className="JobNumber">{`j${job.id.toString().padStart(4, '0')}`}</span>
        <span className="DueDate">due {dueDate}</span>
      </div>
      <span className="CustomerName">{job.customers.name}</span>
    </div>
  );
};

export default JobCard;