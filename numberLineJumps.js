/**
 *   pf1 - pi1 = (vf1 - vi1) * t |
 *   pf2 - pi2 = (vf2 - vi2) * t |
 * -------------------------------
 *   pf1 = pi1 + vf1 * t
 *   pf2 = pi2 + vf2 * t
 *
 *   pi1 + vf1*t = pi2 + vf2*t
 *
 *   pi1 - pi2 = (vf2 - vf1) * t
 *
 *    t = (pi1 - pi2) / (vf2 - vf1)
 *
 *   __|___|___|_________________________________
 *     1   2   3
 */

const numberLineJumps = (x1, v1, x2, v2) => {
  return v1 > v2 ? ((x1 - x2) % (v2 - v1) == 0 ? "YES" : "NO") : "NO";
};

console.log(numberLineJumps(2, 1, 1, 2));
console.log(numberLineJumps(0, 3, 4, 2));
console.log(numberLineJumps(0, 2, 5, 3));
