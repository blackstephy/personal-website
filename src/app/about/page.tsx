import { Layout } from "@/components/Layout";
import { AboutPageContent } from "@/components/AboutPageContent";

export const dynamic = 'force-static';

export default function AboutPage() {
  return (
    <Layout>
      <main className="flex-1 flex items-center justify-center">
        <AboutPageContent />
      </main>
    </Layout>
  );
} 