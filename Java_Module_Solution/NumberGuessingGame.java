import java.util.Scanner;
import java.util.Random;
public class NumberGuessingGame {
    public static void main(String[]args){

        Scanner sc = new Scanner(System.in);
        Random rand = new Random();

        int number = rand.nextInt(100)+1;
        int guess;

        System.out.println("Guess the Number between 1 And 100");

        do{
            System.out.print("ENter Your Guess :");
            guess = sc.nextInt();

            if(guess>number){
                System.out.println("Too High !");
            }
            else if (guess<number){
                System.out.println("Too low !");
            }
            else{
                System.out.println("Congratulations ! You Guessed the correct number .");
            }
        }while(guess != number);
    }
}
