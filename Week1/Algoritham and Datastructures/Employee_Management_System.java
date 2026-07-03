class Employee{
    int employeeId;
    String Employeename;
    String position;
    double salary;
    
    Employee(int employeeId, String Employeename,String position,
        double salary ){
            this.employeeId = employeeId;
            this.Employeename = Employeename;
            this.position = position;
            this.salary = salary;
        }

        void display(){
            System.out.println("Employee Id :"+employeeId);
            System.out.println("Employee Name : "+ Employeename);
            System.out.println("Employee Psition : "+ position);
            System.out.println("Salary : "+salary);

        }
}
public class Employee_Management_System {
    static Employee[] employees = new Employee[10];
    static int count = 0;
    public static void addEmployee(Employee employee){
        if(count<employees.length){
            employees[count]=employee;
            count++;
            System.out.println("Employee Addes Successfully .");
        }else{
            System.out.println("Employee Array is Full");
        }
    
    }

    public static Employee searchEmployee(int id){
        for(int i=0;i<count;i++){
            if(employees[i].employeeId== id){
                return employees[i];
            }
        }
        return null ;
    }

    public static void traverseEmployees(){
        if(count==0){
            System.out.println("No Employees Found.");
            return;
        }

        for(int i =0;i<count;i++){
            employees[i].display();
        }
    }

    public static void deleteEmployee(int id){
        int index =-1;

        for(int i=0;i<count;i++){
            if(employees[i].employeeId==id){
                index = i;
                break;
            }
        }
        if (index == -1) {
            System.out.println("Employee not found.");
            return;
        }

        for (int i = index; i < count - 1; i++) {
            employees[i] = employees[i + 1];
        }

        employees[count - 1] = null;
        count--;

        System.out.println("Employee deleted successfully.");
    }
    
   public static void main(String[]args) {
         addEmployee(new Employee(101, "Rahul", "Manager", 75000));
        addEmployee(new Employee(102, "Priya", "Developer", 60000));
        addEmployee(new Employee(103, "Amit", "Tester", 50000));

        System.out.println("\nEmployee Records:");
        traverseEmployees();

        System.out.println("\nSearching Employee with ID 102:");
        Employee emp = searchEmployee(102);

        if (emp != null) {
            emp.display();
        } else {
            System.out.println("Employee not found.");
        }

        System.out.println("\nDeleting Employee with ID 101:");
        deleteEmployee(101);

        System.out.println("\nUpdated Employee Records:");
        traverseEmployees();
    }
}  
    

