import React, { useState } from 'react';
import githubIcon from '../../../assets/team_icons/github.png';
import linkedinIcon from '../../../assets/team_icons/linkedin.png';
import instagramIcon from '../../../assets/team_icons/instagram.png';
import facebookIcon from '../../../assets/team_icons/facebook.png';
import {TeamButton} from '../TeamButton';
import { FaHtml5 } from 'react-icons/fa';

const TeamCard = ({member}) => {
  const [showProjects, setShowProjects] = useState(false);


  return (
    <div className="px-7 md:px-[106px] mb-36">
      <section className="flex flex-col items-center md:flex-row gap-5">
        <img src={member?.githubImgUrl} alt="team member? picture" className="w-36 md:w-64 h-auto" />
        <div className="flex flex-col justify-around items-center lg:items-start gap-3">
          <h3 className="text-nameMember-0 text-sizeTitle">{member?.name}</h3>
     
          <span className="text-white-1 text-sizeParagraph">{member?.subTitle}</span>
          <ul className="flex gap-5 mb-2">
            <li>
              <a href={member?.githubUrl} target={'_blank'} rel="noopener noreferrer" alt='github icon'>
                <img src={githubIcon} alt="Github" />
              </a>
            </li>
            <li>
              <a href={member?.linkedinUrl} target={'_blank'} rel="noopener noreferrer" alt='linkedin icon'>
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href={member?.instagramUrl} target={'_blank'} rel="noopener noreferrer" alt='instagram icon'>
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href={member?.facebookUrl} target={'_blank'} rel="noopener noreferrer" alt='facebook icon'>
                <img src={facebookIcon} alt="Facebook" />
              </a>
            </li>
          </ul>
          <p className="text-white-2 text-sizeParagraphSm mb-2">
            {member?.text}
          </p>
        </div>
      </section>

      <section className="my-14">
        <div className="flex gap-3">
          <button onClick={() => setShowProjects(!showProjects)}>
            <TeamButton text="Projetos recentes" />
          </button>
          <TeamButton text="Habilidades" />
        </div>

        <div className={`${showProjects ? 'grid' : 'hidden'} grid-cols-1 gap-5 self-center mt-10 md:hidden`}>
          {member?.projects.map((project) => (
              <img src={project.projectUrl} alt={project.id} key={project.id} className="w-full md:w-auto" />
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-7 mt-10 ">
          {member?.projects.map((project) => (
              <img src={project.projectUrl} alt={project.id} key={project.id} className='rounded-lg'/>
          ))}
        </div>
      </section>
    </div>
  );
}

export default TeamCard;
