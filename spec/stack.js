import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
  'use strict'

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  describe('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      const stack = new Stack()

      expect(() => stack.push('foo'))
        .to.alter(() => stack.length(), { from: 0, to: 1 })
    })

    it('pushes an element to the top of the stack when there is preexisting data', () => {
      const stack = new Stack()
      stack.push('alice')
      stack.push('bob')

      expect(() => stack.push('foo'))
        .to.alter(() => stack.peek(), {from: 'bob', to: 'foo'})
    })
  })

  describe('pop()', () => {
    it('takes an element from the top of the stack.', () => {
      const stack = new Stack()
      stack.push('bob')
      stack.push('alice')

      expect(() => stack.pop())
        .to.alter(() => stack.length(), { from: 2, to: 1 })
    })

    it('takes an element from the top of the stack.', () => {
      const stack = new Stack()
      stack.push('bob')
      stack.push('alice')
      stack.push('carl')

      expect(stack.pop())
        .to.equal('carl')
    })

    it('returns null if stack is empty', () => {
      const stack = new Stack()

      expect(stack.pop())
        .to.be.null
    })
  })

  describe('peek()', () => {
    it('returns top element (0 index) of stack.', () => {
      const stack = new Stack()
      stack.push('bob')
      stack.push('alice')

      expect(stack.peek())
        .to.eql('alice')
    })

    it('returns null if top element stack is empty.', () => {
      const stack = new Stack()

      expect(stack.peek())
        .to.be.null
    })
  })


  describe('isEmpty()', () => {
    it('returns true if stack is empty or false if not.', () => {
      const stack = new Stack()

      expect(stack.isEmpty())
        .to.equal(true)
    })

    it('returns true if stack is empty or false if not.', () => {
      const stack = new Stack()
      stack.push('bob')
      stack.push('alice')

      expect(stack.isEmpty())
        .to.equal(false)
    })
  })


  describe('length()', () => {
    it('returns the number of elements in the stack.', () => {
      const stack = new Stack()
      stack.push('bob')
      stack.push('alice')

      expect(stack.length())
        .to.equal(2)
    })
  })
})
