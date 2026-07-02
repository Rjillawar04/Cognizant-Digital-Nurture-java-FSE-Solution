import java.util.HashMap;

class product{
    int productId;
    String productName;
    int quantity;
    double price;

    product(int productId,String productName,int quantity ,double price){
        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }

    void display(){
        System.out.println(
            productId + " " +
            productName + " " +
            quantity + " " +
            price 
        );
    }

}
public class Inventory_Management_System {
    public static void main(String[]args){
        HashMap<Integer ,product>inventory = new HashMap<>();

        product p1 = new product(101,
            "laptop",20,44500
        );

        product p2 = new product(102,"Mouse",10,350);

        inventory.put(p1.productId,p1);

        inventory.put(p2.productId,p2);

        inventory.get(101).quantity=23;

        inventory.remove(102);

        for(product p : inventory.values()){
            p.display();
        }
    }
}
