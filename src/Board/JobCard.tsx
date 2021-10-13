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
      <span className="JobNumber">{`J${job.id.toString().padStart(4, '0')}`}</span>
      <span className="DueDate">{dueDate}</span>
      <span className="CustomerName">{job.customers.name}</span>
    </div>
  );
};

export default JobCard;