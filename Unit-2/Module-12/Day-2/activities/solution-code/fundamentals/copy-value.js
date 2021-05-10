const tv1 = {
  brand: 'Sony',
  channel: 46
}

/**
 * We did not SPREAD.
 * It means that both `person2` and `person1` reference the same value in memory.
 *
 * This is kind of like 2 remotes controlling the save TV.
 * Changing
 */
const tv2 = tv1

tv2.channel = 23

// Both 'tvs' had their channels changed!
// We usually don't want this remember to use `...`.
console.log(tv1, tv2);