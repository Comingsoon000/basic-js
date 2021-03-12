const chainMaker = {
  links: [],
  result: '',

  getLength() {
    return this.links.length;
  },

  addLink(value = '') {
    this.links.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if ((typeof position !== 'number') || (position > this.getLength()) || (position < 1)) {
      this.links = [];
      throw new Error('position is not a number, or a fractional number, or corresponding to a nonexistent link');
    }
    this.links = this.links.filter((item, index) => index + 1 !== position);
    return this;
  },

  reverseChain() {
    this.links.reverse();
    return this;
  },

  finishChain() {
    result = this.links.join('~~');
    this.links = [];
    return result;
  },
};

module.exports = chainMaker;
