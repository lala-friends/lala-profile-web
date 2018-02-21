import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import DeveloperDetail from '../components/DeveloperDetail';
import HTTP from '../utils/http-common';
import sinon from 'sinon';

describe('DeveloperDetail 컴포넌트', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });
    test('url params로 받은 name에 해당하는 devloper 상세정보를 조회한다.', () => {
        const developerData = {
            personId: 1,
            name: 'tiffany',
            email: 'tiffany@gmail.com',
            imageUrl: 'www.tiffany.com',
            introduce: '티파니입니다.',
            blog: 'www.blog.com',
            github: 'www.github.com',
            facebook: 'www.facebook.com',
            repColor: 'color',
            projects: [
                {
                    projectName: 'lala-project',
                    periodFrom: '2013-02-01T00:00:00Z',
                    periodTo: '2014-07-31T00:00:00Z',
                    introduce: 'project 간단소개',
                    description:'project 상세설명',
                    techs:['Java'],
                    personalRole: '프론트엔드',
                    link : 'www.link.com'
                }
            ],
            products: [
                {
                    productId: 1,
                    name: 'lala-product1',
                    introduce: 'product1 간단소개',
                    tech: ['android'],
                    imageUrl: 'www.productImageUrl1.com'
                },
                {
                    productId: 2,
                    name: 'lala-product2',
                    introduce: 'product2 간단소개',
                    tech: ['react'],
                    imageUrl: 'www.productImageUrl2.com'
                }
            ]
        };
        const stub = sandbox.stub(HTTP, 'get');
        stub.withArgs('/developer/tiffany').returns(Promise.resolve({
            data: developerData
        }));
        const wrapper = shallow(<DeveloperDetail match={{params: {name: 'tiffany'}}}/>);
        
        expect(stub.called).toEqual(true);
    });
    test('state 정보가 변경되면, 화면에 변경되어 보여진다.', () => {
        const developerData = {
            personId: 1,
            name: 'tiffany',
            email: 'tiffany@gmail.com',
            imageUrl: 'www.tiffany.com',
            introduce: '티파니입니다.',
            blog: 'www.blog.com',
            github: 'www.github.com',
            facebook: 'www.facebook.com',
            repColor: '#ffffff',
            projects: [
                {
                    projectName: 'lala-project',
                    periodFrom: '2013-02-01T00:00:00Z',
                    periodTo: '2014-07-31T00:00:00Z',
                    introduce: 'project 간단소개',
                    description:'project 상세설명',
                    techs:['Java'],
                    personalRole: '프론트엔드',
                    link : 'www.link.com'
                }
            ],
            products: [
                {
                    productId: 1,
                    name: 'lala-product1',
                    introduce: 'product1 간단소개',
                    tech: ['android'],
                    imageUrl: 'www.productImageUrl1.com',
                    role: '프론트'
                },
                {
                    productId: 2,
                    name: 'lala-product2',
                    introduce: 'product2 간단소개',
                    tech: ['react'],
                    imageUrl: 'www.productImageUrl2.com',
                    role: '백엔드'
                }
            ]
        };
        const stub = sandbox.stub(HTTP, 'get');
        stub.withArgs('/developer/tiffany').returns(Promise.resolve({
            data: developerData
        }));
        const wrapper = shallow(<DeveloperDetail match={{params: {name: 'tiffany'}}}/>);
        wrapper.setState({
            id: developerData.personId,
            name: developerData.name,
            email: developerData.email,
            imageUrl: developerData.imageUrl,
            introduce: developerData.introduce,
            color: developerData.repColor,
            blog: developerData.blog,
            github: developerData.github,
            facebook: developerData.facebook,
            projects: developerData.projects,
            products: developerData.products
        });

        expect(wrapper.find('#title').text()).toEqual('about TIFFANY');
        expect(wrapper.find('#developerImg').prop('src')).toEqual('www.tiffany.com');
        expect(wrapper.find('#developerName').text()).toEqual('tiffany');
        expect(wrapper.find('#email').text()).toEqual('tiffany@gmail.com');
        expect(wrapper.find('#developerIntroduce').text()).toEqual('티파니입니다.');
        expect(wrapper.find('ProjectCard').length).toEqual(1);
        expect(wrapper.find('ProjectCard').at(0).prop('color')).toEqual('#ffffff');
        expect(wrapper.find('ProjectCard').at(0).prop('name')).toEqual('lala-project');
        expect(wrapper.find('ProjectCard').at(0).prop('from')).toEqual('2013-02-01T00:00:00Z');
        expect(wrapper.find('ProjectCard').at(0).prop('to')).toEqual('2014-07-31T00:00:00Z');
        expect(wrapper.find('ProjectCard').at(0).prop('introduce')).toEqual('project 간단소개');
        expect(wrapper.find('ProjectCard').at(0).prop('roles')).toEqual('프론트엔드');
        expect(wrapper.find('ProjectCard').at(0).prop('description')).toEqual('project 상세설명');
        expect(wrapper.find('ProjectCard').at(0).prop('techs')).toEqual(['Java']);
        expect(wrapper.find('ProjectCard').at(0).prop('link')).toEqual('www.link.com');

        expect(wrapper.find('ProductCard').length).toEqual(2);
        expect(wrapper.find('ProductCard').at(0).prop('name')).toEqual('lala-product1');
        expect(wrapper.find('ProductCard').at(0).prop('imageUrl')).toEqual('www.productImageUrl1.com');
        expect(wrapper.find('ProductCard').at(0).prop('introduce')).toEqual('product1 간단소개');
        expect(wrapper.find('ProductCard').at(0).prop('techs')).toEqual(['android']);
        expect(wrapper.find('ProductCard').at(0).prop('role')).toEqual('프론트');
        expect(wrapper.find('ProductCard').at(1).prop('name')).toEqual('lala-product2');
        expect(wrapper.find('ProductCard').at(1).prop('imageUrl')).toEqual('www.productImageUrl2.com');
        expect(wrapper.find('ProductCard').at(1).prop('introduce')).toEqual('product2 간단소개');
        expect(wrapper.find('ProductCard').at(1).prop('techs')).toEqual(['react']);
        expect(wrapper.find('ProductCard').at(1).prop('role')).toEqual('백엔드');
    });

    test('project, product가 없는 경우, 해당 division이 보이지 않는다.', () => {
        const developerData = {
            personId: 1,
            name: 'tiffany',
            email: 'tiffany@gmail.com',
            imageUrl: 'www.tiffany.com',
            introduce: '티파니입니다.',
            blog: 'www.blog.com',
            github: 'www.github.com',
            facebook: 'www.facebook.com',
            repColor: '#ffffff',
            projects: [],
            products: []
        };
        const stub = sandbox.stub(HTTP, 'get');
        stub.withArgs('/developer/tiffany').returns(Promise.resolve({
            data: developerData
        }));
        const wrapper = shallow(<DeveloperDetail match={{params: {name: 'tiffany'}}}/>);
        wrapper.setState({
            id: developerData.personId,
            name: developerData.name,
            email: developerData.email,
            imageUrl: developerData.imageUrl,
            introduce: developerData.introduce,
            color: developerData.repColor,
            blog: developerData.blog,
            github: developerData.github,
            facebook: developerData.facebook,
            projects: developerData.projects,
            products: developerData.products
        });

        expect(wrapper.find('#projects').prop('className')).toContain('inactive');
        expect(wrapper.find('#products').prop('className')).toContain('inactive');
        
    });

    afterEach(() => {
        sandbox.restore();
    });
});