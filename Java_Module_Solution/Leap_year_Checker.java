import java.util.Scanner;
public class Leap_year_Checker {
    public static void main(String[]args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the Year :");
        int year = sc.nextInt();

        if(year % 4 ==0 ){
            if(year % 100 == 0){
                if(year % 400 == 0){
                    System.out.println("This is a leap Year .");
                }else{
                    System.out.println("This is not a leap Year.");
                }}else{
                    System.out.println("This is a leap Year .");
                }}
                else{
                    System.out.println("This is Not Leap Year.");
                }
            }
        }

