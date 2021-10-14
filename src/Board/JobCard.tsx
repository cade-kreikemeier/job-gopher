import React, { useState } from "react";
import './JobCard.css';
import { Job } from '../models/interfaces';

interface JobCardProps {
  job: Job
}

function JobCard({ job }: JobCardProps) {
  const [expanded, setExpanded] = useState(false);
  const dueDate = (new Date(job.due_date).toLocaleDateString());
  const processStatus = `
    ${job.processes.indexOf(job.current_process) + 1}/${job.processes.length + 1}
  `;

  function toggleExpanded(e: React.MouseEvent) {
    e.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <div className={expanded ? 'JobCardExpanded' : 'JobCard'} onDoubleClick={(toggleExpanded)}>
      <div className="CardHeader">
        <span className="JobNumber">{`j${job.id.toString().padStart(4, '0')}`}</span>
        <span className="DueDate">due <span className="DateText">: {dueDate}</span></span>
      </div>
      <span className={expanded ? 'CustomerNameExpanded' : 'CustomerName'}>
        {expanded
          ? <div className="CardInfo">
            <span className="AttributeLabel"> Customer:
              <span className="Attribute"> {job.customers.name}</span>
            </span>
            <span className="AttributeLabel ">Customer PO:
              <span className="Attribute"> {job.customer_po}</span>
            </span>
          </div>
          : job.customers.name}
      </span>
      {expanded
        ? <>
          <div className="CardInfo">
            <span className="AttributeLabel">Part Name:
              <span className="Attribute"> {job.part_name}</span>
            </span>
            <span className="AttributeLabel">Part Number:
              <span className="Attribute"> {job.part_number}</span>
            </span>
            <span className="AttributeLabel">Part Rev:
              <span className="Attribute"> {job.part_rev}</span>
            </span>
          </div>
          <div className="CardInfo">
            <span className="AttributeLabel Material">Material:
              <span className="Attribute"> {job.materials?.material_name}</span>
            </span>
          </div>
          <div className="CardFooter">
            <span className="AttributeLabel JobQuantity">Qty:
              <span className="Attribute"> {job.quantity}</span>
            </span>
            <span className="AttributeLabel JobProcesses">Process:
              <span className="Attribute"> {processStatus}</span>
            </span>
          </div>
        </>
        : null}
    </div>
  );
};

export default JobCard;