import React, {Component} from 'react';
import './Project.css'

class Project extends Component {
    render() {
        return (
            <div className="flexbox container">
                <div className="project card">
                    <img className="thumbnail" src={this.props.thumbnail}/>
                    <div className="card-body">
                        <div className="text-align-center name">{this.props.name}</div>
                        <div className="description">{this.props.description}</div>
                        <hr/>
                        <div>Developers</div>
                        <div className="flexbox developer">
                            {
                                this.props.developers.map((developer, i) =>
                                    <img src={developer.thumbnail} title={developer.name} key={i}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;