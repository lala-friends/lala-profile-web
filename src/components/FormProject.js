import React from 'react';
import FormFile from './FormFile';
import './FormProject.css';

class FormProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            tags: [],
            image: ''
        }
    }

    changeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    changeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    changeTags(e) {
        const arrays = e.target.value.split(' ');
        this.setState({
            tags: arrays
        });
    }

    updateImage(url) {
        console.log('project');
        console.log(url);
    }

    render() {
        return (
            <div className="formProject">
                <div className="group">
                    <div className="fieldName">Project Name</div>
                    <input type="text" value={this.state.name} onChange={this.changeName.bind(this)}/>
                </div>
                <div className="group">
                    <div className="fieldName">Project Description</div>
                    <input type="text" value={this.state.description} onChange={this.changeDescription.bind(this)}/>
                </div>

                <div className="group">
                    <div className="fieldName">Tags</div>
                    <input type="text" onChange={this.changeTags.bind(this)} />
                    <div>
                        {
                            this.state.tags.map((text, i) => (
                                <div className="badge badge-pill badge-info" key={i}>{text}</div>
                            ))
                        }
                    </div>
                </div>
                <div className="group">
                    <div className="fieldName">Project Image</div>
                    {
                        this.state.image? <img src={this.state.image}/>: null
                    }
                    <FormFile updateImage={this.updateImage.bind(this)}/>
                </div>
                <div className="group">
                    <div className="fieldName">Developers</div>
                    <input type="text" />
                </div>
            </div>
        )
    }
}

export default FormProject;