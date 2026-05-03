import HeroSearch from "@/components/home/HeroSearch";
import Curated from "@/components/home/Curated";
import ProductList from "@/components/home/ProductList";

export default function Home() {
  const latestProducts = [
    {
      id: 1,
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBWrf5m_9u9Qv-vCOEEinHg4CT_n1vlfr6bhK0m4lHVpUgE18OId0INlGb2Ioipz--o2UPBRNLo71DqX6QViSWKMc353zmIrmA7fjQVV1kOFQyvKGNh_eZH0YQNz3EXpWPcbC6yOjw6cL9EiHpBhT9wobAgEDfZI-J75H0up6JMkLuEmZPF5tV9scl5RuVTBC_2PT8lPzesAr7LeElalJI_rRQSTf_cvXD8qQVE-K21AENCtJ08vEPyD_WKTt8AMD47-VO-U2jc1hLD",
      imageAlt: "Heavyweight Box Tee",
      title: "Heavyweight Box Tee",
      rating: 4.9,
      reviews: 128,
      price: 45,
    },
    {
      id: 2,
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCvxyNF0FXcjs2Cl39qdd1W_fNG-Wp_8hzfP76plZWW-deLZHN7wQC08_reJN3kd6yy8CpX_rLZt9gEvkLIsdRSGCWLufLkwAuDNJF2cWR5yUIFgnaYZLzTTaJOkRI_nIfVi9qxuuRM3iX_A5vMtWFprKwbLgQkzR2ruDpgoxRN5tCE8-9nO0zuhsxlqOx2YR_tfSgJhLq7cFLLmb7LuNl05L6-UDV7axBkl0WpaeSBBeTO_FgHtXrSx1hDdXxmrjK_WFcRozKP-Jko",
      imageAlt: "Minimalist Watch",
      title: "Mono Timepiece",
      rating: 4.8,
      reviews: 84,
      price: 185,
    },
    {
      id: 3,
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBHZl_otiCQQcWZooFxS6sbdY7d0aK6SyWv2FJQCQViCq_ant1IhiD0DX2y_H7BWrVtQMWE6JfmCex5Z9DsxcwhcWkJ84yxkEpiU2AGppiBoh-YrytagCLY-fFmzJ1ZOSW4jB7PDmfH4GTAabBayOowBMCm2vb2L5p4jMCHg3l0FpSHOVQQXlT3Xw9TcdfulUpr8YTTiOAOpbRmvRgi8DOiAL-lkXDvU2FHYDxtNtekHfenrQpAIwxjEKnAxEpUeHlIpPW5GaSpf-v4",
      imageAlt: "Canvas Tote",
      title: "Structured Canvas Tote",
      rating: 5.0,
      reviews: 42,
      price: 65,
    },
    {
      id: 4,
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCou_Fs4I_64c7qlKcMNQxjB1__wkbcO4L18AcVSb3_mQGLtyw649gcXuICF7bySIHKOPJKADvFkK-VwVRtxcSpykCLEzJGRY5YqTsxxrJWlp7BQE-l3EgfniZPUATfPkTJwJz7YHyBNwfQGxzLOK3j8DogUgENYlSocsdYJ6Z54mc6-JgYybaE77dvCgwQ2qwWh_9-cjqUvFst0MW-CkSU65_HoqdtygXbcImLmz5D3se6hqNBIvGyyjhQlluFn6hW9turEiCzUPTz",
      imageAlt: "Desk Lamp",
      title: "Task Light 01",
      rating: 4.7,
      reviews: 91,
      price: 120,
    },
  ];

  return (
    <main className="max-w-[1280px] mx-auto px-4 md:px-gutter">
      <HeroSearch />
      <Curated />
      <ProductList title="Everyday Objects" products={latestProducts} />
    </main>
  );
}
