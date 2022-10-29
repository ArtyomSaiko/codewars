function closeCompare(a, b, margin) {
    if (!margin) {
      if (a < b) return -1;
      if (a > b) return 1;
      if (a === b) return 0;
    } else {
      if (margin >= Math.abs(a - b) || a === b) return 0;
      if (a < b) return -1;
      if (a > b) return 1;
    }
  }
  