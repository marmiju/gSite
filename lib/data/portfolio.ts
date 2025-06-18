export interface ReviewProject {
  id: string;
    client: string;
    business_type: string;
    reviews_delivered: number;
    location: string;
    features: string[];
    result: string;

}

export interface GoogleReviewPortfolio {
  title: string;
    summary: string;
  projects: ReviewProject[];
}


export const portfolio:GoogleReviewPortfolio = {
  "title": "Google Reviews Portfolio",
  "summary": "Trusted by clients to boost local credibility and visibility with high-quality Google reviews.",
  "projects": [
    {
      "id": "project-001",
      
      "client": "Dhaka Tech Solutions",
      "business_type": "IT Company",
      "reviews_delivered": 15,
      "location": "Dhaka, Bangladesh",
      "features": [
        "Geo-targeted Reviews",
        "Custom Review Content",
        "5-Star Rated"
      ],
      "result": "Increased local visibility and improved Google Map ranking within 7 days."
    },
    {
      "id": "project-002",
      "client": "Green Leaf Cafe",
      "business_type": "Restaurant",
      "reviews_delivered": 25,
      "location": "Chittagong, Bangladesh",
      "features": [
        "Organic User Reviews",
        "Delivery within 3 Days",
        "Bilingual Content (English & Bengali)"
      ],
      "result": "Boosted foot traffic by 30% after reviews went live."
    },
    {
      "id": "project-003",
      "client": "SmartFix Mobile Service",
      "business_type": "Mobile Repair Shop",
      "reviews_delivered": 10,
      "location": "Sylhet, Bangladesh",
      "features": [
        "High Retention Rate",
        "Review Strategy Consultation",
        "Verified Local Profiles"
      ],
      "result": "Built trust with new customers and increased monthly inquiries."
    }
  ]
}
