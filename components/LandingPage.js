import RenderSections from "./RenderSections";

function LandingPage({ page }) {
  const { content } = page ? page : { content: [] };
  return <RenderSections sections={content} />;
}

export default LandingPage;
