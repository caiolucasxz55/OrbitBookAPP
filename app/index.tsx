import { ScrollView, StyleSheet } from "react-native";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturedDestinations from "../components/FeaturedDestinations";
import StatsSection from "../components/StatsSection";
import AISection from "../components/AISection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Header />

      <HeroSection />

      <FeaturedDestinations />

      <StatsSection />

      <AISection />

      <TestimonialsSection />

      <CTASection />

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
  },

  content: {
    paddingBottom: 40,
  },
});