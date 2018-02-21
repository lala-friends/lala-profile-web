import React from 'react';
import PropTypes from 'prop-types';
import { dateYYYYMMDD } from '../utils/DateUtil';

const ProjectCard = (props) => {
    return (
        <div className='flexbox width-100'>
            <div className='item-card timeline width-100'>
                <div className='pointer'></div>
                <div className='flexbox'>
                    <div className='triangle' style={{ borderRight: `2em solid ${props.color}`}}></div>
                    <div className='project' style={{backgroundColor: `${props.color}`}}>
                        <div className='group'>
                            <div className='fieldName'>프로젝트명</div>
                            <div id='projectName'>{props.name}</div>
                        </div>
                        <div className='group'>
                            <div className='fieldName'>기간</div>
                            <div id='projectPeriod'>{dateYYYYMMDD(props.from)} - {dateYYYYMMDD(props.to)}</div>
                        </div>
                        <div className={`group ${!props.role && 'inactive'}`}>
                            <div className='fieldName'>역할</div>
                            <div id='role'>{props.role}</div>
                        </div>
                        <div className={`group ${!props.introduce && 'inactive'}`}>
                            <div className='fieldName'>프로젝트 요약</div>
                            <div id='projectSummary'>{props.introduce}</div>
                        </div>
                        <div className={`group ${!props.description && 'inactive'}`}>
                            <div className='fieldName'>프로젝트 상세</div>
                            <div id='projectDescription'>{props.description && props.description.split('\n').map((line, key) => <span key={key}>{line}<br/></span>)}</div>
                        </div>
                        <div className={`group ${!props.link && 'inactive'}`}>
                            <div className='fieldName'>관련 링크</div>
                            <a id='link' href={props.link}>{props.link}</a>
                        </div>
                        
                        <div className={`group ${!props.techs && 'inactive'}`}>
                            <div className='fieldName'>기술 스택</div>
                            <div id='techs'>
                            {
                                props.techs && props.techs.map((tech, key) => (
                                    <div className="badge badge-pill badge-info" key={key}>{tech}</div>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

ProjectCard.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    from: PropTypes.any,
    to: PropTypes.any,
    introduce: PropTypes.string,
    role: PropTypes.string,
    description: PropTypes.string,
    techs: PropTypes.array,
    link: PropTypes.string 
}

export default ProjectCard;