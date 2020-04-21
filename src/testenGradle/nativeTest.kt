@Test
fun `native test`() {
    val output = Source.withMiniJava("""
        native static void println(int x);
        public static void main() { 
            Main.println(123);
        }
        """).andJavaScript("""
        module.exports = (runtime) => {
            return {
                "Main.println#int": (x) => console.log(x)
            };
        };
        """).compileAndRunInMainClass()
    assertThat(output.lines()).containsExactly("123", "")
}