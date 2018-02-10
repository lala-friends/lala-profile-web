import React, {Component} from 'react';

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
                                <div>{this.props.period}</div>
                            </div>
                            <div className='group'>
                                <div className='fieldName'>역할</div>
                                <div>{this.props.role}</div>
                            </div>
                            <div className='group'>
                                <div className='fieldName'>프로젝트 요약</div>
                                <div>{this.props.summary}</div>
                            </div>
                            <div className='group'>
                                <div className='fieldName'>프로젝트 상세</div>
                                <div>{this.props.detail}</div>
                            </div>
                            <div className='group'>
                                <div className='fieldName'>기술 스택</div>
                                {
                                    this.props.techs.map((tech, i) => (
                                        <div className="badge badge-pill badge-info" key={i}>{tech}</div>
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

export default ProjectCard;