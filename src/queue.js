'use strict'

export default class Queue {
  constructor(){
    this.queue = []
    this.size = 0
  }

enqueue(item){
  this.queue.unshift(item)
  this.size++
}

dequeue(){
  if(this.size > 0){
    const element = this.queue.pop()
    this.size--
    return element
  } else {return null}
}

front(){
  if(this.size > 0){
    return this.queue[this.size - 1 ]
  } else {return null}
}

back(){
  if(this.size > 0){
    return this.queue[0]
  } else {return null}
}

isEmpty(){
  return (this.size === 0)
}

length(){
  return this.size
}
}
