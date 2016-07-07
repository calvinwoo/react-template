import {expect} from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import {spy} from 'sinon';
import Banner from '../../src/Banner/Banner';

describe('Banner Component', () => {
  it('displays the title', () => {
    const title = 'Fargo';

    expect(
      shallow(<Banner title={title} />)
        .find('.title')
        .text()
    )
      .to.equal(title);
  });

  it('displays the subtitle', () => {
    const subtitle = 'a homespun murder story';

    expect(
      shallow(<Banner subtitle={subtitle} />)
        .text()
        .includes(subtitle)
    )
      .to.be.true;
  });

  it('pulses only after the button is clicked', () => {
    const wrapper = shallow(<Banner />);

    expect(wrapper.hasClass('pulse')).to.be.false;

    wrapper
      .find('button')
      .simulate('click');

    expect(wrapper.hasClass('pulse')).to.be.true;
  });

  it('executes callback function after the button is clicked', () => {
    const props = {
      handleClick: () => {}
    };

    const handleClickSpy = spy(props, 'handleClick');

    shallow(<Banner {...props} />)
      .find('button')
      .simulate('click');

    expect(handleClickSpy.called).to.be.true;
  });
});
