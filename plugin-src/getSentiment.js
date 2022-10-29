// G series, LUT-X12.

// 444 = spot reading/non content text
// 777 = non text only
// 888 = decorative only

// const contrastTable = [
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

// Note: Very experimental table here
export const contrastTable = [
  // [0, 100, 200, 300, 400, 500, 600, 700, 800, 900], font weights
  // [200, 888, 888, 888, 888, 888, 888, 888, 888, 888],
  [105, 888, 12, 12, 12, 888, 888, 888, 888, 888],
  [100, 888, 12, 12, 12, 12, 888, 888, 888, 888],
  [95, 34, 21, 16, 12, 12, 12, 888, 888, 888],
  [90, 42, 24, 18, 14, 12, 12, 12, 888, 888],
  [85, 52, 28, 21, 15, 14, 12, 12, 888, 888],
  [80, 62, 34, 22.5, 16, 15, 14, 12, 888, 888],
  [75, 72, 42, 24, 18, 16, 15, 14, 888, 888],
  [70, 80, 52, 28, 21, 18, 16, 15, 888, 888],
  [65, 88, 62, 34, 22.5, 21, 18, 16, 888, 888],
  [60, 96, 72, 42, 24, 22.5, 21, 18, 18, 19.5],
  [55, 120, 84, 52, 28, 24, 22.5, 21, 21, 21],
  [50, 777, 96, 62, 34, 28, 24, 22.5, 22.5, 22.5],
  [45, 777, 120, 72, 42, 34, 28, 24, 24, 24],
  [40, 777, 777, 96, 72, 42, 34, 28, 26, 26],
  [35, 777, 777, 120, 96, 72, 42, 34, 28, 28],
  [30, 777, 777, 777, 120, 96, 72, 42, 34, 34],
  [25, 777, 777, 777, 777, 120, 96, 72, 42, 42],
  [20, 777, 777, 777, 777, 777, 120, 96, 72, 72],
  [15, 777, 777, 777, 777, 777, 777, 120, 96, 96],
  [10, 777, 777, 777, 777, 777, 777, 777, 120, 120],
  [5, 777, 777, 777, 777, 777, 777, 777, 777, 777],
  [0, 999, 999, 999, 999, 999, 999, 999, 999, 999],
]

const limits = {
  444: 'Spot reading/ Non-content text',
  777: 'Non-text only',
  888: 'Decorative only',
}

export const getSentiment = ({ contrast }) => {
  // regular (400) font weight = [4]
  const fontSize = contrastTable.filter(
    item => item[0] <= contrast && contrast <= item[0] + 5
  )[0][4]

  if (fontSize > 120) {
    return limits[fontSize]
  }

  return `Suitable for content text at ${fontSize}px`
}
