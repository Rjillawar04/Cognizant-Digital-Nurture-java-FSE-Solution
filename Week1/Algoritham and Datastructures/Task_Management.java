public class Task_Management {

    static class Task {
        int taskId;
        String taskName;
        String status;
        Task next;

        Task(int taskId, String taskName, String status) {
            this.taskId = taskId;
            this.taskName = taskName;
            this.status = status;
            this.next = null;
        }
    }

    static class TaskManagementSystem {
        Task head = null;

        public void addTask(int taskId, String taskName, String status) {
            Task newTask = new Task(taskId, taskName, status);

            if (head == null) {
                head = newTask;
            } else {
                Task temp = head;
                while (temp.next != null) {
                    temp = temp.next;
                }
                temp.next = newTask;
            }
        }

        public void searchTask(int id) {
            Task temp = head;

            while (temp != null) {
                if (temp.taskId == id) {
                    System.out.println("Task Found");
                    System.out.println(temp.taskId + " " + temp.taskName + " " + temp.status);
                    return;
                }
                temp = temp.next;
            }

            System.out.println("Task Not Found");
        }

        public void traverse() {
            Task temp = head;

            while (temp != null) {
                System.out.println(temp.taskId + " " + temp.taskName + " " + temp.status);
                temp = temp.next;
            }
        }

        public void deleteTask(int id) {
            if (head == null)
                return;

            if (head.taskId == id) {
                head = head.next;
                return;
            }

            Task temp = head;

            while (temp.next != null && temp.next.taskId != id) {
                temp = temp.next;
            }

            if (temp.next != null) {
                temp.next = temp.next.next;
            }
        }
    }

    public static void main(String[] args) {

        TaskManagementSystem tms = new TaskManagementSystem();

        tms.addTask(101, "Design UI", "Pending");
        tms.addTask(102, "Write Code", "In Progress");
        tms.addTask(103, "Testing", "Completed");

        System.out.println("All Tasks:");
        tms.traverse();

        System.out.println();

        tms.searchTask(102);

        System.out.println();

        tms.deleteTask(102);

        System.out.println("After Deletion:");
        tms.traverse();
    }
}