import React from 'react';
import tools from '../../assets/tools.json';
import './ToolsAndTechnologies.css';
import {
  Git,
  Github,
  Code,
  Send,
  CheckCircle,
  ListChecks,
} from 'lucide-react';

const iconMap = {
  git: Git,
  github: Github,
  code: Code,
  send: Send,
  'check-circle': CheckCircle,
  'list-checks': ListChecks,
};

export const ToolsAndTechnologies = () => {
  return (
    <section className="tools-section" id="Tools">
      <div className="tools-container">
        <h2 className="tools-title">Tools & Technologies</h2>
        <p className="tools-subtitle">
          My collection of development tools and technologies for building modern solutions
        </p>

        <div className="tools-grid">
          {tools.categories.map((category) => (
            <div key={category.id} className="tool-category-card">
              <h3 className="category-name">{category.name}</h3>
              <div className="tools-tags">
                {category.tools.map((tool) => {
                  const IconComponent = iconMap[tool.icon] || Code;
                  return (
                    <div key={tool.id} className="tool-tag">
                      <IconComponent size={16} className="tool-icon" />
                      <span className="tool-name">{tool.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
