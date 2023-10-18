import React from 'react';
// Icons
import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoReact,
  BiLogoSass,
  BiLogoTailwindCss,
  BiLogoFigma,
  BiLogoGithub,
} from 'react-icons/bi';
import {
    BsBootstrapFill
} from 'react-icons/bs'
import {
    SiAdobephotoshop
} from 'react-icons/si'

// CSS
import './icons.css'

export function AllIcons() {
  return (
      <div className='icons__group'>
          <BiLogoHtml5 className="icons__group--icon html-icon" key="htmlIcon" />
          <BiLogoCss3 className="icons__group--icon css-icon" key="cssIcon" />
          <BiLogoJavascript className="icons__group--icon javascript-icon" key="javascriptIcon" />
          <BiLogoReact className="icons__group--icon react-icon" key="reactIcon" />
          <BiLogoSass className="icons__group--icon sass-icon" key="sassIcon" />
          <BsBootstrapFill className="icons__group--icon bootstrap-icon" key="bootstrapIcon" />
          <BiLogoTailwindCss className="icons__group--icon tailwind-icon" key="tailwindIcon" />
          <BiLogoFigma className="icons__group--icon figma-icon" key="figmaIcon" />
          <BiLogoGithub className="icons__group--icon git-icon" key="gitIcon" />
          <SiAdobephotoshop className="icons__group--icon photoshop-icon" key="photoshopIcon" />
      </div>
  );
}

export const HtmlIcon = () => <BiLogoHtml5 className="icons__group--icon html-icon" key="htmlIcon" />;
export const CssIcon = () => <BiLogoCss3 className="icons__group--icon css-icon" key="cssIcon" />;
export const JavascriptIcon = () => <BiLogoJavascript className="icons__group--icon javascript-icon" key="javascriptIcon" />;
export const ReactIcon = () => <BiLogoReact className="icons__group--icon react-icon" key="reactIcon" />;
export const SassIcon = () => <BiLogoSass className="icons__group--icon sass-icon" key="sassIcon" />;
export const BootstrapIcon = () => <BsBootstrapFill className="icons__group--icon bootstrap-icon" key="bootstrapIcon" />;
export const TailwindIcon = () => <BiLogoTailwindCss className="icons__group--icon tailwind-icon" key="tailwindIcon" />;
export const FigmaIcon = () => <BiLogoFigma className="icons__group--icon figma-icon" key="figmaIcon" />;
export const GitIcon = () => <BiLogoGithub className="icons__group--icon git-icon" key="gitIcon" />;
export const PhotoshopIcon = () => <SiAdobephotoshop className="icons__group--icon photoshop-icon" key="photoshopIcon" />;