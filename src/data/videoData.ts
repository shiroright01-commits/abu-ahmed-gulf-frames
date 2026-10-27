export interface VideoItem {
  id: string;
  title: string;
  category: "villas" | "shutters" | "kitchens" | "facades";
  duration: string;
  thumbnail: string;
  videoUrl?: string; // YouTube or direct video embed placeholder
  location: string;
  description: string;
}

export const videoData: VideoItem[] = [
  {
    id: "vid-1",
    title: "Drone Cinematic: 4,200 Sq.Ft Villa Panoramic Glazing",
    category: "villas",
    duration: "2:45",
    thumbnail:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", // Embed placeholder
    location: "Phase 6 DHA, Lahore",
    description:
      "On-site architectural walkthrough showcasing floor-to-ceiling thermal-break sliding portals and zero-threshold flush tracks.",
  },
  {
    id: "vid-2",
    title: "Automated Shutter Mechanism & Emergency Override Test",
    category: "shutters",
    duration: "1:58",
    thumbnail:
      "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1000&q=80",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    location: "Gulberg III Plaza, Lahore",
    description:
      "Live testing of 18 Italian tubular motors operated via group remote transmitter, followed by manual hand crank power-cut override drill.",
  },
  {
    id: "vid-3",
    title: "Bespoke Full-Aluminum Kitchen Fit-Out & Soft-Close Run",
    category: "kitchens",
    duration: "3:12",
    thumbnail:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    location: "Bahria Town, Islamabad",
    description:
      "Detailed inspection of waterproof aluminum hollow carcass, fluted tinted glass cabinetry, and Champagne Gold J-pull handles.",
  },
  {
    id: "vid-4",
    title: "High-Span Structural Curtain Wall Installation & Glazing",
    category: "facades",
    duration: "2:20",
    thumbnail:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    location: "Industrial Estate, Faisalabad",
    description:
      "Rigging heavy structural 6063-T6 aluminum mullions and Low-E double-glazed reflective glass units on a 4-story corporate facade.",
  },
];
