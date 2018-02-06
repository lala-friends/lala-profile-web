import React, {Component} from 'react';
import DeveloperDetail from './DeveloperItem';
import Service from '../utils/Service';

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
  
    render() {
        return (
            <div className="about container flexbox">
                {this.state.members.map((profile, i) => {
                    console.log(profile);
                    return (<DeveloperDetail key={i}
                                             thumbnail={profile.imageUrl}
                                             name={profile.name}
                                             email={profile.email}
                                             introduce={profile.introduce}
                                             blog={profile.blog}
                                             github={profile.github}
                                             facebook={profile.facebook}
                                             color={profile.repColor}
                                             products={profile.products}
                            />);
                })}
            </div>
        )
    }
}

export default Developers;