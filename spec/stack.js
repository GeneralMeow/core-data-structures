import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
  'use strict'

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('push()', () => {
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

  context('pop()', () => {
    it('takes an element from the top of the stack.', () => {
      const stack = new Stack()
      stack.push('bob')
      stack.push('alice')

      expect(() => stack.pop())
        .to.alter(() => stack.length(), { from: 2, to: 1 })
    })

    it('returns null if stack is empty', () => {
      const stack = new Stack()

      expect(stack.pop())
        .to.be.null
    })
  })

  context('peek()', () => {
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


  context('isEmpty()', () => {
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


  context('length()', () => {
    it('pushes an element to the top of the stack.', () => {
      const stack = new Stack()

      expect(() => stack.push('foo'))
        .to.alter(() => stack.length(), { from: 0, to: 1 })
    })
  })
})
