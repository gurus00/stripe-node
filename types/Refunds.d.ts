// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Refund objects allow you to refund a previously created charge that isn't
     * refunded yet. Funds are refunded to the credit or debit card that's
     * initially charged.
     *
     * Related guide: [Refunds](https://stripe.com/docs/refunds)
     */
    interface Refund {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'refund';

      /**
       * Amount, in cents (or local equivalent).
       */
      amount: number;

      /**
       * Balance transaction that describes the impact on your account balance.
       */
      balance_transaction: string | Stripe.BalanceTransaction | null;

      /**
       * ID of the charge that's refunded.
       */
      charge: string | Stripe.Charge | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * An arbitrary string attached to the object. You can use this for displaying to users (available on non-card refunds only).
       */
      description?: string;

      destination_details?: Refund.DestinationDetails;

      /**
       * After the refund fails, this balance transaction describes the adjustment made on your account balance that reverses the initial balance transaction.
       */
      failure_balance_transaction?: string | Stripe.BalanceTransaction;

      /**
       * Provides the reason for the refund failure. Possible values are: `lost_or_stolen_card`, `expired_or_canceled_card`, `charge_for_pending_refund_disputed`, `insufficient_funds`, `declined`, `merchant_request`, or `unknown`.
       */
      failure_reason?: string;

      /**
       * For payment methods without native refund support (for example, Konbini, PromptPay), provide an email address for the customer to receive refund instructions.
       */
      instructions_email?: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      next_action?: Refund.NextAction;

      /**
       * ID of the PaymentIntent that's refunded.
       */
      payment_intent: string | Stripe.PaymentIntent | null;

      /**
       * Reason for the refund, which is either user-provided (`duplicate`, `fraudulent`, or `requested_by_customer`) or generated by Stripe internally (`expired_uncaptured_charge`).
       */
      reason: Refund.Reason | null;

      /**
       * This is the transaction number that appears on email receipts sent for this refund.
       */
      receipt_number: string | null;

      /**
       * The transfer reversal that's associated with the refund. Only present if the charge came from another Stripe account.
       */
      source_transfer_reversal: string | Stripe.TransferReversal | null;

      /**
       * Status of the refund. This can be `pending`, `requires_action`, `succeeded`, `failed`, or `canceled`. Learn more about [failed refunds](https://stripe.com/docs/refunds#failed-refunds).
       */
      status: string | null;

      /**
       * This refers to the transfer reversal object if the accompanying transfer reverses. This is only applicable if the charge was created using the destination parameter.
       */
      transfer_reversal: string | Stripe.TransferReversal | null;
    }

    namespace Refund {
      interface DestinationDetails {
        affirm?: DestinationDetails.Affirm;

        afterpay_clearpay?: DestinationDetails.AfterpayClearpay;

        alipay?: DestinationDetails.Alipay;

        au_bank_transfer?: DestinationDetails.AuBankTransfer;

        blik?: DestinationDetails.Blik;

        br_bank_transfer?: DestinationDetails.BrBankTransfer;

        card?: DestinationDetails.Card;

        cashapp?: DestinationDetails.Cashapp;

        customer_cash_balance?: DestinationDetails.CustomerCashBalance;

        eps?: DestinationDetails.Eps;

        eu_bank_transfer?: DestinationDetails.EuBankTransfer;

        gb_bank_transfer?: DestinationDetails.GbBankTransfer;

        giropay?: DestinationDetails.Giropay;

        grabpay?: DestinationDetails.Grabpay;

        jp_bank_transfer?: DestinationDetails.JpBankTransfer;

        klarna?: DestinationDetails.Klarna;

        mx_bank_transfer?: DestinationDetails.MxBankTransfer;

        p24?: DestinationDetails.P24;

        paynow?: DestinationDetails.Paynow;

        paypal?: DestinationDetails.Paypal;

        pix?: DestinationDetails.Pix;

        revolut?: DestinationDetails.Revolut;

        sofort?: DestinationDetails.Sofort;

        swish?: DestinationDetails.Swish;

        th_bank_transfer?: DestinationDetails.ThBankTransfer;

        /**
         * The type of transaction-specific details of the payment method used in the refund (e.g., `card`). An additional hash is included on `destination_details` with a name matching this value. It contains information specific to the refund transaction.
         */
        type: string;

        us_bank_transfer?: DestinationDetails.UsBankTransfer;

        wechat_pay?: DestinationDetails.WechatPay;

        zip?: DestinationDetails.Zip;
      }

      namespace DestinationDetails {
        interface Affirm {}

        interface AfterpayClearpay {}

        interface Alipay {}

        interface AuBankTransfer {}

        interface Blik {
          /**
           * The reference assigned to the refund.
           */
          reference: string | null;

          /**
           * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
           */
          reference_status: string | null;
        }

        interface BrBankTransfer {
          /**
           * The reference assigned to the refund.
           */
          reference: string | null;

          /**
           * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
           */
          reference_status: string | null;
        }

        interface Card {
          /**
           * Value of the reference number assigned to the refund.
           */
          reference?: string;

          /**
           * Status of the reference number on the refund. This can be `pending`, `available` or `unavailable`.
           */
          reference_status?: string;

          /**
           * Type of the reference number assigned to the refund.
           */
          reference_type?: string;

          /**
           * The type of refund. This can be `refund`, `reversal`, or `pending`.
           */
          type: Card.Type;
        }

        namespace Card {
          type Type = 'pending' | 'refund' | 'reversal';
        }

        interface Cashapp {}

        interface CustomerCashBalance {}

        interface Eps {}

        interface EuBankTransfer {
          /**
           * The reference assigned to the refund.
           */
          reference: string | null;

          /**
           * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
           */
          reference_status: string | null;
        }

        interface GbBankTransfer {
          /**
           * The reference assigned to the refund.
           */
          reference: string | null;

          /**
           * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
           */
          reference_status: string | null;
        }

        interface Giropay {}

        interface Grabpay {}

        interface JpBankTransfer {
          /**
           * The reference assigned to the refund.
           */
          reference: string | null;

          /**
           * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
           */
          reference_status: string | null;
        }

        interface Klarna {}

        interface MxBankTransfer {
          /**
           * The reference assigned to the refund.
           */
          reference: string | null;

          /**
           * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
           */
          reference_status: string | null;
        }

        interface P24 {
          /**
           * The reference assigned to the refund.
           */
          reference: string | null;

          /**
           * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
           */
          reference_status: string | null;
        }

        interface Paynow {}

        interface Paypal {}

        interface Pix {}

        interface Revolut {}

        interface Sofort {}

        interface Swish {
          /**
           * The reference assigned to the refund.
           */
          reference: string | null;

          /**
           * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
           */
          reference_status: string | null;
        }

        interface ThBankTransfer {
          /**
           * The reference assigned to the refund.
           */
          reference: string | null;

          /**
           * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
           */
          reference_status: string | null;
        }

        interface UsBankTransfer {
          /**
           * The reference assigned to the refund.
           */
          reference: string | null;

          /**
           * Status of the reference on the refund. This can be `pending`, `available` or `unavailable`.
           */
          reference_status: string | null;
        }

        interface WechatPay {}

        interface Zip {}
      }

      interface NextAction {
        /**
         * Contains the refund details.
         */
        display_details: NextAction.DisplayDetails | null;

        /**
         * Type of the next action to perform.
         */
        type: string;
      }

      namespace NextAction {
        interface DisplayDetails {
          email_sent: DisplayDetails.EmailSent;

          /**
           * The expiry timestamp.
           */
          expires_at: number;
        }

        namespace DisplayDetails {
          interface EmailSent {
            /**
             * The timestamp when the email was sent.
             */
            email_sent_at: number;

            /**
             * The recipient's email address.
             */
            email_sent_to: string;
          }
        }
      }

      type Reason =
        | 'duplicate'
        | 'expired_uncaptured_charge'
        | 'fraudulent'
        | 'requested_by_customer';
    }
  }
}
