import React from 'react';
import {MemoryRouter} from 'react-router';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

import Header from '../components/Header';
import Home from '../components/Home';
import Developers from '../components/Developers';
import DeveloperDetail from '../components/DeveloperDetail';
import Products from '../components/Products';
import ProductDetail from '../components/ProductDetail';
import AddProduct from '../components/AddProduct';
import NoMatch from '../components/NoMatch';

Enzyme.configure({adapter: new Adapter()});

describe('<App/>', () => {

    test('/ 경로로 들어왔을 때, Header와 Home 컴포넌트가 보여진다.', () => {
        const wrapper = Enzyme.mount(
            <MemoryRouter initialEntries={['/']}>
                <App/>
            </MemoryRouter>
        );

        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Home)).toHaveLength(1);
        expect(wrapper.find(Developers)).toHaveLength(0);
        expect(wrapper.find(DeveloperDetail)).toHaveLength(0);
        expect(wrapper.find(Products)).toHaveLength(0);
        expect(wrapper.find(ProductDetail)).toHaveLength(0);
        expect(wrapper.find(AddProduct)).toHaveLength(0);
        expect(wrapper.find(NoMatch)).toHaveLength(0);

    });

    test('/developers 경로로 들어왔을 때, Header와 Developers 컴포넌트가 보여진다.', () => {
        const wrapper = Enzyme.mount(
            <MemoryRouter initialEntries={['/developers']}>
                <App/>
            </MemoryRouter>
        );

        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Home)).toHaveLength(0);
        expect(wrapper.find(Developers)).toHaveLength(1);
        expect(wrapper.find(DeveloperDetail)).toHaveLength(0);
        expect(wrapper.find(Products)).toHaveLength(0);
        expect(wrapper.find(ProductDetail)).toHaveLength(0);
        expect(wrapper.find(AddProduct)).toHaveLength(0);
        expect(wrapper.find(NoMatch)).toHaveLength(0);
    });

    test('/developers/:id 경로로 들어왔을 때, Header와 Developer 컴포넌트가 보여진다.', () => {
        const wrapper = Enzyme.mount(
            <MemoryRouter initialEntries={['/developers/1']}>
                <App/>
            </MemoryRouter>
        );

        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Home)).toHaveLength(0);
        expect(wrapper.find(Developers)).toHaveLength(0);
        expect(wrapper.find(DeveloperDetail)).toHaveLength(1);
        expect(wrapper.find(Products)).toHaveLength(0);
        expect(wrapper.find(ProductDetail)).toHaveLength(0);
        expect(wrapper.find(AddProduct)).toHaveLength(0);
        expect(wrapper.find(NoMatch)).toHaveLength(0);
    });

    test('/products 경로로 들어왔을 때, Header와 Products 컴포넌트가 보여진다.', () => {
        const wrapper = Enzyme.mount(
            <MemoryRouter initialEntries={['/products']}>
                <App/>
            </MemoryRouter>
        );

        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Home)).toHaveLength(0);
        expect(wrapper.find(Developers)).toHaveLength(0);
        expect(wrapper.find(DeveloperDetail)).toHaveLength(0);
        expect(wrapper.find(Products)).toHaveLength(1);
        expect(wrapper.find(ProductDetail)).toHaveLength(0);
        expect(wrapper.find(AddProduct)).toHaveLength(0);
        expect(wrapper.find(NoMatch)).toHaveLength(0);
    });

    test('/products/:id 경로로 들어왔을 때, Header와 Product 컴포넌트가 보여진다.', () => {
        const wrapper = Enzyme.mount(
            <MemoryRouter initialEntries={['/products/1']}>
                <App/>
            </MemoryRouter>
        );

        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Home)).toHaveLength(0);
        expect(wrapper.find(Developers)).toHaveLength(0);
        expect(wrapper.find(DeveloperDetail)).toHaveLength(0);
        expect(wrapper.find(Products)).toHaveLength(0);
        expect(wrapper.find(ProductDetail)).toHaveLength(1);
        expect(wrapper.find(AddProduct)).toHaveLength(0);
        expect(wrapper.find(NoMatch)).toHaveLength(0);
    });

    test('/product/new 경로로 들어왔을 때, Header와 AddProduct 컴포넌트가 보여진다.', () => {
        const wrapper = Enzyme.mount(
            <MemoryRouter initialEntries={['/product/new']}>
                <App/>
            </MemoryRouter>
        );

        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Home)).toHaveLength(0);
        expect(wrapper.find(Developers)).toHaveLength(0);
        expect(wrapper.find(DeveloperDetail)).toHaveLength(0);
        expect(wrapper.find(Products)).toHaveLength(0);
        expect(wrapper.find(ProductDetail)).toHaveLength(0);
        expect(wrapper.find(AddProduct)).toHaveLength(1);
        expect(wrapper.find(NoMatch)).toHaveLength(0);
    });

    test('/unknown 경로로 들어왔을 때, Header와 AddProduct 컴포넌트가 보여진다.', () => {
        const wrapper = Enzyme.mount(
            <MemoryRouter initialEntries={['/unknown']}>
                <App/>
            </MemoryRouter>
        );

        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Home)).toHaveLength(0);
        expect(wrapper.find(Developers)).toHaveLength(0);
        expect(wrapper.find(DeveloperDetail)).toHaveLength(0);
        expect(wrapper.find(Products)).toHaveLength(0);
        expect(wrapper.find(ProductDetail)).toHaveLength(0);
        expect(wrapper.find(AddProduct)).toHaveLength(0);
        expect(wrapper.find(NoMatch)).toHaveLength(1);
    });

});
