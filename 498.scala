object Solution {
  def findDiagonalOrder(matrix: Array[Array[Int]]): Array[Int] = {
    if (matrix.length == 0) {
      return Array.empty[Int]
    }
    return recFinddiagonalOrder(matrix, 1, 0, 0, Array.empty[Int])
  }

  def recFinddiagonalOrder(
      matrix: Array[Array[Int]],
      direction: Int,
      x: Int,
      y: Int,
      acc: Array[Int]
  ): Array[Int] = {
    var test = acc
    if (0 <= x && x < matrix(0).length && 0 <= y && y < matrix.length) {
      test = acc :+ (matrix(y)(x))
    }

    if (x == matrix(0).length - 1 && y == matrix.length - 1) {
      return acc;
    }

    if (direction == 1) {
      if (x > matrix(0).length && y < 0) {
        return recFinddiagonalOrder(matrix, 0, x - 1, y + 2, test)
      } else {
        if (y < 0) {
          return recFinddiagonalOrder(matrix, 0, x, y + 1, test)
        }
        if (x > matrix(0).length) {
          return recFinddiagonalOrder(matrix, 0, x - 1, y + 2, test)
        }
        return recFinddiagonalOrder(matrix, 1, x + 1, y - 1, test)
      }
    } else {
      if (x < 0 && y > matrix.length) {
        return recFinddiagonalOrder(matrix, 1, x + 2, y - 1, test)
      } else {
        if (x < 0) {
          return recFinddiagonalOrder(matrix, 1, x + 1, y, test)
        }
        if (y > matrix.length) {
          return recFinddiagonalOrder(matrix, 1, x + 2, y - 1, test)
        }
        return recFinddiagonalOrder(matrix, 0, x - 1, y + 1, test)
      }
    }
  }
}
