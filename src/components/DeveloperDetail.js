import React, {Component} from 'react';
import Service from '../utils/Service';
import './DeveloperDetail.css';
import ProjectCard from './ProjectCard';
import ProductCard from './ProductCard';

class DeveloperDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personId: '',
            name: '',
            email: '',
            imageUrl: '',
            introduce: '',
            repColor: '',
            blog: '',
            github: '',
            facebook: '',
            projects: [],
            products: []
        };
        this.service = new Service();
        this.service.get(`/developer/${this.props.match.params.name}`, (status, response) => {
            this.setState({
                id: response.personId,
                name: response.name,
                email: response.email,
                imageUrl: response.imageUrl,
                introduce: response.introduce,
                color: response.repColor,
                blog: response.blog,
                github: response.github,
                facebook: response.facebook,
                projects: response.projects || [],
                products: response.products || []
            });
        });
    }
    
    render() {
        return (
            <div className="developerDetail container flexbox">
                <div className='flexbox'>
                    <img alt='개발자 프로필 이미지' className='round-image' src={this.state.imageUrl} />
                </div>
                <div className='detailbox flexbox'>
                    <div className='title'>about {this.state.name.toUpperCase()}</div>
                    <div className='group'>
                        <div className='fieldName'>이름</div>
                        <div>{this.state.name}</div>
                    </div>
                    <div className='group'>
                        <div className='fieldName'>이메일</div>
                        <div>{this.state.email}</div>
                    </div>
                    <div className='group'>
                        <div className='fieldName'>한줄소개</div>
                        <div>{this.state.introduce}</div>
                    </div>
                </div>
                <div className='flexbox detailbox'>
                    <div className='subtitle'>Projects</div>

                    {
                        this.state.projects.map((project, key) => {
                            return (
                                <ProjectCard key={key} 
                                    color={this.state.color} 
                                    name={project.name} 
                                    period={project.period} 
                                    role={project.role} 
                                    summary={project.summary} 
                                    detail={project.detail} 
                                    techs={project.techs} />         
                            );
                        })
                    }  

                </div>
                <div className='detailbox flexbox'>
                    <div className='subtitle'>Products</div>
                    <div className='flexbox product-wrapper'>
                    {
                        this.state.products.map((product, key) => {
                            return (
                                <ProductCard key={key} 
                                    name={product.name} 
                                    imageUrl={product.imageUrl} 
                                    introduce={product.introduce} 
                                    techs={product.tech} 
                                    role={product.role}/>
                            );
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default DeveloperDetail;