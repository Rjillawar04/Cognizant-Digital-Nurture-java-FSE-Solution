import java.util.Scanner;
public class Simplecalculator {
    public static void main(String[]args){
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the First Number : ");
        double  num1 = sc.nextDouble();

        System.out.print("Enter the Second Number : ");
        double  num2 = sc.nextDouble();

        System.out.print("Enter operation (+, -, *, /): ");
        char operation = sc.next().charAt(0);

        if(operation == '+'){
            System.out.println("Result is :" + (num1 + num2));
        }
        else if(operation == '-'){
            System.out.println("Result is "+ (num1 - num2));
        }
        else if(operation == '*'){
            System.out.println("Result is :"+(num1 * num2));
        }
        else if (operation == '/'){
            System.out.println("Result is :"+(num1/num2));
        }
        else{
            System.out.println("Invalid input ");
        }
    }
    
}
