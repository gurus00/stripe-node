// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Subscriptions allow you to charge a customer on a recurring basis.
     *
     * Related guide: [Creating Subscriptions](https://stripe.com/docs/billing/subscriptions/creating).
     */
    interface Subscription {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'subscription';

      /**
       * ID of the Connect Application that created the subscription.
       */
      application:
        | string
        | Stripe.Application
        | Stripe.DeletedApplication
        | null;

      /**
       * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account.
       */
      application_fee_percent: number | null;

      automatic_tax: Subscription.AutomaticTax;

      /**
       * Determines the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. The timestamp is in UTC format.
       */
      billing_cycle_anchor: number;

      /**
       * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period
       */
      billing_thresholds: Subscription.BillingThresholds | null;

      /**
       * A date in the future at which the subscription will automatically get canceled
       */
      cancel_at: number | null;

      /**
       * If the subscription has been canceled with the `at_period_end` flag set to `true`, `cancel_at_period_end` on the subscription will be true. You can use this attribute to determine whether a subscription that has a status of active is scheduled to be canceled at the end of the current period.
       */
      cancel_at_period_end: boolean;

      /**
       * If the subscription has been canceled, the date of that cancellation. If the subscription was canceled with `cancel_at_period_end`, `canceled_at` will reflect the time of the most recent update request, not the end of the subscription period when the subscription is automatically moved to a canceled state.
       */
      canceled_at: number | null;

      /**
       * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
       */
      collection_method: Subscription.CollectionMethod;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * End of the current period that the subscription has been invoiced for. At the end of this period, a new invoice will be created.
       */
      current_period_end: number;

      /**
       * Start of the current period that the subscription has been invoiced for.
       */
      current_period_start: number;

      /**
       * ID of the customer who owns the subscription.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer;

      /**
       * Number of days a customer has to pay invoices generated by this subscription. This value will be `null` for subscriptions where `collection_method=charge_automatically`.
       */
      days_until_due: number | null;

      /**
       * ID of the default payment method for the subscription. It must belong to the customer associated with the subscription. This takes precedence over `default_source`. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
       */
      default_payment_method: string | Stripe.PaymentMethod | null;

      /**
       * ID of the default payment source for the subscription. It must belong to the customer associated with the subscription and be in a chargeable state. If `default_payment_method` is also set, `default_payment_method` will take precedence. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
       */
      default_source: string | Stripe.CustomerSource | null;

      /**
       * The tax rates that will apply to any subscription item that does not have `tax_rates` set. Invoices created will have their `default_tax_rates` populated from the subscription.
       */
      default_tax_rates?: Array<Stripe.TaxRate> | null;

      /**
       * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces.
       */
      description: string | null;

      /**
       * Describes the current discount applied to this subscription, if there is one. When billing, a discount applied to a subscription overrides a discount applied on a customer-wide basis.
       */
      discount: Stripe.Discount | null;

      /**
       * If the subscription has ended, the date the subscription ended.
       */
      ended_at: number | null;

      /**
       * List of subscription items, each with an attached price.
       */
      items: ApiList<Stripe.SubscriptionItem>;

      /**
       * The most recent invoice this subscription has generated.
       */
      latest_invoice: string | Stripe.Invoice | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;

      /**
       * Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`.
       */
      next_pending_invoice_item_invoice: number | null;

      /**
       * The account (if any) the charge was made on behalf of for charges associated with this subscription. See the Connect documentation for details.
       */
      on_behalf_of: string | Stripe.Account | null;

      /**
       * If specified, payment collection for this subscription will be paused.
       */
      pause_collection: Subscription.PauseCollection | null;

      /**
       * Payment settings passed on to invoices created by the subscription.
       */
      payment_settings: Subscription.PaymentSettings | null;

      /**
       * Specifies an interval for how often to bill for any pending invoice items. It is analogous to calling [Create an invoice](https://stripe.com/docs/api#create_invoice) for the given subscription at the specified interval.
       */
      pending_invoice_item_interval: Subscription.PendingInvoiceItemInterval | null;

      /**
       * You can use this [SetupIntent](https://stripe.com/docs/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-session payments. Learn more in the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication#scenario-2).
       */
      pending_setup_intent: string | Stripe.SetupIntent | null;

      /**
       * If specified, [pending updates](https://stripe.com/docs/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid.
       */
      pending_update: Subscription.PendingUpdate | null;

      /**
       * The schedule attached to the subscription
       */
      schedule: string | Stripe.SubscriptionSchedule | null;

      /**
       * Date when the subscription was first created. The date might differ from the `created` date due to backdating.
       */
      start_date: number;

      /**
       * Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, or `unpaid`.
       *
       * For `collection_method=charge_automatically` a subscription moves into `incomplete` if the initial payment attempt fails. A subscription in this state can only have metadata and default_source updated. Once the first invoice is paid, the subscription moves into an `active` state. If the first invoice is not paid within 23 hours, the subscription transitions to `incomplete_expired`. This is a terminal state, the open invoice will be voided and no further invoices will be generated.
       *
       * A subscription that is currently in a trial period is `trialing` and moves to `active` when the trial period is over.
       *
       * If subscription `collection_method=charge_automatically` it becomes `past_due` when payment to renew it fails and `canceled` or `unpaid` (depending on your subscriptions settings) when Stripe has exhausted all payment retry attempts.
       *
       * If subscription `collection_method=send_invoice` it becomes `past_due` when its invoice is not paid by the due date, and `canceled` or `unpaid` if it is still not paid by an additional deadline after that. Note that when a subscription has a status of `unpaid`, no subsequent invoices will be attempted (invoices will be created, but then immediately automatically closed). After receiving updated payment information from a customer, you may choose to reopen and pay their closed invoices.
       */
      status: Subscription.Status;

      /**
       * ID of the test clock this subscription belongs to.
       */
      test_clock: string | Stripe.TestHelpers.TestClock | null;

      /**
       * The account (if any) the subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices.
       */
      transfer_data: Subscription.TransferData | null;

      /**
       * If the subscription has a trial, the end of that trial.
       */
      trial_end: number | null;

      /**
       * If the subscription has a trial, the beginning of that trial.
       */
      trial_start: number | null;
    }

    namespace Subscription {
      interface AutomaticTax {
        /**
         * Whether Stripe automatically computes tax on this subscription.
         */
        enabled: boolean;
      }

      interface BillingThresholds {
        /**
         * Monetary threshold that triggers the subscription to create an invoice
         */
        amount_gte: number | null;

        /**
         * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged. This value may not be `true` if the subscription contains items with plans that have `aggregate_usage=last_ever`.
         */
        reset_billing_cycle_anchor: boolean | null;
      }

      type CollectionMethod = 'charge_automatically' | 'send_invoice';

      interface PauseCollection {
        /**
         * The payment collection behavior for this subscription while paused. One of `keep_as_draft`, `mark_uncollectible`, or `void`.
         */
        behavior: PauseCollection.Behavior;

        /**
         * The time after which the subscription will resume collecting payments.
         */
        resumes_at: number | null;
      }

      namespace PauseCollection {
        type Behavior = 'keep_as_draft' | 'mark_uncollectible' | 'void';
      }

      interface PaymentSettings {
        /**
         * Payment-method-specific configuration to provide to invoices created by the subscription.
         */
        payment_method_options: PaymentSettings.PaymentMethodOptions | null;

        /**
         * The list of payment method types to provide to every invoice created by the subscription. If not set, Stripe attempts to automatically determine the types to use by looking at the invoice's default payment method, the subscription's default payment method, the customer's default payment method, and your [invoice template settings](https://dashboard.stripe.com/settings/billing/invoice).
         */
        payment_method_types: Array<PaymentSettings.PaymentMethodType> | null;

        /**
         * Either `off`, or `on_subscription`. With `on_subscription` Stripe updates `subscription.default_payment_method` when a subscription payment succeeds.
         */
        save_default_payment_method: PaymentSettings.SaveDefaultPaymentMethod | null;
      }

      namespace PaymentSettings {
        interface PaymentMethodOptions {
          /**
           * This sub-hash contains details about the Canadian pre-authorized debit payment method options to pass to invoices created by the subscription.
           */
          acss_debit: PaymentMethodOptions.AcssDebit | null;

          /**
           * This sub-hash contains details about the Bancontact payment method options to pass to invoices created by the subscription.
           */
          bancontact: PaymentMethodOptions.Bancontact | null;

          /**
           * This sub-hash contains details about the Card payment method options to pass to invoices created by the subscription.
           */
          card: PaymentMethodOptions.Card | null;

          /**
           * This sub-hash contains details about the Bank transfer payment method options to pass to invoices created by the subscription.
           */
          customer_balance: PaymentMethodOptions.CustomerBalance | null;

          /**
           * This sub-hash contains details about the Konbini payment method options to pass to invoices created by the subscription.
           */
          konbini: PaymentMethodOptions.Konbini | null;

          /**
           * This sub-hash contains details about the ACH direct debit payment method options to pass to invoices created by the subscription.
           */
          us_bank_account: PaymentMethodOptions.UsBankAccount | null;
        }

        namespace PaymentMethodOptions {
          interface AcssDebit {
            mandate_options?: AcssDebit.MandateOptions;

            /**
             * Bank account verification method.
             */
            verification_method?: AcssDebit.VerificationMethod;
          }

          namespace AcssDebit {
            interface MandateOptions {
              /**
               * Transaction type of the mandate.
               */
              transaction_type: MandateOptions.TransactionType | null;
            }

            namespace MandateOptions {
              type TransactionType = 'business' | 'personal';
            }

            type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
          }

          interface Bancontact {
            /**
             * Preferred language of the Bancontact authorization page that the customer is redirected to.
             */
            preferred_language: Bancontact.PreferredLanguage;
          }

          namespace Bancontact {
            type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
          }

          interface Card {
            mandate_options?: Card.MandateOptions;

            /**
             * Selected network to process this Subscription on. Depends on the available networks of the card attached to the Subscription. Can be only set confirm-time.
             */
            network: Card.Network | null;

            /**
             * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
             */
            request_three_d_secure: Card.RequestThreeDSecure | null;
          }

          namespace Card {
            interface MandateOptions {
              /**
               * Amount to be charged for future payments.
               */
              amount: number | null;

              /**
               * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
               */
              amount_type: MandateOptions.AmountType | null;

              /**
               * A description of the mandate or subscription that is meant to be displayed to the customer.
               */
              description: string | null;
            }

            namespace MandateOptions {
              type AmountType = 'fixed' | 'maximum';
            }

            type Network =
              | 'amex'
              | 'cartes_bancaires'
              | 'diners'
              | 'discover'
              | 'interac'
              | 'jcb'
              | 'mastercard'
              | 'unionpay'
              | 'unknown'
              | 'visa';

            type RequestThreeDSecure = 'any' | 'automatic';
          }

          interface CustomerBalance {
            bank_transfer?: CustomerBalance.BankTransfer;

            /**
             * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
             */
            funding_type: 'bank_transfer' | null;
          }

          namespace CustomerBalance {
            interface BankTransfer {
              eu_bank_transfer?: BankTransfer.EuBankTransfer;

              /**
               * The bank transfer type that can be used for funding. Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, or `mx_bank_transfer`.
               */
              type: string | null;
            }

            namespace BankTransfer {
              interface EuBankTransfer {
                /**
                 * The desired country code of the bank account information. Permitted values include: `DE`, `ES`, `FR`, `IE`, or `NL`.
                 */
                country: EuBankTransfer.Country;
              }

              namespace EuBankTransfer {
                type Country = 'DE' | 'ES' | 'FR' | 'IE' | 'NL';
              }
            }
          }

          interface Konbini {}

          interface UsBankAccount {
            financial_connections?: UsBankAccount.FinancialConnections;

            /**
             * Bank account verification method.
             */
            verification_method?: UsBankAccount.VerificationMethod;
          }

          namespace UsBankAccount {
            interface FinancialConnections {
              /**
               * The list of permissions to request. The `payment_method` permission must be included.
               */
              permissions?: Array<FinancialConnections.Permission>;
            }

            namespace FinancialConnections {
              type Permission = 'balances' | 'payment_method' | 'transactions';
            }

            type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
          }
        }

        type PaymentMethodType =
          | 'ach_credit_transfer'
          | 'ach_debit'
          | 'acss_debit'
          | 'au_becs_debit'
          | 'bacs_debit'
          | 'bancontact'
          | 'boleto'
          | 'card'
          | 'customer_balance'
          | 'fpx'
          | 'giropay'
          | 'grabpay'
          | 'ideal'
          | 'konbini'
          | 'link'
          | 'paynow'
          | 'promptpay'
          | 'sepa_credit_transfer'
          | 'sepa_debit'
          | 'sofort'
          | 'us_bank_account'
          | 'wechat_pay';

        type SaveDefaultPaymentMethod = 'off' | 'on_subscription';
      }

      interface PendingInvoiceItemInterval {
        /**
         * Specifies invoicing frequency. Either `day`, `week`, `month` or `year`.
         */
        interval: PendingInvoiceItemInterval.Interval;

        /**
         * The number of intervals between invoices. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
         */
        interval_count: number;
      }

      namespace PendingInvoiceItemInterval {
        type Interval = 'day' | 'month' | 'week' | 'year';
      }

      interface PendingUpdate {
        /**
         * If the update is applied, determines the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. The timestamp is in UTC format.
         */
        billing_cycle_anchor: number | null;

        /**
         * The point after which the changes reflected by this update will be discarded and no longer applied.
         */
        expires_at: number;

        /**
         * List of subscription items, each with an attached plan, that will be set if the update is applied.
         */
        subscription_items: Array<Stripe.SubscriptionItem> | null;

        /**
         * Unix timestamp representing the end of the trial period the customer will get before being charged for the first time, if the update is applied.
         */
        trial_end: number | null;

        /**
         * Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed. See [Using trial periods on subscriptions](https://stripe.com/docs/billing/subscriptions/trials) to learn more.
         */
        trial_from_plan: boolean | null;
      }

      type Status =
        | 'active'
        | 'canceled'
        | 'incomplete'
        | 'incomplete_expired'
        | 'past_due'
        | 'trialing'
        | 'unpaid';

      interface TransferData {
        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
         */
        amount_percent: number | null;

        /**
         * The account where funds from the payment will be transferred to upon payment success.
         */
        destination: string | Stripe.Account;
      }
    }
  }
}
