public class MyProgram {
    public static void main(String[] args ) {

        // the string args parameter is an array of strings that represents the command line arguments passed to the program
        // running eg java john 25 will pass john and 25 as arguments to the main method
        String name = args[0];
        int age = Integer.parseInt(args[1]);

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);

        
    }
}
