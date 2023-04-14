public class MyProgram {
    public static void main(String[] args ) {

        // running eg java john 25 will pass john and 25 as arguments to the main method
        String name = args[0];
        int age = Integer.parseInt(args[1]);

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);

        
    }
}
