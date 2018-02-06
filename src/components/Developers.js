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
        this.service.get('/profile/tiffany', (status1, res1) => {
            this.service.get('/profile/ryan', (status2, res2) => {
                const members = [];
                members.push(res1);
                members.push(res2);
                this.setState({
                    members: members
                });
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