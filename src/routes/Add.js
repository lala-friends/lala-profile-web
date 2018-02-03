import React from 'react';
import './Add.css';
import FormFile from "../components/FormFile";
import FormItem from '../components/FormItem';

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            tags: [],
            image: '',
            items: [

            ]
        };
    }
    handleCancle = (e) => {
        this.props.history.goBack();
    }
    handleSave = (e) => {
        console.log('save');
    }
    handleAdd = (e) => {
        const items = this.state.items;
        items.push({})
        console.log(items.length);
        this.setState({items: items});
    }
    setTags = (text) => {
        const arrays = text.split(' ');
        this.setState({
            tags: arrays
        })
    }
    handleKeyDown = (e) => {
        // 32: space, 13: enter, 8: delete
        if(e.keyCode === 32 || e.keyCode === 13 || e.keyCode === 8) {
            this.setTags(e.target.value);
        }
    }
    handleOnBlur = (e) => {
        this.setTags(e.target.value);
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
                        <input type="text" onKeyDown={this.handleKeyDown.bind(this)} onBlur={this.handleOnBlur.bind(this)}/>
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
                        <FormFile />
                    </div>
                    <div className="group">
                        <div className="fieldName">Developers</div>
                        <input type="text" />
                    </div>

                </div>
                <div className="margin-bottom-1">
                {
                    [...Array(this.state.items.length)].map((x, i) =>
                        <FormItem key={i}/>
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