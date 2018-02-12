import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { dateYYYYMMDD } from '../utils/DateUtil';

class ProjectCard extends Component {
    render() {
        return (
            <div className='flexbox width-100'>
                <div className='item-card timeline width-100'>
                    <div className='pointer'></div>
                    <div className='flexbox'>
                        <div className='triangle' style={{ borderRight: `2em solid ${this.props.color}`}}></div>
                        <div className='project' style={{backgroundColor: `${this.props.color}`}}>
                            <div className='group'>
                                <div className='fieldName'>프로젝트명</div>
                                <div>{this.props.name}</div>
                            </div>
                            <div className='group'>
                                <div className='fieldName'>기간</div>
                                <div>{dateYYYYMMDD(this.props.from)} - {dateYYYYMMDD(this.props.to)}</div>
                            </div>
                            <div className={`group ${!this.props.role && 'inactive'}`}>
                                <div className='fieldName'>역할</div>
                                <div>{this.props.role}</div>
                            </div>
                            <div className={`group ${!this.props.introduce && 'inactive'}`}>
                                <div className='fieldName'>프로젝트 요약</div>
                                <div>{this.props.introduce}</div>
                            </div>
                            <div className={`group ${!this.props.description && 'inactive'}`}>
                                <div className='fieldName'>프로젝트 상세</div>
                                <div>{this.props.description.split('\n').map((line, key) => <span key={key}>{line}<br/></span>)}</div>
                            </div>
                            <div className={`group ${this.props.techs.length===0 && 'inactive'}`}>
                                <div className='fieldName'>기술 스택</div>
                                {
                                    this.props.techs.map((tech, key) => (
                                        <div className="badge badge-pill badge-info" key={key}>{tech}</div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
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