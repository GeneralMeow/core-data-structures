import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

describe('Set', () => {
  'use strict'

  it('exists', () => {
    expect(Set).to.be.a('function')
  })

  describe('add()', () => {
    it('adds an element to the set.', () => {
      const set = new Set()

      expect(() => set.add('foo'))
        .to.alter(() => set.size(), { from: 0, to: 1 })
    })

    it('adds the correct element to the set.', () => {
      const set = new Set()
      set.add('foo')

      expect(set.contains('foo'))
        .to.be.true
    })
  })

  describe('isEmpty()', () => {
    it('returns true if the set is empyty.', () => {
      const set = new Set()

      expect(set.isEmpty())
        .to.be.true
    })

    it('returns false if  the set is not empty.', () => {
      const set = new Set()
      set.add('foo')

      expect(set.isEmpty())
        .to.be.false
    })
  })

  describe('contains()', () => {
    it('returns false if  the set is does not contain the element.', () => {
      const set = new Set()

      expect(set.contains('A'))
        .to.be.false
    })

    it('returns true if the set contains the element.', () => {
      const set = new Set()
      set.add('foo')


      expect(set.contains('foo'))
        .to.be.true
    })
  })

  describe('remove()', () => {
    it('removes an element (if it exists) from the set.', () => {
      const set = new Set()
      set.add('A')
      set.add('B')
      set.remove('A')

      expect(set)
        .to.eql({elements: ['B']})
    })

    it('returns true if the set contains the element.', () => {
      const set = new Set()
      set.add('foo')

      expect(set.contains('foo'))
        .to.be.true
    })
  })

  describe('forEach()', () => {
    it('takes a callback function and passes it each element in sequence.', () => {
      const set = new Set()
      set.add('foo')
      set.add('fu')
      var fuber = function (element){
        console.log('fubelement',element);
        return element + 'bar'
      }

      expect(set.forEach(fuber))
        .to.eql({elements: ['foobar', 'fubar']})
    })

    it('returns true if the set contains the element.', () => {
      const set = new Set()
      set.add('foo')

      expect(set.contains('foo'))
        .to.be.true
    })
  })


})
