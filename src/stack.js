'use strict'

export default class Stack {
  constructor(){
    this.size = 0
    this.value = []
  }

  push(element){
    this.value.unshift(element)
    this.size++
  }

  pop(){
    if(this.size > 0){
      const poppedItem = this.value.shift()
      this.size--
      return poppedItem
    }
    else {return null}
  }

  peek(){
    if(this.size > 0){
      return this.value[0]
    }
    else {return null}
  }

  isEmpty(){
    return (this.size === 0)
  }

  length(){
    return this.size
  }
}
