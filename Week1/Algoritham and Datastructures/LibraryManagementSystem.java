class book{
    int bookid;
    String title;
    String author;

    book(int bookid,String title,String author){
        this.bookid = bookid;
        this.title = title;
        this.author = author;
    }
}
public class LibraryManagementSystem {

    public static book linraersearch(book[]books,String targettitle){
        for(book book : books){
            if(book.title.equalsIgnoreCase(targettitle)){
                return book;
            }
        }
        return null;
    }

    public static book binarysearch(book[]books,String targettitle){
        int low =0;
        int high=books.length-1;

        while(low<=high){
            int mid = (low+high)/2;
            int compare = books[mid].title.compareToIgnoreCase(targettitle);
                if(compare==0){
                    return books[mid];
                }else if(compare<0){
                    low = mid +1;
                }
                else{
                    high = mid -1;
                }
                }
                return null;
            }
    
    public static void main(String[]args){
        book[] books = {
                new book(101, "Algorithms", "Thomas Cormen"),
                new book(102, "Artificial Intelligence", "Stuart Russell"),
                new book(103, "Computer Networks", "Andrew Tanenbaum"),
                new book(104, "Data Structures", "Seymour Lipschutz"),
                new book(105, "Operating System", "Galvin")    
        };
        String searchTitle = "Data Structures";

        book result1 = linraersearch(books,searchTitle);

        if (result1 != null) {
            System.out.println("Linear Search:");
            System.out.println("Book Found");
            System.out.println("ID: " + result1.bookid);
            System.out.println("Title: " + result1.title);
            System.out.println("Author: " + result1.author);
        } else {
            System.out.println("Book Not Found");
        }

        book result2 = binarysearch(books, searchTitle);

        if (result2 != null) {
            System.out.println("\nBinary Search:");
            System.out.println("Book Found");
            System.out.println("ID: " + result2.bookid);
            System.out.println("Title: " + result2.title);
            System.out.println("Author: " + result2.author);
        } else {
            System.out.println("Book Not Found");
        }
    }
    
}
