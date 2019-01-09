import 'react-native';
import React from 'react';
import Intro from '../Intro';

// must be required AFTER react native
import renderer from 'react-test-renderer';

jest.setTimeout(15000);

it('renders correctly', () => {
    const tree = renderer.create(<Intro />).toJSON();
    expect(tree).toMatchSnapshot();
});