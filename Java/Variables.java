public class Variables {
    public static void main(String[] args) {
        //Variables are containers for storing data
        //Types of variables in Java
        /*
         * String; stores text surrounded in double quotes
         * int; stores integers without decimals
         * float; stores floating point numbers with decimal points
         * char; stores single characters eg a or b. char values are surrounded by single quotes eg 'a' or 'b'
         * boolean; stores values with two states; true or false 
         */

         //To create a variable you must specify the type and assign it a value
         //type variablename = value

         String name = "name";
         System.out.println(name);
         int num = 15;
         System.out.println(num);
         double floatValue = 3.4; //this didn't work when i assigned it to float?
         System.out.println(floatValue);
         char newchar = 'A';
         System.out.println(newchar);
         boolean isNew = true;
         System.out.println(isNew);
    }
}
