//Every line of code in Java must be in a class
// Java is case sensitive "MyClass" and "myclass" have different meanings
//The name of the java file must match the class name

public class Hello {

//Every project must contain the main() method
//Any code inside main will be executed
    public static void main(String[] args) {

        //System is a built in java class that contains useful members, such as out which is short for output
        //The println() method, short for "print line", is used to print a value to the screen or a file.
        //Each code statement should end in a semicolom (;)
        System.out.println("Hello World!");

        //There is also a print() method but it does not insert a new line
        //Println() makes it easier to read the output of the code
        System.out.print("Learning Java");
        System.out.println("Starting today");

        //When printing numbers dont use double quotes
        System.out.println(20);

        //You can also perfom mathematical calculations
        System.out.println(5+4);
    }
}