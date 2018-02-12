import React, {Component} from 'react';
import DeveloperDetail from './DeveloperItem';
import Service from '../utils/Service';
import './Developers.css';

class Developers extends Component {
    constructor(props) {
        super(props);
        this.service = new Service();
        this.state = {
            members: []
        };
        this.service.get('/developers', (status, res) => {
            this.setState({
                members: res
            });
        });
    }

    handleClick = () => {
        this.props.history.push("/developer/new");
    }
  
    render() {
        return (
            <div className="developers container">
                <div className='flexbox'>
                    <button className='btn btn-light add-button' onClick={this.handleClick}>Add Developer</button>
                </div>
                <div className='flexbox'>
                    {this.state.members.map((profile, i) => (
                            <DeveloperDetail key={i}
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