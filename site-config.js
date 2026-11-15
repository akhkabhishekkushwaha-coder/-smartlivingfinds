/*
  =====================================================================
  HOW TO CUSTOMIZE site-config.js
  1. Change brand text, colors, or social links inside the SITE object below.
  2. Keep the word "none" (with quotes) for anything you want to hide.
  3. To add a new guide, copy one block inside GUIDES and fill in its fields.
  4. Save this file and refresh your browser to see your updates everywhere.
  =====================================================================
*/

const SITE = {
  // Your website brand name shown in the header, about section, and footer
  brandName: "Smart Living Finds",

  // Your social handle used for reference and attribution
  username: "@smartlivingfindsclub",

  // Your main brand tagline shown in the hero banner and footer
  tagline: "Smart Finds. Better Living.",

  // Short description used in the hero section below the main heading
  heroSubtitle: "Practical home organization ideas for the kitchen, pantry, bathroom and small spaces. Simple, beautiful and easy to copy.",

  // Path to your logo image (keep "none" to display clean text branding instead)
  logo: "none",

  // Path to your browser tab icon (keep "none" if you do not have a favicon yet)
  favicon: "none",

  // Text shown in the browser tab on the home page
  tabTitle: "Smart Living Finds — Practical Home Organization Ideas",

  // Short summary of your site for search engines
  siteDescription: "Practical home organization ideas for the kitchen, pantry, bathroom, and small spaces. Simple, beautiful, and easy to copy.",

  // Theme colors used across every page (CSS variables are updated from these)
  theme: {
    // Warm cream page background color
    background: "#F7F1E8",
    // Soft ivory card background color
    card: "#FFFDF8",
    // Warm taupe-brown button and accent color
    accent: "#8B6B4A",
    // Darker brown used when hovering over accent buttons
    accentHover: "#735639",
    // Deep espresso color for headings
    heading: "#3B2F26",
    // Warm charcoal-brown color for readable body text
    body: "#5C5048",
    // Muted warm gray-brown for dates, labels, and captions
    muted: "#6E6157",
    // Soft beige color for thin card borders and dividers
    border: "#E6DACB"
  },

  // Top navigation menu items (target matches section IDs on index.html)
  nav: [
    // Link to the top hero area
    { label: "Home", target: "home" },
    // Link to the guides grid
    { label: "Guides", target: "guides" },
    // Link to the about section
    { label: "About", target: "about" },
    // Link to the contact section
    { label: "Contact", target: "contact" }
  ],

  // Social links (set any item to "none" to hide its button and icon)
  social: {
    // Your Pinterest profile URL
    pinterest: "https://www.pinterest.com/smartlivingfindsclub/",
    // Your Instagram profile URL (or "none" to hide)
    instagram: "none",
    // Your YouTube channel URL (or "none" to hide)
    youtube: "none",
    // Your contact email address (or "none" to hide)
    email: "none"
  },

  // Optional form endpoint (e.g., Formspree URL) for POST contact submissions, or "none"
  formLink: "none",

  // Optional extra affiliate disclosure sentence; keep "none" if not needed
  affiliateDisclosure: "none",

  // 5 Category filter cards shown above the guides grid
  categories: [
    // Category 1: Kitchen & Pantry
    { name: "Kitchen & Pantry", filterKey: "Kitchen", icon: "fa-solid fa-utensils" },
    // Category 2: Home & Bathroom Storage
    { name: "Home & Bathroom Storage", filterKey: "Home", icon: "fa-solid fa-box-open" },
    // Category 3: Small Space Living
    { name: "Small Space Living", filterKey: "Small Space", icon: "fa-solid fa-house" },
    // Category 4: Smart Kitchen Ideas
    { name: "Smart Kitchen Ideas", filterKey: "Smart Kitchen", icon: "fa-solid fa-lightbulb" },
    // Category 5: Seasonal Home Tips
    { name: "Seasonal Home Tips", filterKey: "Seasonal", icon: "fa-solid fa-calendar" }
  ],

  // Optional Free Checklists section (leave [] empty to hide the section completely)
  checklists: [],

  // All guides (adding a new guide needs ONLY one new entry here — no HTML edits needed)
  GUIDES: [
    {
      // Set to true to show this guide on the site, or false to keep it hidden
      published: true,
      // Guide headline shown on the card, guide page, and Pinterest share text
      title: "Fridge Organization Ideas to Make Room for Holiday Hosting",
      // Category key: Kitchen, Home, Small Space, Smart Kitchen, or Seasonal
      category: "Kitchen",
      // Fixed publish date in YYYY-MM-DD format (leave "" empty to hide the date)
      date: "2026-11-15",
      // Short summary shown on the guide card and as the guide intro
      shortText: "Holiday groceries and large serving dishes quickly crowd an everyday refrigerator. Setting up clear zones a few days ahead creates steady shelf space without buying new bins or digging behind jars.",
      // Single image path used for the card, showcase tiles, guide hero, and og:image
      image: "images/fridge-organization-pin.jpg",
      // Separate HTML file name for this guide's URL
      page: "fridge-organization-ideas.html",
      // Short 2-3 line summary shown in the Quick Answer box near the top of the guide
      quickAnswer: "Clear expired jars first, then divide your fridge into clear zones: ready-to-eat items on top, clear containers for meal prep and leftovers in the middle, raw meat and poultry safely on the bottom shelf, and drinks or sauces in the door.",
      // Numbered organizing tips shown on the guide page
      tips: [
        {
          // Tip 1 title
          heading: "1. Zone your shelves",
          // Tip 1 explanation
          text: "Start with a quick clear-out of expired jars, then give every type of food a predictable spot. Keep ready-to-eat snacks, cheese, and beverages on the upper shelf at eye level, reserve the middle shelf for prepped ingredients and leftovers, use the crisper drawers for produce, and keep everyday drinks and sauces in the door."
        },
        {
          // Tip 2 title
          heading: "2. Use clear containers",
          // Tip 2 explanation
          text: "Swap bulky mixing bowls and foil-wrapped plates for clear, flat-lidded containers whenever possible. Rectangular shapes sit neatly side by side without wasting curved corner space, and clear walls let everyone see what is inside before opening lids."
        },
        {
          // Tip 3 title
          heading: "3. Keep raw items separate",
          // Tip 3 explanation
          text: "Always place raw meat and poultry on the bottom shelf inside a shallow rimmed tray or dish, well away from ready-to-eat food. Keeping raw items on the lowest level prevents drips from reaching washed produce, desserts, or chilled platters stored higher up."
        },
        {
          // Tip 4 title
          heading: "4. Label and date leftovers",
          // Tip 4 explanation
          text: "Use a small strip of painter's tape and a marker on lids or container fronts to note the dish name and the date it was prepped or stored. Quick labels save time during busy cooking hours and help guests or family members grab the right dish without guessing."
        },
        {
          // Tip 5 title
          heading: "5. Do a quick weekly reset",
          // Tip 5 explanation
          text: "Spend five minutes each week moving older leftovers to the front of a middle shelf, wiping sticky spots, and pulling out anything that has gone past its prime. A short weekly reset keeps your refrigerator calm and ready for everyday meals or last-minute guests."
        }
      ],
      // Optional checklist items shown near the end of the guide
      checklist: [
        "Check dates on sauces, dressings, and older jars",
        "Wipe down shelves and produce drawers",
        "Place a rimmed tray on the bottom shelf for raw meat and poultry",
        "Reserve one open middle space for a large serving platter",
        "Set out tape and a marker to label and date leftovers",
        "Run a 5-minute reset after hosting"
      ]
    },
    {
      // Set to true to show this guide on the site, or false to keep it hidden
      published: true,
      // Guide headline shown on the card, guide page, and Pinterest share text
      title: "Small Laundry Room Organization Ideas for Tiny Spaces",
      // Category key: Kitchen, Home, Small Space, Smart Kitchen, or Seasonal
      category: "Home",
      // Fixed publish date in YYYY-MM-DD format
      date: "2026-11-15",
      // Short summary shown on the guide card and as the guide intro
      shortText: "Tight laundry nooks stay calm when walls and narrow gaps do the heavy lifting. A few simple zones keep detergent, cloths, and drying gear easy to grab on laundry day.",
      // Single image path used for the card, showcase tiles, guide hero, and og:image
      image: "images/small-laundry-room-pin.jpg",
      // Separate HTML file name for this guide's URL
      page: "small-laundry-room-organization.html",
      // Short 2-3 line summary shown in the Quick Answer box near the top of the guide
      quickAnswer: "Move storage upward with a single wall shelf, sort backups into woven baskets, hang laundry bags on wall hooks, tuck a slim rolling cart beside the machines, and keep daily supplies together in one spot.",
      // Numbered organizing tips shown on the guide page
      tips: [
        {
          // Tip 1 title
          heading: "1. Add vertical shelves above the machines",
          // Tip 1 explanation
          text: "Install a sturdy floating shelf above the washer and dryer to turn empty wall height into usable storage. Keeping extra towels, detergent refills, and stain tools up high leaves the counter clear for folding."
        },
        {
          // Tip 2 title
          heading: "2. Group items in matching baskets",
          // Tip 2 explanation
          text: "Use two or three open baskets on your upper shelf to corral dryer balls, clothespins, and cleaning rags out of sight. Grouping small loose items inside baskets stops clutter from spreading across the shelf."
        },
        {
          // Tip 3 title
          heading: "3. Mount simple wall hooks",
          // Tip 3 explanation
          text: "Place a row of wooden pegs or hooks below the shelf for hanging a canvas laundry tote, mesh delicates bag, or handheld brush. Hanging lightweight gear keeps the floor clear and lets damp items air-dry."
        },
        {
          // Tip 4 title
          heading: "4. Slide in a narrow rolling cart",
          // Tip 4 explanation
          text: "If you have a narrow gap beside the dryer, tuck a slim rolling cart there for extra towels and detergent bottles. Wheels let you pull supplies out when loading a cycle and roll everything neatly back afterward."
        },
        {
          // Tip 5 title
          heading: "5. Keep daily supplies in one place",
          // Tip 5 explanation
          text: "Set your everyday wash bottle, stain remover, and a small folded cloth together on one shallow tray right above the machines. Keeping daily essentials in one predictable spot prevents double-buying and saves steps."
        }
      ],
      // Optional checklist items shown near the end of the guide
      checklist: [
        "Clear the counter above the washer and dryer",
        "Group extra refills and cloths into upper shelf baskets",
        "Hang a tote or delicates bag on wall hooks",
        "Arrange daily wash bottles on one tray",
        "Stock the slim cart with clean folded towels"
      ]
    },
    {
      // Set to true to show this guide on the site, or false to keep it hidden
      published: true,
      // Guide headline shown on the card, guide page, and Pinterest share text
      title: "Small Entryway Organization Ideas: A Simple Drop Zone",
      // Category key: Kitchen, Home, Small Space, Smart Kitchen, or Seasonal
      category: "Small Space",
      // Fixed publish date in YYYY-MM-DD format
      date: "2026-11-15",
      // Short summary shown on the guide card and as the guide intro
      shortText: "You do not need a full mudroom to keep keys, coats, and everyday shoes off the floor. A narrow wall drop zone creates a tidy landing spot right inside the front door.",
      // Single image path used for the card, showcase tiles, guide hero, and og:image
      image: "images/small-entryway-pin.jpg",
      // Separate HTML file name for this guide's URL
      page: "small-entryway-organization.html",
      // Short 2-3 line summary shown in the Quick Answer box near the top of the guide
      quickAnswer: "Mount wall hooks for bags and jackets, set a shallow tray on a slim bench for keys, tuck everyday shoes on the bottom shelf, keep one small basket for mail or sunglasses, and do a quick daily reset.",
      // Numbered organizing tips shown on the guide page
      tips: [
        {
          // Tip 1 title
          heading: "1. Hang hooks for daily bags and coats",
          // Tip 1 explanation
          text: "Mount a short wooden peg rail at shoulder height so everyday tote bags and light jackets stay off chairs and floors. Limiting hooks to the few items you wear this week prevents bulky coats from piling up."
        },
        {
          // Tip 2 title
          heading: "2. Set out one shallow key tray",
          // Tip 2 explanation
          text: "Place a small ceramic or wooden tray directly on the entryway bench or narrow table for house keys and pocket items. Giving keys one consistent home stops frantic morning searches before heading out."
        },
        {
          // Tip 3 title
          heading: "3. Give shoes a dedicated bottom shelf",
          // Tip 3 explanation
          text: "Use a narrow slatted bench or low rack underneath to hold two or three pairs of everyday shoes neatly side by side. Keeping off-season pairs in a closet frees up room right by the door."
        },
        {
          // Tip 4 title
          heading: "4. Add one catch-all basket",
          // Tip 4 explanation
          text: "Keep a small woven basket beside the key tray for sunglasses, dog leashes, or incoming mail until you sort it. A single contained basket keeps tiny items from scattering across the surface."
        },
        {
          // Tip 5 title
          heading: "5. Do a quick daily reset",
          // Tip 5 explanation
          text: "Each evening, hang stray bags back on their hook, line up shoes under the bench, and clear out yesterday's receipts from the basket. Taking one minute before bed keeps the front door calm every morning."
        }
      ],
      // Optional checklist items shown near the end of the guide
      checklist: [
        "Keep only this week's coats and bags on the hooks",
        "Place keys in the shallow bench tray",
        "Line up everyday shoes on the lower rack",
        "Empty receipts and stray mail from the catch-all basket",
        "Shake out the entryway mat once a week"
      ]
    },
    {
      // Set to true to show this guide on the site, or false to keep it hidden
      published: true,
      // Guide headline shown on the card, guide page, and Pinterest share text
      title: "Kitchen Cabinet Organization Ideas for Deep and Corner Cabinets",
      // Category key: Kitchen, Home, Small Space, Smart Kitchen, or Seasonal
      category: "Smart Kitchen",
      // Fixed publish date in YYYY-MM-DD format
      date: "2026-11-15",
      // Short summary shown on the guide card and as the guide intro
      shortText: "Deep lower cabinets and awkward corners quickly turn into dark hiding spots for jars and dishes. Two simple shelf helpers bring everything into easy view without remodeling.",
      // Single image path used for the card, showcase tiles, guide hero, and og:image
      image: "images/kitchen-cabinet-pin.jpg",
      // Separate HTML file name for this guide's URL
      page: "kitchen-cabinet-organization.html",
      // Short 2-3 line summary shown in the Quick Answer box near the top of the guide
      quickAnswer: "Use a turntable on upper cabinet shelves for dry goods, add a tiered riser for plates and bowls below, group items by type, keep daily dishes at the front, and run a quick cleanup every few weeks.",
      // Numbered organizing tips shown on the guide page
      tips: [
        {
          // Tip 1 title
          heading: "1. Add a turntable for jars and staples",
          // Tip 1 explanation
          text: "Set a round turntable on the deep middle shelf so glass jars of pasta, grains, spices, and oils spin right to the front. One gentle turn lets you see back-row staples without unloading half the cupboard."
        },
        {
          // Tip 2 title
          heading: "2. Double vertical space with a tiered riser",
          // Tip 2 explanation
          text: "Place a sturdy shelf riser on the lower cabinet level to separate dinner plates below from serving bowls above. Splitting tall stacks into two shorter levels protects dish edges and makes heavy plates easier to lift."
        },
        {
          // Tip 3 title
          heading: "3. Group items strictly by type",
          // Tip 3 explanation
          text: "Keep dry pantry jars together on the turntable shelf and everyday ceramic dishes together on the lower level. Sorting by clear category stops baking jars from creeping behind soup bowls."
        },
        {
          // Tip 4 title
          heading: "4. Keep daily items at the front",
          // Tip 4 explanation
          text: "Place the plates, bowls, and cooking staples you reach for every evening right at the front edge of the cabinet. Tuck occasional serving pieces or backup jars farther back where you only reach once in a while."
        },
        {
          // Tip 5 title
          heading: "5. Schedule a quick regular cleanup",
          // Tip 5 explanation
          text: "Once a month, spin the turntable, wipe stray crumbs off the shelf, and check dry goods for anything running low. A brief regular cleanup keeps deep corners tidy with almost no effort."
        }
      ],
      // Optional checklist items shown near the end of the guide
      checklist: [
        "Empty the deep cabinet and wipe down shelves",
        "Arrange dry pantry jars on a round turntable",
        "Split heavy plate and bowl stacks with a tiered riser",
        "Move everyday dishes to the front edge",
        "Put seldom-used items toward the back"
      ]
    },
    {
      // Set to true to show this guide on the site, or false to keep it hidden
      published: true,
      // Guide headline shown on the card, guide page, and Pinterest share text
      title: "Thanksgiving Hosting Tip: Plan Your Serving Dishes Ahead",
      // Category key: Kitchen, Home, Small Space, Smart Kitchen, or Seasonal
      category: "Seasonal",
      // Fixed publish date in YYYY-MM-DD format
      date: "2026-11-15",
      // Short summary shown on the guide card and as the guide intro
      shortText: "Scrambling for an extra platter or gravy spoon while dinner is hot adds unnecessary hosting stress. Matching dishes to your menu a day early keeps the kitchen calm when guests arrive.",
      // Single image path used for the card, showcase tiles, guide hero, and og:image
      image: "images/thanksgiving-serving-dishes-pin.jpg",
      // Separate HTML file name for this guide's URL
      page: "thanksgiving-serving-dishes-plan.html",
      // Short 2-3 line summary shown in the Quick Answer box near the top of the guide
      quickAnswer: "Write out your menu first, match every side and main dish to its platter and serving spoon early, tie or place paper tags inside each dish, set everything out the day before, and clear landing space for hot pans.",
      // Numbered organizing tips shown on the guide page
      tips: [
        {
          // Tip 1 title
          heading: "1. List the full menu first",
          // Tip 1 explanation
          text: "Start by writing down every main dish, side, salad, gravy, and dessert on a single sheet of paper. Seeing the complete list in front of you makes it easy to count exactly how many serving bowls and platters you need."
        },
        {
          // Tip 2 title
          heading: "2. Match each dish to a platter and spoon early",
          // Tip 2 explanation
          text: "Pull serving pieces from your cabinets and pair each menu item with the right shallow bowl, oval platter, or baking dish alongside its own serving spoon or tongs. Catching a missing ladle two days early gives you plenty of time to borrow or improvise."
        },
        {
          // Tip 3 title
          heading: "3. Label every dish with simple tags",
          // Tip 3 explanation
          text: "Write the dish name on a small paper tag or sticky note and rest it inside each empty platter or tie it to the spoon handle. Clear labels let family helpers plate food into the right bowl without asking you every few minutes."
        },
        {
          // Tip 4 title
          heading: "4. Set serving dishes out the day before",
          // Tip 4 explanation
          text: "Arrange your washed, tagged platters and folded linens together on a side counter or dining table the evening before hosting. Waking up to a prepped staging area turns dinner service into a simple fill-and-carry routine."
        },
        {
          // Tip 5 title
          heading: "5. Plan counter space for hot dishes",
          // Tip 5 explanation
          text: "Clear a dedicated stretch of countertop near the oven with trivets or folded towels ready before cooking starts. Knowing exactly where hot roasting pans and casseroles will land keeps traffic moving smoothly at dinnertime."
        }
      ],
      // Optional checklist items shown near the end of the guide
      checklist: [
        "Write out the complete holiday menu",
        "Pair every dish with a platter or bowl and serving spoon",
        "Write and place paper tags in each dish",
        "Set tagged serving pieces out the night before",
        "Clear counter space with trivets for hot dishes"
      ]
    }
  ]
};
