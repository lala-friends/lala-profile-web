import React, {Component} from 'react';
import './DeveloperDetail.css';

const developer ={
    id: 2,
    name: 'ryan',
    email: 'whuk84@gmail.com',
    introduce: 'PS4와 건담을 좋아하는 개발자 ryan 입니다.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lala-profile-web.appspot.com/o/ryan.png?alt=media&token=6cf9d255-954f-450a-8e6f-cf1eb4a14407',
    repColor: '#c5f6fa',
    blog: 'http://ryanwoo.tistory.com/',
    github: 'https://github.com/whuk',
    facebook: 'https://www.facebook.com/profile.php?id=100001895042867',
    tags: ['건담', 'ps4'],
    products: [
        {
            id: 2,
            name: 'lala-profile',
            introduce: 'lala-friends의 포트폴리오 관리페이지.',
            tech: ['react', 'go', 'mysql', 'firebase', 'aws-ec2'],
            role: '백엔드 개발환경 구성, 설계, 개발',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lala-profile-web.appspot.com/o/lala-profile-background.png?alt=media&token=a959351a-95b2-443a-b5db-0846de025546'
        },
        {
            id: 3,
            name: 'lala-profile',
            introduce: 'lala-friends의 포트폴리오 관리페이지.',
            tech: ['react', 'go', 'mysql', 'firebase', 'aws-ec2'],
            role: '백엔드 개발환경 구성, 설계, 개발',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lala-profile-web.appspot.com/o/lala-profile-background.png?alt=media&token=a959351a-95b2-443a-b5db-0846de025546'
        },
        {
            id: 4,
            name: 'lala-profile',
            introduce: 'lala-friends의 포트폴리오 관리페이지.',
            tech: ['react', 'go', 'mysql', 'firebase', 'aws-ec2'],
            role: '백엔드 개발환경 구성, 설계, 개발',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lala-profile-web.appspot.com/o/lala-profile-background.png?alt=media&token=a959351a-95b2-443a-b5db-0846de025546'
        }
    ],
    projects: [
        {
            id: 1,
            name: '이화 여자대학교 통합 행정 시스템구축',
            period: '2011.01 ~ 2012.12 (2년)',
            role: '어플리케이션 설계, 개발',
            tech: ['java', 'spring'],
            summary: '이화 여자 대학교 일반 행정, 학사 행정 시스템 통합 구축',
            detail: '- 일반행정, 대외 협력처 모금 시스템 설계, 개발 \n - 일반행정 파트 개발 리더',
            imageUrl: ''
        },
        {
            id: 1,
            name: '알리안츠 차세대',
            period: '2011.01 ~ 2012.12 (2년)',
            role: '어플리케이션 설계, 개발',
            tech: ['java', 'spring'],
            summary: '이화 여자 대학교 일반 행정, 학사 행정 시스템 통합 구축',
            detail: '- 일반행정, 대외 협력처 모금 시스템 설계, 개발 \n - 일반행정 파트 개발 리더',
            imageUrl: ''
        }
    ]
}

class DeveloperDetail extends Component {
    
    render() {
        return (
            <div className="developerDetail container flexbox">
                
                <div className='flexbox'>
                    <img className='round-image' src={developer.imageUrl} />
                </div>
                <div className='detailbox flexbox'>
                    <div className='title'>about {developer.name.toUpperCase()}</div>
                    <div className='group'>
                        <div className='fieldName'>이름</div>
                        <div>{developer.name}</div>
                    </div>
                    <div className='group'>
                        <div className='fieldName'>이메일</div>
                        <div>{developer.email}</div>
                    </div>
                    <div className='group'>
                        <div className='fieldName'>한줄소개</div>
                        <div>{developer.introduce}</div>
                    </div>
                </div>
                <div className='flexbox detailbox'>
                    <div className='subtitle'>Projects</div>

                    {
                        developer.projects.map((project, key) => {
                            return (
                                <div className='flexbox width-100'>
                                    <div key={key} className='item-card timeline width-100'>
                                        <div className='pointer'></div>
                                        <div className='flexbox'>
                                            <div className='triangle' style={{ borderRight: `2em solid ${developer.repColor}`}}></div>
                                            <div className='project' style={{backgroundColor: `${developer.repColor}`}}>
                                                <div className='group'>
                                                    <div className='fieldName'>프로젝트명</div>
                                                    <div>{project.name}</div>
                                                </div>
                                                <div className='group'>
                                                    <div className='fieldName'>기간</div>
                                                    <div>{project.period}</div>
                                                </div>
                                                <div className='group'>
                                                    <div className='fieldName'>역할</div>
                                                    <div>{project.role}</div>
                                                </div>
                                                <div className='group'>
                                                    <div className='fieldName'>프로젝트 요약</div>
                                                    <div>{project.summary}</div>
                                                </div>
                                                <div className='group'>
                                                    <div className='fieldName'>프로젝트 상세</div>
                                                    <div>{project.detail}</div>
                                                </div>
                                                <div className='group'>
                                                    <div className='fieldName'>기술 스택</div>
                                                    {
                                                        project.tech.map((text, i) => (
                                                            <div className="badge badge-pill badge-info" key={i}>{text}</div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }  

                </div>
                <div className='detailbox flexbox'>
                    <div className='subtitle'>Products</div>
                    <div className='flexbox product-wrapper'>
                    {
                        developer.products.map((product, key) => {
                            return (
                                <div key={key} className='card'> 
                                    <div className='item-title'>{product.name}</div>
                                    <div className='flexbox'>
                                        <div className='image-wrapper'>
                                            <img className='square-image' src={product.imageUrl} />
                                        </div>
                                        <div>
                                            <div className='group'>
                                                <div className='fieldName'>한줄소개</div>
                                                <div>{product.introduce}</div>
                                            </div>
                                            <div className='group'>
                                                <div className='fieldName'>기술 스택</div>
                                                {
                                                    product.tech.map((text, i) => (
                                                        <div className="badge badge-pill badge-info" key={i}>{text}</div>
                                                    ))
                                                }
                                            </div>
                                            <div className='group'>
                                                <div className='fieldName'>역할</div>
                                                <div>{product.role}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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