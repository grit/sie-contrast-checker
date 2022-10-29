// Original font lookup table

//  const apcaFluentGrid = [
//   ['min', 'min', 'min', 'min', 'min', 'min', 'min', 'min', 'min'],
//   ['min', 'min', 'min', 'min', 'min', 'min', 'min', 'min', 'min'],
//   ['min', 'min', 'min', 95, 90, 85, 80, 'min', 'min'],
//   ['min', 'min', 'min', 90, 85, 80, 75, 'min', 'min'],
//   ['min', 'min', 95, 80, 75, 65, 60, 55, 'min'],
//   ['min', 'min', 90, 75, 65, 60, 55, 50, 45],
//   ['min', 95, 85, 65, 60, 55, 50, 45, 40],
//   ['min', 90, 75, 60, 55, 50, 45, 40, 35],
//   ['min', 85, 70, 55, 50, 45, 40, 35, 30],
//   [90, 75, 60, 50, 45, 40, 35, 30, 'max'],
//   [85, 70, 55, 45, 40, 35, 30, 'max', 'max'],
//   [75, 60, 50, 40, 35, 30, 'max', 'max', 'max'],
//   [70, 55, 45, 35, 30, 'max', 'max', 'max', 'max'],
//   [60, 45, 40, 30, 'max', 'max', 'max', 'max', 'max'],
// ]

// updated font table
// G series, LUT-X12.

// const table = [
//   ['fs-px', 100, 200, 300, 400, 500, 600, 700, 800, 900],
//   [10, '⊘', '⊘', '⊘', '©§™', '©§™', '©§™', '©§™', '⊘', '⊘'],
//   [11, '⊘', '⊘', '⊘', '©§™', '©§™', '©§™', '©§™', '⊘', '⊘'],
//   [12, '⊘', '⊘', '©§™', '×90', '×85', '×80', '×75', '⊘', '⊘'],
//   [14, '⊘', '⊘', '©§™', 90, 85, 80, 75, '⊘', '⊘'],
//   [16, '⊘', '©§™', 95, 80, 75, 70, 65, '⊘', '⊘'],
//   [18, '⊘', '©§™', 90, 75, 70, 65, 60, '×60', '⊘'],
//   [21, '⊘', 95, 85, 70, 65, 60, 55, '×55', '×55'],
//   [24, '⊘', 90, 75, 60, 55, 50, 45, '×45', '×45'],
//   [28, '⊘', 85, 70, 55, 50, 45, 40, 35, 30],
//   [34, 95, 80, 65, 50, 45, 40, 35, 30, 30],
//   [42, 90, 75, 60, 45, 40, 35, 30, 30, 30],
//   [72, 75, 60, 45, 40, 35, 30, 30, 30, 30],
//   [96, 60, 50, 40, 35, 30, 30, 30, 30, 30],
// ]

// export const fontWeights = {
//   1: 100,
//   2: 200,
//   3: 300,
//   4: 400,
//   5: 500,
//   6: 600,
//   7: 700,
//   8: 800,
//   9: 900,
// }

// // 444 = spot reading/non content text
// // 777 = non text only
// // 888 = decorative only

// export const contrastTable = [
//   // [0, 100, 200, 300, 400, 500, 600, 700, 800, 900], font weights
//   // [200, 888, 888, 888, 888, 888, 888, 888, 888, 888],
//   [105, 888, 444, 444, 444, 888, 888, 888, 888, 888],
//   [100, 888, 444, 444, 444, 444, 888, 888, 888, 888],
//   [95, 34, 21, 16, 12, 444, 444, 888, 888, 888],
//   [90, 42, 24, 18, 14, 12, 444, 444, 888, 888],
//   [85, 52, 28, 21, 15, 14, 12, 444, 888, 888],
//   [80, 62, 34, 22.5, 16, 15, 14, 12, 888, 888],
//   [75, 72, 42, 24, 18, 16, 15, 14, 888, 888],
//   [70, 80, 52, 28, 21, 18, 16, 15, 888, 888],
//   [65, 88, 62, 34, 22.5, 21, 18, 16, 888, 888],
//   [60, 96, 72, 42, 24, 22.5, 21, 18, 18, 19.5],
//   [55, 120, 84, 52, 28, 24, 22.5, 21, 21, 21],
//   [50, 777, 96, 62, 34, 28, 24, 22.5, 22.5, 22.5],
//   [45, 777, 120, 72, 42, 34, 28, 24, 24, 24],
//   [40, 777, 777, 96, 72, 42, 34, 28, 26, 26],
//   [35, 777, 777, 120, 96, 72, 42, 34, 28, 28],
//   [30, 777, 777, 777, 120, 96, 72, 42, 34, 34],
//   [25, 777, 777, 777, 777, 120, 96, 72, 42, 42],
//   [20, 777, 777, 777, 777, 777, 120, 96, 72, 72],
//   [15, 777, 777, 777, 777, 777, 777, 120, 96, 96],
//   [10, 777, 777, 777, 777, 777, 777, 777, 120, 120],
//   [5, 777, 777, 777, 777, 777, 777, 777, 777, 777],
//   [0, 999, 999, 999, 999, 999, 999, 999, 999, 999],
// ]

// this table is the same as the above with the 444 limits removed
// export const contrastTable = [
//   // [0, 100, 200, 300, 400, 500, 600, 700, 800, 900], font weights
//   // [200, 888, 888, 888, 888, 888, 888, 888, 888, 888],
//   [105, 888, 12, 12, 12, 888, 888, 888, 888, 888],
//   [100, 888, 12, 12, 12, 12, 888, 888, 888, 888],
//   [95, 34, 21, 16, 12, 12, 12, 888, 888, 888],
//   [90, 42, 24, 18, 14, 12, 12, 12, 888, 888],
//   [85, 52, 28, 21, 15, 14, 12, 12, 888, 888],
//   [80, 62, 34, 22.5, 16, 15, 14, 12, 888, 888],
//   [75, 72, 42, 24, 18, 16, 15, 14, 888, 888],
//   [70, 80, 52, 28, 21, 18, 16, 15, 888, 888],
//   [65, 88, 62, 34, 22.5, 21, 18, 16, 888, 888],
//   [60, 96, 72, 42, 24, 22.5, 21, 18, 18, 19.5],
//   [55, 120, 84, 52, 28, 24, 22.5, 21, 21, 21],
//   [50, 777, 96, 62, 34, 28, 24, 22.5, 22.5, 22.5],
//   [45, 777, 120, 72, 42, 34, 28, 24, 24, 24],
//   [40, 777, 777, 96, 72, 42, 34, 28, 26, 26],
//   [35, 777, 777, 120, 96, 72, 42, 34, 28, 28],
//   [30, 777, 777, 777, 120, 96, 72, 42, 34, 34],
//   [25, 777, 777, 777, 777, 120, 96, 72, 42, 42],
//   [20, 777, 777, 777, 777, 777, 120, 96, 72, 72],
//   [15, 777, 777, 777, 777, 777, 777, 120, 96, 96],
//   [10, 777, 777, 777, 777, 777, 777, 777, 120, 120],
//   [5, 777, 777, 777, 777, 777, 777, 777, 777, 777],
//   [0, 999, 999, 999, 999, 999, 999, 999, 999, 999],
// ]

// export const limits = {
//   444: 'Spot reading/ Non-content text',
//   777: 'Non-text only',
//   888: 'Decorative only',
// }

// export const altContrastLookup = ({
//   contrast,
//   weight,
//   fontRangeUpperLimit,
// }) => {
//   // regular (400) font weight = [4]
//   const fontSizeRow = contrastTable.filter(
//     item => item[0] <= contrast && contrast <= item[0] + 5
//   )[0]
//   const fontSize = fontSizeRow[weight / 100]
//   if (fontSize >= fontRangeUpperLimit) {
//     return fontRangeUpperLimit
//   }
//   // console.log(weight, fontSize)
//   return fontSize
// }

export const fontStyleLookupTable = {
  200: ['⊘', '⊘', '⊘', '⊘', 95, 90, 85, 80, 75, 60, 50],
  300: ['⊘', '⊘', 95, 90, 85, 75, 70, 65, 60, 45, 40],
  400: [90, 90, 80, 75, 70, 60, 55, 50, 45, 40, 35],
  500: [85, 85, 75, 70, 65, 55, 50, 45, 40, 35, 30],
  600: [80, 80, 70, 65, 60, 50, 45, 40, 35, 30, 30],
  700: [75, 75, 65, 60, 55, 45, 40, 35, 30, 30, 30],
}

export const fontSizeLookupTable = {
  0: 12,
  1: 14,
  2: 16,
  3: 18,
  4: 21,
  5: 24,
  6: 28,
  7: 34,
  8: 42,
  9: 72,
  10: 96,
}