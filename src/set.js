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
    const newSet = this.elements.map(element => callback(element))
    this.elements = newSet
    return this
  }

  size(){
    return this.elements.length
  }

  members(){
    return this.elements
  }

  union(otherSet){
    let thisSet = this.elements
    let thatSet = otherSet.members()
    let results = []
    thatSet.forEach(element =>{
      if(thisSet.indexOf(element) === -1){
          results.push(element)
        }
    })
      thisSet.forEach(element => {
        results.push(element)})
    return results
  }

  intersect(otherSet){
    let thisSet = this.elements
    let results = []
    thisSet.forEach(element => {
      console.log(element);
      if(this.contains(element) && otherSet.contains(element)){
        results.push(element)
      }
      console.log(results);
    })
    return results
  }

  difference(otherSet){
    let x = this.elements
    let y = otherSet.members()
    let results = []
    y.forEach(element => {
      if(this.getIndex(element) === -1){
        results.push(element)
      }
    })
    let result = new Set()
    results.forEach(element => {
      result.add(element)
    })
    return result
  }


  isSubset(otherSet){
    let thisSet = this.elements
    let thatSet = otherSet
    let result = []

    thisSet.filter( element => {
      if(thatSet.contains(element)){
        result.push(element)
      }
    })

    if (result.length === thisSet.length){
      return true
    } else {return false}
  }

  clone(){
    let clonedSet = new Set()
    this.elements.forEach(element => {
      clonedSet.add(element)
    })
    return clonedSet
  }
}

//**SPECS**// 

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
