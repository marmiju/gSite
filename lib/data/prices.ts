// types/priceTable.ts

export interface PricePlan {
  id: string;
  title: string;
  price: number | string;
  reviews: number | string;
  features: string[];
}

export interface PriceTable {
  service: string;
  currency: string;
  plans: PricePlan[];
}


export const prices:PriceTable = {
  "service": "Google Review Packages",
  "currency": "USD",
  "plans": [
    {
      "id": "basic",
      "title": "Basic Package",
      "price": 10,
      "reviews": 5,
      "features": [
        "5 Real Google Reviews",
        "Delivery in 1-2 Days",
        "100% Safe and Manual",
        "No Login Required"
      ]
    },
    {
      "id": "standard",
      "title": "Standard Package",
      "price": 25,
      "reviews": 15,
      "features": [
        "15 Real Google Reviews",
        "Delivery in 2-3 Days",
        "Safe & Manual Submission",
        "Custom Review Text Allowed"
      ]
    },
    {
      "id": "premium",
      "title": "Premium Package",
      "price": 40,
      "reviews": 30,
      "features": [
        "30 Real Google Reviews",
        "Delivery in 3-5 Days",
        "100% Safe, No Bots",
        "Geo-targeted Reviews",
        "Custom Review Text & Names"
      ]
    },
    {
      "id": "custom",
      "title": "Custom Package",
      "price": "Contact",
      "reviews": "50+",
      "features": [
        "Bulk Reviews (50+)",
        "Scheduled Posting",
        "Location Based Reviews",
        "Dedicated Support",
        "Custom Needs Fulfilled"
      ]
    },
    {
      "id": "custom1",
      "title": "Custom Package",
      "price": "Contact",
      "reviews": "50+",
      "features": [
        "Bulk Reviews (50+)",
        "Scheduled Posting",
        "Location Based Reviews",
        "Dedicated Support",
        "Custom Needs Fulfilled"
      ]
    },
    {
      "id": "custom2",
      "title": "Custom Package",
      "price": "Contact",
      "reviews": "50+",
      "features": [
        "Bulk Reviews (50+)",
        "Scheduled Posting",
        "Location Based Reviews",
        "Dedicated Support",
        "Custom Needs Fulfilled"
      ]
    }
  ]
}
