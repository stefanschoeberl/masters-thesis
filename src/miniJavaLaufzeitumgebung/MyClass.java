class MyClass {

    int x;
    { x = 10; } // Instance Initializer

    static int y;
    static { y = 100; } // Static Initializer

    public MyClass(int x) { // Constructor
        this.x = x;
    }
}