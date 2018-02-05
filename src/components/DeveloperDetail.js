import React, {Component} from 'react';
import './DeveloperDetail.css';

class DeveloperDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        };
    }

    handleClick = () => {
        this.setState({
            isShow: !this.state.isShow
        });
    };

    render() { 
        return (
            <div className="person card">
                <div className="background" style={{backgroundColor: `${this.props.color}`}} />
                <div className="thumbnail-background" />
                <img className="thumbnail" src={this.props.thumbnail} />
                <div className="card-body">
                    <div className="text-align-center">
                        <div className="name">{this.props.name}</div>
                        <div className="email">{this.props.email}</div>
                        <div className="introduce">{this.props.introduce}</div>
                    </div>
                    <hr/>
                    <div className="flexbox">
                        <a className="social-button border-right" href={this.props.blog}>
                            <i className="mdi mdi-blogger" />
                            <div>blog</div>
                        </a>
                        <a className="social-button border-right" href={this.props.github}>
                            <i className="mdi mdi-github-face" />
                            <div>github</div>
                        </a>
                        <a className="social-button"  href={this.props.facebook}>
                            <i className="mdi mdi-facebook" />
                            <div>facebook</div>
                        </a>
                    </div>
                </div>
                <div className="project-button flexbox" onClick={this.handleClick.bind(this)}>
                    <span>Projects</span>
                </div>
                <div className={`${!this.state.isShow && 'inactive'}`}>
                    {
                        (!this.props.projects)? null:
                            (this.props.projects.map((project, i)=>{
                                return (
                                    <a href={`/project/${project.id}`} className="project-item" key={i}>
                                        <img src={project.thumbnail} />
                                        <div>
                                            {project.name}
                                        </div>
                                    </a>
                                )
                            }))
                    }
                </div>
            </div>
        )
    }
}

export default DeveloperDetail;