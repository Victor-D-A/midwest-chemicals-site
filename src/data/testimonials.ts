// Customer testimonials from the company's current Testimonials page.
// Wording is the customers' own, with spelling fixes and light trims (each
// pull quote is removed from the story so it isn't read twice). Phone numbers
// are left out; addresses and email are kept pending the owners' review.

export type TestimonialTag = "bathtubs" | "countertops" | "cabinets" | "commercial";

export const testimonialTags: { id: TestimonialTag; label: string }[] = [
  { id: "bathtubs", label: "Bathtubs" },
  { id: "countertops", label: "Countertops" },
  { id: "cabinets", label: "Cabinets" },
  { id: "commercial", label: "Commercial" },
];

export interface TestimonialPhoto {
  src: string;
  // The photo's real size. It's shown no larger than this, so it stays sharp.
  width: number;
  height: number;
  alt: string;
  // Shown on before-and-after pairs.
  label?: "Before" | "After";
  // A short visible note, for photos the story doesn't already explain.
  caption?: string;
}

export interface Testimonial {
  id: string;
  business: string;
  person?: string;
  location?: string;
  address?: string;
  email?: string;
  // The strongest line, shown large at the top of the story.
  quote?: string;
  story: string[];
  tags: TestimonialTag[];
  photos: TestimonialPhoto[];
  // Shown first, in a larger card.
  featured?: boolean;
}

const photo = (
  file: string,
  width: number,
  height: number,
  alt: string,
  extra: Pick<TestimonialPhoto, "label" | "caption"> = {},
): TestimonialPhoto => ({ src: `/images/testimonials/${file}`, width, height, alt, ...extra });

export const testimonials: Testimonial[] = [
  {
    id: "getty",
    featured: true,
    business: "Getty Home Improvement and Remodeling",
    person: "Scott Getty, Owner",
    location: "Bend, OR",
    quote:
      "I tried to scrape material off of the cabinets after 24 hours with a knife and it's like a rock!",
    story: [
      "Just a note to let you know we think the Multi-Stone is great. Our customer loves the look of the new hutch in their 1979 manufactured home. We are now doing the baths and kitchen, along with a neighbor's baths and kitchen also. The Aerospace primer is fantastic: no wait time and unreal holding power.",
    ],
    tags: ["cabinets"],
    photos: [
      photo("getty-hutch-before.jpg", 300, 225, "Built-in hutch with dated oak cabinets and a dark countertop.", { label: "Before" }),
      photo("getty-hutch-after.jpg", 300, 225, "The same hutch with white cabinets and a gray stone-look countertop.", { label: "After" }),
    ],
  },
  {
    id: "phoenix",
    business: "Phoenix Refinishing & Coating LLC",
    person: "Chuck and Joe",
    location: "Central Massachusetts, serving MA, RI, and CT",
    quote: "We are very pleased at the results we have been getting using your products.",
    story: [
      "Some of our most popular services include sink repair and recolor, tub repair and recolor, antique claw foot tub refinishing, fiberglass shower and tub repair and recolor, tile refinish and recolor, countertop recolor, and concrete floor coating using your Multi-Stone products. We will soon be offering your truck bed liner coating and anti-slip floor coating.",
      "Thank you for your great products. They allow us to run a more profitable and efficient business.",
    ],
    tags: ["bathtubs", "countertops"],
    photos: [],
  },
  {
    id: "alternative-refinishing",
    business: "Alternative Refinishing Solutions",
    person: "Ken Boston",
    location: "Hendersonville, NC",
    address: "1516 Hebron Road, Hendersonville, NC 28739",
    quote:
      "My company uses Midwest Chemicals products exclusively because they are so good they allow me to offer my customers a 5-year warranty on anything I refinish.",
    story: [
      "We refinish all types of bathtubs, including antique clawfoot, kitchen countertops, cabinets, and all types of sinks, including farm-style and pedestal. I keep in stock, at all times, beautifully refinished clawfoot tubs and pedestal sinks, awaiting customers' orders.",
      "We are very happy with the coatings and customer service Midwest Chemicals provides for my company.",
    ],
    tags: ["bathtubs"],
    photos: [
      photo("ars-pedestal-sink.jpg", 400, 409, "Antique pedestal sink refinished in glossy white, with brass faucets."),
      photo("ars-clawfoot-tub.jpg", 400, 267, "Clawfoot tub refinished in glossy white, on brass feet."),
    ],
  },
  {
    id: "tub-doctors",
    business: "The Tub Doctors",
    person: "Chris Beeler",
    quote: "Your XL primer is the best I've ever worked with and your HSLD 5000 flows like a dream.",
    story: ["Look what one can do with these great products."],
    tags: ["bathtubs"],
    photos: [
      photo("tub-doctors-flag-tub.jpg", 480, 307, "Clawfoot tub painted as an American flag, with stars on blue and red and white stripes, on one blue and one red foot."),
    ],
  },
  {
    id: "magnificent-makeovers",
    business: "Magnificent Makeovers",
    person: "Tom Elliott",
    location: "Tappahannock, VA",
    quote: "All coatings used in the process were bought from Midwest Chemicals.",
    story: ["Before and after pictures of a restored clawfoot tub. Thanks, Ed! Call us for any of your refinishing needs."],
    tags: ["bathtubs"],
    photos: [
      photo("magnificent-tub-before.jpg", 300, 225, "Old cast iron tub with a rusted, peeling exterior.", { label: "Before" }),
      photo("magnificent-tub-after.jpg", 300, 225, "The restored tub with a smooth white finish inside and out.", { label: "After" }),
    ],
  },
  {
    id: "apmc",
    business: "APMC",
    person: "Paul F. Purter Jr.",
    location: "Lompoc, CA",
    quote: "All products used in the refinishing process were bought from Midwest Chemicals.",
    story: ["Fiberglass enclosure and countertop refinished by APMC in Multi-Stone."],
    tags: ["bathtubs", "countertops"],
    photos: [
      photo("apmc-enclosure.jpg", 300, 225, "Fiberglass tub and shower enclosure refinished in white."),
      photo("apmc-vanity-masked.jpg", 300, 225, "Double-sink vanity countertop masked off with paper during refinishing."),
      photo("apmc-sink.jpg", 300, 225, "Close-up of a refinished white sink and countertop."),
    ],
  },
  {
    id: "hendrick",
    business: "Frank R. Hendrick & Sons",
    quote: "She likes hers more than her neighbor's. This stuff is GREAT.",
    story: [
      "Here are some before and after pics of a countertop I did the other day. She was so happy with it. She was a referral from her next-door neighbor. The color I used was Multi-Stone 5838.",
    ],
    tags: ["countertops"],
    photos: [
      photo("hendrick-kitchen-before.jpg", 300, 225, "Kitchen countertop and backsplash in worn cream laminate.", { label: "Before" }),
      photo("hendrick-kitchen-after.jpg", 300, 225, "The same countertop and backsplash refinished in a gray stone-look finish.", { label: "After" }),
    ],
  },
  {
    id: "mr-glaze",
    business: "Mr. Glaze",
    location: "California",
    story: ["A jacuzzi refinished in MS Blue Lagoon."],
    tags: ["bathtubs"],
    photos: [photo("mr-glaze-jacuzzi.jpg", 300, 225, "Outdoor jacuzzi refinished in a light blue finish.")],
  },
  {
    id: "amazon-coatings",
    business: "Amazon Coatings",
    location: "Mesa, AZ",
    quote: "Our response has been great and we are extremely pleased with the product.",
    story: [
      "Wanted to send you a few photos of the work that we've done using Multi-Stone. Perhaps you can use some of these on your website.",
    ],
    tags: ["countertops", "commercial"],
    photos: [
      photo("amazon-dental-exam-room.jpg", 300, 225, "Exam room countertop refinished in a light speckled stone finish.", {
        caption: "A local dental office: exam room countertop.",
      }),
      photo("amazon-dental-reception.jpg", 300, 225, "Reception counter and front panel refinished in a light gray speckled stone finish.", {
        caption: "The same office's reception area.",
      }),
      photo("amazon-sports-bar.jpg", 300, 222, "Sports bar dining room with light speckled tabletops.", {
        caption: "A local sports bar and grill: tabletops refinished using Multi-Spec.",
      }),
    ],
  },
  {
    id: "we-do-corp",
    business: "We Do Corp",
    person: "Eduardo",
    email: "wedo@cfl.rr.com",
    quote:
      "This product from Midwest Chemicals is amazingly easy to use and clean up, and gives a wonderful finish.",
    story: [
      "We have been doing tub refinishing for about 2 years now. With Createastain we decided to change the look of tubs, cabinets, and tiles. The pictures show a PVC bathtub and shower before and after, and the job we did on cabinets using Createastain (of course, some artistic techniques help a little bit). We also used the strawberry fragrance, which they liked and wanted to buy for regular use in their house. My customers simply loved everything.",
      "I want to thank you for your patience and prompt help and support, answering all our (lots of) questions.",
    ],
    tags: ["bathtubs", "cabinets"],
    photos: [
      photo("wedo-tub-before.jpg", 180, 135, "White fiberglass tub and shower.", { label: "Before" }),
      photo("wedo-tub-after.jpg", 180, 135, "The same tub stained in a brown and gray marble look.", { label: "After" }),
      photo("wedo-cabinets-before.jpg", 180, 135, "Kitchen with white cabinets.", { label: "Before" }),
      photo("wedo-cabinets-after.jpg", 180, 135, "The same kitchen with cabinets stained a warm wood tone.", { label: "After" }),
    ],
  },
  {
    id: "crystal-clear",
    business: "Crystal Clear Co.",
    person: "Rafael and Wade",
    quote: "Thank you for helping us.",
    story: ["Have a wonderful day, everyone."],
    tags: ["countertops"],
    photos: [
      photo("crystal-clear-counter-before.jpg", 180, 135, "Countertop sanded and masked with blue tape.", { label: "Before" }),
      photo("crystal-clear-counter-after.jpg", 180, 135, "Kitchen countertop refinished in a brown and gold granite look.", { label: "After" }),
      photo("crystal-clear-counter-sink.jpg", 180, 135, "Close-up of the granite-look countertop around the sink.", { label: "After" }),
    ],
  },
];
