let name = "sushant";
// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["How to check the status of the order?", "order","order?", "order details?"],
  ["are shipping charges applied to my order", "shiping charges", "shiping charges ?","shiping charges?"],
  ["how find the right size for myself", "size", "right size","can not able to find right size"],
  ["What are the different products that we have?", "product", "products", "list of product you have"],
  ["How can I place an order?","How can I place an order", "place order","how to place order","place order?","place a order?","how to place order?"],
  [
    "When does the order get shipped?",
    "When does the order get shipped",
    "when order shipped",
    "when order get shipped",
    "in how many days order will shipped?",
    "in how many days order will shipped"
  ],
  ["Where can I put in an exchange/refund request?","refund request","refund","refund request"]
]

const replies = [
  [`Hi ${name}! How can I help you today?`],
  [
    "We love to keep you updated through the entire process post having placed your order. You will receive a shipping update from us via e-mail and WhatsApp, you can track the status of your order using the same link?",
  ],
  [
    "We offer free shipping on orders above Rs 799.",
    
  ],
  ["You can check out our size guide on the product page to find the perfect size or just get in touch with Natasha in our Customer Bliss Team and she’ll help you out with this! "],
  ["hurray !!! Check out our The Ultimate Collection here"],
  ["It's super easy to place an order with us! Add to bag the product of your choice, colour and size and go ahead and proceed to payment!"],
  ["We get your package shipped within 2-3 days of order confirmation! "],
  ["We have a super easy and hassle free return policy. Just head on here https://myblissclub.myshopify.com/apps/return_prime",]
]

// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]

// Whatever else you want :)

// const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]