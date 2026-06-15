public class Typecasting {
    public static void main(String[]args){

        double num1 = 25.75;
        int intvalue = (int) num1;

        int num2 = 50;
        double doublevalue = (double) num2;

        System.out.println("Original Double Value : "+num1);
        System.out.println("Updated Value : "+intvalue);

        System.out.println("Original int value :"+num2);
        System.out.println("Updated Value : "+doublevalue);
    }
}
