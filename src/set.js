export default class Set{
  constructor(options){
    this.elements = []
  }

  add(element){
    if(!this.contains(element)){
      this.elements.push(element)
    }
  }

  getIndex( element ){
    return this.elements.indexOf(element)
  }

  isEmpty(){
    if(this.elements.length < 1){
      return true
    } else {return false}
  }

  contains(element){
    if(this.getIndex(element) === -1){
      return false
    } else {return true}
  }

  remove(element){

    const elementIndex = this.getIndex(element)
    const elementExists = (!!elementIndex === -1)
    this.elements.splice(elementIndex, 1)
  }

  forEach(callback){
    return this.elements.forEach(element => callback(element))
  }

  size(){
    console.log(this.elements);
    return this.elements.length
  }

  members(){
    return this.elements
  }

  union(otherSet){
    x = this.elements
    y = otherSet.members
    results = []
    y.forEach(element =>{
      if(this.contains(element)){
        results.push(element)
      }
    })
  }

  intersect(otherSet){
    x = this.elements
    y = otherSet.members
    results = []
    y.forEach(element => {
      if(!this.getIndex(element) === -1){
        results.push(element)
      }
    })
  }

  difference(otherSet){
    x = this.elements
    y = otherSet.members
    results = []
    y.forEach(element => {
      if(this.getIndex(element) === -1){
        results.push(element)
      }
    })
  }

  // isSubset(otherSet){
  //   let thisSet = this.elements
  //   let thatSet = otherSet.members
  //   if(thisSet.length > thatSet.length){
  //     return false
  //   } else {
  //       let result = []
  //       thisSet.filter(element => {
  //         for(let index = thisSet.length - 1; index > 0; index -- ){
  //           if (!thatSet.contains(thisSet[index])){
  //             result.push(thisSet[index])
  //           }
  //       }
  //     }
  //     if (result.length > 0){
  //       return false
  //     }
  //   })
  // }

  // clone(){
  //   return new Set({elements: this.elements})
  // }

}
// set.add('D')             // adds an element to the set.
// set.isEmpty()            // returns true if the set is empty or false if not.
// set.contains('B')        // returns true the set contains the element or false if not.
// set.remove('C')          // removes an element (if it exists) from the set.
// set.forEach(elem => console.log(elem))  // takes a callback function and passes it each element in sequence.
// set.size()               // returns the number of elements in the set.
// set.union(otherSet)      // unions the set with another set and returns the resulting set.
// set.intersect(otherSet)  // intersects the set with another set and returns the resulting set.
// set.difference(otherSet) // returns a set that contains the elements found in the set but not in otherSet.
// set.isSubset(otherSet)   // returns true if the set is a subset of otherSet or false if not.
// set.clone()              // returns a cloned set.
