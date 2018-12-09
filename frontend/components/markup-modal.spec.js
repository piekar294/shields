import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MarkupModal from './markup-modal'
import React from 'react'
import Modal from 'react-modal'

const chai = require('chai')
const { expect } = chai

Enzyme.configure({ adapter: new Adapter() })

describe('markup modal', function() {
  it('should render closed modal', function() {
    // given
    const props = {
      baseUrl: 'http://localhost:8080',
      onRequestClose: () => {},
    }

    // when
    const markupModalWrapper = shallow(<MarkupModal {...props} />)

    // then
    expect(markupModalWrapper.find(Modal).prop('isOpen')).to.be.false
  })
})
