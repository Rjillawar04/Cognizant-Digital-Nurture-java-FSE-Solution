class order{
    int orderid;
    String CustomerName;
    double totalprice;

    order(int orderid , String CustomerName ,double totalprice){
        this.orderid = orderid;
        this.CustomerName = CustomerName;
        this.totalprice = totalprice;
    }

    void display(){
        System.out.println(orderid + " " + CustomerName+ " " + totalprice + " ");

    }

}
public class CustomerSorting {

    public static void bubblesort(order[] orders){
        int n = orders.length;

        for(int i= 0;i<n-1;i++){
            for(int j=0;j<n-i-1;j++){
                if(orders[j].totalprice > orders[j+1].totalprice){
                    order temp = orders[j];
                    orders[j]  = orders[j+1];
                    orders[j+1]=temp;
                }
            }
        }
    }

    public static void quicksort(order[] orders,int low ,int high){
        if(low<high){
            int pi= partition(orders,low,high);

            quicksort(orders,low,pi-1);
            quicksort(orders,pi+1,high);
        }
    }

    public static int partition(order []orders,int low ,int high){
        double pivot = orders[high].totalprice;
        int i= low-1;

        for(int j=low;j<high;j++){
            if(orders[j].totalprice<pivot){
                i++;

                order temp = orders[i];
                orders[i]=orders[j];
                orders[j]=temp;
            }
        }

        order temp = orders[i+1];
        orders[i+1]=orders[high];
        orders[high]=temp;

        return i+1;
    }
    public static void main(String[]args){
        order[] orders ={
            new order(101, "Rushikesh", 2500),
            new order(102, "Amit", 1500),
            new order(103, "Rahul", 5000),
            new order(104, "Priya", 3000)
        };
        quicksort(orders,0,orders.length-1);
        for(order order : orders){
            order.display();
        }
    }
}
