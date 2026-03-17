import IdentityColumn from "@/components/IdentityColumn";
import ContentStream from "@/components/ContentStream";
import FloatingContact from "@/components/FloatingContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row">
      <IdentityColumn />
      <ContentStream />
      <FloatingContact />
    </div>
  );
};

export default Index;
