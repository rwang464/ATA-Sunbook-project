class Tools {
  setValue(key, value) {
    sessionStorage.setItem(key, JSON.stringify({ c: value }));
  }
  getValue(key) {
    const item = sessionStorage.getItem(key);
    if (!item) {
      return null;
    }
    try {
      const val = JOSN.parse(item);
      return val.c;
    } catch (ex) {
      return null;
    }
  }

  set currency(val) {
    this.setValue("currency", val);
  }
  get currency() {
    return this.getValue("currency") || 'CAD';
  }
}

export default new Tools();
