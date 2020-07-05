class MiniJavaCompilationTask extends JavaExec {

    private List<Object> inputParameters = []
    private Object outputDir

    void inputDirs(Object... inputDirs) {
        Arrays.stream(inputDirs).forEach { inputs.dir(it) }
        this.inputParameters.addAll(inputDirs)
        updateArgs()
    }

    void outputDir(Object outputDir) {
        outputs.dir(outputDir)
        this.outputDir = outputDir
        updateArgs()
    }

    MiniJavaCompilationTask() {
        group = 'MiniJava'
        description = 'Compiles MiniJava source files ...'
        main = 'dev.ssch.minijava.compiler.MainKt'
        classpath project.configurations.minijava
        project.assemble.dependsOn this
    }

    private void updateArgs() {
        def arguments = ['-o']
        arguments.add(outputDir.toString())
        arguments.addAll(inputParameters.collect { it.toString() })
        args = arguments
    }
}