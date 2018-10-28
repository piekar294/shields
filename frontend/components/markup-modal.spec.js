import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MarkupModal from './markup-modal'
import React from 'react'

const chai = require('chai')
const { expect } = chai

Enzyme.configure({ adapter: new Adapter() })

describe('markup modal', function() {
  it('should not override default state on constructing modal with empty example prop', function() {
    // given
    const props = {
      example: null,
      baseUrl: 'http://localhost:8080',
      onRequestClose: () => {},
    }

    // when
    const markupModalWrapper = shallow(<MarkupModal {...props} />)

    // then
    expect(markupModalWrapper.state()).to.deep.equal({
      exampleUrl: null,
      badgeUrl: null,
      link: '',
      style: 'flat',
    })
  })

  it('should override state on constructing modal with example prop given', function() {
    // given
    const props = {
      example: {
        title: 'Coveralls github',
        exampleUrl: '/coveralls/github/jekyll/jekyll.svg',
        previewUrl: '/coveralls/github/jekyll/jekyll.svg',
        link: 'test-link',
      },
      baseUrl: 'http://localhost:8080',
      onRequestClose: () => {},
    }

    // when
    const markupModalWrapper = shallow(<MarkupModal {...props} />)

    // then
    expect(markupModalWrapper.state()).to.deep.equal({
      exampleUrl: 'http://localhost:8080/coveralls/github/jekyll/jekyll.svg',
      badgeUrl: 'http://localhost:8080/coveralls/github/jekyll/jekyll.svg',
      link: 'test-link',
      style: 'flat',
    })
  })
})
