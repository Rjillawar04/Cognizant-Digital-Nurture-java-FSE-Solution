interface Notifier {
    void send(String message);
}

class EmailNotifier implements Notifier {

    @Override
    public void send(String message) {
        System.out.println("Email Notification: " + message);
    }
}

abstract class NotifierDecorator implements Notifier {

    protected Notifier notifier;

    public NotifierDecorator(Notifier notifier) {
        this.notifier = notifier;
    }

    @Override
    public void send(String message) {
        notifier.send(message);
    }
}

class SMSNotifierDecorator extends NotifierDecorator {

    public SMSNotifierDecorator(Notifier notifier) {
        super(notifier);
    }

    @Override
    public void send(String message) {
        super.send(message);
        System.out.println("SMS Notification: " + message);
    }
}


class SlackNotifierDecorator extends NotifierDecorator {

    public SlackNotifierDecorator(Notifier notifier) {
        super(notifier);
    }

    @Override
    public void send(String message) {
        super.send(message);
        System.out.println("Slack Notification: " + message);
    }
}

public class decoratorPattern {

    public static void main(String[] args) {

        System.out.println("Email Only:");
        Notifier email = new EmailNotifier();
        email.send("Welcome!");

        System.out.println("\nEmail + SMS:");
        Notifier emailSMS = new SMSNotifierDecorator(new EmailNotifier());
        emailSMS.send("Your OTP is 1234");

        System.out.println("\nEmail + SMS + Slack:");
        Notifier all = new SlackNotifierDecorator(
                            new SMSNotifierDecorator(
                                new EmailNotifier()));
        all.send("Meeting at 10 AM");
    }
}