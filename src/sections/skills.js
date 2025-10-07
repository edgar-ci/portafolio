import React from "react";
import {
  Angular,
  React as ReactIcon,
  CSS3,
  HTML5,
  MaterialUI,
  NextJs,
  ReactRouter,
  Redux,
  Sass,
  TailwindCSS,
  JavaScript,
  Java,
  Python,
  TypeScript,
  Django,
  ExpressJsLight,
  GoogleCloud,
  NodeJs,
  Spring,
  MongoDB,
  MySQL,
  PostgreSQL,
  Figma,
  Miro,
  Storybook,
  ClaudeAI,
  Docker,
  Jenkins,
  NPM,
  Postman,
  Swagger,
  Webpack,
  ViteJS,
  Git,
  Jira,
  VisualStudioCode,
} from "developer-icons";


const Skill = () => {
  return (
    <div className="skills">
      <div className="container">
        <div className="skills__wrapper">
          <h2 className="skills--title">Skills</h2>
          <div className="skills--wrap">
            <div className="skills--category">
              <h3 className="skills--category-title">Frontend</h3>
              <div className="skills--icons">
                <div className="skills--icon-card"><JavaScript /></div>
                <div className="skills--icon-card"><TypeScript /></div>
                <div className="skills--icon-card"><Angular /></div>
                <div className="skills--icon-card"><NextJs /></div>
                <div className="skills--icon-card"><ReactIcon /></div>
                <div className="skills--icon-card"><ReactRouter /></div>
                <div className="skills--icon-card"><Redux /></div>
                <div className="skills--icon-card"><CSS3 /></div>
                <div className="skills--icon-card"><HTML5 /></div>
                <div className="skills--icon-card"><MaterialUI /></div>
                <div className="skills--icon-card"><Sass /></div>
                <div className="skills--icon-card"><TailwindCSS /></div>
                <div className="skills--icon-card"><NPM /></div>
                <div className="skills--icon-card"><ViteJS /></div>
                <div className="skills--icon-card"><Webpack /></div>
                <div className="skills--icon-card"><Storybook /></div>
                <div className="skills--icon-card"><Figma /></div>
              </div>
            </div>
            <div className="skills--category">
              <h3 className="skills--category-title">Backend & Databases</h3>
              <div className="skills--icons">
                <div className="skills--icon-card"><Java /></div>
                <div className="skills--icon-card"><Django /></div>
                <div className="skills--icon-card"><ExpressJsLight /></div>
                <div className="skills--icon-card"><NodeJs /></div>
                <div className="skills--icon-card"><Spring /></div>
                <div className="skills--icon-card"><Python /></div>
                <div className="skills--icon-card"><Docker /></div>
                <div className="skills--icon-card"><GoogleCloud /></div>
                <div className="skills--icon-card"><Jenkins /></div>
                <div className="skills--icon-card"><MongoDB /></div>
                <div className="skills--icon-card"><MySQL /></div>
                <div className="skills--icon-card"><PostgreSQL /></div>
              </div>
            </div>
            <div className="skills--category">
              <h3 className="skills--category-title">Development Tools</h3>
              <div className="skills--icons">
                <div className="skills--icon-card"><Git /></div>
                <div className="skills--icon-card"><Jira /></div>
                <div className="skills--icon-card"><Postman /></div>
                <div className="skills--icon-card"><Swagger /></div>
                <div className="skills--icon-card"><VisualStudioCode /></div>
                <div className="skills--icon-card"><Miro /></div>
              </div>
            </div>

            <div className="skills--category">
              <h3 className="skills--category-title">AI Tools</h3>
              <div className="skills--icons">
                <div className="skills--icon-card"><ClaudeAI /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="bg-1">
        <i />
        <i />
        <i />
        <i />
      </span>
    </div>
  );
};

export default Skill;
