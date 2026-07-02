class product{
    int productId;
    String productName;
    String Category;

    product(int productId , String productName, String Category){
        this.productId = productId;
        this.productName = productName;
        this.Category = Category;

    }
}
public class Search_Function {
    public static product linearsearch(
        product[] products,
        int targetId){
            for (product product : products){
                if(product.productId == targetId){
                    return product;
                }
            }
            return null;
        }
public static product binarysearch(
    product[]products,
    int targetId){
        int left =0;int right = products.length - 1;

        while(left<=right){
            int mid = (left + right)/2;

        if (products[mid].productId == targetId) {
            return products[mid];
        }

        if(products[mid].productId<targetId){
            left = mid +1 ;}
        else { right = mid -1;
        }
    }
        return null;
    }
public static void main(String[]args){
    product[] products = {
        new product(101,"Laptop","Electronics"),
        new product(102,"Mouse","Accessories"),
        new product(103,"Keyboard","Accessories"),
        new product(104,"Mobile","Electronics"),
        new product(105,"Headphones","Audio")
    };

    product result = binarysearch(products,104);

    if(result != null){
        System.out.println("Product Found :" +result.productName);
    }else{
         System.out.println("Product Not Found");
    }
}

    }

