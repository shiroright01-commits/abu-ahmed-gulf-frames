export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: "windows" | "kitchens" | "doors" | "shutters" | "custom";
  iconName: string;
  badge?: string;
  heroImage: string;
  serviceDeliverables: string[];
  specs: ServiceSpec[];
  features: ServiceFeature[];
  advantages: string[];
  mechanisms?: {
    name: string;
    description: string;
    suitableFor: string;
  }[];
  warranty: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "windows",
    slug: "architectural-aluminum-windows",
    title: "Architectural Glazing & Window Installation Services",
    shortDescription:
      "Turnkey site survey, bespoke thermal-break profile fabrication, and precision acoustic glazing installation for luxury villas and commercial projects.",
    fullDescription:
      "Abu Ahmed Gulf Frames delivers comprehensive architectural aluminum glazing services. We do not sell retail boxed windows. Instead, our master technicians perform precision laser site surveys, engineer custom heavy-gauge thermal-break profiles (6063-T6 Gulf architectural grade), assemble multi-chamber acoustic insulated glass units, and execute flawless on-site anchoring. Every installation features vulcanized continuous EPDM weather-stripping to eliminate heat infiltration, wind whistling, and storm water leakage.",
    category: "windows",
    iconName: "PanelsTopLeft",
    badge: "Gulf Architectural Standard",
    heroImage: "/real_projects/01_sliding_window_charcoal.jpg",
    serviceDeliverables: [
      "On-site laser measurement and structural lintel inspection",
      "Custom 3D CAD framing design and profile section drafting",
      "Direct workshop CNC cutting and mechanical corner cleating",
      "Acoustic double or triple glazed unit sealing",
      "Certified master technician on-site installation and weather-sealing",
      "Post-installation acoustic and sliding mechanism quality certification",
    ],
    specs: [
      { label: "Engineering Grade", value: "6063-T6 High-Tensile Gulf Architectural Extrusion" },
      { label: "Profile Depth", value: "45mm, 60mm & 80mm Multi-Chamber Thermal Break" },
      { label: "Glazing Integration", value: "Double Insulated (5mm+12A+5mm), Laminated Acoustic, Low-E" },
      { label: "Surface Treatment", value: "AkzoNobel 70-Micron Architectural Powder Coating or Anodized Gold" },
      { label: "Acoustic Attenuation", value: "Sound reduction up to 38 dB with certified acoustic seals" },
      { label: "Weather Defense", value: "Dual continuous vulcanized EPDM compression gaskets" },
    ],
    features: [
      {
        title: "Thermal-Break Engineering",
        description:
          "High-density polyamide insulating struts isolate outer and inner metal profiles, drastically reducing heat transfer and cooling energy costs.",
      },
      {
        title: "Multi-Point Security Anchoring",
        description:
          "Heavy-duty stainless steel perimeter cam locks secure window sashes into structural jambs at multiple locking points.",
      },
      {
        title: "Frictionless Stainless Rollers",
        description:
          "Precision-machined dual stainless steel tandem ball-bearing roller carriages engineered for effortless movement on massive patio spans.",
      },
      {
        title: "Integrated High-Tensile Mesh Tracks",
        description:
          "Dedicated concealed tracks for stainless steel security fly-screens or motorized insect screens.",
      },
    ],
    advantages: [
      "Zero warping, swelling, or water ingress even under intense monsoon storms",
      "Custom anodized finishes in Deep Charcoal, Brushed Champagne Gold, and Platinum Silver",
      "End-to-end service execution by master technicians with 20 years experience",
      "Strict millimetre-precision fabrication tailored to site masonry conditions",
    ],
    mechanisms: [
      {
        name: "Heavy-Duty Sliding Portal Mechanism",
        description:
          "Reinforced dual bottom tracks with precision stainless steel ball-bearing rollers for wide villa spans.",
        suitableFor: "Patio openings, living room view walls, modern bedrooms",
      },
      {
        name: "Side-Hung Casement with Friction Hinges",
        description:
          "Heavy-gauge 304 stainless steel friction stays that hold position firmly in strong gusts without slamming.",
        suitableFor: "High-wind zones, master bedrooms, study rooms",
      },
      {
        name: "European Tilt & Turn Dual Operation",
        description:
          "Dual-action single-handle mechanism: tilt top inwards for draft-free ventilation or swing wide for full access.",
        suitableFor: "Luxury multi-story residences, executive offices, commercial buildings",
      },
    ],
    warranty: "10-Year Structural Framing Warranty | 5-Year Hardware Calibration & Service Guarantee",
  },
  {
    id: "kitchens",
    slug: "luxury-modular-aluminum-kitchens",
    title: "Bespoke Modular Aluminum Kitchen Fit-Out Services",
    shortDescription:
      "Complete architectural aluminum kitchen design, custom carcass fabrication, and turnkey installation. 100% waterproof, termite-proof, and fire-resistant.",
    fullDescription:
      "Conventional wooden and particle-board kitchens inevitably deteriorate from steam, water leaks, and pests. Abu Ahmed Gulf Frames provides bespoke all-aluminum kitchen engineering and installation services. From custom spatial layout planning to direct workshop fabrication of heavy-wall aluminum box carcasses, honeycomb core door shutters, and fluted glass frontals, our team executes turnkey luxury kitchens built to endure for decades without degradation.",
    category: "kitchens",
    iconName: "ChefHat",
    badge: "100% Water & Termite Proof",
    heroImage: "/real_projects/07_waterproof_kitchen_door_white.jpg",
    serviceDeliverables: [
      "In-home ergonomic kitchen layout and utility mapping survey",
      "Full carcass fabrication using 1.5mm extruded aluminum hollow profiles",
      "Custom anodized finishes with Brushed Champagne Gold trims",
      "Installation of Austrian soft-close hydraulic hinges and drawer systems",
      "Seamless integration with granite, quartz, or porcelain countertops",
      "Final leveling, alignment certification, and lifetime anti-rust warranty handover",
    ],
    specs: [
      { label: "Carcass Structure", value: "1.2mm - 1.5mm Structural Aluminum Box Sections (No Wood, No MDF)" },
      { label: "Door Shutter Core", value: "Aluminum Honeycomb Core with Electrostatic Powder-Coated Skin" },
      { label: "Hardware Fitment", value: "Hydraulic Soft-Close Hinges (100,000 cycle endurance rating)" },
      { label: "Drawer Capacity", value: "Full-extension undermount slides supporting up to 50kg per drawer" },
      { label: "Display Elements", value: "4mm-5mm Tinted & Fluted Tempered Glass in Slim Aluminum Profiles" },
      { label: "Durability Rating", value: "100% Impervious to water, boiling oil, steam, termites, and fire" },
    ],
    features: [
      {
        title: "Indestructible Aluminum Skeleton",
        description:
          "Rigid aluminum frames never absorb humidity, swell, or delaminate. Perfectly safe under sinks and around heavy stone tops.",
      },
      {
        title: "Fire & Heat Retardant",
        description:
          "Non-combustible metal structure will never catch fire or produce toxic smoke, ensuring unmatched household safety.",
      },
      {
        title: "Bespoke Ergonomic Layouts",
        description:
          "Tailor-made tall pantries, spice pull-outs, blind corner carousel units, and utensil dividers fabricated to your exact room geometry.",
      },
      {
        title: "Zero Chemical Fumes",
        description:
          "Eco-friendly hygienic food preparation environment free of formaldehyde and toxic adhesives found in standard wood composites.",
      },
    ],
    advantages: [
      "Washable interior and exterior surfaces with standard sanitizing agents",
      "Lifetime immunity to plumbing leaks and termite infestations",
      "Signature finishes in Brushed Champagne Gold, Deep Charcoal, and Anodized Platinum",
      "Precision assembled by 20-year master technicians for silent hydraulic closure",
    ],
    mechanisms: [
      {
        name: "Hydraulic Soft-Close Lift Systems",
        description:
          "Bi-fold and vertical lift-up mechanisms for overhead cabinets, allowing hands-free clear workspace.",
        suitableFor: "Upper wall storage, microwave cabinets, spice tiers",
      },
      {
        name: "Heavy-Load Tandem Box Drawers",
        description:
          "Concealed synchronised runners supporting up to 50kg per deep pot drawer with feather-light glide.",
        suitableFor: "Pots, heavy cast iron cookware, bulk pantry provisions",
      },
      {
        name: "Integrated Profile J-Pull Channels",
        description:
          "Handleless aluminum extrusion integrated directly into the carcass for a minimalist seamless facade.",
        suitableFor: "Modern minimalist and contemporary European kitchens",
      },
    ],
    warranty: "Lifetime Structural Aluminum Warranty | 5-Year Hardware Replacement Guarantee",
  },
  {
    id: "doors",
    slug: "custom-heavy-duty-aluminum-doors",
    title: "Heavy-Duty Architectural Door & Entrance Services",
    shortDescription:
      "Custom engineering and precision installation of majestic pivot entrance doors, multi-panel bi-fold glass partitions, and slimline sliding patio portals.",
    fullDescription:
      "Entrance doors and grand terrace portals demand rigorous structural calculation and precision mounting. Abu Ahmed Gulf Frames provides complete design, engineering, and installation services for heavy-gauge architectural aluminum doors. Whether commissioning an oversized pivot entrance door with recessed hydraulic floor springs, or a 6-panel bi-fold glass wall that opens an entire living room to the garden, our 20 years of craftsmanship ensure absolute structural stability, effortless operation, and anti-drill multi-point perimeter security.",
    category: "doors",
    iconName: "DoorOpen",
    badge: "Structural Rigidity",
    heroImage: "/real_projects/05_luxury_woodgrain_entrance_door.jpg",
    serviceDeliverables: [
      "Structural floor recess and header beam load assessment",
      "Custom profile extrusion and heavy-gauge leaf fabrication",
      "High-security German 5-point locking system installation",
      "Tempered laminated safety glass insertion and structural silicone sealing",
      "Zero-threshold flush floor track installation and leveling",
      "Master calibration of hydraulic pivot floor springs and speed dampers",
    ],
    specs: [
      { label: "Profile Thickness", value: "Reinforced 50mm - 75mm Heavy-Gauge Architectural Extrusion" },
      { label: "Hinge Mechanism", value: "Heavy-Duty Floor Recessed Hydraulic Pivot / Top-Hung Bi-Fold Carriage" },
      { label: "Security Spec", value: "German-style 5-point locking mechanism with anti-drill cylinder" },
      { label: "Glass Infill", value: "8mm-12mm Toughened Tempered / Laminated Acoustic Glass" },
      { label: "Weight Tolerance", value: "Engineered for door leaf weights up to 250kg per panel" },
      { label: "Threshold Profile", value: "Flush zero-trip floor threshold with integrated water drain channels" },
    ],
    features: [
      {
        title: "Grand Pivot Operation",
        description:
          "Heavy-duty floor springs and top pivots enable effortless fingertip control over 8-foot to 10-foot tall doors.",
      },
      {
        title: "Seamless Bi-Fold Portals",
        description:
          "Multi-panel bi-folding system connects interior living spaces directly with outdoor gardens and terraces.",
      },
      {
        title: "Extreme Wind Load Resistance",
        description:
          "Heavy wall thicknesses ensure structural stability against intense monsoon gusts and high building pressures.",
      },
      {
        title: "Flush Threshold Integration",
        description:
          "Continuous floor transition between inside and outside without high tripping hazards.",
      },
    ],
    advantages: [
      "Custom decorative louver panels, solid aluminum composite inserts, or architectural glass",
      "Anodized platinum silver or deep architectural charcoal weather-resistant finishes",
      "Maximum opening width when folding bi-fold panels completely aside",
      "Precision fabricated by senior aluminum technicians with 20 years experience",
    ],
    mechanisms: [
      {
        name: "Concealed Floor Spring Pivot",
        description:
          "Hydraulic floor box with 90-degree hold-open, 130-degree opening angle, and adjustable closing speeds.",
        suitableFor: "Grand villa entrance doors, luxury office portals",
      },
      {
        name: "Top-Hung Heavy-Duty Bi-Fold Track",
        description:
          "Extruded aluminum header rail with quad-roller sealed stainless steel wheel assemblies.",
        suitableFor: "Patio enclosures, restaurant facades, terrace dining areas",
      },
      {
        name: "Lift-and-Slide Heavy Roller Carriage",
        description:
          "Turning the handle raises the door leaf onto its rollers for frictionless travel before dropping into airtight seal.",
        suitableFor: "Expansive multi-meter sliding panels requiring certified air & water tightness",
      },
    ],
    warranty: "10-Year Frame Structural Warranty | 3-Year Mechanical Hardware Guarantee",
  },
  {
    id: "shutters",
    slug: "automatic-manual-shutter-systems",
    title: "Automated & Manual Shutter Engineering Services",
    shortDescription:
      "Custom fabrication, motorized tubular drive installation, and fail-safe manual override engineering for commercial plazas, banks, villas, and industrial facilities.",
    fullDescription:
      "Rolling shutters are the frontline barrier for commercial businesses, financial institutions, private villas, and industrial warehouses. Abu Ahmed Gulf Frames offers dedicated shutter engineering, installation, and rapid overhaul services backed by 20 years of hands-on mechanical and electrical expertise. We engineer automated motorized systems with remote transmitters and wall key selectors, and integrate heavy-duty mechanical manual gear overrides so doors can always be operated during power blackouts.",
    category: "shutters",
    iconName: "Sliders",
    badge: "Master Shutter Specialization",
    heroImage:
      "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80",
    serviceDeliverables: [
      "Structural opening survey and wind-load calculation",
      "Custom double-wall extruded aluminum slat fabrication",
      "European tubular motor mounting and electronic limit setting",
      "Emergency manual crank gearbox and hook-rod integration",
      "Remote control pairing, central control box wiring, and wall switch setup",
      "Torsion spring counter-balancing and safety brake commissioning",
    ],
    specs: [
      { label: "Slat Profiles", value: "Extruded Aluminum Double-Wall Solid / Perforated Micro-Grille / Polycarbonate" },
      { label: "Motorization", value: "European Tubular Motors (50Nm to 300Nm torque rating)" },
      { label: "Manual Override", value: "Hand Crank Gearbox / High-Tensile Torsion Spring Pulley" },
      { label: "Control Options", value: "Rolling-Code Wireless Remotes, Key Switches, Push Buttons, Smart App" },
      { label: "Emergency Operation", value: "Integrated mechanical clutch override for instant use during power blackouts" },
      { label: "Wind & Impact Class", value: "High-gauge interlocking slats designed for commercial storm protection" },
    ],
    features: [
      {
        title: "Smart Motorized Drive",
        description:
          "Whisper-quiet tubular motor housed invisibly inside the axle drum for maximum aesthetic appeal.",
      },
      {
        title: "Dual Power-Cut Protection",
        description:
          "Every motorized shutter includes a manual hand crank gear override and optional UPS battery backup.",
      },
      {
        title: "Precision Spring Counter-Balancing",
        description:
          "Oil-tempered carbon steel torsion springs calibrated to door weight for effortless manual lifting.",
      },
      {
        title: "Anti-Lift Security Locking",
        description:
          "Automatic internal locking latches engage when fully closed, preventing unauthorized pry attempts.",
      },
    ],
    advantages: [
      "20 years of hands-on shutter mechanical engineering and emergency repair expertise",
      "Immediate troubleshooting service for jammed shutters, snapped springs, and motor replacements",
      "Bespoke sizing from compact counter shutters (3 ft) to industrial airplane hangars (30 ft)",
      "High-grade powder-coat finish matching building facade architecture",
    ],
    mechanisms: [
      {
        name: "Electric Tubular Motor with Wireless Remote",
        description:
          "Internal drive motor inside the roller barrel with electronic limit switches and obstacle detection.",
        suitableFor: "Commercial shops, luxury garage doors, residential security grills",
      },
      {
        name: "Fail-Safe Manual Crank Mechanical Override",
        description:
          "Bevel gearbox linked via detachable hook rod, allowing full opening and closing during complete power loss.",
        suitableFor: "Essential retail stores, banks, pharmacies requiring uninterrupted access",
      },
      {
        name: "Heavy-Duty Chain Hoist Geared Drive",
        description:
          "Reduction gear chain block for massive industrial rolling doors exceeding 500kg total curtain weight.",
        suitableFor: "Warehouses, industrial distribution centers, factory loading docks",
      },
      {
        name: "Counter-Balanced Torsion Spring Push-Pull",
        description:
          "Zero electricity required; precision spring drum enables rapid manual lift with single-hand operation.",
        suitableFor: "Kiosks, interior mall partitions, budget-conscious retail shops",
      },
    ],
    warranty: "5-Year Motor & Drive Warranty | 10-Year Curtain Structural Integrity Guarantee",
  },
  {
    id: "custom",
    slug: "bespoke-aluminum-architectural-fabrication",
    title: "Bespoke Facade & Custom Aluminum Fabrication Services",
    shortDescription:
      "Engineering, shop drawings, fabrication, and structural installation of custom architectural aluminum pergolas, sun louvers, curtain walls, and commercial shopfronts.",
    fullDescription:
      "For architects, developers, and discerning villa owners seeking non-standard architectural metalwork, Abu Ahmed Gulf Frames provides bespoke fabrication and structural installation services. We transform architectural drawings into precision-machined aluminum pergolas with motorized louvers, glass curtain wall systems, high-traffic commercial shopfronts, and decorative laser-cut privacy screens.",
    category: "custom",
    iconName: "Layers",
    badge: "Bespoke Architectural Engineering",
    heroImage: "/real_projects/14_panoramic_curtain_wall_facade.jpg",
    serviceDeliverables: [
      "Architectural review and structural anchor engineering calculations",
      "Comprehensive 3D shop drawing production prior to workshop cutting",
      "Heavy structural profile extrusion and CNC mitering",
      "Grade 316 stainless steel bracketry and expansion anchoring on site",
      "Structural glazing and perimeter weather-tight silicone application",
      "Final aesthetic and safety load compliance certification",
    ],
    specs: [
      { label: "Service Scope", value: "Glass Curtain Walls, Operable Louvers, Structural Shopfronts, Pergolas" },
      { label: "Profile Material", value: "Heavy-Wall Structural Architectural Aluminum (Up to 3.0mm wall thickness)" },
      { label: "Joinery Standard", value: "CNC Precision Mitering with Internal Mechanical Cleating & TIG Reinforcement" },
      { label: "Finish Longevity", value: "Anodized Architectural Class 1 or 25-Year Marine Grade Powder Coating" },
      { label: "Fastening Hardware", value: "Grade 316 Marine Stainless Steel anchor bolts and structural fixings" },
      { label: "Site Execution", value: "Led directly on-site by Master Technician Abu Ahmed" },
    ],
    features: [
      {
        title: "Architectural Sun Louvers",
        description:
          "Fixed or aerofoil operable louvers that regulate solar heat gain while adding striking modern exterior lines.",
      },
      {
        title: "Structural Glass Shopfronts",
        description:
          "Heavy-duty commercial mullion systems engineered for clear display visibility and maximum pedestrian security.",
      },
      {
        title: "Modern Aluminum Pergolas",
        description:
          "Rust-proof outdoor shade structures with integrated rain gutters and optional motorized tilting slats.",
      },
      {
        title: "Bespoke Laser-Cut Aluminum Screens",
        description:
          "Decorative privacy screens, balcony balustrades, and entrance boundary panels cut to custom geometric patterns.",
      },
    ],
    advantages: [
      "Direct technical consultation with master fabricator Abu Ahmed",
      "Complete 3D shop drawing review before workshop cutting commences",
      "Turnkey supply, on-site structural rigging, and certified anchor installation",
      "Guaranteed zero rust in coastal or high-humidity outdoor installations",
    ],
    mechanisms: [
      {
        name: "Motorized Louver Tilting Mechanism",
        description:
          "Linear actuators linked to heavy aluminum blades, adjusting angle from 0 to 110 degrees for sunlight control.",
        suitableFor: "Rooftop pergolas, villa solar facades, executive terraces",
      },
      {
        name: "Structural Curtain Wall Mullion Anchoring",
        description:
          "Heavy-gauge slotted brackets accommodating building seismic movement and thermal expansion.",
        suitableFor: "Commercial corporate towers, automobile showrooms, high-span facades",
      },
    ],
    warranty: "15-Year Exterior Structural Integrity Warranty",
  },
];
