fun findPoint(): Point? { ... }

fun main() {
    val point = findPoint()
    println(point.x)         // compile error
    if (point != null) {
        println(point.x)     // OK
    }
}