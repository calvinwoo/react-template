import {expect} from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
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
        .find('.subtitle')
        .text()
    )
      .to.equal(subtitle);
  });

  it('pulses only after the button is clicked', () => {
    const wrapper = shallow(<Banner />);

    expect(wrapper.hasClass('pulse')).to.be.false;

    wrapper
      .find('button')
      .simulate('click');

    expect(wrapper.hasClass('pulse')).to.be.true;
  });
});
