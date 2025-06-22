import React from 'react';
import '../css/research.css';

const Research = () => {
  return (
    <div className="timeline-container">
      <h1>Research & Publications</h1>

      <div className="timeline-year">2026</div>

      <div className="timeline-item">
        <div className="timeline-dot" />
        <div className="timeline-content">
          <h3>Master’s Thesis: Consensus for Federated Learning</h3>
          <p>Investigating lightweight, fault-tolerant consensus strategies for cross-device federated learning.</p>
          <span className="tag inprogress">In Progress</span>
        </div>
      </div>

      <div className="timeline-year">2025</div>

      <div className="timeline-item">
        <div className="timeline-dot" />
        <div className="timeline-content">
          <h3>SWLV: Lightweight Stake-Weighted Consensus for Resource-Constrained Devices</h3>
          <p><strong>Arnav Chahal</strong>, Vaibhav Gupta, Akram Hakiri, Andy Gokhale</p>
          <p><em>Submitted to ACM/IFIP Middleware 2025</em></p>
          <span className="tag submitted">Submitted</span>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot" />
        <div className="timeline-content">
          <h3>Distributed Inference Tables for Edge-Based Model Placement</h3>
          <p>Research in progress. Targeting submission to <em>MLSys 2026</em>.</p>
          <span className="tag inprogress">In Progress</span>
        </div>
      </div>
    </div>
  );
};

export default Research;
