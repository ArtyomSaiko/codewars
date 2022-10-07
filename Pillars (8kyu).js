function pillars(numPill, dist, width) {
  if (numPill < 2 ){
    return 0;
  } else return numPill * ((dist * 100) + width) - (width * 2) - (dist * 100);
}