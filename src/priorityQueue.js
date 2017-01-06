'use strict'

export default class priorityQueue {
  constructor(){
    this.queue = []
    this.size = 0
  }

makeItem(entry, priority){
  return {entry, priority}
}

enqueue(entry, priority){
  let item = this.makeItem(entry, priority)
  this.queue.unshift(item )
  this.queue.sort( ( a, b ) => a.priority - b.priority  )
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
      return this.queue[this.size - 1 ]}
   else {return null}
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
