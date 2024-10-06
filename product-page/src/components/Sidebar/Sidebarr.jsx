import React, { useState } from 'react';
import './Sidebar.css'; // Ensure this path is correct

const Sidebar = () => {
  const [expandedSections, setExpandedSections] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  return (
    <div className="sidebar scrollbar">
      <div className="sidebar-section">
        <h3>Customizable</h3>
        <label>
          <input type="checkbox" /> Customizable
        </label>
      </div>

      <div className="sidebar-section">
        <div className="expandable" onClick={() => toggleSection('idealFor')}>
          <span>Ideal For<h5>All</h5></span>
          <span className="arrow">{expandedSections.idealFor ? '▼' : '▶'}</span>
        </div>
        <hr />
      </div>

      <div className="sidebar-section">
        <div className="expandable" onClick={() => toggleSection('occasion')}>
          <span>Occasion<h5>All</h5></span>
          <span className="arrow">{expandedSections.occasion ? '▼' : '▶'}</span>
        </div>
        <hr />
      </div>

      <div className="sidebar-section">
        <div className="expandable" onClick={() => toggleSection('fabric')}>
          <span>Fabric<h5>All</h5></span>
          <span className="arrow">{expandedSections.fabric ? '▼' : '▶'}</span>
        </div>
        <hr />
      </div>

      <div className="sidebar-section">
        <div className="expandable" onClick={() => toggleSection('segment')}>
          <span>Segment<h5>All</h5></span>
          <span className="arrow">{expandedSections.segment ? '▼' : '▶'}</span>
        </div>
        <hr />
      </div>

      <div className="sidebar-section">
        <div className="expandable" onClick={() => toggleSection('suitableFor')}>
          <span>Suitable For <h5>All</h5></span>
          <span className="arrow">{expandedSections.suitableFor ? '▼' : '▶'}</span>
        </div>
        <hr />
      </div>

      <div className="sidebar-section">
        <div className="expandable" onClick={() => toggleSection('rawMaterials')}>
          <span>Raw Materials <h5>All</h5></span>
          <span className="arrow">{expandedSections.rawMaterials ? '▼' : '▶'}</span>
        </div>
        <hr />
      </div>

      <div className="sidebar-section">
        <div className="expandable" onClick={() => toggleSection('pattern')}>
          <span>Pattern<h5>All</h5></span>
          <span className="arrow">{expandedSections.pattern ? '▼' : '▶'}</span>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
