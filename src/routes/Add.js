import React from 'react';
import './Add.css';
import FormFile from "../components/FormFile";
import FormDescription from '../components/FormDescription';

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: 1
        };
    }
    handleCancle = (e) => {
        this.props.history.goBack();
    }
    handleSave = (e) => {
        console.log('save');
    }
    handleAdd = (e) => {
        console.log(this.state.items)
        this.setState({items: this.state.items+1});
    }
    render() {
        return (
            <div className="add container">
                <div className="title">Add Project</div>
                <div className="margin-bottom-3">
                    <div className="group">
                        <div className="fieldName">Project Name</div>
                        <input type="text" />
                    </div>
                    <div className="group">
                        <div className="fieldName">Project Description</div>
                        <input type="text" />
                    </div>

                    <div className="group">
                        <div className="fieldName">Tags</div>
                        <input type="text" />
                    </div>
                    <div className="group">
                        <div className="fieldName">Project Image</div>
                        <FormFile />
                    </div>

                </div>
                <div className="margin-bottom-1">
                {
                    [...Array(this.state.items)].map((x, i) =>
                        <FormDescription key={i}/>
                    )
                }
                </div>
                <div id="formCard"></div>
                <div  className="flexbox margin-bottom-3">
                    <button className="btn btn-light add-button" onClick={this.handleAdd.bind(this)}>add card</button>
                </div>
                <div className="flexbox margin-bottom-3">
                    <button className="btn btn-light material-button" onClick={this.handleCancle.bind(this)}>취소하기</button>
                    <button className="btn btn-light material-button margin-left-1" onClick={this.handleSave.bind(this)}>저장하기</button>
                </div>
            </div>
        );
    }
}

export default Add;