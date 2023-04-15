public class Strrings {
    public static void main(String[] args) {
        // Strings are used for storing text.
        // A String variable contains a collection of characters surrounded by double quotes:

        // Create a variable of type String and assign it a value:
        String greeting = "Hello";

        // print
        System.out.println(greeting);

        // A String in Java is actually an object, which contain methods that can perform certain operations on strings. For example, the length of a string can be found with the length() method:
        // print string length
        System.out.println(greeting.length());

        // other string methods
        System.out.println(greeting.toUpperCase());

        // The indexOf() method returns the index (the position) of the first occurrence of a specified text in a string (including whitespace):
        System.out.println(greeting.indexOf('o'));
    }

    
}
