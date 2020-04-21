@Test
fun `simple test`() {
    val output = """
        public static void main() { 
            Console.println(123);
        }
        """.compileAndRunInMainClass()
    assertThat(output.lines()).containsExactly("123", "")
}