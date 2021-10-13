import React from "react";
import './JobCard.css';
import { Job } from '../models/interfaces';

interface JobCardProps {
  job: Job
}

function JobCard({ job }: JobCardProps) {
  return (
    <div className="JobCard">JobId: {job.id} CustomerId:{job.customer_id}</div>
  );
};

export default JobCard;