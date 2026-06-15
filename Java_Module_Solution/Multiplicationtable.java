import java.util.Scanner;
public class Multiplicationtable {
    public static void main(String[]args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the Number :");
        int num = sc.nextInt();

        System.out.println("Multiplication table of "+num);


        for(int i =0;i<=10;i++){
            System.out.println(num + "X" + i +" = " + (num*i));
        }


    }
}
