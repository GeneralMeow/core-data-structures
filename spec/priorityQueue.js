import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import priorityQueue from '../src/priorityQueue'

chai.use(chaiChange)

describe('priorityQueue', () => {
  'use strict'

  it('exists', () => {
    expect(priorityQueue).to.be.a('function')
  })

  describe('enqueue()', () => {
    it('pushes an element to the queue.', () => {
      const queue = new priorityQueue()

      expect(() => queue.enqueue('foo', '1'))
        .to.alter(() => queue.length(), { from: 0, to: 1 })
    })

    it('pushes an element to the back of the queue.', () => {
      const queue = new priorityQueue()
      queue.enqueue('foo', 1)

      expect(queue.back())
        .to.eql({entry: 'foo', priority: 1})
    })
  })

  describe('dequeue()', ()=> {
    it('returns and removes the front element in the queue.', () => {
      const queue = new priorityQueue()
      queue.enqueue('foo')

      expect(() => queue.dequeue())
        .to.alter(() => queue.length(), {from: 1, to: 0 })
    })

    it('returns null if the queue is empty.', () => {
      const queue = new priorityQueue()

      expect(queue.dequeue())
        .to.be.null
    })
    it('removes returned element from queue', () => {
      const queue = new priorityQueue()

      expect(queue.dequeue())
        .to.be.null
    })
  })

  describe('front()', ()=> {
    it('returns the front element in the queue.', () => {
      const queue = new priorityQueue()
      queue.enqueue('foo')
      queue.enqueue('bar')

      expect(queue.front())
        .to.equal('foo')
    })

    it('returns null if the queue is empty.', () => {
      const queue = new priorityQueue()

      expect(queue.front())
        .to.be.null
    })
  })

  describe('back()', ()=> {
    it('returns the back element in the queue.', () => {
      const queue = new priorityQueue()
      queue.enqueue('foo')
      queue.enqueue('bar')

      expect(queue.back())
        .to.equal('bar')
    })

    it('returns null if the queue is empty.', () => {
      const queue = new priorityQueue()

      expect(queue.back())
        .to.be.null
    })
  })

  describe('isEmpty()', ()=> {
    it('returns true if the queue is empty or false if not', () => {
      const queue = new priorityQueue()
      queue.enqueue('foo')
      queue.enqueue('bar')

      expect(queue.isEmpty())
        .to.be.false
    })
    it('returns true if the queue is empty or false if not', () => {
      const queue = new priorityQueue()

      expect(queue.isEmpty())
        .to.be.true
    })

  })

  describe('length()', ()=> {
    it('returns the number of elements in the queue', () => {
      const queue = new priorityQueue()
      queue.enqueue('foo')
      queue.enqueue('bar')

      expect(queue.length())
        .to.equal(2)
    })
    it('returns the number of elements in the queue', () => {
      const queue = new priorityQueue()

      expect(queue.length())
        .to.equal(0)
    })
  })
})
