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
      set.add(1)
      set.add(2)
      var fuber = function (element){
        return (element + 1)
      }

      expect(set.forEach(fuber))
        .to.eql({elements: [2, 3]})
    })

    it('takes a callback function and passes it each element in sequence.', () => {
      const set = new Set()
      set.add('foo')
      set.add('fu')
      const fuber = (element) => {
        return element + 'bar'
      }

      expect(set.forEach(fuber))
        .to.eql({elements: ['foobar', 'fubar']})
    })
  })

  describe('size()', () => {
    it('returns the number of elements in the set.', () => {
      const set = new Set()
      set.add(1)
      set.add(2)

      expect(set.size())
        .to.eql(2)
    })
  })

    it('returns 0 if the set is empty.', () => {
      const set = new Set()

      expect(set.size())
        .to.eql(0)
    })

  describe('union()', () => {
    it('unions the set with another set and returns the resulting set.', () => {
      const otherSet = new Set()
      otherSet.add(1)
      otherSet.add(2)
      otherSet.add(3)
      const set = new Set()
      set.add(1)
      set.add(2)


      expect(set.union(otherSet).sort())
        .to.eql([1, 2, 3])
    })
  })

    it('unions the set with another set and returns the resulting set.', () => {
      const otherSet = new Set()
      otherSet.add(4)
      otherSet.add(5)
      otherSet.add(6)
      const set = new Set()
      set.add(5)
      set.add(3)

      expect(set.union(otherSet).sort())
        .to.eql([3,4,5,6])
    })

  describe('intersect()', () => {
    it('intersects the set with another set and returns the resulting set.', () => {
      const otherSet = new Set()
      otherSet.add(1)
      otherSet.add(2)
      otherSet.add(3)
      const set = new Set()
      set.add(1)
      set.add(2)


      expect(set.intersect(otherSet))
        .to.eql([1, 2])
    })
  })

    it('intersects the set with another set and returns the resulting set.', () => {
      const otherSet = new Set()
      otherSet.add(4)
      otherSet.add(5)
      otherSet.add(6)
      const set = new Set()
      set.add(5)
      set.add(3)

      expect(set.intersect(otherSet))
        .to.eql([5])
    })

  describe('difference()', () => {
    it('returns a set that contains the elements found in this set but not in the otherSet.', () => {
      const otherSet = new Set()
      otherSet.add(1)
      otherSet.add(2)
      otherSet.add(3)
      const set = new Set()
      set.add(1)
      set.add(2)


      expect(set.difference(otherSet))
        .to.eql({elements: [3]})
    })
  })

    it('returns a set that contains the elements found in this set but not in the otherSet.', () => {
      const otherSet = new Set()
      otherSet.add(4)
      otherSet.add(5)
      otherSet.add(6)
      const set = new Set()
      set.add(5)
      set.add(3)

      expect(set.difference(otherSet))
        .to.eql({elements: [4,6]})
    })

  describe('isSubset()', () => {
    it('returns true if the set is a subset of otherSet.', () => {
      const otherSet = new Set()
      otherSet.add(1)
      otherSet.add(2)
      otherSet.add(3)
      const set = new Set()
      set.add(1)
      set.add(2)


      expect(set.isSubset(otherSet))
        .to.be.true
    })
  })

    it('returns false if the set is not a subset of otherSet.', () => {
      const otherSet = new Set()
      otherSet.add(4)
      otherSet.add(5)
      otherSet.add(6)
      const set = new Set()
      set.add(5)
      set.add(3)

      expect(set.isSubset(otherSet))
        .to.be.false
    })
  describe('clone()', () => {
    it('returns an identical instance of Set.', () => {
      const set = new Set()
      set.add(1)
      set.add(2)
      set.add(3)
      set.add(4)
      set.add(5)
      set.add(6)


      expect(set.clone())
        .to.eql({elements: [1,2,3,4,5,6]})
    })
  })

    it('returns an identical instance of set.', () => {
      const set = new Set()
      set.add(5)
      set.add(3)

      expect(set.clone())
        .to.eql({elements: [ 5 , 3 ]})
    })

})
