
interface PaymentProcessor {
    void processPayment(double amount);
}

class PayPalGateway {
    public void makePayment(double amount) {
        System.out.println("Payment of Rs." + amount + " processed using PayPal.");
    }
}
class StripeGateway {
    public void pay(double amount) {
        System.out.println("Payment of Rs." + amount + " processed using Stripe.");
    }
}
class PayPalAdapter implements PaymentProcessor {

    private PayPalGateway paypal;

    public PayPalAdapter(PayPalGateway paypal) {
        this.paypal = paypal;
    }

    @Override
    public void processPayment(double amount) {
        paypal.makePayment(amount);
    }
}

class StripeAdapter implements PaymentProcessor {

    private StripeGateway stripe;

    public StripeAdapter(StripeGateway stripe) {
        this.stripe = stripe;
    }

    @Override
    public void processPayment(double amount) {
        stripe.pay(amount);
    }
}

public class adapterPattern {

    public static void main(String[] args) {

        PaymentProcessor paypal = new PayPalAdapter(new PayPalGateway());
        paypal.processPayment(2500);

        PaymentProcessor stripe = new StripeAdapter(new StripeGateway());
        stripe.processPayment(5000);
    }
}