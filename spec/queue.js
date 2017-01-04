import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
  'use strict'

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  describe('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      const queue = new Queue()

      expect(() => queue.enqueue('foo'))
        .to.alter(() => queue.length(), { from: 0, to: 1 })
    })
})
