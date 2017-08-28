import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Home from '../Home.jsx';

describe("Home", () => {
    it('renders', () => {
        const wrapper = TestUtils.renderIntoDocument(<Home />);
        const node = TestUtils.findRenderedDOMComponentWithClass(wrapper, 'home');
    })
});
