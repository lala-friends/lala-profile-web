import React, {Component} from 'react';
import HTTP from '../utils/http-common';
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
    }

    componentDidMount() {
        HTTP.get(`/developer/${this.props.match.params.name}`).then(response => {
            const developer = response.data;
            this.setState({
                id: developer.personId,
                name: developer.name,
                email: developer.email,
                imageUrl: developer.imageUrl,
                introduce: developer.introduce,
                color: developer.repColor,
                blog: developer.blog,
                github: developer.github,
                facebook: developer.facebook,
                projects: developer.projects,
                products: developer.products
            });
        });
    }
    
    render() {
        return (
            <div className="developerDetail container flexbox">
                <div className='flexbox'>
                    <img id='developerImg' alt='개발자 프로필 이미지' className='round-image' src={this.state.imageUrl} />
                </div>
                <div className='detailbox flexbox'>
                    <div id='title' className='title'>about {this.state.name.toUpperCase()}</div>
                    <div className='group'>
                        <div className='fieldName'>이름</div>
                        <div id='developerName' >{this.state.name}</div>
                    </div>
                    <div className='group'>
                        <div className='fieldName'>이메일</div>
                        <div  id='email'>{this.state.email}</div>
                    </div>
                    <div className='group'>
                        <div className='fieldName'>한줄소개</div>
                        <div id='developerIntroduce'>{this.state.introduce}</div>
                    </div>
                </div>
                <div id='projects' className={`flexbox detailbox ${this.state.projects.length===0 && 'inactive'}`}>
                    <div className='subtitle'>Projects</div>
                    {
                        this.state.projects.map((project, projectKey) => <ProjectCard key={`project-${projectKey}`}  
                                    color={this.state.color} 
                                    name={project.projectName} 
                                    from={project.periodFrom} 
                                    to={project.periodTo} 
                                    introduce={project.introduce}
                                    roles={project.personalRole}
                                    description={project.description} 
                                    techs={project.techs}
                                    link={project.link} />         
                            )
                    }  

                </div>
                <div id='products' className={`detailbox flexbox ${this.state.products.length===0 && 'inactive'}`}>
                    <div className='subtitle'>Products</div>
                    <div className='flexbox product-wrapper'>
                    {
                        this.state.products.map((product, productKey) => 
                            <ProductCard key={`product-${productKey}`} 
                                name={product.name} 
                                imageUrl={product.imageUrl} 
                                introduce={product.introduce} 
                                techs={product.tech} 
                                role={product.role}
                                history={this.props.history}/>
                        )
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default DeveloperDetail;