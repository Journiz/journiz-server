package maps

func PointInPolygon(point []float64, polygon [][]float64) bool {
	numVertices := len(polygon)
	intersections := 0

	for i := 0; i < numVertices; i++ {
		v1, v2 := polygon[i], polygon[(i+1)%numVertices]

		if (point[1] > v1[1] && point[1] <= v2[1]) || (point[1] > v2[1] && point[1] <= v1[1]) {
			if point[0] < (v2[0]-v1[0])*(point[1]-v1[1])/(v2[1]-v1[1])+v1[0] {
				intersections++
			}
		}
	}

	return intersections%2 != 0
}
