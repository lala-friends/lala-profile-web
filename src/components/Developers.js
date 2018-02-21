import React, {Component} from 'react';
import DeveloperItem from './DeveloperItem';
import HTTP from '../utils/http-common';
import './Developers.css';

class Developers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            developers: []
        };
    }

    componentDidMount() {
        HTTP.get('/developers').then(response => {
            this.setState({
                developers: response.data
            });
        });
    }

    handleClick = () => {
        this.props.history.push('/developer/new');
    }
  
    render() {
        return (
            <div className="developers container">
                <div className='flexbox'>
                    <button className='btn btn-light add-button' onClick={this.handleClick}>Add Developer</button>
                </div>
                <div className='flexbox'>
                    {this.state.developers.map((profile, i) => (
                            <DeveloperItem key={i}
                                id={profile.personId}
                                thumbnail={profile.imageUrl}
                                name={profile.name}
                                email={profile.email}
                                introduce={profile.introduce}
                                blog={profile.blog}
                                github={profile.github}
                                facebook={profile.facebook}
                                color={profile.repColor}
                                products={profile.products}
                                history={this.props.history} />
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Developers;