if (!String.prototype.endsWith) {
  monkeypatch(String.prototype, "endsWith", function(searchString, position) {
      var subjectString = this.toString();
      if (position === undefined || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
  } );
}

if (!String.prototype.startsWith) {
  monkeypatch(String.prototype, "startsWith", function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  } );
}
