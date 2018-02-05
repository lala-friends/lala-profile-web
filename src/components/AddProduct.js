import React, {Component} from 'react';
import './AddProduct.css';
import FormProject from './FormProject';
import FormItem from './FormItem';

class AddProduct extends Component {
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
    handleCancle() {
        this.props.history.goBack();
    }
    handleSave() {
        console.log(this.state);
    }
    handleAdd() {
        const items = this.state.items;
        items.push({
            id: '',
            title: '',
            description: '',
            image: ''
        });
        this.setState({items: items});
    }

    render() {
        return (
            <div className="add container">
                <div className="title">Add Project</div>
                <div className="margin-bottom-3">
                    <FormProject project={this.state}/>
                </div>
                <div className="margin-bottom-1">
                {
                    this.state.items.map((x, i) => {
                        x.id = i;
                        return (<FormItem key={i} changeItem={x}/>)
                    })
                }
                </div>
                <div id="formCard" />
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

export default AddProduct;