import React from 'react';
import Person from '../components/Person';
import Service from '../utils/Service';

class About extends React.Component {
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
                    return (<Person key={i}
                                    thumbnail={profile.imageUrl}
                                    name={profile.name}
                                    email={profile.email}
                                    introduce={profile.introduce}
                                    blog={profile.blog}
                                    github={profile.github}
                                    facebook={profile.facebook}
                                    color={profile.repColor}
                                    projects={profile.projects}
                            />);
                })}
            </div>
        )
    }
}

export default About;