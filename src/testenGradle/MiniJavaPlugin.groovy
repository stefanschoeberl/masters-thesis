class MiniJavaPlugin implements Plugin<Project> {
    @Override
    void apply(Project project) {
        project.configurations {
            minijava
        }
    }
}