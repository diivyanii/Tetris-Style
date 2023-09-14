const SHAPES = [
  {
    shape: [
      { x: 1, y: 1 },
      { x: 0, y: 1 }
    ]
  }
];

export function randomShape() {
  return SHAPES[Math.floor(Math.random() * SHAPES.length)];
}
