import 'react-native';
import React from 'react';
import { Header } from '../src/components/common';
import renderer from 'react-test-renderer';

test('Header renders correctly', () => {
    const tree = renderer.create(
        <Header />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
