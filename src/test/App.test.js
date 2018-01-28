import React from 'react';
import {MemoryRouter} from 'react-router';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App/>', () => {
  test('exist Header component', () => {
    const wrapper = Enzyme.shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });
  test('root path, render Home component', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter  initialEntries={[ '/' ]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find('Home')).toHaveLength(1);
  });

  test('/about path, render About component', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter  initialEntries={[ '/about' ]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find('About')).toHaveLength(1);
  });

  test('/projects path, render Home component', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter  initialEntries={[ '/project' ]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find('Project')).toHaveLength(1);
  });

  test('unknown path, render Home component', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter  initialEntries={[ '/unknown' ]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find('NoMatch')).toHaveLength(1);
  });

  test('/projects/:id path, render Home component', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter  initialEntries={[ '/project/1' ]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find('Detail')).toHaveLength(1);
  });
});
